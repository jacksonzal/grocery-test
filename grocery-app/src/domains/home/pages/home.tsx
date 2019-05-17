import React from "react";

import { Query } from "react-apollo";
import { ITEMS_QUERY, ItemsQueryResponse } from "../graphql";

import { GroceryItem } from "../components";

export default function Home() {
  return (
    <main className="home">
      <h1 className="mt-3 text-center">Grocery List</h1>
      <Query<ItemsQueryResponse> query={ITEMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>loading...</div>;
          }
          if (error) {
            return <div>Error</div>;
          }

          if (data) {
            const { items } = data;

            return (
              <div className="home__list container">
                {items.map((item, index) => (
                  <GroceryItem key={index} {...item} />
                ))}
              </div>
            );
          }

          return <div>No Data Available</div>;
        }}
      </Query>
    </main>
  );
}
