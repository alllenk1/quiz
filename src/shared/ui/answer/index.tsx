import { cn } from '@bem-react/classname';

import './index.scss';
import type { Props } from './types.ts';

export const Answer = ({ answer }: Props) => {
    const cnAnswer = cn('Answer');

    return (
        <div
            className={cnAnswer('', {
                right: answer.isRight,
                wrong: !answer.isRight,
            })}
        >
            <h3 className={cnAnswer('Title')}>{answer.title}</h3>
            <p className={cnAnswer('Text')}>{answer.answer}</p>
        </div>
    );
};
