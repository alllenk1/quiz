import { cn } from '@bem-react/classname';

import './index.scss';
import { Props } from './types.ts';

export const Button = ({ text }: Props) => {
    const cnButton = cn('Button');

    return <button className={cnButton('')}>{text}</button>;
};
