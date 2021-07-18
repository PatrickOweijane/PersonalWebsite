export default class PongSocket {
    
    constructor () {
        const roomName = JSON.parse(document.getElementById('room-name').textContent);

        const socket = new WebSocket(
            'ws://'
            + window.location.host
            + '/ws/pong/'
            + roomName
            + '/'
        );

        socket.onmessage = function(e) {
            const data = JSON.parse(e.data);
            console.log(data)
        };

        socket.onclose = function(e) {
            console.error('Pong socket closed unexpectedly');
        };

        this.roomName = roomName;
        this.socket = socket;
    }

    send (userInput) {
        this.socket.send(JSON.stringify({
            'input': userInput
        }));
    }
}
