const fastify = require('fastify');

const app = fastify({
    logger: true
});

app.register(require('@fastify/cors'));
app.register(require('@fastify/helmet'));

app.register(require('./routes'), { prefix: '/api' });

app.get('/', async (request, reply) => {
    return { status: "ok", message: "Server is running" };
});

module.exports = app;


