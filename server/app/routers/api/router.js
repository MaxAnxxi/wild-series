const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

router.get('/', (req,res) => {
  res.send('Welcome to Wild Series')
});


const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programRouter = require("./programs/router")

router.use("/programs", programRouter)

/* ************************************************************************* */

module.exports = router;


