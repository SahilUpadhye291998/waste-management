/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * This function will be able to add the shipping value
 * @param {org.example.mynetwork.AddTrucker} addTrucker 
 * @transaction
 */
function addTrucker(addTrucker) {
    console.log("This function is called in oreder to call for shipping");
    var logistics = addTrucker.logistics;
    const NS = "org.example.mynetwork";

    if (typeof addTrucker.logistics.trucker == 'undefined') {
        addTrucker.logistics.trucker = new Array();
        addTrucker.logistics.trucker[0] = addTrucker.trucker;
    }
    else {
        addTrucker.logistics.trucker.push(addTrucker.trucker);
    }

    return getParticipantRegistry(NS + ".Logistics")
        .then(function (logisticsRegistry) {
            return logisticsRegistry.update(logistics);
        });

}

/**
 * This function will be able to add the shipping value
 * @param {org.example.mynetwork.AddTruck} addTruck 
 * @transaction
 */
function addTruck(addTruck) {
    console.log("This function is called in oreder to call for shipping");
    var logistics = addTruck.logistics;
    const NS = "org.example.mynetwork";

    if (typeof addTruck.logistics.truck == 'undefined') {
        addTruck.logistics.truck = new Array();
        addTruck.logistics.truck[0] = addTruck.truck;
    }
    else {
        addTruck.logistics.truck.push(addTruck.truck);
    }

    return getParticipantRegistry(NS + ".Logistics")
        .then(function (logisticsRegistry) {
            return logisticsRegistry.update(logistics);
        });

}

/**
 * This function will be able to add the shipping value
 * @param {org.example.mynetwork.AddWareHouse} addWareHouse 
 * @transaction
 */
function addWareHouse(addWareHouse) {
    console.log("This function is called in oreder to call for shipping");
    var company = addWareHouse.company;
    const NS = "org.example.mynetwork";

    if (typeof addWareHouse.company.wareHouse == 'undefined') {
        addWareHouse.company.wareHouse = new Array();
        addWareHouse.company.wareHouse[0] = addWareHouse.wareHouse;
    }
    else {
        addWareHouse.company.wareHouse.push(addWareHouse.wareHouse);
    }

    return getParticipantRegistry(NS + ".Company")
        .then(function (companyRegistry) {
            return companyRegistry.update(company);
        });

}

//this need to be tested
/**
 * This function will be able to add the shipping value
 * @param {org.example.mynetwork.AddProductToWareHouse} addProductToWareHouse 
 * @transaction
 */
function addProductToWareHouse(addProductToWareHouse) {
    console.log("This function is called in oreder to call for shipping");
    var wareHouse = addProductToWareHouse.wareHouse;
    const NS = "org.example.mynetwork";

    if (typeof addProductToWareHouse.product.isCompleted === true) {
        if (typeof addProductToWareHouse.wareHouse.product == 'undefined') {
            addProductToWareHouse.wareHouse.product = new Array();
            addProductToWareHouse.wareHouse.product[0] = addProductToWareHouse.product;
        }
        else {
            addProductToWareHouse.wareHouse.wareHouse.push(addProductToWareHouse.product);
        }
    } else {
        throw new Error("This transaction cant be processed as it is not completed");
    }

    return getParticipantRegistry(NS + ".WareHouse")
        .then(function (wareHouseRegistry) {
            return wareHouseRegistry.update(wareHouse);
        });

}

/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.UpdateComanyProduct} updateComanyProduct The sample transaction instance.
 * @transaction
 */
function updateComanyProduct(updateComanyProduct) {

    // Save the old value of the asset.
    var EstimatedProductPrice = updateComanyProduct.product.EstimatedProductPrice;
    var wasteTreatment = updateComanyProduct.product.wasteTreatment;

    // Update the asset with the new value.
    updateComanyProduct.product.EstimatedProductPrice = updateComanyProduct.EstimatedProductPrice;
    updateComanyProduct.product.wasteTreatment = updateComanyProduct.wasteTreatment;
    // Get the asset registry for the asset.
    return getAssetRegistry('org.example.mynetwork.Product')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(updateComanyProduct.product);

        });
}


/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.AfterCreation} afterCreation The sample transaction instance.
 * @transaction
 */
function afterCreation(afterCreation) {

    // Save the old value of the asset.
    var estimatedRewardPrice = afterCreation.product.estimatedRewardPrice;
    var generation = afterCreation.product.generation;
    var isCompleted = afterCreation.product.isCompleted;

    // Update the asset with the new value.
    afterCreation.product.estimatedRewardPrice = afterCreation.estimatedRewardPrice;
    afterCreation.product.isCompleted = afterCreation.isCompleted;
    afterCreation.product.generation = afterCreation.generation;
    // Get the asset registry for the asset.
    return getAssetRegistry('org.example.mynetwork.Product')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(afterCreation.product);

        });
}

