import { enc, MD5, SHA1, SHA256, SHA512 } from 'crypto-js';

export const hashAlgorithms = {
    'SHA-1': (input: string) => {
        return SHA1(input);
    },
    'SHA-256': (input: string) => {
        return SHA256(input);
    },
    'SHA-512': (input: string) => {
        return SHA512(input);
    },
    'MD5': (input: string) => {
        return MD5(input);
    }
};

export const encodeAlgorithms = {
    'Base64': (input: string) => {
        const wordArray = enc.Utf8.parse(input);
        return enc.Base64.stringify(wordArray);
    },
    'URI': (input: string) => {
        return encodeURI(input).toString();
    },
    'URI Component': (input: string) => {
        return encodeURIComponent(input).toString();
    }
};

export const decodeAlgorithms = {
    'Base64': (input: string) => {
        return enc.Base64.parse(input).toString(enc.Utf8);
    },
    'URI': (input: string) => {
        return decodeURI(input).toString();
    },
    'URI Component': (input: string) => {
        return decodeURIComponent(input).toString();
    }
};

export const algorithms = {
    'hash': {
        list: hashAlgorithms,
        color: 'primary'
    },
    'encode': {
        list: encodeAlgorithms,
        color: 'secondary'
    },
    'decode': {
        list: decodeAlgorithms,
        color: 'success'
    }
};
