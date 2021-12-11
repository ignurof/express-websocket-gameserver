// Required dependency
const express = require("express");
const WebSocket = require('ws')
const gdCom = require('@gd-com/utils')
const { v4 } = require('uuid')

// Application
let app = express();
const PORT = 9090;

// Hook up the app.listen to a const so I can hook into it with socket listen aka io
const server = app.listen(PORT, async() => {
    console.log("Server listening on port: " + PORT);
});

// Hook up websocket server to express listen
// Can be usedin routes AKA channels in websocket lingo
const wss = new WebSocket.Server({server: server});

let serverData = {
	"network": {
        "func": "methodName",
        "data": "dataObjHere"
    },
	"movement": {
        "x": 0,
        "y": 0
    }
}

wss.on('connection', socket => {
    let uuid = v4()
    console.log(`[${uuid}] Connected`)
    // Add to list
    playerlist.Add(uuid);
    // Update server obj to send
    serverData.network.func = "clientConnect";
    serverData.network.data = uuid;
    // Send UUID for client id
    let firstBuffer = gdCom.putVar(serverData);
    socket.send(firstBuffer);

    // When server recieve message from client (socket), run the callback
    socket.on('message', (message) => {
        const recieveBuff = Buffer.from(message);
        const recieve = gdCom.getVar(recieveBuff);
        console.log(recieve.value);

        //const buffer = gdCom.putVar(serverData);
        //socket.send(buffer);
    });

    // On client error
    socket.on("error", (err) => {
        console.error(err);
    })

    // When client disconnects
    socket.on("close", (code, reason) => {
        console.log(code, reason);
    })
})
