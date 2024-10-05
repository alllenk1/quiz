export type Answer = {
    id: number;
    title: string;
    answer: string;
    isRight: boolean;
};

export type Props = {
    answers: Answer[];
    isErrors: boolean;
};
