const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// POST: /trips - create a new trip
// Regardless of outcome, response must include HTTP status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
  const newTrip = new Trip({
    code:        req.body.code,
    name:        req.body.name,
    length:      req.body.length,
    start:       req.body.start,
    resort:      req.body.resort,
    perPerson:   req.body.perPerson,
    image:       req.body.image,
    description: req.body.description,
  });

  try {
    const q = await newTrip.save();
    return res.status(201).json(q);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTTP status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
  try {
    const q = await Model
      .find({ code: req.params.tripCode })
      .exec();

    if (!q || q.length === 0) {
      return res.status(404).json({ error: 'Trip not found' });
    }
    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// PUT: /trips/:tripCode - update an existing trip
// Regardless of outcome, response must include HTTP status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
  // Uncomment for debugging:
  // console.log(req.params, req.body);

  try {
    const q = await Model
      .findOneAndUpdate(
        { code: req.params.tripCode },
        {
          code:        req.body.code,
          name:        req.body.name,
          length:      req.body.length,
          start:       req.body.start,
          resort:      req.body.resort,
          perPerson:   req.body.perPerson,
          image:       req.body.image,
          description: req.body.description,
        },
        { new: true } // return the updated document
      )
      .exec();

    if (!q) {
      return res.status(404).json({ error: 'Trip not found or update failed' });
    }
    return res.status(200).json(q);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
};
