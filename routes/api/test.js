const express = require('express');
const multer = require('multer');
const router = express.Router();
const bodyParser = require('body-parser');
const app = new express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;

const businessNetworkConnection = new BusinessNetworkConnection();

router.get("/", (req, res) => {
    const idCardClass = require('composer-common').IdCard;

    idCardClass.fromDirectory('/home/xgod666/.composer/cards/admin@waste_v3').then(function (idCard) {
        console.log("card UserName: ", idCard.getUserName())
        console.log("Business Network Name: ", idCard.getBusinessNetworkName())
        console.log("Connection Profile", idCard.getConnectionProfile())
        console.log("get credentials", idCard.getEnrollmentCredentials())
        console.log("setCredentials", idCard.setCredientials({
            certificate: String,
            privateKey: "test"
        }));
        console.log("get credentials", idCard.getCredentials())


    }).catch((error) => {
        console.log(error);
    })
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

router.post("/upload", upload.single("testUpload"), (req, res) => {

})

router.post("/testLogin", (req, res) => {
    // let cardName = req.body.cardName;
    // const connection = new BusinessNetworkConnection();
    // const defination = connection.connect('admin@waste_v3');
    // // defination.then(function(test){
    // //     console.log(test.getName());
    // //     console.log(test.getIdentifier());
    // //     console.log();

    // // })

    // // const defination = connection.connect('admin@network-name');
    // // const participantRegistries = defination.getAllParticipantRegistries();
    // participantRegistries.then((test)=>{
    //     console.log(test.getAllParticipantRegistries());
    // })

    const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
    let businessNetworkConnection = new BusinessNetworkConnection();
    return businessNetworkConnection.connect('admin@waste_v3')
        .then(() => {
            return businessNetworkConnection.getIdentityRegistry();
        })
        .then((identityRegistry) => {
            return identityRegistry.getAll();
        })
        .then((identities) => {
            identities.forEach((identity) => {
                console.log(`identityId = ${identity.identityId}, name = ${identity.name}, state = ${identity.state}`);
            });
            return businessNetworkConnection.disconnect();
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });


})

module.exports = router;