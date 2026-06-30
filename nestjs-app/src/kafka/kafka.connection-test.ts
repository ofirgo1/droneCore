import { Body, Controller, Post } from '@nestjs/common';
import { KafkaProducer } from './kafka.producer';
import { KAFKA_TOPICS } from './kafka.constants';

@Controller('kafka-test')
export class KafkaTestController {
  constructor(private readonly kafkaProducer: KafkaProducer) {}

  @Post('drone-packet')
  async sendDronePacket(@Body() body: any) {
    this.kafkaProducer.emit(KAFKA_TOPICS.DRONE_PACKETS, body);

    return {
      ok: true,
      topic: KAFKA_TOPICS.DRONE_PACKETS,
      payload: body,
    };
  }
}