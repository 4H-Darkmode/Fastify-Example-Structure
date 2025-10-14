const app = require('./src/app');

const start = async () => {
    try {
        await app.listen({port: process.env.PORT || 3000});
        console.log(`Server listening on port ${process.env.PORT || 3000}`);
    } catch (error) {
        console.error('Failed to start server:', error);
        app.log.error('Server startup failed', error);
        process.exit(1);
    }
}

start();