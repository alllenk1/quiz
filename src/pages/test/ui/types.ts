import { ChangeEvent } from 'react';

import { QuestionType } from '@/shared/config';

export type Props = {
    question: QuestionType;
    questionIndex: number;
    questionsCount: number;
    selectedVariant: string;

    onCheckVariant: (event: ChangeEvent<HTMLInputElement>) => void;
};
