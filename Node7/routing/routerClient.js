const express = require('express');
const contollerItem = require('../controller/clientsController')
var router = express.Router();

router.post("/AddClient", contollerItem.add);
router.put("/:id/updateData", contollerItem.update);

router.get("/GetData", contollerItem.Get);
router.get("/:id/login", contollerItem.login);
router.get("/:id/GetDataP", contollerItem.GetByPrice);
module.exports = router;