import { cn } from '@bem-react/classname';

import './index.scss';
import type { Props } from './types.ts';

export const Variant = ({
    id,
    text,
    isChecked,
    isDisabled,
    onCheckVariant,
}: Props) => {
    const cnVariant = cn('Variant');

    return (
        <div className={cnVariant('')}>
            <input
                className={cnVariant('Input')}
                id={id}
                type="radio"
                name="variant"
                value={text}
                disabled={isDisabled}
                checked={isChecked}
                onChange={onCheckVariant}
            />
            <label className={cnVariant('Label')} htmlFor={id}>
                {text}
            </label>
        </div>
    );
};
