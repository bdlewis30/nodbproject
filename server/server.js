const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const trailCtrl = require('./controller/trailController');

// Creating server
const app = new express();

//apply middleware
app.use(cors());
app.use(bodyParser.json());

// endpoints
app.get('/api/', trailCtrl.get);
app.post('/api/', trailCtrl.create);
app.put('/api/:id', trailCtrl.update);
app.delete('/api/:id', trailCtrl.delete);


const port = 4000;

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`)
})
