// Simple module to be imported by index.js

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const createObject = o => ({ ...o, anotherOption: 'Hi!' });
