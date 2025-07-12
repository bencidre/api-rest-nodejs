import { app } from './app'
import { env } from './env'

app.listen(
  {
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost', // necessário no Render
    port: env.PORT, // pegue a porta da variável de ambiente
  },
  () => {
    console.log(`🚀 Server is running on port ${env.PORT}`)
  },
)
