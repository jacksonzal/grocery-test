import React, { PureComponent } from "react";

import { Query } from "react-apollo";
import { ITEMS_QUERY, ItemsQueryResponse } from "../graphql";

export default class Home extends PureComponent {
  public render() {
    return (
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
              <div>
                {items.map((item, index) => (
                  <div key={index}>{item.name}</div>
                ))}
              </div>
            );
          }

          return <div>No Data Available</div>;
        }}
      </Query>
    );
  }
}
