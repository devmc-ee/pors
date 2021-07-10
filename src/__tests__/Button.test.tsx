import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button, { IButton } from '../components/shared/buttons/Button';

const setUp = (props: IButton) => render(<Button {...props} />);

afterEach(cleanup);

const handleClick = jest.fn();

const buttonProps = {
    classes: ' btn-test-class',
    onClick: handleClick,
    children: 'TestMe',
    value: 100,
};
describe('Should render Button component', () => {
    it('has all props values', () => {
        const { getByRole } = setUp(buttonProps);
        const btn = getByRole('button');
        expect(btn).toHaveClass('btn-test-class');
        expect(btn).toHaveTextContent('TestMe');
    });

    it('calls function on click 2 times', () => {
        const { getByRole } = setUp(buttonProps);

        fireEvent.click(getByRole('button'));
        fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(2);
    });
    it('has  data-value attribute', () => {
        const { getByRole } = setUp(buttonProps);
        const btn = getByRole('button');
        expect(btn).toHaveAttribute('data-value');
    });

    it('matches the snapshot with value = 200', () => {
        buttonProps.value = 200;
        const tree = renderer.create(<Button {...buttonProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
