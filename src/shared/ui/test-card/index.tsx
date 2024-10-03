import { useMemo } from 'react';
import { cn } from '@bem-react/classname';

import { Variant } from '@/shared/ui';
import { shuffleArray } from '@/shared/lib';

import { Props } from './types.ts';
import './index.scss';

export const TestCard = ({ question, onCheckVariant }: Props) => {
    const cnTestCard = cn('TestCard');

    const shuffledVariants = useMemo(
        () => shuffleArray([...question.variants]),
        [question]
    );

    return (
        <fieldset className={cnTestCard('')}>
            <legend className={cnTestCard('Title')}>{question.title}</legend>
            {shuffledVariants.map((variant, index) => (
                <Variant
                    key={index}
                    id={`variant-${index}`}
                    text={variant}
                    onCheckVariant={onCheckVariant}
                />
            ))}
        </fieldset>
    );
};
