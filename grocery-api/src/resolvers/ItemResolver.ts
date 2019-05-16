import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { items, ItemData } from "../data";
import Item from "../schemas/Item";

const uuidv1 = require("uuid/v1");

@Resolver(of => Item)
export default class {
  @Query(returns => [Item])
  items(): Item[] {
    return items;
  }

  @Mutation(returns => Item)
  updateItem(@Arg("id") id: string): ItemData {
    const item = items.find(item => {
      return item.id === id;
    });
    if (!item) {
      throw new Error(`Couldn't find the item with id ${id}`);
    }

    return item;
  }

  @Mutation(returns => Item)
  addItem(@Arg("name") name: string, @Arg("cost") cost: number, @Arg("category") category: string): ItemData {
    const item = {
      id: uuidv1(),
      name,
      cost,
      category
    };

    items.push(item);

    return item;
  }
}
