import type { ChangeEvent } from 'react';

import type { QuestionType } from '@/shared/config';

export type Props = {
    question: QuestionType;
    questionIndex: number;
    questionsCount: number;
    selectedVariant: string;

    onCheckVariant: (event: ChangeEvent<HTMLInputElement>) => void;
};
