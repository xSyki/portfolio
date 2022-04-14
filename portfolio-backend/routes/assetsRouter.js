const express = require('express');
const router = express.Router();

router.get('/logo-3d', async(req, res) => {
    console.log("get");
    res.sendFile('../public/assets/logo-3d.glb')
})

module.exports = router;