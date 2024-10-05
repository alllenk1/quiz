import { cn } from '@bem-react/classname';

import { TestCard } from '@/entities/test';

import { ProgressBar } from '@/shared/ui';

import './index.scss';
import type { Props } from './types.ts';

export const Test = ({
    question,
    questionIndex,
    questionsCount,
    selectedVariant,
    onCheckVariant,
}: Props) => {
    const cnTest = cn('Test');

    return (
        <div className={cnTest('')}>
            <h1 className={cnTest('Title')}>Тестирование</h1>
            <TestCard
                question={question}
                selectedVariant={selectedVariant}
                onCheckVariant={onCheckVariant}
            />
            <ProgressBar total={questionsCount} progress={questionIndex} />
        </div>
    );
};
