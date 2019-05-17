import React from "react";
import { Item } from "../../../types";

type Props = Item;

export default function GroceryItem({ name, cost, category }: Props) {
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
        <button className="grocery-item__icon fa fa-pencil-alt border-0" />
        <button className="grocery-item__icon fa fa-trash border-0" />
      </div>
    </div>
  );
}
