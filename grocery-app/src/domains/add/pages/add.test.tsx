import React from "react";

import { CREATE_ITEM_MUTATION } from "../graphql";
import Add from "./add";

import { act, fireEvent, wait } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import { render } from "../../../config/test-renderer";

const mocks = [
  {
    request: {
      query: CREATE_ITEM_MUTATION,
    },
    result: {
      data: {
        items: [{ id: "1", name: "Bananas", category: "Fruit", cost: 1 }],
      },
    },
  },
];
describe("Item Form", () => {
  beforeEach(() => {});

  it("Renders", () => {
    const { getByText } = render(<Add />, mocks);

    expect(getByText("Add an Item")).toBeTruthy();
  });

  it("Submits", () => {
    const { getByLabelText, getByText, queryByText } = render(<Add />, mocks);

    expect(queryByText("Successfully Created Item!")).toBeNull();

    fireEvent.change(getByLabelText("Name"), { target: { value: "Bananas" } });
    fireEvent.change(getByLabelText("Cost"), { target: { value: 1 } });
    fireEvent.change(getByLabelText("Category"), { target: { value: "Fruit" } });
    fireEvent.click(getByText("Save"));
    expect(getByText("loading...")).toBeTruthy();
  });
});
