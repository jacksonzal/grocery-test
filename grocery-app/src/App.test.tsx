import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render } from "react-testing-library";

import App from "./App";

it("renders without crashing", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(container).toBeDefined();
});
