const express = require('express');
const router = express.Router();

/**
 * Routing for Articles
 */
const StoreController = require('../controllers/StoreController');
const controller = new StoreController();


router.get("/list", (req, res) => controller.list(req, res));
router.get("/create", (req, res) => controller.create(req, res));
router.post("/store", (req, res) => controller.store(req, res));
router.get("/edit/:id", (req, res) => controller.edit(req, res));
router.post("/update/:id", (req, res) => controller.update(req, res));
router.get("/delete/:id", (req, res) => controller.delete(req, res));
router.get("/visible/:id", (req, res) => controller.visible(req, res));
router.get("/invisible/:id", (req, res) => controller.invisible(req, res));
router.get("/:id", (req, res) => controller.show(req, res));

module.exports = router;
