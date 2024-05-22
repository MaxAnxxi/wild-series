const express = require("express");

const router = express.Router();

const {sayWelcome} = require("../../controllers/sayAction")

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

router.get('/', sayWelcome);


const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programRouter = require("./programs/router")

router.use("/programs", programRouter)

const categoryRouter = require("./categories/router")

router.use("/categories", categoryRouter)

/* ************************************************************************* */

module.exports = router;


