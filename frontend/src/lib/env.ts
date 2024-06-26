import zod from 'zod'


const envSchema = zod.object({
    SERVER_URL: zod.string().min(1),
  });
  
export const env = envSchema.parse(process.env);