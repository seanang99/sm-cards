import { checkTitleAndVerse } from './checkSM';

describe('checkSM function', () => {

    const correctTitle = "Assurance of Salvation"
    const correctVerse = "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life."

    const correct_userTitle = "Assurance of Salvation"
    const correct_userVerse = "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life."

    const wrong_userTitle = "Assurance of Forgiveness"
    const wrong_userVerse = "Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!"

    test('default correct title', () => {
        const data = {
            title: correctTitle,
            verse: correctVerse,
            userTitle: correct_userTitle,
            userVerse: correct_userVerse
        }

        const res = checkTitleAndVerse(data)
        const ex_res = { score: 0, correct: true }

        expect(res).toEqual(ex_res);
    })

    test('incorrect title but correct verse should result in a score: 1', () => {
        const data = {
            title: correctTitle,
            verse: correctVerse,
            userTitle: wrong_userTitle,
            userVerse: correct_userVerse
        }

        const res = checkTitleAndVerse(data)
        const ex_res = { score: 1, correct: false }

        expect(res).toEqual(ex_res);
    })

    test('completely incorrect title and verse should result in a score of 5', () => {
        const data = {
            title: correctTitle,
            verse: correctVerse,
            userTitle: wrong_userTitle,
            userVerse: wrong_userVerse
        }
        
        const res = checkTitleAndVerse(data)
        const ex_res = { score: 5, correct: false }
        expect(res).toEqual(ex_res);
    })
})