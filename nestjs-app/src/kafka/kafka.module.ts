import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_CLIENT } from './kafka.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: KAFKA_CLIENT,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'drone-server',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'drone-server-consumer',
          },
        },
      },
    ]),
  ],
})
export class KafkaModule {}