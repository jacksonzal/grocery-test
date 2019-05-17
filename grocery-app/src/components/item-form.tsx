import React, { useState } from "react";

import { validateItem } from "../util/validators";

interface ItemFormData {
  id: string;
  name: string;
  category: string;
  cost: number;
}

export interface Props {
  initialData: { id: string; name: string; category: string; cost: number };
  submitForm: (itemFormData: ItemFormData) => void;
  cancel?: () => void;
}

const ItemForm = ({ submitForm, initialData, cancel }: Props) => {
  const [formData, setFormData] = useState(initialData);

  const submitFormClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(formData);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === "cost" ? parseInt(e.target.value, 10) : e.target.value,
    });
  };

  const disabled = !validateItem(formData.name, formData.cost, formData.category);

  return (
    <form className="" onSubmit={submitFormClick}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cost">Cost</label>
        <input
          type="number"
          className="form-control"
          id="cost"
          name="cost"
          placeholder="Enter Cost"
          value={formData.cost}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          placeholder="Enter Category"
          value={formData.category}
          onChange={onChange}
        />
      </div>
      {cancel ? (
        <button type="button" className="btn btn-secondary mr-2" onClick={cancel}>
          Cancel
        </button>
      ) : null}
      <button type="submit" className="btn btn-primary" disabled={disabled}>
        Save
      </button>
    </form>
  );
};

export default ItemForm;
