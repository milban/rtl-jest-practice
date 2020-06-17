import React from "react";
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const utils = render(<Profile username="milban" name="박준혁" />);
        expect(utils.container).toMatchSnapshot();
    });
    it('shows the props correctly', () => {
        const utils = render(<Profile username="milban" name="박준혁" />);
        utils.getByText('milban');
        utils.getByText('(박준혁)');
        utils.getByText(/박/);
    });
});