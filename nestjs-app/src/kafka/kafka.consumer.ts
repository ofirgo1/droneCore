import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { DronesService } from '../drones/drones.service';
import { KAFKA_TOPICS } from './kafka.constants';

@Controller()
export class KafkaConsumer {
  constructor(private readonly dronesService: DronesService) {}

  @EventPattern(KAFKA_TOPICS.DRONE_PACKETS)
  async handleDronePacket(@Payload() message: any) {
    await this.dronesService.handleKafkaDronePacket(message);
  }
}