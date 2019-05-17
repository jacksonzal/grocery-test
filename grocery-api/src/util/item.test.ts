import { findItemIndex } from "./item";

import { ItemData } from "../data";

describe("findItemIndex", () => {
  let items: ItemData[];
  beforeEach(() => {
    items = [
      { id: "1", name: "Strawberry", cost: 1, category: "Fruit" },
      { id: "2", name: "Banana", cost: 3, category: "Fruit" }
    ];
  });
  it("Can find index with valid id", () => {
    expect(findItemIndex("1", items)).toEqual(0);
    expect(findItemIndex("2", items)).toEqual(1);
  });

  it("Throws Error with invalid id", () => {
    expect(() => {
      findItemIndex("0", items);
    }).toThrowError();
  });
});
