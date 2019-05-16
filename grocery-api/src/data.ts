const uuidv1 = require("uuid/v1");

export interface ItemData {
  id: string;
  name: string;
  cost: number;
  category: string;
}

export const items: ItemData[] = [
  { id: uuidv1(), name: "Strawberry", cost: 1, category: "Fruit" },
  { id: uuidv1(), name: "Banana", cost: 3, category: "Fruit" }
];
