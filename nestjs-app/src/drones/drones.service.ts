import { Injectable } from '@nestjs/common';

@Injectable()
export class DronesService {
  async handleKafkaDronePacket(packet: any) {
    console.log('Drone packet from Kafka:', packet);

    // כאן בהמשך:
    // 1. validate payload
    // 2. normalize data
    // 3. save to PostgreSQL/PostGIS
    // 4. broadcast to WebSocket clients
  }
}