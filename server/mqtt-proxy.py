import paho.mqtt.client as mqtt
from websocket import create_connection
import os
import json

class MqttWebsocketProxyFactory():
    def __init__(self, websockethost, mqtthost):
        self.mqtt_client = mqtt.Client()
        self.mqtt_client.on_connect = self.on_mqtt_connect
        self.mqtt_client.on_message = self.on_mqtt_message
        self.mqtt_client.connect(mqtthost, 1883, 60)
        self.ws = create_connection("ws://"+websockethost+":9000/")

     # The callback for when the client receives a CONNACK response from the server.
    def on_mqtt_connect(self, client, userdata, flags, rc):
        print("Connected with result code "+str(rc))

        client.subscribe("test/+")
        client.subscribe("actions/+")
        client.subscribe("publishedaction/+")
        client.subscribe("acknowledgedaction/+")
        client.publish("test/hey", 'heyheyheyh')

    # The callback for when a PUBLISH message is received from the server.
    def on_mqtt_message(self, client, userdata, msg):
        print(msg.topic+" "+str(msg.payload))
        self.send_websocket_message(msg)

    def send_websocket_message(self, msg):
        formatted = json.dumps({"channel": str(msg.topic), "color": "red", "value": str(msg.payload)})
        self.ws.send(formatted)
        print("Sent")

if __name__ == '__main__':

    import sys, time

    websocket_host = os.getenv('WEBSOCKET_HOST', 'localhost')
    mqtt_host = os.getenv('MQTT_HOST', 'localhost')

    factory = MqttWebsocketProxyFactory(websocket_host, mqtt_host)

    factory.mqtt_client.loop_forever()

