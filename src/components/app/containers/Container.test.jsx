import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Container from './Container';
import Header from '../presentations/Header'

describe('testing for Container presentation', () => {
  it('renders the container page with all of its components', async() => {
    render(<Header/>);

	screen.getByText('REST-less');

    render(<Container/>)

    const ul = screen.getByRole('list', { name: 'history-list' });
    expect(ul).toMatchSnapshot();

    const span = screen.getByLabelText('json-results');
    expect(span).toMatchSnapshot();

  });
});