import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_CLIENT } from './kafka.constants';
import { KafkaConsumer } from './kafka.consumer';
import { KafkaTestController } from './kafka.connection-test';
import { KafkaProducer } from './kafka.producer';
import { DronesModule } from 'src/drones/drones.module';

@Module({
  imports: [
    DronesModule,
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
  controllers:[
    KafkaConsumer,
  ],
  providers: [
    KafkaProducer,
  ],
  exports: [
    KafkaProducer,
  ],
})
export class KafkaModule {}