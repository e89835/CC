import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react'
import '@testing-library/jest-dom/extend-expect'


test('renders content', () => {
  const app = {
    content: 'This is a test',
    important: true
  }
  const component = render(<App/>)
  //console.log(component);

  component.getByText('Home')
  component.getByText('Contacto')
  component.getByText('Buscar')
  component.getByText('Crear')
  component.getByText('Noche')
 
})