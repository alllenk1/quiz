import { TestCard } from '@/shared/ui';

import { Props } from './types.ts';

export const Test = ({ question, onCheckVariant }: Props) => {
    return <TestCard question={question} onCheckVariant={onCheckVariant} />;
};
