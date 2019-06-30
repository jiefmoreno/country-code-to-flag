import letterToRegionalIndicator from '../letter-to-regional-indicator'

describe('letterToRegionalIndicator', () => {
    test('should return the regional indicator of "A"', () => {
        expect(letterToRegionalIndicator('A')).toEqual('🇦')
    })
    test('should return the regional indicator of "A" when lower case letter', () => {
        expect(letterToRegionalIndicator('a')).toEqual('🇦')
    })
    test('should return the regional indicator of "Z"', () => {
        expect(letterToRegionalIndicator('Z')).toEqual('🇿')
    })
})