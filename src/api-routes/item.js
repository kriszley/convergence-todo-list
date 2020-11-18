// item.js - Item route module.

const express = require('express');
const router = express.Router();

const item = require("../services/item.js");
const authToken = require("../middlewares/tokenAuth");

// Read Item route.
router.get('/read/:item_id', authToken, function (req, res) {
    const item_id = req.params.item_id;
    // Call get_item() from service that returns the item object
    let item_obj = item.read_item(item_id);
    if (item_obj == null) {
        return res.status(400).send("Item object not found.");
    }

    res.status(200).send(item_obj);
})

// Create Item route.
router.post('/create', authToken, function (req, res) {
    const user_id = req.user.id
    const data = req.body.data;

    // Call create_item() from service that creates the item object
    let item_id = item.create_item(user_id, data);
    if (item_id == null) {
        return res.status(400).send("Item creation failed.");
    }

    res.status(200).send(item_id);
})

// Update Item route.
router.put('/update/:item_id', authToken, function (req, res) {
    const user_id = req.user.id
    const item_id = req.params.item_id;
    const data = req.body.data;

    // Call update_item() from service that updates the item object
    let item_id = item.update_item(user_id, item_id, data);
    if (item_id == null) {
        return res.status(400).send("Item update failed.");
    }

    res.status(200).send(item_id);
})

// Delete Item route.
router.delete('/delete/:item_id', authToken, function (req, res) {
    const user_id = req.user.id
    const item_id = req.params.item_id;

    // Call delete_item() from service that deletes the item object
    let item_id = item.delete_item(user_id, item_id);
    if (item_id == null) {
        return res.status(400).send("Item delete failed.");
    }

    res.status(200).send(item_id);
})

// Search Item route.
router.get('/search', authToken, function (req, res) {
    const data = {
        description: req.query.description,
        category: req.query.category,
        date: req.query.date,
        urgency: req.query.urgency
    }

    // Call search_item() from service that searches the item objects
    let item_objs = item.search_item(data);
    if (item_objs == null) {
        return res.status(400).send("Item search failed.");
    }
    res.status(200).send(item_objs);
})

module.exports = router;