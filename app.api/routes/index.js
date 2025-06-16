const express = require("express");
const router = express.Router();

// This is where we import the controller we will route
const tripsController = require("../controllers/trips");

//define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tirpsAddTrip); // POST Method Adds a Trip

// GET method routes tripsFindBYCode - requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;