import { QuestionType } from '@/shared/config';

export type Props = {
    question: QuestionType;

    onCheckVariant: () => void;
};
