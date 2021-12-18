const express = require('express');

const locationController =require('../Controller/locations');
const MealTypesController = require ('../Controller/MealTypes');
const restaurantController = require('../Controller/restaurant');
const userController = require('../Controller/users');
const menuitemsController = require('../Controller/menuitems');
const paymentController = require('../Controller/payment');


const route = express.Router();

route.get('/location',locationController.getLocations);
route.get('/MealTypes',MealTypesController.getMealTypes);
route.get('/restaurants/:locId',restaurantController.getRestaurantsByLocId);
route.post('/signup',userController.userSignup);
route.post('/login',userController.userLogin);
route.post('/filter',restaurantController.filteredRestaurants);
route.get('/restaurant/:resId',restaurantController.getRestuarantsDetailByresId);
route.get('/menuitems/:resId',menuitemsController.getMenuItemsByresId);


// paytma gateway

route.post('/payment',paymentController.payment);
route.post('/callback',paymentController.callback);



module.exports = route;
