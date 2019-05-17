import React from "react";

import GroceryItem, { Props } from "./item-form";

import { fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import { render } from "../config/test-renderer";

describe("Item Form", () => {
  let props: Props;
  beforeEach(() => {
    const item = { id: "0", name: "Boonanas", cost: 2, category: "Fruit" };
    props = { initialData: item, submitForm: jest.fn() };
  });

  it("Renders Form", () => {
    const { getByLabelText } = render(<GroceryItem {...props} />);

    expect(getByLabelText("Name")).toBeTruthy();
    expect(getByLabelText("Cost")).toBeTruthy();
    expect(getByLabelText("Category")).toBeTruthy();
  });

  it("Submits", () => {
    const { getByText } = render(<GroceryItem {...props} />);

    fireEvent.click(getByText("Save"));
    expect(props.submitForm).toHaveBeenCalled();
  });

  it("Does not show cancel without prop", () => {
    const { queryByLabelText } = render(<GroceryItem {...props} />);

    expect(queryByLabelText("Cancel")).toBeNull();
  });

  it("Cancels", () => {
    const cancel = jest.fn();
    const { getByText } = render(<GroceryItem {...props} cancel={cancel} />);

    fireEvent.click(getByText("Cancel"));
    expect(cancel).toHaveBeenCalled();
  });
});
