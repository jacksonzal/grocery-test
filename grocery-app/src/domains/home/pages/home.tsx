import React, { useState } from "react";

import { compose, graphql, Query } from "react-apollo";
import { DELETE_ITEM_MUTATION, ITEMS_QUERY, ItemsQueryResponse } from "../graphql";

import { Loading } from "../../../components";
import { GroceryItem } from "../components";

interface Props {
  deleteItemMutation: ({
    variables,
    refetchQueries,
  }: {
    variables: { id: string };
    refetchQueries: [{ query: Query }];
  }) => Promise<any>;
}

const Home = ({ deleteItemMutation }: Props) => {
  const [loading, setLoading] = useState(false);
  const [searchString, setSearch] = useState("");

  const deleteItem = (id: string) => {
    setLoading(true);
    deleteItemMutation({ variables: { id }, refetchQueries: [{ query: ITEMS_QUERY }] })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // TO DO: ERROR HANDLING
      });
  };

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="home">
      <h1 className="mt-3 text-center">Grocery List</h1>
      <Query<ItemsQueryResponse> query={ITEMS_QUERY}>
        {({ loading: queryLoading, error, data }) => {
          if (loading || queryLoading) {
            return <Loading />;
          }
          if (error) {
            return <div>Error</div>;
          }

          if (data) {
            const { items } = data;

            let filteredItems = items;
            if (searchString) {
              filteredItems = items.filter((i) => i.category.toLowerCase().includes(searchString.toLowerCase()));
            }

            return (
              <div className="home__list container">
                <div className="form-group">
                  <label htmlFor="cost">Search</label>
                  <input
                    type="text"
                    className="form-control"
                    id="search"
                    name="search"
                    placeholder="Search for item by category"
                    value={searchString}
                    onChange={searchChange}
                  />
                </div>
                {filteredItems.map((item, index) => (
                  <GroceryItem key={index} deleteItem={deleteItem} {...item} />
                ))}
              </div>
            );
          }

          return <div>No Data Available</div>;
        }}
      </Query>
    </main>
  );
};

export default compose(graphql(DELETE_ITEM_MUTATION, { name: "deleteItemMutation" }))(Home);
