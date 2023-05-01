describe("E2E test web app", () => {
  beforeEach(() => {
    cy.visit("https://ir-appointment.visametric.com/ir/home");
  });
  it("click menu icon", () => {
    cy.get("a").contains("تایید و تصدیق مدارک").click();
    cy.get("[data-id = 0]").click();
    cy.get("[id = result1]").click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
    cy.get("#g-recaptcha *> iframe").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find(".recaptcha-checkbox-border")
        .should("be.visible")
        .click();
    });
  });

  //   context("test Menu Icon UI", () => {
  //     it("click menu icon", () => {
  //       cy.getByDataTest("side-menu").click();
  //       cy.get("#menu-container").should("have.class", "show-menu");
  //       cy.getByDataTest("side-menu").click();
  //       cy.get("#menu-container").should("not.have.class", "show-menu");
  //       cy.get("#menu-container").should("have.class", "hide-menu");
  //     });
  //   });

  //   context("check buy button", () => {
  //     it.only("test disabled button on websocket error", () => {
  //       cy.getByDataTest("web-socket-banner").then((el: any) => {
  //         if (el[0].classList.contains("error")) {
  //           cy.getByDataTest("buy-button").should("be.disabled");
  //         } else {
  //           cy.getByDataTest("buy-button").should("not.be.disabled");
  //         }
  //       });
  //     });
  //   });
});

export {};
