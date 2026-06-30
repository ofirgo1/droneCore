"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DronesService = void 0;
const common_1 = require("@nestjs/common");
let DronesService = class DronesService {
    async handleKafkaDronePacket(packet) {
        console.log('Drone packet from Kafka:', packet);
    }
};
exports.DronesService = DronesService;
exports.DronesService = DronesService = __decorate([
    (0, common_1.Injectable)()
], DronesService);
//# sourceMappingURL=drones.service.js.map