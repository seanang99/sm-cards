import { checkTitleAndVerse, findLCS, findLongestCommonSubsequence } from './checkSM';

describe('checkSM', () => {

    const defaultTitle = "Assurance of Salvation"
    const defaultVerse = "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life."

    const correct_userTitle = "Assurance of Salvation"
    const correct_userVerse = "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life."

    const partially_wrong_userVerse_0 = "this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life."
    const partially_wrong_userVerse_1 = "this and this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life."

    const wrong_userTitle = "Assurance of Forgiveness"
    const wrong_userVerse = "Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!"

    test('default correct title and verse', () => {
        const data = {
            title: defaultTitle,
            verse: defaultVerse,
            userTitle: correct_userTitle,
            userVerse: correct_userVerse
        }

        const res = checkTitleAndVerse(data)
        const ex_res = { score: 0, correct: true }

        expect(res).toEqual(ex_res);
    })

    test('incorrect title but correct verse should result in a score: 1', () => {
        const data = {
            title: defaultTitle,
            verse: defaultVerse,
            userTitle: wrong_userTitle,
            userVerse: correct_userVerse
        }

        const res = checkTitleAndVerse(data)
        const ex_res = { score: 1, correct: false }

        expect(res).toEqual(ex_res);
    })

    test('correct title but incorrect verse should result in a score: 5 if there are more than 5 mistakes', () => {
        const data = {
            title: defaultTitle,
            verse: defaultVerse,
            userTitle: correct_userTitle,
            userVerse: wrong_userVerse,
        }

        const res = checkTitleAndVerse(data)
        const ex_res = { score: 5, correct: false }

        expect(res).toEqual(ex_res);
    })

    test('correct title but partially incorrect verse with 1 missing word should result in a score: 1', () => {
        const data = {
            title: defaultTitle,
            verse: defaultVerse,
            userTitle: correct_userTitle,
            userVerse: partially_wrong_userVerse_0,
        }

        const res = checkTitleAndVerse(data)
        const ex_res = { score: 1, correct: false }

        expect(res).toEqual(ex_res);
    })

    test('correct title but partially incorrect verse with 1 extra word should result in a score: 1', () => {
        const data = {
            title: defaultTitle,
            verse: defaultVerse,
            userTitle: correct_userTitle,
            userVerse: partially_wrong_userVerse_1,
        }

        const res = checkTitleAndVerse(data)
        const ex_res = { score: 1, correct: false }

        expect(res).toEqual(ex_res);
    })


    test('completely incorrect title and verse should result in a score of 5', () => {
        const data = {
            title: defaultTitle,
            verse: defaultVerse,
            userTitle: wrong_userTitle,
            userVerse: wrong_userVerse
        }

        const res = checkTitleAndVerse(data)
        const ex_res = { score: 5, correct: false }
        expect(res).toEqual(ex_res);
    })
})

describe('FindLongestCommonSubsequence', () => {

    // Driver Code
    let A = ["And", "this", "is", "the", "testimony", "God", "has", "given", "eternal", "life"];
    let B = ["And", "this", "a", "is", "the", "testimony", "given"];
    let C = ["what", "is", "this", "testimony"]

    const defaultVerse = "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life."
    const alternateVerse = "hello world, God has given us eternal life, and this life is in his Son. whoever does not have the Son of God does not have life."


    test('default', () => {
        const results = { result: 3, subStrings: [{ subString: ['And', 'this', 'is', 'the', 'testimony'], startIndex: 0, endIndex: 5 }, { subString: ['given'], startIndex: 7, endIndex: 8 }] }
        expect(findLongestCommonSubsequence(A, B, A.length, B.length)).toStrictEqual(results);
    })

    test('B & C', () => {
        const results = { result: 1, subStrings: [{ subString: ["this"], startIndex: 1, endIndex: 2 }, { subString: ["is"], startIndex: 2, endIndex: 3 }, { subString: ["testimony"], startIndex: 5, endIndex: 6 }] }
        expect(findLongestCommonSubsequence(B, C, B.length, C.length)).toStrictEqual(results);
    })

    test('longestSubString', () => {
        expect(findLCS(alternateVerse, defaultVerse)).toEqual({ longestSubstring: " God has given us eternal life, and this life is in his Son. ", index: 12 });
    })
})