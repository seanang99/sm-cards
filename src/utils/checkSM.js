/**
 * Function checks the correctness of the verse
 * @param {*} res 
 * @returns score, correct_ans
 */
export const checkTitleAndVerse = (res) => {
    const {title, verse, userTitle, userVerse} = res;

    if (typeof (userTitle) === 'string' && typeof (userVerse) === 'string' && typeof(title) === 'string' && typeof(verse) === 'string') {
        const uTitle = userTitle.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
        const cTitle = title.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
        const cVerse = verse.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").split(' ');
        const uVerse = userVerse.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").split(' ');

        let score = 0;

        if (uTitle !== cTitle) {
            score += 1;
        }

        for (let i = 0; i < cVerse.length; i++) {
            if (uVerse[i] !== cVerse[i]) {
                score++;
            }
        }
        
        const correct = score === 0 ? true : false
        return { score: Math.min(score, 5), correct };
    }

}