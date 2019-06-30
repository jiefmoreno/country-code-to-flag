import countryCodeToFlag from '../country-code-to-flag'

describe('countryCodeToFlag', () => {
    test('should return the us flag', () => {
        expect(countryCodeToFlag('US')).toEqual('🇺🇸')
    })
    test('should return the french when lower case letter', () => {
        expect(countryCodeToFlag('FR')).toEqual('🇫🇷')
    })
    test('should return the regional indicator the letters when a flag doesn\'t exist', () => {
        expect(countryCodeToFlag('AA')).toEqual('🇦🇦')
    })
    test('should throw an error when not a string', () => {
        expect(() => countryCodeToFlag(2)).toThrow('the country code is invalid')
    })
    test('should throw an error when a string is bigger than two characters', () => {
        expect(() => countryCodeToFlag('usa')).toThrow('the country code is invalid')
    })
})