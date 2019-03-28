const express = require('express');
const router = express.Router();
const app = new express();

const MyNetwork = require('../lib/mynetwork');

const fileUpload = require('express-fileupload');
var cors = require('cors');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors({
    origin: "*",
    credentials: true,
}));

router.get('/test', function (req, res) {
    console.log("This will work just fine");
})

router.post('/login', function (req, res) {
    MyNetwork.importCardToNetwork(req.files.card.data).then(function (idCardName) {
        if (!idCardName) {
            res.status(403).json({ message: "Logging failed" });
        }
        res.json({ message: "Logging Successful", accessToken: idCardName })  // this will change  
    }).catch(function (error) {
        res.status(403).json({ message: "Login failed", error: error.toString() })
    })
})
router.post('/ping', function (req, res) {
    var cardName = req.headers.authorization;
    var mynetwork = new MyNetwork(cardName);
    mynetwork.init().then(function () {
        return mynetwork.ping()
    }).then(function (userInfo) {
        res.json({ user: userInfo })
    }).catch(function (error) {
        res.status(500).json({ error: error.toString() })
    })
})
router.post('/logout', function (req, res) {
    var cardName = req.headers.authorization;
    var mynetwork = new MyNetwork(cardName);
    mynetwork.init().then(function () {
        return mynetwork.logout()
    }).then(function () {
        res.json({ message: "User added Successfully" });
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({ error: error.toString() })
    })
})

module.exports = router;