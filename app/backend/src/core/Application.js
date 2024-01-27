import 'express-async-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

export default class Application {
    constructor({
        errorMiddleware,
        swaggerGenerator,
        accessHeadersMiddleware,
        logger,
    }) {
        this._swaggerGenerator = swaggerGenerator;
        this._accessHeadersMiddleware = accessHeadersMiddleware;
        this._errorMiddleware = errorMiddleware;
        this._logger = logger;
    }

    setupExpress() {
        const app = express();

        app.use(express.json())
            .use(
                cors({
                    origin: process.env.CORS_ORIGIN,
                    credentials: true,
                })
            )
            .use(cookieParser())
            .use(helmet())
            .use(this._accessHeadersMiddleware)
            .use('/health', (req, res) => res.send('OK!'))
            .use(this._swaggerGenerator)
            .use(this._errorMiddleware);

        return app;
    }

    async start() {
        const port = process.env.PORT;
        const app = this.setupExpress();

        app.listen(port, () => {
            this._logger(
                'info',
                `[ Application - Server started in port -> ${port} ]`,
                true
            );
        });
    }
}
