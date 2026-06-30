import { Module } from '@nestjs/common';
import { AppWebSocketGateway } from './websocket.gateway';
import { AppWebSocketService } from './websocket.service';

@Module({
  providers: [AppWebSocketGateway, AppWebSocketService],
  exports: [AppWebSocketService],
})
export class AppWebSocketModule {}