import React, { useState } from "react";

import { validateItem } from "../util/validators";

interface ItemFormData {
  id?: string;
  name: string;
  category: string;
  cost: number;
}

interface Props {
  initialData: { id?: string; name: string; category: string; cost: number };
  submitForm: (itemFormData: ItemFormData) => void;
}

const ItemForm = ({ submitForm, initialData }: Props) => {
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
    <form className="add__form container mt-5" onSubmit={submitFormClick}>
      <div className="form-group">
        <label htmlFor="name">Example label</label>
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
      <button type="submit" className="btn btn-primary" disabled={disabled}>
        Save
      </button>
    </form>
  );
};

export default ItemForm;
