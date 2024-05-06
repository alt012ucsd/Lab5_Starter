// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('Correct phone number format', () => {
  expect(isPhoneNumber('619-874-1914')).toBe(true);
});

test('Correct phone number format with parentheses', () => {
  expect(isPhoneNumber('(619)-874-1914')).toBe(true);
});

test('Wrong phone number format', () => {
  expect(isPhoneNumber('61')).toBe(false);
});


test('Wrong phone number format with special characters', () => {
  expect(isPhoneNumber('61$19#$')).toBe(false);
});

// isEmail

test('Correct email format', () => {
  expect(isEmail('alt012@ucsd.edu')).toBe(true);
});

test('Correct email format with underscore', () => {
  expect(isEmail('alt_012@ucsd.edu')).toBe(true);
});

test('Wrong email format', () => {
  expect(isEmail('alt012@ucsd')).toBe(false);
});

test('Wrong email format with special character', () => {
  expect(isEmail('alt0!2ucsd.edu')).toBe(false);
});


// isStrongPassword

test('Correct strong password format', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('Correct strong password format with underscore', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});

test('Wrong format', () => {
  expect(isStrongPassword('Passwor@23')).toBe(false);
});

test('Less characters', () => {
  expect(isStrongPassword('P')).toBe(false);
});


// isDate

test('Correct date format', () => {
  expect(isDate('09/10/2004')).toBe(true);
});

test('Correct date format', () => {
  expect(isDate('9/1/2004')).toBe(true);
});

test('inorrect date format', () => {
  expect(isDate('9102004')).toBe(false);
});

test('inorrect date format', () => {
  expect(isDate('hello')).toBe(false);
});

// isHexColor

test('Valid hex color', () => {
  expect(isHexColor('#0f0')).toBe(true);
});

test('Valid hex color', () => {
  expect(isHexColor('#00ff00')).toBe(true);
});

test('inalid hex color', () => {
  expect(isHexColor('hello')).toBe(false);
});

test('Valid hex color', () => {
  expect(isHexColor('#00$00')).toBe(false);
});