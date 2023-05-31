import React from 'react'
import loading from './loading'

describe('<loading />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<loading />)
  })
})