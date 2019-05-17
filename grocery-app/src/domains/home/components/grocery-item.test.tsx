import React from "react";

import GroceryItem, { Props } from "./grocery-item";

import { fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import { render } from "../../../config/test-renderer";

import { Item } from "../../../types";

describe("Home", () => {
  let props: Props;
  let item: Item;
  beforeEach(() => {
    item = { id: "0", name: "Boonanas", cost: 2, category: "Fruit" };
    props = { ...item, deleteItem: jest.fn() };
  });
  it("Renders", () => {
    const { container } = render(<GroceryItem {...props} />);

    expect(container).toBeDefined();
  });

  it("Calls delete function on click", () => {
    const { getByTitle } = render(<GroceryItem {...props} />);

    const deleteElement = getByTitle("delete");

    expect(props.deleteItem).not.toHaveBeenCalled();

    fireEvent.click(deleteElement);
    expect(props.deleteItem).toHaveBeenCalled();
  });
});
