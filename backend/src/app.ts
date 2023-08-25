import express, { Express } from 'express';
import routes from './routes/gamesList';
import morgan from 'morgan';
import VARS from './const';

const app: Express = express();

//логгирование
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', VARS.client);
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

//подключение роутов
app.use('/', routes);

app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

app.listen(VARS.port, () => {
    console.log(`Server running on port ${VARS.port}`);
})