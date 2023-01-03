/**
 * Function checks the correctness of the verse
 * @param {*} res 
 * @returns score, correct_ans
 */
export const checkTitleAndVerse = (res) => {
    const { title, verse, userTitle, userVerse } = res;

    if (typeof (userTitle) === 'string' && typeof (userVerse) === 'string' && typeof (title) === 'string' && typeof (verse) === 'string') {
        /* eslint-disable */
        const uTitle = userTitle.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
        const cTitle = title.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
        const cVerse = verse.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ") //.split(' ');
        const uVerse = userVerse.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ") //.split(' ');
        /* eslint-enable */

        let correctTitle = uTitle !== cTitle ? false : true;
        let correctVerse = uVerse !== cVerse ? false : true;
        let correct = correctTitle && correctVerse;

        return { correct, correctTitle, correctVerse }

        // let score = 0;

        // if (uTitle !== cTitle) {
        //     score += 1;
        // }

        // let cIndex = 0, uIndex = 0;

        // while (uIndex < uVerse.length - 1) {

        //     if (score >= 5) {
        //         break;
        //     }

        //     if (uVerse[uIndex] !== cVerse[cIndex]) {

        //         /**
        //          * Potentially Missing word -> Find the word in verse  
        //          * 1) If indexOf word is greater than cIndex (which it should be), it means that there are extra words
        //          * 2) Add to score 
        //          * */
        //         const _uIndex = uVerse.indexOf(cVerse[cIndex]);

        //         if (_uIndex === -1) {
        //             // Missing words
        //             uVerse.splice(uIndex, uIndex - 1, cVerse[cIndex]);
        //             score++;
        //         } else if (_uIndex !== cIndex) {
        //             score = score + (_uIndex - cIndex);
        //             uIndex = _uIndex;
        //         }
        //         console.log({ _uIndex, uVerse: uVerse[uIndex], cVerse: cVerse[cIndex], arr: uVerse, uIndex, score });
        //     }

        //     cIndex++;
        //     uIndex++;
        // }

        // const correct = score === 0 ? true : false
        // return { score: Math.min(score, 5), correct };
    }
}

export function findLCS(str1, str2) {
    let longest = 0, longestSubstring = "", index = -1;

    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j <= str1.length; j++) {
            const subString = str1.substring(i, j);
            if (str2.includes(subString) && subString.length > longest) {
                longest = subString.length;
                longestSubstring = subString;
                index = i;
            }
        }
    }
    return { longestSubstring, index };
}

/**
 * Function to find the longest common subsequence of 2 arrays
 * @param {*} A 
 * @param {*} B 
 * @param {*} n 
 * @param {*} m 
 */
export function findLongestCommonSubsequence(A, B, m, n) {
    //Create new 2D array
    var dp = new Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Store length of the longest common substring
    var result = 0;
    var commonWords = [];

    // Updating the dp[][] table in Bottom Up approach
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0)
                dp[i][j] = 0;
            else if (A[i - 1] == B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                result = Math.max(result, dp[i][j]);
                commonWords.push(A[i - 1]);
                // console.log({ word: A[i - 1], commonWords, i, j })
            }
            else {
                dp[i][j] = 0;
            }
        }
    }

    // Find all subStrings
    let i, j, startIndex = 0, endIndex = 0, subStrings = [];
    for (i = 0; i < commonWords.length; i++) {
        let tempArr = [];
        startIndex = A.indexOf(commonWords[i]);
        endIndex = startIndex;

        for (j = i; j < commonWords.length; j++) {
            // If the next few elements are in the same order, add them to tempArr
            if (A[endIndex] === commonWords[j]) {
                tempArr.push(A[endIndex]);
                endIndex++;
            } else {
                break;
            }
        }
        i = j - 1; // fast forward i to last element of confirmed substring
        subStrings.push({ subString: tempArr, startIndex, endIndex });
    }

    return { result, subStrings };
}