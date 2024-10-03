import { cn } from '@bem-react/classname';
import { useMemo } from 'react';

import { shuffleArray } from '@/shared/lib';
import { Variant } from '@/shared/ui';

import './index.scss';
import { Props } from './types.ts';

export const TestCard = ({
    question,
    onCheckVariant,
    selectedVariant,
}: Props) => {
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
                    isChecked={selectedVariant === variant}
                    onCheckVariant={onCheckVariant}
                />
            ))}
        </fieldset>
    );
};
