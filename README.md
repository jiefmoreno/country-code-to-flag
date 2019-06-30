# country-code-to-flag

[![npm version](https://badge.fury.io/js/jest-image-snapshot.svg)](https://badge.fury.io/js/jest-image-snapshot)

## Install

```$ npm i country-code-to-flag```

## Usage

The function `countryCodeToFlag` expect an ISO 3166-1 alpha-2 code
```js
import countryCodeToFlag from "country-code-to-flag";

countryCodeToFlag("fr") // result: 🇫🇷
countryCodeToFlag("US") // result: 🇺🇸
countryCodeToFlag("USA") // throw an error 'the country code is invalid'
countryCodeToFlag('AA') // result: 🇦🇦
```


