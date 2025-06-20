import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { boardingValidationPage } from "@pages/BoardingValidationPage";

const Dado = Given;
const Cuando = When;
const Entonces = Then;


function getPin(tipo) {
  return cy.fixture("pins").then((data) => data[tipo][0].pin);
}
//Inicio de antecedentes
Dado(
  "el usuario ingresa al sitio web selaski en en busqueda de embarque",() => {
    cy.visit("");
  }
);

//Flujo de validacion de embarque
Cuando("el usuario ingresa un pin valido y da click en ingresar", () => {
   getPin("valido").then((pin) => {
    boardingValidationPage.submitPin(pin);
  });
});

Cuando("el usuario quiere buscar {string} filtrando por embarque", (string) => {
  boardingValidationPage.searchFilter(string);
});

Entonces("el usuario deberia ver el embarque buscado correctamente", () => {
  boardingValidationPage.elements.embarqueTxt().should("be.visible");
});

//Pin Invalido
Cuando("el usuario ingresa un pin invalido y da click en ingresar", () => {
    getPin("invalido").then((pin) => {
    boardingValidationPage.submitPin(pin);
  });
});
Entonces("el usuario deberia ver el mensaje de pin incorrecto", () => {
  boardingValidationPage.elements.error().should("be.visible").and("contain.text", "Código incorrecto");;
});

//Busqueda sin resultados
Entonces("el usuario deberia ver el mensaje de {string}", (string) => {
   boardingValidationPage.elements.sindatosTxt()
    .should("be.visible")
    .invoke("text")
    .then((text) => {
      expect(text.trim()).to.eq(string);
    });
});

