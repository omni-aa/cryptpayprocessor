import {apiHandler, testHandler, testHandlerHome} from "../controllers/controllers.js";


export default async function Routes(fastify, options) {
    // Route 1: GET /api/ → returns "Test HOME Route!!"
    fastify.get('/', testHandlerHome);

    // Route 2: GET /api/test → returns "Test Route!!"
    fastify.get('/test', testHandler);
    fastify.get('/api',apiHandler)
}
