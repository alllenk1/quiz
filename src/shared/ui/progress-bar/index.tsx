import { cn } from '@bem-react/classname';

import { getPercent } from '@/shared/lib';

import './index.scss';
import { Props } from './types.ts';

export const ProgressBar = ({ total, progress }: Props) => {
    const cnProgressBar = cn('ProgressBar');

    const percent = getPercent(total, progress);

    return (
        <div className={cnProgressBar('')}>
            <div className={cnProgressBar('Container')}>
                <div
                    className={cnProgressBar('Progress')}
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
            <span className={cnProgressBar('Start')}>{0}</span>
            {progress > 0 && progress < total && (
                <span
                    className={cnProgressBar('Current')}
                    style={{ left: `${percent - 1}%` }}
                >
                    {progress}
                </span>
            )}
            <span className={cnProgressBar('End')}>{total}</span>
        </div>
    );
};
