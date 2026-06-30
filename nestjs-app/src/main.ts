import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'drone-server-listener',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'drone-server-listener-consumer',
      },
    },
  });

  await app.startAllMicroservices();
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
