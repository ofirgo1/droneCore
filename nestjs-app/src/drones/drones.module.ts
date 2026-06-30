import { Module } from '@nestjs/common';
import { DronesService } from './drones.service';

@Module({
  providers: [DronesService],
  exports: [DronesService],
})
export class DronesModule {}