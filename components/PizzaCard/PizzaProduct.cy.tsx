import React from 'react'
import { PizzaProduct } from './PizzaProduct'

describe('<PizzaProduct />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PizzaProduct />)
  })
})