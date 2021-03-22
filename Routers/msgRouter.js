const express = require('express');
const router = express.Router();
const msgBL = require('../BLs/msgBL')

router.route('/:id')
    .get( async function(req,resp)
    {
        let msg = await msgBL.getNextMsg(req.params.id)
        return resp.json(msg);
    })

router.route('/:id')
    .post(async function(req,resp)
    {
        let obj = req.body;
        let res = await msgBL.addMsg(req.params.id, obj)
        return resp.json(res);
    })

module.exports = router;