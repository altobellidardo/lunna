"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const envs_1 = require("./config/envs");
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const logger = new common_1.Logger('App - Auth');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cookie_parser_1.default)());
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: envs_1.envs.ALLOWED_ORIGINS,
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 3000);
    logger.log('App running on PORT:');
}
bootstrap();
//# sourceMappingURL=main.js.map