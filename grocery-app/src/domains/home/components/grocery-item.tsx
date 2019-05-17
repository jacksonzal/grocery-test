import React, { useState } from "react";

import { ItemForm } from "../../../components";

import { Item } from "../../../types";

export interface Props {
  item: Item;
  deleteItem: (id: string) => void;
  editItem: ({ id, name, category, cost }: { id: string; name: string; category: string; cost: number }) => void;
}

export default function GroceryItem({ item, deleteItem, editItem }: Props) {
  const [editView, setEditView] = useState(false);

  const { id, name, cost, category } = item;

  return (
    <div className="grocery-item p-3 border-bottom d-flex justify-content-between">
      <div className="d-flex align-items-center">
        {editView ? (
          <ItemForm submitForm={editItem} initialData={item} cancel={() => setEditView(false)} />
        ) : (
          <>
            <img className="grocery-item__image" alt="Grocery Item" src="https://picsum.photos/75" />
            <div className="ml-2 d-flex flex-column">
              <span className="font-weight-bold">{name}</span>
              <span>${cost}</span>
              <span className="text-secondary">{category}</span>
            </div>
          </>
        )}
      </div>
      <div className="">
        <button
          className="grocery-item__icon fa fa-pencil-alt border-0"
          title="edit"
          onClick={() => setEditView(!editView)}
        />
        <button className="grocery-item__icon fa fa-trash border-0" onClick={() => deleteItem(id)} title="delete" />
      </div>
    </div>
  );
}
