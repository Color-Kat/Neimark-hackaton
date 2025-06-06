import { ConfigModule } from "@app/config/config.module";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from "./database/database.module";

@Module({
    imports    : [
        ConfigModule,
        DatabaseModule,
        HttpModule.register({
            global: true
        }),
    ],
    controllers: [AppController],
    providers  : [AppService],
})
export class AppModule {
}
