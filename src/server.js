import Fastify from 'fastify';
import dotenv from 'dotenv';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import Routes from './routes/routes.one.js';

dotenv.config();

const fastify = Fastify({ logger: true });

await fastify.register(helmet);
await fastify.register(cors, {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
});

fastify.register(Routes, { prefix: '/' });

fastify.setErrorHandler((error, request, reply) => {
    request.log.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: '0.0.0.0' }); // use 0.0.0.0 for Docker/VM
        console.log(`Server running at http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();

process.on('SIGINT', () => fastify.close());
process.on('SIGTERM', () => fastify.close());
