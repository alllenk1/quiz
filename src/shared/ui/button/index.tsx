import { cn } from '@bem-react/classname';

import './index.scss';
import type { Props } from './types.ts';

export const Button = ({ text, onClick }: Props) => {
    const cnButton = cn('Button');

    return (
        <button className={cnButton('')} onClick={onClick}>
            {text}
        </button>
    );
};
