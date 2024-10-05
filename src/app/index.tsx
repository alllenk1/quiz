import { type ChangeEvent, useEffect, useMemo, useState } from 'react';

import { Result } from '@/pages/result';
import { Test } from '@/pages/test';

import type { Answer } from '@/entities/answer';
import type { Question } from '@/entities/test';

import { questions } from '@/shared/config';
import { shuffleArray } from '@/shared/lib';

import './styles/index.scss';

export const App = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selectedVariant, setSelectedVariant] = useState('');

    const shuffledQuestions = useMemo(() => shuffleArray(questions), []);
    const question: Question = shuffledQuestions[step];

    useEffect(() => {
        setSelectedVariant('');
    }, [step]);

    const handleCheckVariant = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedVariant(event.target.value);
        setAnswers((prev: Answer[]) => [
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
            {step < shuffledQuestions.length ? (
                <Test
                    question={question}
                    questionIndex={step}
                    questionsCount={shuffledQuestions.length}
                    selectedVariant={selectedVariant}
                    onCheckVariant={handleCheckVariant}
                />
            ) : (
                <Result answers={answers} />
            )}
        </>
    );
};
