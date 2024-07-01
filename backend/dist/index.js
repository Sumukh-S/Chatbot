import express from 'express';
import { config } from 'dotenv';
config();
const app = express();
//app.use()
app.use(express.json());
// app open in local host 5000 port or CONNECTIONS AND LISTENERS
app.listen(5000, () => console.log("Server open"));
// // app get request, where the / defines your localhost and if you put /hello it will open it as /hello infront of your localhost
// app.post('/', (req, res, next) => {
//   console.log(req.body.name);
//   return res.send('Hello World');
// });
// app.put('/', (req, res, next) => {
//   console.log(req.body.name);
//   return res.send('Hello World in put');
// });
// app.delete('/delete', (req, res, next) => {
//   console.log(req.body.name);
//   return res.send('Hello World in delete');
// });
// app.delete('/user/:userid', (req, res, next) => {
//   console.log(req.params.userid);
//   return res.send('Hello World in delete');
// });
//# sourceMappingURL=index.js.map