import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

const initRender = (props?: any) => render(<App {...props} />);

describe('Should render FrontPage', () => {
    let component: any;
    beforeEach(() => {
        component = initRender();
    });
    test('should renders label text', () => {
        const linkElement = screen.getByText(/selected id/i);
        expect(linkElement).toBeInTheDocument();
    });
});
