import { render, screen } from '@testing-library/react';
import Home from '../Home';
import React from 'react'
import '@testing-library/jest-dom/extend-expect'


test('renders content', () => {
  const home = {
    content: 'This is a test',
    important: true
  }
  const component = render(<Home/>)
  //console.log(component);

  component.getByText('Loading...')

})