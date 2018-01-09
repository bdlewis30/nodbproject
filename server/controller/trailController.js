var trails = [];

function findTrail(id){
    return trails.findIndex((trail) => {
        return trail.id == id;
    });
}

module.exports = {

    get: (req, res) => {
        res.send(trails);
    },
    create: (req, res) => {
        trails = [];
        req.body.forEach(t => {
            let trail = {
                name: t.name,
                city: t.city,
                state: t.state,
                description: t.description,
                // directions: t.direction,
                map: `https://www.google.com/maps/@${t.lat},${t.lon},15z`,
                latitude: t.lat,
                longitude: t.lon,
                id: t.unique_id
            };
            trails.push(trail);    
        });
        res.json(trails);
    },
    update: (req, res) => {
        var index = findTrail(req.params.id);
        trails[index].description = req.body.description;
        res.json(trails[index]);
    },
    delete: (req, res) => {
       var index = findTrail(req.params.id);
       if(index >= 0){
         trails.splice(index, 1);
       }
       res.status(200).end();
    }
}