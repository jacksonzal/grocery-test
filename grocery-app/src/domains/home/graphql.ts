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

export const DELETE_ITEM_MUTATION = gql`
  mutation deleteItem($id: String!) {
    deleteItem(id: $id) {
      id
      name
      cost
      category
    }
  }
`;
