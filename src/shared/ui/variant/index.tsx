import { cn } from '@bem-react/classname';

import './index.scss';
import { Props } from './types.ts';

export const Variant = ({ id, text, onCheckVariant, isChecked }: Props) => {
    const cnVariant = cn('Variant');

    return (
        <div className={cnVariant('')}>
            <input
                className={cnVariant('Input')}
                type="radio"
                id={id}
                name="variant"
                value={text}
                checked={isChecked}
                onChange={onCheckVariant}
            />
            <label className={cnVariant('Label')} htmlFor={id}>
                {text}
            </label>
        </div>
    );
};
