import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Cell from '../components/cell'

describe('cell component', () => {
    test('should render cell', () => {
        const cellMock = render(<Cell />);
        // console.log('cellMock', cellMock);
    })
})