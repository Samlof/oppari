import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test("Render doesn't crash", () => {
  const { getByText } = render(<App />);
  expect(getByText).toBeDefined();
});
