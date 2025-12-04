import 'dotenv/config';
import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    PORT: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
    ALLOWED_ORIGINS: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
    DATABASE_URL: z.ZodString;
    REDIS_URL: z.ZodString;
}, z.core.$loose>;
type envType = z.infer<typeof envSchema>;
export declare const envs: envType;
export {};
