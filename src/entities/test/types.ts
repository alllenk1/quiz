import type { ChangeEvent } from 'react';

export type Question = {
    id: number;
    title: string;
    variants: string[];
    correctAnswer: string;
};

export type Props = {
    question: Question;
    selectedVariant: string;

    onCheckVariant: (event: ChangeEvent<HTMLInputElement>) => void;
};
