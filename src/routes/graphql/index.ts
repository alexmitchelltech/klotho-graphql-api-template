import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';
import rootValue from './resolvers';

const router = Router();

router.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

export default router;
