"use client"

import React, { useEffect, useState } from 'react';
import { Client } from 'paho-mqtt';

const MQTT_BROKER = 'ws://34.128.107.144:1883/mqtt'; // Correct WebSocket URL
const TOPIC = 'esp32/result';

const Notif = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {

    //connect
    const connect = () => {
        mqttClient = mqtt.connect(MQTT_BROKER);
      
        mqttClient.on('connect', () => {
          console.log('Connected to MQTT broker');
          mqttClient.subscribe(TOPIC, (err) => {
            if (!err) {
              console.log(`Subscribed to ${TOPIC}`);
            }
          });
        });
      
        mqttClient.on('message', (topic, message) => {
          console.log(`Received message on topic ${topic}: ${message.toString()}`);
          // Handle the received message here (e.g., store in state, trigger UI updates)
        });
      
        mqttClient.on('error', (err) => {
          console.error('MQTT error:', err);
        });
      
        mqttClient.on('close', () => {
          console.log('Disconnected from MQTT broker');
        });
      };

    // Create MQTT client instance
    const client = new Client(MQTT_BROKER, 'clientId-' + Math.random());

    // Function called on successful connection
    const onConnect = () => {
      console.log('Connected to broker');
      client.subscribe(TOPIC);
    };

    // Function called when message arrives
    const onMessageArrived = (message) => {
      console.log('Message received: ', message.payloadString);
      setMessage(message.payloadString); // Save message to state

      // Check if message contains "fall"
      if (message.payloadString.includes('fall')) {
        alert('Alert: ' + message.payloadString);
      }
    };

    // Function called on connection lost
    const onConnectionLost = (responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.error('Connection lost:', responseObject.errorMessage);
      }
    };

    // Set client callbacks
    client.onMessageArrived = onMessageArrived;
    client.onConnectionLost = onConnectionLost;

    // Connect to MQTT broker
    client.connect({ onSuccess: onConnect, onFailure: (err) => console.error('Connect failed', err) });

    // Clean up on component unmount
    return () => {
      if (client.isConnected()) {
        client.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <h1>MQTT Message Subscriber</h1>
      <p>Latest Message: {message}</p>
    </div>
  );
};

export default Notif;
