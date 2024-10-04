import { type ChangeEvent, useEffect, useMemo, useState } from 'react';

import { Result, Test } from '@/pages';

import { questions } from '@/shared/config';
import type { AnswerType, QuestionType } from '@/shared/config';
import { shuffleArray } from '@/shared/lib';

import './styles/index.scss';

export const App = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<AnswerType[]>([]);
    const [selectedVariant, setSelectedVariant] = useState('');

    const shuffledQuestions = useMemo(() => shuffleArray(questions), []);
    const question: QuestionType = shuffledQuestions[step];

    useEffect(() => {
        setSelectedVariant('');
    }, [step]);

    const handleCheckVariant = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedVariant(event.target.value);
        setAnswers((prev: AnswerType[]) => [
            ...prev,
            {
                id: question.id,
                title: question.title,
                answer: event.target.value,
                isRight: event.target.value === question.correctAnswer,
            },
        ]);

        setTimeout(() => {
            setStep((prevStep) => prevStep + 1);
        }, 1000);
    };

    return (
        <>
            {step !== shuffledQuestions.length ? (
                <Test
                    question={question}
                    questionIndex={step}
                    questionsCount={shuffledQuestions.length}
                    onCheckVariant={handleCheckVariant}
                    selectedVariant={selectedVariant}
                />
            ) : (
                <Result answers={answers} />
            )}
        </>
    );
};
