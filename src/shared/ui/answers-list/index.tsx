import { cn } from '@bem-react/classname';

import { Answer, Button } from '@/shared/ui';

import './index.scss';
import { Props } from './types.ts';

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
