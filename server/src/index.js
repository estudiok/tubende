

require('./database');
const app = require('./app');

app.listen(app.get('port'));
console.log("SERVERR ON PORTO ", app.get('port'));

