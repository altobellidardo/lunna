"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = exports.envSchema = void 0;
require("dotenv/config");
const zod_1 = require("zod");
exports.envSchema = zod_1.z
    .object({
    PORT: zod_1.z.string().min(1, 'PORT is required.').transform(Number),
    ALLOWED_ORIGINS: zod_1.z
        .string()
        .min(1, 'ALLOWED_ORIGINS is required.')
        .transform((val) => val.split(',').map((origin) => origin.trim())),
    DATABASE_URL: zod_1.z.string().min(1, 'DATABASE_URL is required.'),
    REDIS_URL: zod_1.z.string().min(1, 'REDIS_URL is required.'),
})
    .passthrough();
const envParsed = exports.envSchema.safeParse(process.env);
if (!envParsed.success) {
    console.error('❌ Config validation error:', envParsed.error.format());
    throw new Error('Invalid environment variables');
}
exports.envs = {
    PORT: envParsed.data.PORT,
    ALLOWED_ORIGINS: envParsed.data.ALLOWED_ORIGINS,
    DATABASE_URL: envParsed.data.DATABASE_URL,
    REDIS_URL: envParsed.data.REDIS_URL,
};
//# sourceMappingURL=envs.js.map