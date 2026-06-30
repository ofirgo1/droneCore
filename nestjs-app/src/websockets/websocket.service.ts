import { Injectable } from '@nestjs/common';
import { AppWebSocketGateway } from './websocket.gateway';
import { WEBSOCKET_EVENTS } from './websocket.events';

@Injectable()
export class AppWebSocketService {
  constructor(private readonly gateway: AppWebSocketGateway) {}

  broadcastDronePacket(packet: unknown) {
    this.gateway.server.emit(WEBSOCKET_EVENTS.DRONE_PACKET, packet);
  }

  broadcastDroneSnapshot(snapshot: unknown) {
    this.gateway.server.emit(WEBSOCKET_EVENTS.DRONE_SNAPSHOT, snapshot);
  }

  broadcastToRoom(room: string, event: string, payload: unknown) {
    this.gateway.server.to(room).emit(event, payload);
  }
}