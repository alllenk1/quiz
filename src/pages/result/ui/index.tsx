import { cn } from '@bem-react/classname';

import { wordForms } from '@/shared/config';
import { getCorrectForm } from '@/shared/lib';
import { AnswersList } from '@/shared/ui';

import './index.scss';
import { Props } from './types.ts';

export const Result = ({ answers }: Props) => {
    const cnResult = cn('Result');

    const correctAnswersCount = answers.filter(
        (answer) => answer.isRight
    ).length;
    const correctQuestionForm = getCorrectForm(
        correctAnswersCount,
        wordForms.question
    );

    return (
        <div className={cnResult('')}>
            {correctAnswersCount === answers.length && (
                <>
                    <h1 className={cnResult('Title')}>Поздравляем!</h1>
                    <p className={cnResult('Description')}>
                        Вы правильно ответили на все вопросы.
                        <br />
                        Вы действительно отлично разбираетесь в IT.
                    </p>
                </>
            )}
            {correctAnswersCount > 0 &&
                correctAnswersCount < answers.length && (
                    <>
                        <h1 className={cnResult('Title')}>
                            Хороший результат!
                        </h1>
                        <p className={cnResult('Description')}>
                            {`Вы ответили правильно на
                         ${correctQuestionForm}.`}
                            <br />
                            Так держать!
                        </p>
                    </>
                )}
            {correctAnswersCount === 0 && (
                <>
                    <h1 className={cnResult('Title')}>Упс :(</h1>
                    <p className={cnResult('Description')}>
                        Вы неправильно ответили на все вопросы.
                        <br />
                        Нужно подучить теорию.
                    </p>
                </>
            )}
            <AnswersList answers={answers} />
        </div>
    );
};
