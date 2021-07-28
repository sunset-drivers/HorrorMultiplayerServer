const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const shortId = require('shortid');

io.on('connection', (socket) => {
    socket.on('PING', (values) => {
        console.log('PING Executado, com os valores: ', values);

        arrTeste = {
            idJogador: shortId.generate()
        }

        socket.emit('PONG', arrTeste)
    })
})

http.listen(3000, () => {
    console.log('server na porta 3000')
})