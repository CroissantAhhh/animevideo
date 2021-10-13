export const process = (name) => {
    if (!name) {
        return "";
    }
    let result = "";
    for (let nameChar of name) {
        if (nameChar === " ") {
            result += "-";
        } else if (/[a-zA-Z0-9]/.test(nameChar)) {
            result += nameChar;
        }
    }
    return result.toLowerCase();
}
