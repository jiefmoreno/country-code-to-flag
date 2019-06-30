const unicodeRegionalLetters = {
    A: '\ud83c\udde6',
    B: '\ud83c\udde7',
    C: '\ud83c\udde8',
    D: '\ud83c\udde9',
    E: '\ud83c\uddea',
    F: '\ud83c\uddeb',
    G: '\ud83c\uddec',
    H: '\ud83c\udded',
    I: '\ud83c\uddee',
    J: '\ud83c\uddef',
    K: '\ud83c\uddf0',
    L: '\ud83c\uddf1',
    M: '\ud83c\uddf2',
    N: '\ud83c\uddf3',
    O: '\ud83c\uddf4',
    P: '\ud83c\uddf5',
    Q: '\ud83c\uddf6',
    R: '\ud83c\uddf7',
    S: '\ud83c\uddf8',
    T: '\ud83c\uddf9',
    U: '\ud83c\uddfa',
    V: '\ud83c\uddfb',
    W: '\ud83c\uddfc',
    X: '\ud83c\uddfd',
    Y: '\ud83c\uddfe',
    Z: '\ud83c\uddff',
}

const letterToRegionalIndicator = (letter) => unicodeRegionalLetters[letter.toUpperCase()]

export default letterToRegionalIndicator