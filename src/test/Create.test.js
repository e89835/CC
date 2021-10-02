import { render, screen } from '@testing-library/react';
import Create from '../Create';
import React from 'react'
import '@testing-library/jest-dom/extend-expect'


test('renders content', () => {
  const create = {
    content: 'This is a test',
    important: true
  }
  const component = render(<Create/>)
  //console.log(component);

  component.getByText('Añadir entrada')

})