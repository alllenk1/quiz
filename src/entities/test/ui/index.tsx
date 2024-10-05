import { cn } from '@bem-react/classname';
import { useMemo } from 'react';

import { shuffleArray } from '@/shared/lib';
import { Variant } from '@/shared/ui';

import type { Props } from '../types.ts';
import './index.scss';

export const TestCard = ({
    question,
    selectedVariant,
    onCheckVariant,
}: Props) => {
    const cnTestCard = cn('TestCard');

    const shuffledVariants = useMemo(
        () => shuffleArray([...question.variants]),
        [question]
    );

    return (
        <form className={cnTestCard('')}>
            <h2 className={cnTestCard('Title')}>{question.title}</h2>
            {shuffledVariants.map((variant: string, index: number) => (
                <Variant
                    key={index}
                    id={`variant-${index}`}
                    text={variant}
                    isChecked={selectedVariant === variant}
                    isDisabled={!!selectedVariant}
                    onCheckVariant={onCheckVariant}
                />
            ))}
        </form>
    );
};
