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

export const EDIT_ITEM_MUTATION = gql`
  mutation updateItem($id: String!, $name: String, $cost: Float, $category: String) {
    updateItem(id: $id, name: $name, cost: $cost, category: $category) {
      id
      name
      cost
      category
    }
  }
`;
