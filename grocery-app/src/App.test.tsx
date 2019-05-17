import React from "react";

import { render } from "./config/test-renderer";

import App from "./App";

it("renders without crashing", () => {
  const { container } = render(<App />);

  expect(container).toBeDefined();
});
