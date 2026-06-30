import { Module } from '@nestjs/common';
import { KafkaModule } from './kafka/kafka.module';
import { AppWebSocketModule } from './websockets/websocket.module';
import { DronesModule } from './drones/drones.module';

@Module({
  imports: [KafkaModule, AppWebSocketModule, DronesModule],
})
export class AppModule {}