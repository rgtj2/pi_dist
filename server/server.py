from twisted.internet import reactor
import paho.mqtt.client as mqtt
import json
import re
import os

from autobahn.twisted.websocket import WebSocketServerProtocol, \
    WebSocketServerFactory

class MyServerProtocol(WebSocketServerProtocol):
    def __init__(self):
        self.mqtt_client = mqtt.Client()
        mqtt_host = os.getenv('MQTT_HOST', 'localhost')
        self.mqtt_client.on_connect = self.on_mqtt_connect
        self.mqtt_client.connect(mqtt_host, 1883, 60)

    def on_mqtt_connect(self, client, userdata, flags, rc):
        print("Connected with result code "+str(rc))

    def onConnect(self, request):
        print("Client connecting: {0}".format(request))

    def onOpen(self):
        self.factory.register(self)
        print("WebSocket connection open.")

    def onMessage(self, payload, isBinary):
        if isBinary:
            print("Binary message received: {0} bytes".format(len(payload)))
        else:
            print("Text message received: {0}".format(payload.decode('utf8')))

        if not isBinary:
            channel = json.loads(payload.decode('utf8'))['channel']
            value = json.loads(payload.decode('utf8'))['value']
            if 'actionrequest' in channel:
                print('action request!!!!')
                topic = channel.replace('actionrequest', 'publishedaction')
                self.mqtt_client.publish(topic, value)
                
        self.factory.broadcast(payload.decode('utf8'))

    def onClose(self, wasClean, code, reason):
        self.factory.unregister(self)
        print("WebSocket connection closed: {0}".format(reason))

        
class MyServerFactory(WebSocketServerFactory):
    def __init__(self, url):
        WebSocketServerFactory.__init__(self, url)
        self.clients = []
        self.tickcount = 0
        self.tick()

    def tick(self):
        self.tickcount += 1
        # self.broadcast("tick %d from server" % self.tickcount)
        # reactor.callLater(1, self.tick)

    def register(self, client):
        if client not in self.clients:
            print("registered client {}".format(client.peer))
            self.clients.append(client)
            self.welcomeMessage(client)

    def unregister(self, client):
        if client in self.clients:
            print("unregistered client {}".format(client.peer))
            self.clients.remove(client)

    def broadcast(self, msg):
        print("broadcasting message '{}' ..".format(msg))
        for c in self.clients:
            c.sendMessage(msg.encode('utf8'))
            print("message sent to {}".format(c.peer))
    def welcomeMessage(self, client):
        message = json.dumps({"channel": "general/welcome", "color": "blue", "value": "Welcome!!!"})
        client.sendMessage(message.encode('utf8'))

if __name__ == '__main__':

    import sys

    from twisted.python import log
    from twisted.internet import reactor

    log.startLogging(sys.stdout)

    ServerFactory = MyServerFactory

    websocketHost = os.getenv('WEBSOCKET_HOST', 'localhost')

    factory = ServerFactory(u"ws://"+websocketHost+":9000")
    factory.protocol = MyServerProtocol

    reactor.listenTCP(9000, factory)
    reactor.run()