/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.ChangeShipmentStatus} changeShipmentStatus The sample transaction instance.
 * @transaction
 */
function changeShipmentStatus(changeShipmentStatus) {

    // Save the old value of the asset.
    var shippingStatus = changeShipmentStatus.shipment.shippingStatus;

    // Update the asset with the new value.
    changeShipmentStatus.shipment.shippingStatus = changeShipmentStatus.shippingStatus;
    // Get the asset registry for the asset.
    return getAssetRegistry('org.example.mynetwork.Shipment')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(changeShipmentStatus.shipment);

        });
}

/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.LoginCompany} loginCompany The sample transaction instance.
 * 
 * @transaction
 */
function LoginCompany(loginCompany) {

    // Save the old value of the asset.
    var onBlockchainbusinessEmail = loginCompany.company.businessEmail;
    var onBlockchainbusinessPasswd = loginCompany.company.businessPasswd;

    var BusinessID = loginCompany.company.businessID;

    var userInputBusinessEmail = loginCompany.businessEmail;
    var userInputBusinessPasswd = loginCompany.businessPasswd;

    if(onBlockchainbusinessEmail === userInputBusinessEmail & onBlockchainbusinessPasswd === userInputBusinessPasswd){
        return BusinessID;
    }else{
        return  'LOGIN for the company failed';
    }
   
}

/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.LoginLogistics} loginLogistics The sample transaction instance.
 * 
 * @transaction
 */
function LoginLogistics(loginLogistics) {

    // Save the old value of the asset.
    var onBlockchainbusinessEmail = loginLogistics.logistics.businessEmail;
    var onBlockchainbusinessPasswd = loginLogistics.logistics.businessPasswd;

    var BusinessID = loginLogistics.Logistics.businessID;

    var userInputBusinessEmail = loginLogistics.businessEmail;
    var userInputBusinessPasswd = loginLogistics.businessPasswd;

    if(onBlockchainbusinessEmail === userInputBusinessEmail & onBlockchainbusinessPasswd === userInputBusinessPasswd){
        return BusinessID;
    }else{
        return  'LOGIN for the Logistics failed';
    }
   
}

/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.LoginRetailStore} loginRetailStore The sample transaction instance.
 * 
 * @transaction
 */
function LoginRetailStore(loginRetailStore) {

    // Save the old value of the asset.
    var onBlockchainbusinessEmail = loginRetailStore.retailStore.businessEmail;
    var onBlockchainbusinessPasswd = loginRetailStore.retailStore.businessPasswd;

    var BusinessID = loginRetailStore.RetailStore.businessID;

    var userInputBusinessEmail = loginRetailStore.businessEmail;
    var userInputBusinessPasswd = loginRetailStore.businessPasswd;

    if(onBlockchainbusinessEmail === userInputBusinessEmail & onBlockchainbusinessPasswd === userInputBusinessPasswd){
        return BusinessID;
    }else{
        return  'LOGIN for the RetailStore failed';
    }
   
}

/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.LoginCustomer} loginCustomer The sample transaction instance.
 * 
 * @transaction
 */
function LoginCustomer(loginCustomer) {

    // Save the old value of the asset.
    var onBlockchainbusinessEmail = loginCustomer.customer.businessEmail;
    var onBlockchainbusinessPasswd = loginCustomer.customer.businessPasswd;

    var BusinessID = loginCustomer.Customer.businessID;

    var userInputBusinessEmail = loginCustomer.businessEmail;
    var userInputBusinessPasswd = loginCustomer.businessPasswd;

    if(onBlockchainbusinessEmail === userInputBusinessEmail & onBlockchainbusinessPasswd === userInputBusinessPasswd){
        return BusinessID;
    }else{
        return  'LOGIN for the Customer failed';
    }
   
}

/**
 * Sample transaction processor function.
 * @param {org.example.mynetwork.TransferFunds} TransferFunds The sample transaction instance.
 * 
 * @transaction
 */
function TransferFunds(transferFunds) {

    // Save the old value of the asset.
    var productRewardAmount = transferFunds.product.estimatedRewardPrice;

    transferFunds.customer.amount += productRewardAmount;

    return getParticipantRegistry('org.example.mynetwork.Customer').then(function(customerRegistry){
        return customerRegistry.update(transferFunds.customer);
    });
}
