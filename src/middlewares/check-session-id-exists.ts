import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionID = req.cookies.sessionId

  if (!sessionID) {
    return reply.status(401).send({
      error: 'Unauthorized',
    })
  }

  // If you need to check the session ID against a database or other storage,
  // you can do that here.
}
