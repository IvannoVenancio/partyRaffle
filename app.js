const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');

const indexRoutes = require('./routes/index');
const app = express();

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(indexRoutes);

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
