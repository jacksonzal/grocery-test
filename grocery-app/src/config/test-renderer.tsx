import React from "react";
import { MockedProvider, MockedResponse } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router-dom";

import { render as rtlRender } from "react-testing-library";

export const render = (ui: JSX.Element, mocks: ReadonlyArray<MockedResponse> = []) => {
  return {
    ...rtlRender(
      <MemoryRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          {ui}
        </MockedProvider>
      </MemoryRouter>,
    ),
  };
};
