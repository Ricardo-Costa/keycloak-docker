import Keycloak from "keycloak-js";

// TODO add to .env file after
const keycloakAdapterConfigJSON = `{"realm":"myrealm","auth-server-url":"http://localhost:8080/","ssl-required":"external","resource":"client-1","public-client":true,"confidential-port":0}`;
const configs = JSON.parse(keycloakAdapterConfigJSON);

export const keycloak = new Keycloak({
  url: configs.url,
  realm: configs.realm,
  clientId: configs.resource
});