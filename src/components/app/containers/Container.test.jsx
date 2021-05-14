import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Container from './Container';
import Header from '../presentations/Header'

describe('testing for Container presentation', () => {
  it('renders the container page with all of its components', async() => {
    render(<Header/>);
    
	screen.getByText('REST-less');


//   const historyList = screen.getByRole('list', { name: 'request-history' });

//   // checking for presence of results area
//   const resultsDisplay = screen.getByLabelText('search-results');
	
  });
});