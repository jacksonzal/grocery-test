import React, { useState } from "react";

import { compose, graphql, Query } from "react-apollo";

import { ItemForm, Loading } from "../../../components";
import { validateItem } from "../../../util/validators";
import { ITEMS_QUERY } from "../../home/graphql";
import { CREATE_ITEM_MUTATION } from "../graphql";

const initialData = {
  id: "",
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = ({ name, category, cost }: { name: string; category: string; cost: number }) => {
    setSuccess(false);

    if (validateItem(name, cost, category)) {
      setLoading(true);

      createItemMutation({ variables: { name, category, cost }, refetchQueries: [{ query: ITEMS_QUERY }] })
        .then(() => {
          setLoading(false);
          setSuccess(true);
        })
        .catch((error) => {
          setLoading(false);
          setSuccess(false);

          console.error(error);
        });
    }
  };

  return (
    <main className="add mt-3">
      <h1 className="text-center">Add an Item</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="add__form container mt-5">
          <ItemForm submitForm={submitForm} initialData={initialData} />
        </div>
      )}
      {success ? <span className="text-success">Successfully Created Item!</span> : null}
    </main>
  );
};

export default compose(graphql(CREATE_ITEM_MUTATION, { name: "createItemMutation" }))(Add);
