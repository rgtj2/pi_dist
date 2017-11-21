import paho.mqtt.client as mqtt
import RPi.GPIO as GPIO
import os
import time

class MqttClientFactory():
    def __init__(self, host):
        self.mqtt_client = mqtt.Client()
        self.mqtt_client.on_connect = self.on_mqtt_connect
        self.mqtt_client.on_message = self.on_mqtt_message
        self.mqtt_client.connect(host, 1883, 60)
        self.setup_motion_sensor()

     # The callback for when the client receives a CONNACK response from the server.
    def on_mqtt_connect(self, client, userdata, flags, rc):
        print("Connected with result code "+str(rc))
        client.subscribe("publishedaction/+")
        

    def on_mqtt_message(self, client, userdata, msg):
        print(msg.topic+" "+str(msg.payload))
        if 'publishedaction' in msg.topic:
            print('published action!!!!')
            topic = msg.topic.replace('publishedaction', 'acknowledgedaction')
            self.mqtt_client.publish(topic, str(msg.payload))

    def setup_motion_sensor(self, pinID):
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(pinID, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
        GPIO.add_event_detect(pinID, GPIO.RISING)
        GPIO.add_event_callback(pinID, self.on_motion_callback)
    
    def on_motion_callback(self):
        print("movement")
        self.mqtt_client.publish('actions/movement', 'moved!')
    

if __name__ == '__main__':

    import sys, time

    mqtt_host = os.getenv('MQTT_HOST', 'localhost')

    factory = MqttClientFactory(mqtt_host)

    factory.mqtt_client.loop_forever()

