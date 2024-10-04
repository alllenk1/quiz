import type { ChangeEvent } from 'react';

export type Props = {
    id: string;
    text: string;
    isChecked: boolean;
    isDisabled: boolean;

    onCheckVariant: (event: ChangeEvent<HTMLInputElement>) => void;
};
