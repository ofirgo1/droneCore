import { KafkaProducer } from './kafka.producer';
export declare class KafkaTestController {
    private readonly kafkaProducer;
    constructor(kafkaProducer: KafkaProducer);
    sendDronePacket(body: any): Promise<{
        ok: boolean;
        topic: "drone.packets";
        payload: any;
    }>;
}
