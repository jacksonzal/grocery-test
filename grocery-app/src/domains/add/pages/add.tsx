import React, { useState } from "react";

import { compose, graphql, Query } from "react-apollo";

import { Loading } from "../../../components";
import { validateItem } from "../../../util/validators";
import { ITEMS_QUERY } from "../../home/graphql";
import { CREATE_ITEM_MUTATION } from "../graphql";

const initialData = {
  name: "",
  category: "",
  cost: 0,
};

interface Props {
  createItemMutation: ({
    variables,
    refetchQueries,
  }: {
    variables: { name: string; category: string; cost: number };
    refetchQueries: [{ query: Query }];
  }) => Promise<any>;
}

const Add = ({ createItemMutation }: Props) => {
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);

    if (validateItem(formData.name, formData.cost, formData.category)) {
      setLoading(true);

      createItemMutation({ variables: formData, refetchQueries: [{ query: ITEMS_QUERY }] })
        .then(() => {
          setLoading(false);
          setSuccess(true);
          setFormData(initialData);
        })
        .catch((error) => {
          setLoading(false);
          setSuccess(false);

          console.error(error);
        });
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSuccess(false);

    setFormData({
      ...formData,
      [e.target.name]: e.target.name === "cost" ? parseInt(e.target.value, 10) : e.target.value,
    });
  };

  const disabled = !validateItem(formData.name, formData.cost, formData.category);

  return (
    <main className="add mt-3">
      <h1 className="text-center">Add an Item</h1>
      {loading ? (
        <Loading />
      ) : (
        <form className="add__form container mt-5" onSubmit={submitForm}>
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
          {success ? <span className="text-success">Successfully Added!</span> : null}
        </form>
      )}
    </main>
  );
};

export default compose(graphql(CREATE_ITEM_MUTATION, { name: "createItemMutation" }))(Add);
