import { DronesService } from '../drones/drones.service';
export declare class KafkaConsumer {
    private readonly dronesService;
    constructor(dronesService: DronesService);
    handleDronePacket(message: any): Promise<void>;
}
