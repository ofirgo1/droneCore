import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { KAFKA_CLIENT } from "./kafka.constants";

@Injectable()
export class KafkaProducer {
    constructor(
        @Inject(KAFKA_CLIENT)
        private readonly client: ClientKafka,
    ) {}

    emit(topic: string, message: unknown) {
        return this.client.emit(topic, message);
    }
}