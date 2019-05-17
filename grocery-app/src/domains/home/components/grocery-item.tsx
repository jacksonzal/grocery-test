import React from "react";
import { Item } from "../../../types";

export type Props = Item & { deleteItem: (id: string) => void };

export default function GroceryItem({ id, name, cost, category, deleteItem }: Props) {
  return (
    <div className="grocery-item p-3 border-bottom d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <img className="grocery-item__image" alt="Grocery Item" src="https://picsum.photos/75" />
        <div className="ml-2 d-flex flex-column">
          <span className="font-weight-bold">{name}</span>
          <span>${cost}</span>
          <span className="text-secondary">{category}</span>
        </div>
      </div>
      <div className="">
        <button className="grocery-item__icon fa fa-pencil-alt border-0" title="edit" />
        <button className="grocery-item__icon fa fa-trash border-0" onClick={() => deleteItem(id)} title="delete" />
      </div>
    </div>
  );
}
