/**
 * Function checks the correctness of the verse
 * @param {*} props 
 */
export const checkTitleAndVerse = (props) => {
    const { title, verse, userTitle, userVerse } = props;

    if (typeof (userTitle) === 'string' && typeof (userVerse) === 'string' && typeof (verse) === 'string' && typeof (title) === 'string') {

        /* eslint-disable */ 
        const uTitle = userTitle.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
        const cTitle = title.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
        const uVerse = userVerse.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
        const cVerse = verse.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
        /* eslint-enable */ 

        let correctTitle = uTitle !== cTitle ? false : true;
        let correctVerse = uVerse !== cVerse ? false : true;
        let correct = correctTitle && correctVerse;

        return { correct, correctTitle, correctVerse }
    }
}
