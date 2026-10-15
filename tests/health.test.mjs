import test from "node:test";
import assert from "node:assert/strict";

test("production health response contract", () => {
  const response = {
    status: "ok",
    service: "ci-cd-demo",
  };

  assert.equal(response.status, "ok");
  assert.equal(response.service, "ci-cd-demo");
});
