import { render, screen } from '@testing-library/react';
import Search from '../Search';
import React from 'react'
import '@testing-library/jest-dom/extend-expect'


test('renders content', () => {
  const search = {
    content: 'This is a test',
    important: true
  }
  const component = render(<Search/>)
  //console.log(component);

  component.getByText('Buscar')
 
})