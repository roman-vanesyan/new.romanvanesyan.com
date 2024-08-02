import type { ZodError, ZodSchema, z } from 'zod';

export type InferError<TSchema extends ZodSchema> = ZodError<z.infer<TSchema>>;

export * from './subscription_form';
