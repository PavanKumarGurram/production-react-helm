import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders and handles animation changes', () => {
    render(<App />);
    
    // Get the container element
    const container = screen.getByRole('generic');
    expect(container).toBeInTheDocument();
    
    // Test click interaction
    const initialStyle = container.style.animation;
    fireEvent.click(container);
    expect(container.style.animation).not.toBe(initialStyle);
  });
});