import Game from '../components/game';
import { render, fireEvent, queryByText } from '@testing-library/react'

describe('Game component', () => {
    test('should have rest button', () => {
        const { getByText } = render(<Game />);
        const resetButton = getByText('reset');
        expect(resetButton).toBeInTheDocument();

    })
    test('should have nextGenerationButton button', () => {
        const { getByText } = render(<Game />);
        const nextGenerationButton = getByText('next generation');
        expect(nextGenerationButton).toBeInTheDocument();
    })

})