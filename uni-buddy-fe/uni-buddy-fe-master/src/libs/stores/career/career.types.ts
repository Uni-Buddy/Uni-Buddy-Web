import { Career } from '@type/career/career.types';

export type CareersList = {
  [key: string]: Career[];
};

export interface careerState {
  careersList: CareersList;
}
