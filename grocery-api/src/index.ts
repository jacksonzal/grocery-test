import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import ItemResolver from "./resolvers/ItemResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ItemResolver],
    emitSchemaFile: true
  });

  const server = new GraphQLServer({
    schema
  });

  server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();
