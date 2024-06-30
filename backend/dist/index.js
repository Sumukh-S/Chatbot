import express from 'express';
const app = express();
// app open in local host 5000 port
app.listen(5000, () => console.log("Server open"));
// app get request, where the / defines your localhost and if you put /hello it will open it as /hello infront of your localhost
app.get('/', (req, res, next) => {
    return res.send('Hello World');
});
//# sourceMappingURL=index.js.map