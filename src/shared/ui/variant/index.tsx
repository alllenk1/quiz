import { useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';

import { Props } from './types.ts';
import './index.scss';

export const Variant = ({ id, text, onCheckVariant }: Props) => {
    const cnVariant = cn('Variant');

    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(false);
    }, [text]);

    const handleClick = () => {
        setChecked(true);
        onCheckVariant();
    };

    return (
        <div className={cnVariant('')} onClick={handleClick}>
            <input
                className={cnVariant('Input')}
                id={id}
                type="radio"
                name="variant"
                checked={isChecked}
                readOnly
            />
            <label className={cnVariant('Label')} htmlFor={id}>
                {text}
            </label>
        </div>
    );
};
