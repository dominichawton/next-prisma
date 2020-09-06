import * as Models from './models';
import { Mutation } from './Mutations';
import { Subscription } from './Subscriptions';
import { Query } from './Queries';

export const GQLDate = asNexusMethod(GraphQLDate, 'date');

export const resolvers = {
	...Models,
	Query,
	Mutation,
	Subscription,
};
