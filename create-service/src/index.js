const express = require ('express');
const morgan = require ('morgan');
const app = express();
var cors = require('cors');
app.set('port', 4015);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/apinewservice', require('./Register/apinewservice'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});