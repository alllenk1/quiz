import { cn } from '@bem-react/classname';

import { Answer } from '@/shared/ui';

import './index.scss';

export const AnswersList = ({ answers }) => {
    const cnAnswersList = cn('AnswersList');

    return (
        <div className={cnAnswersList('')}>
            {answers.map((answer) => (
                <Answer answer={answer} />
            ))}
        </div>
    );
};
