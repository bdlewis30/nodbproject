const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskCtrl = require('./controller/somethingController');

// Creating server
const app = new express();

//apply middleware
app.use(cors());
app.use(bodyParser.json());

// endpoints
app.post('/api/task', taskCtrl.create);
app.get('/api/tasks', taskCtrl.read);
app.put('/api/task:id', taskCtrl.update);
app.put('/api/complete:id', taskCtrl.complete);
app.delete('/api/task:id', taskCtrl.delete);




const port = 4000;

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`)
})
