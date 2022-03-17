/*
 * @Author: your name
 * @Date: 2022-03-18 03:19:16
 * @LastEditTime: 2022-03-18 03:19:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \CISE_Repos\cise_ass1a_worksheet2\backend\dummydata\articles.js
 */
const articles = [
    {
        _id: "1",
        title: "An experimental evaluation of test driven development vs. test-last development with industry professionals",
        authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
        source: "EASE",
        pubyear: "2014",
        doi: "https://doi.org/10.1145/2601248.2601267",
        claim_evidence: [["code improvement", "strong support"], ["product improvement", "weak against"], ["team improvement", "none"]],
    },
    {
        _id: "2",
        title: "Realizing quality improvement through test driven development: results and experiences of four industrial teams",
        authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
        source: " Empirical Software Engineering, 13(3), 289–302",
        pubyear: "2008",
        doi: "https://doi.org/10.1007/s10664-008-9062-z",
        claim_evidence: [["code improvement", "weak support"], ["product improvement", "weak against"], ["team improvement", "low support"]],
    },
    {
        _id: "3",
        title: "Does Test-Driven Development Really Improve Software Design Quality?",
        authors: "Janzen, D. S.",
        source: "Software, IEEE, 25(2) 77-84",
        pubyear: "2008",
        doi: "",
        claim_evidence: [["code improvement", "strong support"], ["product improvement", "weak support"], ["team improvement", "none"]],
    },
    {
        _id: "4",
        title: "A Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
        authors: "Siniaalto, M., Abrahamsson, P.",
        source: "ArXiv.Org, cs.SE, arXiv:1711.05082-284",
        pubyear: "2017",
        doi: "https://doi.org/10.1109/esem.2007.35",
        claim_evidence: [["code improvement", "weak support"], ["product improvement", "weak support"], ["team improvement", "none"]],
    },
];

module.exports = articles;
