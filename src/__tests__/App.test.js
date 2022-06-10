import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Header tests', () => {

//Makes sure that the application always has this specific text as the heading
it('should find the test of the header', () => {
  // What file we are testing
  render(<App />);
  //query methods that we are using

//   const headerElement = screen.getByText(/To Do List/i);


  const headerElementType = screen.getByText(/Todo List/i);
  //assertions
//   expect(headerElement).toBeInTheDocument();
  expect(headerElementType).toContainHTML('h1');
});

});