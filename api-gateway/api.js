
const expressFn = require('express');
const expressApp = expressFn();
const fs = require('fs');

expressApp.get('/trips', function (req, res) {
    fs.readFile('../json-server/db.json', (err, data) => {
        if (err) throw err
        let trip = JSON.parse(data)
        res.send(trip)
    });
});

expressApp.get('/api/trips', function (req, res) {

    const keyword = req.query.keyword

    fs.readFile('../json-server/db.json', (err, data) => {
        if (err) throw err
        let trip = JSON.parse(data)
        let tripFilter = trip.trips.filter(function (item) {
            return (item.title.indexOf(keyword) !== -1) ||
                (item.description.indexOf(keyword) !== -1) ||
                (item.tags.includes(keyword))
        })
        res.send(tripFilter)
    });

})

expressApp.listen(9000, function () {
    console.log('Listening on port 9000')
});