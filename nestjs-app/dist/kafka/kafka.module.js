"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const kafka_constants_1 = require("./kafka.constants");
const kafka_consumer_1 = require("./kafka.consumer");
const kafka_producer_1 = require("./kafka.producer");
const drones_module_1 = require("../drones/drones.module");
let KafkaModule = class KafkaModule {
};
exports.KafkaModule = KafkaModule;
exports.KafkaModule = KafkaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            drones_module_1.DronesModule,
            microservices_1.ClientsModule.register([
                {
                    name: kafka_constants_1.KAFKA_CLIENT,
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'drone-server',
                            brokers: ['localhost:9092'],
                        },
                        consumer: {
                            groupId: 'drone-server-consumer',
                        },
                    },
                },
            ]),
        ],
        controllers: [
            kafka_consumer_1.KafkaConsumer,
        ],
        providers: [
            kafka_producer_1.KafkaProducer,
        ],
        exports: [
            kafka_producer_1.KafkaProducer,
        ],
    })
], KafkaModule);
//# sourceMappingURL=kafka.module.js.map