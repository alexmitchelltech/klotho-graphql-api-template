/**
 * @klotho::execution_unit {
 *   id = "base-api"
 *   keep_warm = true
 *   [size]
 *   mem_mb = 128
 * }
 */

import * as express from 'express';

import healthRouter from './routes/health';

const app = express();

app.use(healthRouter);
/* @klotho::expose {
 *  target = "public"
 * }
 */
app.listen(4000, async () => {
  console.log(`Server is running on http://localhost:4000`)
})

export { app }
