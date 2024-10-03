import { ChangeEvent } from 'react';

import { QuestionType } from '@/shared/config';

export type Props = {
    question: QuestionType;
    selectedVariant: string;

    onCheckVariant: (event: ChangeEvent<HTMLInputElement>) => void;
};
