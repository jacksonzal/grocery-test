import gql from "graphql-tag";

import { Item } from "../../types";

export const ITEMS_QUERY = gql`
  query Items {
    items {
      id
      name
      cost
      category
    }
  }
`;

export interface ItemsQueryResponse {
  items: Item[];
}
