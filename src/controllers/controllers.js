export async function testHandler(request, reply) {
    reply.send({ message: "Test Route!!" });
}

export async function testHandlerHome(request, reply) {
    reply.send({ message: "Test HOME Route!!" });
}

export async function apiHandler(request, reply) {
    reply.send({ message: "Test APIHandlerRoute!!" });
}