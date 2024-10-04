import type { ChangeEvent } from 'react';

import type { QuestionType } from '@/shared/config';

export type Props = {
    question: QuestionType;
    selectedVariant: string;

    onCheckVariant: (event: ChangeEvent<HTMLInputElement>) => void;
};
