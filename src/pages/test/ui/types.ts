import type { ChangeEvent } from 'react';

import { Question } from '@/entities/test';

export type Props = {
    question: Question;
    questionIndex: number;
    questionsCount: number;
    selectedVariant: string;

    onCheckVariant: (event: ChangeEvent<HTMLInputElement>) => void;
};
