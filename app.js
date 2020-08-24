const express = require('express');
const app = express()
const maridb = require('./database');
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.post('/api/send', async (req, res) => {
    let body = req.body
    let { name, celphone, email, note } = body
    if(!body){
        res.json({
            ok: false,
            message: 'Error'
        })
    }
    maridb.then(async (connetion) => {
        await connetion.query('INSERT INTO send ( name, celphone, email, note) VALUE (?,?,?,?)',[body.name,body.celphone,body.email,body.note]).then(() => {
            console.log('********Todo en orden*********');
            res.json({Status: 'ok'})
        });
    });
})


app.use(express.static( path.join(__dirname + '/public')))
app.all('/*', (req, res) => { 
    res.sendFile(path.join(__dirname + '/public/index.html')); 
});

app.listen(3000, () => {
    console.log('Server on port 3000')  
})