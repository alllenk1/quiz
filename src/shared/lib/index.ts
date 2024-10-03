export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const getCorrectForm = (count, wordForms) => {
    if (count % 10 === 1) {
        return `${count} ${wordForms[0]}`;
    } else if (count % 10 >= 2 && count % 10 <= 4) {
        return `${count} ${wordForms[1]}`;
    } else {
        return `${count} ${wordForms[2]}`;
    }
};
