function process(query) {
    let queryChars = query.split("");
    return queryChars.map(char => char === "+" ? " " : char).join("");
};

module.exports = {
    process,
}
