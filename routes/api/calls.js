const express = require('express');
const multer = require('multer');
const router = express.Router();
const bodyParser = require('body-parser');
const app = new express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;

const businessNetworkConnection = new BusinessNetworkConnection();

router.post("/", (req, res) => {
    
})

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file);
        callback(null, "cards/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

var upload = multer({
    storage: Storage
});//.single("testUpload");


module.exports = router;