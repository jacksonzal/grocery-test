import { items as itemData } from "../data";

export const findItemIndex = (id: string, items = itemData) => {
  const index = items.findIndex(item => {
    return item.id === id;
  });
  if (index === -1) {
    throw new Error(`Couldn't find the item with id ${id}`);
  }

  return index;
};
