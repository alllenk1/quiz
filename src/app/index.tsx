import { useState } from 'react';

import { Test } from '@/pages/results';
import { questions } from '@/shared/config';

import './styles/index.scss';

export const App = () => {
    const [step, setStep] = useState(0);

    const question = questions[step];

    const handleCheckVariant = () => {
        setTimeout(() => {
            setStep((prev) => prev + 1);
        }, 1000);
    };

    return (
        <>
            {step !== questions.length && (
                <Test question={question} onCheckVariant={handleCheckVariant} />
            )}
        </>
    );
};
