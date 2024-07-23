Cypress.Commands.add("apiGet", (endpoint, headers = {}) => {
  const apiBaseUrl = Cypress.config("apiBaseUrl");
  const url = `${apiBaseUrl}${endpoint}`;
  cy.request({
    method: "GET",
    url,
    headers,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("apiPost", (endpoint, body, headers = {}) => {
  const apiBaseUrl = Cypress.config("apiBaseUrl");
  cy.request({
    method: "POST",
    url: `${apiBaseUrl}${endpoint}`,
    body,
    headers,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});

Cypress.Commands.add("apiDelete", (name, headers = {}) => {
  const apiBaseUrl = Cypress.config("apiBaseUrl");
  const user = Cypress.env("GITHUB_USER");
  const endpoint = `/repos/${user}/${name}`;
  cy.request({
    method: "DELETE",
    url: `${apiBaseUrl}${endpoint}`,
    headers,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});
