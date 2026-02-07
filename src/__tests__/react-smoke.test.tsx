import { render, screen } from '@testing-library/react';

function Hello() {
  return <h1>Hello RTL</h1>;
}

describe('React smoke test', () => {
  it('renders text', () => {
    render(<Hello />);
    expect(screen.getByText('Hello RTL')).toBeInTheDocument();
  });
});
