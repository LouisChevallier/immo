const express = require('express');
const route = express.Router()

const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add annonces
 *  @method GET /add-annonce
 */
route.get('/add-annonce', services.add_annonce)

/**
 *  @description for update annonce
 *  @method GET /update-annonce
 */
route.get('/update-anonce', services.update_annonce)


// API


module.exports = route