// Apollo GQL Related imports
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";

const cache = new InMemoryCache();

const uri = "http://localhost:4000/";

const httpLink = createHttpLink({
  uri,
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([httpLink]),
});

export default client;
