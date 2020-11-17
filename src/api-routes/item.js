// item.js - Item route module.

var express = require('express');
var router = express.Router();

// Read Item route.
router.get('/read/:item_id', function (req, res) {
    const item_id = req.params.item_id;

    // TODO: Call get_item() from service that returns the item object

    res.send(/*item object*/);
})

// Create Item route.
router.post('/create', function (req, res) {
    const user_id = req.body.user_id;
    const item_id = req.body.item_id;
    const data = req.body.data;

    // TODO: Call create_item() from service that creates the item object

    res.send(/*item id*/);
})

// Update Item route.
router.put('/update/:item_id/:user_id', function (req, res) {

    const data = req.body.data;

    // TODO: Call update_item() from service that updates the item object

    res.send(/*item id*/);
})

// Read Item route.
router.delete('/delete/:item_id/:user_id', function (req, res) {
    const item_id = req.params.item_id;
    const user_id = req.params.user_id;

    // TODO: Call delete_item() from service that deletes the item object

    res.send(/*item id*/);
})

// Search Item route.
router.get('/search/:description/:category/:date/:urgency', function (req, res) {
    const description = req.params.description;
    const category = req.params.category;
    const date = req.params.date;
    const urgency = req.params.urgency;

    // TODO: Call search_item() from service that searches the item objects

    res.send(/*list of item objects*/);
})

module.exports = router;