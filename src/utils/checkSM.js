/**
 * Function checks the correctness of the verse
 * @param {*} ans 
 * @param {*} res 
 * @returns score, correct_ans
 */
export const checkTitle = (ans, res) => {
    if (typeof (res) === 'string') {
        const user_ans = res.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").split(' ');
        const correct_ans = ans.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").split(' ');
        let score = 0;

        for (let i = 0; i < correct_ans.length; i++) {
            if (user_ans[i] != correct_ans[i]) {
                score++;
            }
        }
        return {score: Math.min(score, 5), correct_ans: ans};
    }

}