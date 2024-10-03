import { cn } from '@bem-react/classname';

import { TestCard } from '@/shared/ui';

import './index.scss';
import { Props } from './types.ts';

export const Test = ({ question, selectedVariant, onCheckVariant }: Props) => {
    const cnTest = cn('Test');

    return (
        <div className={cnTest('')}>
            <h1 className={cnTest('Title')}>Тестирование</h1>
            <TestCard
                question={question}
                selectedVariant={selectedVariant}
                onCheckVariant={onCheckVariant}
            />
        </div>
    );
};
