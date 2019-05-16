import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Project {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  cost: number;

  @Field()
  category: string;
}
