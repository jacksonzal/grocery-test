import gql from "graphql-tag";

export const CREATE_ITEM_MUTATION = gql`
  mutation createItem($name: String!, $cost: Float!, $category: String!) {
    createItem(name: $name, cost: $cost, category: $category) {
      id
      name
      cost
      category
    }
  }
`;
