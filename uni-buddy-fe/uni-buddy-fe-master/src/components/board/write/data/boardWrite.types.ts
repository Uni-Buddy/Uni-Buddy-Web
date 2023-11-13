import { careerSchema } from '@type/career/career.types';
import { InferType } from 'yup';

export const careerAddSchema = careerSchema.omit(['actId']);

export type CareerAdd = InferType<typeof careerAddSchema>;
