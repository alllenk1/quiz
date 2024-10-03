import { cn } from '@bem-react/classname';

import { Variant } from '@/shared/ui';

import { Props } from './types.ts';
import './index.scss';

export const TestCard = ({ question, onCheckVariant }: Props) => {
    const cnTestCard = cn('TestCard');

    return (
        <fieldset className={cnTestCard('')}>
            <legend className={cnTestCard('Title')}>{question.title}</legend>
            {question.variants.map((variant, index) => (
                <Variant
                    key={index}
                    id={index}
                    text={variant}
                    onCheckVariant={onCheckVariant}
                />
            ))}
        </fieldset>
    );
};
