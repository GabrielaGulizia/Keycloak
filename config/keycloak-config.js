const session= require('express-session')
const keycloak = require('keycloak-connect')


let _keycloak

var keycloakConfig ={
    clientId:'nodejs-microservice',
    bearerOnly: true,
    serverUrl:'http://localhost:8080/auth',
    realm:'Demo-Realm',
    credentials:{
        secret:'6d4c7e0f-dcc3-4d4c-9b24-05836d9ce8d8'
    }
};
function initKeycloak(){
    if(_keycloak){
        console.warn("Trying to init keycloak again!");
        return _keycloak;

    }else{
        console.log("initializing Keycloak...");
    var memoryStore = new session.MemoryStore();
    _keycloak = new keycloak({store: memoryStore },keycloakConfig);
    return _keycloak;
    }
}
function getKeycloak(){
    if(!_keycloak){
        console.error('Keycloak has not been initialized.Please called init first.');
    }
        return _keycloak;
    }
    module.exports ={
        
        initKeycloak,
        getKeycloak
    };