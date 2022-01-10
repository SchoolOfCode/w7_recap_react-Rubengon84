import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders "Chris Meah" as post name', () => {
  const { getByText } = render(<App />);
  const postName = getByText(/Chris Meah/i);
  expect(postName).toBeInTheDocument();
});

test('renders "apps and games" inside the text post', () => {
  const { getByText } = render(<App />);
  const sentence = getByText(/apps and games/i);
  expect(sentence).toBeInTheDocument();
});

test('renders "Hello, great post" in the first comment', () => {
  const { getByText } = render(<App />);
  const comment = getByText(/Hello, great post/i);
  expect(comment).toBeInTheDocument();
});

