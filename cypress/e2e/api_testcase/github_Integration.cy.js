describe("GitHub API GET All Repository Tests", () => {
  it("should fetch given users repositories successfully", () => {
    const user = Cypress.env("GITHUB_USER");
    const endpoint = `/users/${user}/repos`;

    cy.apiGet(endpoint).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      response.body.forEach((repo) => {
        expect(repo).to.have.property("id");
        expect(repo).to.have.property("name");
        expect(repo).to.have.property("full_name");
        expect(repo).to.have.property("owner");
      });
    });
  });
});

describe("GitHub API POST Tests", () => {
  it("should create a new repository successfully", () => {
    const endpoint = "/user/repos";
    const requestBody = {
      name: "TestPostCallAPI",
    };
    const headers = {
      Authorization: `token ${Cypress.env("GITHUB_TOKEN")}`,
      "Content-Type": "application/json",
    };
    cy.apiPost(endpoint, requestBody, headers).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name", "TestPostCallAPI");
    });
  });
});

describe("GitHub API DELETE Tests", () => {
  const repoName = "TestPostCallAPI";
  it("should delete the repository successfully", () => {
    const headers = {
      Authorization: `token ${Cypress.env("GITHUB_TOKEN")}`,
      "Content-Type": "application/json",
    };

    cy.apiDelete(repoName, headers).then((response) => {
      expect(response.status).to.eq(204); // HTTP status code for successful deletion
    });
  });
});
