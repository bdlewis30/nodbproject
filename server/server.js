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
app.post('/api/', trailCtrl.create);
app.put('/api/', trailCtrl.update);
app.put('/api/', trailCtrl.complete);
app.delete('/api/', trailCtrl.delete);


const port = 4000;

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`)
})
