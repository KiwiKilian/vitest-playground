import { test, expect } from 'vitest';
import { getHelloWorld } from '../src/getHelloWorld';

test('Hello World should return "Hello World!"', () => {
  expect(getHelloWorld()).toBe('Hello World!');
});
