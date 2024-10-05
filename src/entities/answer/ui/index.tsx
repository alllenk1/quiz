import { cn } from '@bem-react/classname';

import { Answer, Button } from '@/shared/ui';

import type { Props } from '../types.ts';
import './index.scss';

export const AnswersList = ({ answers, isErrors }: Props) => {
    const cnAnswersList = cn('AnswersList');

    return (
        <div className={cnAnswersList('')}>
            {answers.map((answer) => (
                <Answer key={answer.id} answer={answer} />
            ))}

            {isErrors && (
                <a href="/" className={cnAnswersList('Button')}>
                    <Button text="Пройти еще раз" />
                </a>
            )}
        </div>
    );
};
