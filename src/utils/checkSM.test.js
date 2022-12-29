import { checkTitle } from './checkSM';

describe('checkSM function', () => {

    const correct_title = "Assurance of Salvation"
    const correct_verse = "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life."

    const incorrect_title = "Assurance of Forgiveness"

    test('default correct title', () => {
        const res = checkTitle(correct_title, correct_title)
        const ex_res = { score: 0, correct_ans: correct_title }

        expect(res).toEqual(ex_res);
    })

    test('default correct verse', () => {
        const res = checkTitle(correct_verse, correct_verse)
        const ex_res = { score: 0, correct_ans: correct_verse}

        expect(res).toEqual(ex_res);
    })

    test('incorrect word title should result in a positive score of 1', () => {
        const res = checkTitle(correct_title, incorrect_title)
        const ex_res = { score: 1, correct_ans: correct_title}

        expect(res).toEqual(ex_res);
    })
})