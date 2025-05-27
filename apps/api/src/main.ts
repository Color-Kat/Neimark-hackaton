import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AxiosHttpExceptionFilter } from "../filters/axios-http-exception.filter";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const port = configService.get<number>('API_GATEWAY_PORT', 3002);

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.useGlobalFilters(new AxiosHttpExceptionFilter());
    app.enableCors();

    await app.listen(port);

    console.log("Application is running on: http://localhost:" + port);
}

bootstrap();
