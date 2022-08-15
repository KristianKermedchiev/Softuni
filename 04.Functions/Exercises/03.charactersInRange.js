function charactersInRange(firstChar, secondChar) {

    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let charsInRangeArray = [];

    for (let curent = startChar + 1; curent < endChar; curent++) {
        let currentChar = String.fromCharCode(curent);
        charsInRangeArray.push(currentChar);

    }
    console.log(charsInRangeArray.join(' '))
}
charactersInRange('a','d');
charactersInRange('#',':');
charactersInRange('C','#');