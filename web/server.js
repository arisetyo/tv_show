import path from 'path';
import express from 'express';

const port = 3000;
const app = express();

const staticPath = path.join(__dirname, '/build');
app.use(express.static(staticPath));

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) console.log(err);
  console.info('Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
