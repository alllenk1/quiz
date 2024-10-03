import { useMemo, useState } from 'react';

import { Test } from '@/pages/results';
import { shuffleArray } from '@/shared/lib';
import { questions } from '@/shared/config';

import './styles/index.scss';

export const App = () => {
    const [step, setStep] = useState(0);

    const shuffledQuestions = useMemo(() => shuffleArray(questions), []);
    const question = shuffledQuestions[step];

    const handleCheckVariant = () => {
        setTimeout(() => {
            setStep(step + 1);
        }, 1000);
    };

    return (
        <>
            {step !== shuffledQuestions.length && (
                <Test question={question} onCheckVariant={handleCheckVariant} />
            )}
        </>
    );
};
