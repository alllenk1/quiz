import { cn } from '@bem-react/classname';
import { useMemo } from 'react';

import { shuffleArray } from '@/shared/lib';
import { Variant } from '@/shared/ui';

import './index.scss';
import { Props } from './types.ts';

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
            <fieldset className={cnTestCard('Container')}>
                <legend className={cnTestCard('Title')}>
                    {question.title}
                </legend>
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
            </fieldset>
        </form>
    );
};
