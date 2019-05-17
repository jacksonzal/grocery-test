import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { items, ItemData } from "../data";
import Item from "../schemas/Item";
import { findItemIndex } from "../util/item";

const uuidv1 = require("uuid/v1");

@Resolver(of => Item)
export default class {
  @Query(returns => [Item])
  items(): Item[] {
    return items;
  }

  @Mutation(returns => Item)
  updateItem(
    @Arg("id") id: string,
    @Arg("name", { nullable: true }) name?: string,
    @Arg("cost", { nullable: true }) cost?: number,
    @Arg("category", { nullable: true }) category?: string
  ): ItemData {
    const itemIndex = findItemIndex(id);

    const updatedItem = {
      ...items[itemIndex],
      name: name ? name : items[itemIndex].name,
      cost: cost ? cost : items[itemIndex].cost,
      category: category ? category : items[itemIndex].category
    };

    // replace item with update one
    items.splice(itemIndex, 1, updatedItem);

    return updatedItem;
  }

  @Mutation(returns => Item)
  deleteItem(@Arg("id") id: string): ItemData {
    const itemIndex = findItemIndex(id);

    // remove item
    const deletedItem = items.splice(itemIndex, 1)[0];

    return deletedItem;
  }

  @Mutation(returns => Item)
  createItem(@Arg("name") name: string, @Arg("cost") cost: number, @Arg("category") category: string): ItemData {
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
