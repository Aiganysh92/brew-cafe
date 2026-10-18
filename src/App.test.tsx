import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderAt } from './test/renderWithRouter';
import { formatPrice, menuItems } from './data/menu';

describe('Brew Cafe', () => {
  it('renders the home page with navigation and footer', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1, name: /every cup/i })).toBeInTheDocument();
    const nav = screen.getByRole('navigation', { name: /primary/i });
    for (const label of ['Home', 'Menu', 'About Us', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument();
    }
    expect(screen.getByRole('contentinfo')).toHaveTextContent(/all rights reserved/i);
  });

  it('navigates between pages', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const nav = screen.getByRole('navigation', { name: /primary/i });

    await user.click(within(nav).getByRole('link', { name: 'About Us' }));
    expect(screen.getByRole('heading', { level: 1, name: /our story/i })).toBeInTheDocument();

    await user.click(within(nav).getByRole('link', { name: 'Contact' }));
    expect(screen.getByRole('heading', { level: 1, name: /get in touch/i })).toBeInTheDocument();
  });

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('shows a 404 page for unknown routes', () => {
    renderAt('/does-not-exist');
    expect(screen.getByRole('heading', { name: /this cup is empty/i })).toBeInTheDocument();
  });
});

describe('Menu page', () => {
  it('lists coffee, tea and desserts with prices', () => {
    renderAt('/menu');
    for (const name of ['Coffee', 'Tea', 'Desserts']) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
    }
    expect(screen.getAllByRole('article')).toHaveLength(menuItems.length);
    expect(screen.getByText('Tiramisu')).toBeInTheDocument();
    expect(screen.getAllByText('$6.50').length).toBeGreaterThan(0);
  });

  it('filters by category', async () => {
    const user = userEvent.setup();
    renderAt('/menu');
    await user.click(screen.getByRole('button', { name: 'Tea' }));
    expect(screen.getByRole('button', { name: 'Tea' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.queryByRole('heading', { level: 2, name: 'Coffee' })).not.toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(menuItems.filter((i) => i.category === 'tea').length);
  });

  it('formats prices', () => {
    expect(formatPrice(3)).toBe('$3.00');
    expect(formatPrice(4.25)).toBe('$4.25');
  });
});

describe('Contact page', () => {
  it('validates and submits the form', async () => {
    const user = userEvent.setup();
    renderAt('/contact');
    const submit = screen.getByRole('button', { name: /send message/i });

    await user.click(submit);
    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();

    await user.type(screen.getByLabelText('Name'), 'Alex');
    await user.type(screen.getByLabelText('Email'), 'alex@example.com');
    await user.type(screen.getByLabelText('Message'), 'Do you cater office events?');
    await user.click(submit);

    expect(screen.getByRole('status')).toHaveTextContent(/thanks for reaching out/i);
    expect(screen.getByLabelText('Name')).toHaveValue('');
  });
});
