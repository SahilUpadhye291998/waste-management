const express = require('express');
const router = express.Router();
const app = new express();
const multer = require('multer');
const MyNetwork = require('../lib/mynetwork');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const fileUpload = require('express-fileupload');
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors({
    origin: "*",
    credentials: true,
}));

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file);
        callback(null, "cards/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: Storage
});

router.get('/test', function (req, res) {
    console.log("This will work just fine");
})

router.post('/login', function (req, res) {
    const name = req.body.name;
    let flag = false;
    const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
    let businessNetworkConnection = new BusinessNetworkConnection();
    businessNetworkConnection.connect('admin@waste_v3')
        .then(() => {
            return businessNetworkConnection.getIdentityRegistry();
        })
        .then((identityRegistry) => {
            return identityRegistry.getAll();
        })
        .then((identities) => {
            identities.forEach((identity) => {
                if (identity.name === name) {
                    console.log("found")
                    flag = true;
                }
            });
            return businessNetworkConnection.disconnect();
        })
        .then(function () {
            console.log(flag);
            if (flag) {
                res.cookie("authCookie", name);
                res.status(200).json({
                    message: "Login SuccessFul"
                });
            } else {
                res.status(404).json({
                    message: "login Not Successful"
                })
            }
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
})

router.post('/logout', function (req, res) {
    res.cookie("authCookie","");
    res.status(200).json({
        message: "logout successful"
    })
})

module.exports = router;