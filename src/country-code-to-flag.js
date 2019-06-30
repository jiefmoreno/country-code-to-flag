import letterToRegionalIndicator from './letter-to-regional-indicator'

const countryCodeToFlag = (countryCode) => {
    const isEntryValid = /^[a-zA-Z]{2}$/.test(countryCode);

    if (!isEntryValid) {
        throw 'the country code is invalid';
    }
    return countryCode
        .split('')
        .map(letterToRegionalIndicator)
        .join('');
}

export default countryCodeToFlag