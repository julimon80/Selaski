class BoardingValidationPage {
  elements = {
    pinInput: () => cy.get("#digit1"),
    enterBtn: () => cy.get('button[type="submit"]'),
    error: () => cy.contains("p", "Código incorrecto."),
    filtroBtn: () => cy.contains("p", "Filtros"),
    filtroloading: () => cy.get("app-organism-table-results"),
    FiltroMestroDrp: () =>
      cy.get("div.select-menu.min-w-fit").contains("Seleccionar"),
    selector: () => cy.contains("p", "Embarque").eq(1),
    busqueddInpito: () => cy.get('input[type="text"]').eq(0),
    embarqueTxt: () => cy.get("p[title^='Prueba 1']"),
    sindatosTxt: () => cy.contains("h3", "Sin datos para mostrar")
  };

  typepin(pin) {
    this.elements.pinInput().type(pin);
  }

  clickEnter() {
    this.elements.enterBtn().click();
  }

  submitPin(pin) {
    this.elements.pinInput().should("be.visible").type(pin);
    this.elements.enterBtn().click();
  }

  searchFilter(embarque) {
    this.elements.filtroBtn().should("be.visible").click();
    this.elements.filtroloading().should("be.visible");
    this.elements.FiltroMestroDrp().click();
    cy.contains("p", "Embarque", { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });
    this.elements.busqueddInpito().type(`${embarque}{enter}`);
  }
}
export const boardingValidationPage = new BoardingValidationPage();
