function process(query) {
    let queryChars = query.split("");
    return queryChars.map(char => char === "+" ? " " : char).join("");
};

function URLify(name) {
    let result = "";
    for (let nameChar of name) {
        if (nameChar === " ") {
            result += "-";
        } else if (/[a-zA-Z]/.test(nameChar)) {
            result += nameChar;
        };
    };
    return result.toLowerCase();
};

module.exports = {
    process,
    URLify,
}
