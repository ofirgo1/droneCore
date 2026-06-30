import { ClientKafka } from "@nestjs/microservices";
export declare class KafkaProducer {
    private readonly client;
    constructor(client: ClientKafka);
    emit(topic: string, message: unknown): import("rxjs").Observable<any>;
}
