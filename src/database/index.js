const mongoose = require('mongoose')

function connect() {

    mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false') //estabelecendo conexão com o banco de dados
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('Connected to database!')
    })
    
    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}
