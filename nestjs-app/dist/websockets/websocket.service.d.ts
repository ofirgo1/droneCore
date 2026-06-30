import { AppWebSocketGateway } from './websocket.gateway';
export declare class AppWebSocketService {
    private readonly gateway;
    constructor(gateway: AppWebSocketGateway);
    broadcastDronePacket(packet: unknown): void;
    broadcastDroneSnapshot(snapshot: unknown): void;
    broadcastToRoom(room: string, event: string, payload: unknown): void;
}
