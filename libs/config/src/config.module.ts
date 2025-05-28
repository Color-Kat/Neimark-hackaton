import {Module} from '@nestjs/common';
import {ConfigModule as NestConfigModule} from '@nestjs/config';
import * as Joi from 'joi';

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                // Postgresql settings
                DB_USER: Joi.string().required(),
                DB_PASSWORD: Joi.string().required(),
                DB_HOST: Joi.string().required(),
                DB_NAME: Joi.string().required(),

                // Ports and URLs of all microservices
                WEB_HOST: Joi.string().uri().required(),
                WEB_PORT: Joi.number().port().required(),
                API_URL: Joi.string().uri().required(),
                NEXT_PUBLIC_API_URL: Joi.string().uri().required(),
                API_GATEWAY_HOST: Joi.string().uri().required(),
                API_GATEWAY_PORT: Joi.number().port().required(),
                PYTHON_HOST: Joi.string().uri().required(),
                PYTHON_PORT: Joi.number().port().required(),

                // OCR
                // OCR_API_KEY: Joi.string().required(),
            }),
            validationOptions: {
                abortEarly: false, // Show all validation errors
            },
        })
    ],
    exports: [NestConfigModule],
})

export class ConfigModule {
}
