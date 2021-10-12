export const process = (name) => {
    let result = "";
    for (let nameChar of name) {
        if (nameChar === " ") {
            result += "-";
        } else if (/[a-zA-Z]/.test(nameChar)) {
            result += nameChar;
        }
    }
    return result.toLowerCase();
}
