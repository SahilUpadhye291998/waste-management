const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    const idCardClass = require('composer-common').IdCard;

    idCardClass.fromDirectory('/home/xgod666/.composer/cards/admin@waste_v3').then(function (idCard) {
        console.log("card UserName: ", idCard.getUserName())
        console.log("Business Network Name: ", idCard.getBusinessNetworkName())
        console.log("Connection Profile", idCard.getConnectionProfile())
        console.log("get credentials", idCard.getEnrollmentCredentials())
        console.log("setCredentials")

    }).catch((error) => {
        console.log(error);
    })
})

module.exports = router;