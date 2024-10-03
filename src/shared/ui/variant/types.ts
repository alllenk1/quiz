import { ChangeEvent } from 'react';

export type Props = {
    id: string;
    text: string;

    onCheckVariant: (event: ChangeEvent<HTMLInputElement>) => void;
};
