import React from "react";

import "react-testing-library/cleanup-after-each";

import { render } from "../../../config/test-renderer";
import Home from "./home";

// The component AND the query need to be exported
import { act, fireEvent, wait } from "react-testing-library";
import { DELETE_ITEM_MUTATION, ITEMS_QUERY } from "../graphql";

const mocks = [
  {
    request: {
      query: ITEMS_QUERY,
    },
    result: {
      data: {
        items: [{ id: "1", name: "Bananas", category: "Fruit", cost: 1 }],
      },
    },
  },
  {
    request: {
      query: DELETE_ITEM_MUTATION,
    },
    result: {
      data: {
        items: { id: "1", name: "Bananas", category: "Fruit", cost: 1 },
      },
    },
  },
];

describe("Home", () => {
  it("Renders", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Grocery List")).toBeTruthy();
  });

  it("Gets items data", async () => {
    const { getByText, queryByText } = render(<Home />, mocks);

    expect(getByText("loading...")).toBeTruthy();
    expect(queryByText("Bananas")).toBeNull();

    await wait();

    expect(getByText("Bananas")).toBeTruthy();
  });

  it("Calls mutation on delete click", async () => {
    const { getByTitle, getByText, queryByText } = render(<Home />, mocks);
    // wait for query result
    await wait();
    expect(getByText("Bananas")).toBeTruthy();

    //  This produces a console error with react-dom which is an open issue on facebook/react: https://github.com/facebook/react/issues/14769
    act(() => {
      fireEvent.click(getByTitle("delete"));
    });
    expect(queryByText("Bananas")).toBeNull();
  });
});
