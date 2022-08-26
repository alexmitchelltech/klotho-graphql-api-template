import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';
import rootValue from './resolvers';

const router = Router();

router.get('/graphql', graphqlHTTP({
  schema,
  rootValue,
}));

export default router;
