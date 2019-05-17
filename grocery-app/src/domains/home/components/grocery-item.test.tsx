import React from "react";

import GroceryItem, { Props } from "./grocery-item";

import { fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import { render } from "../../../config/test-renderer";

import { Item } from "../../../types";

describe("Grocery Item", () => {
  let props: Props;
  let item: Item;
  beforeEach(() => {
    item = { id: "0", name: "Boonanas", cost: 2, category: "Fruit" };
    props = { item, deleteItem: jest.fn(), editItem: jest.fn() };
  });
  it("Renders Item Data", () => {
    const { getByText } = render(<GroceryItem {...props} />);

    expect(getByText("Boonanas")).toBeTruthy();
    expect(getByText("$2")).toBeTruthy();
    expect(getByText("Fruit")).toBeTruthy();
  });

  it("Calls delete function on click", () => {
    const { getByTitle } = render(<GroceryItem {...props} />);

    const deleteElement = getByTitle("delete");

    expect(props.deleteItem).not.toHaveBeenCalled();

    fireEvent.click(deleteElement);
    expect(props.deleteItem).toHaveBeenCalled();
  });

  it("Toggles View on Edit Click", () => {
    const { getByTitle, getByLabelText, queryByLabelText } = render(<GroceryItem {...props} />);

    expect(queryByLabelText("Name")).toBeNull();
    const editElement = getByTitle("edit");

    fireEvent.click(editElement);
    expect(getByLabelText("Name")).toBeTruthy();
  });
});
