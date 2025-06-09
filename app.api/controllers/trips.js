const mongoose = require('mongoos');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
    .find({})
    .exec();

    //Uncomment the following line to show the results of the querey
    // ont the console
    // console.log(q);

    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }
};

module.export = {
    tripsList
};
// GET: /trips/:tripsCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) //return single record
        .exec();

        //Uncomment the following line to show the results of the querey
        // ont the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }
};

module.export = {
    tripsList,
    tripsFindByCode
};