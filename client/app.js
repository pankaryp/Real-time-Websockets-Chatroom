const connection = new WebSocket('ws://localhost:5000'),
    msg_panel = document.getElementById('msg_panel'),
    msg_input = document.getElementById('msg_input');

connection.addEventListener('open', () => {
    console.log('Connected');
});

connection.addEventListener('message', e => {
    let p = document.createElement('p');
    p.textContent = e.data;
    msg_panel.appendChild(p);
});

function send (data) {
    if(connection.readyState === WebSocket.OPEN) {
        connection.send(data);
    } else {
        throw 'Not connected';
    }
}

msg_input.addEventListener('keydown', e => {
    let kc = e.which || e.keyCode;

    if (kc === 13) {
        send(msg_input.value);
        msg_input.value= "";
    }
});