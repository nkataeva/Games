import express, { Express } from 'express';
import routes from './routes/routesGame';
import morgan from 'morgan';
import VARS from './const';
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: VARS.client, credentials: true }));

//логгирование
app.use(morgan('dev'));

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