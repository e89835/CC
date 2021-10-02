import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import React from 'react'
import '@testing-library/jest-dom/extend-expect'


test('renders content', () => {
  const contact = {
    content: 'This is a test',
    important: true
  }
  const component = render(<Contact/>)
  //console.log(component);

  component.getByText('Contacto')
  component.getByText('Web realizada por JuanJo Montero para la asignatura Cloud Computing - Fundamentos e Infraestructuras dentro del Máster en Ingeniería Informática (M50.56.2) de la Universidad de Granada.')

})