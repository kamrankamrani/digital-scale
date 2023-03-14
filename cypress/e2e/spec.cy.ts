// describe("E2E test web app", () => {
//   beforeEach(() => {
//     cy.visit("localhost:5173");
//   });

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
// });

export {};
