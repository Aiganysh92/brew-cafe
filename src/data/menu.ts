export type MenuCategory = 'coffee' | 'tea' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags?: string[];
}

export const categories: { id: MenuCategory; label: string; blurb: string }[] = [
  { id: 'coffee', label: 'Coffee', blurb: 'Small-batch beans, roasted in-house every week.' },
  { id: 'tea', label: 'Tea', blurb: 'Loose-leaf teas from family-run gardens.' },
  { id: 'desserts', label: 'Desserts', blurb: 'Baked fresh each morning in our kitchen.' },
];

export const menuItems: MenuItem[] = [
  { id: 'espresso', name: 'Espresso', description: 'A rich, syrupy double shot of our house blend.', price: 3.0, category: 'coffee' },
  { id: 'americano', name: 'Americano', description: 'Espresso lengthened with hot water for a smooth, bold cup.', price: 3.5, category: 'coffee' },
  { id: 'cappuccino', name: 'Cappuccino', description: 'Equal parts espresso, steamed milk and velvety foam.', price: 4.25, category: 'coffee', tags: ['Popular'] },
  { id: 'flat-white', name: 'Flat White', description: 'Ristretto shots with silky micro-foamed milk.', price: 4.5, category: 'coffee' },
  { id: 'caramel-latte', name: 'Caramel Latte', description: 'Espresso, steamed milk and house-made salted caramel.', price: 5.0, category: 'coffee', tags: ['Signature'] },
  { id: 'mocha', name: 'Mocha', description: 'Espresso with dark Belgian chocolate and steamed milk.', price: 5.0, category: 'coffee' },
  { id: 'cold-brew', name: 'Cold Brew', description: 'Steeped for 18 hours for a naturally sweet, low-acid finish.', price: 4.75, category: 'coffee', tags: ['Popular'] },
  { id: 'pour-over', name: 'Single-Origin Pour Over', description: 'Hand-poured, rotating single-origin beans. Ask your barista!', price: 5.5, category: 'coffee' },

  { id: 'earl-grey', name: 'Earl Grey', description: 'Black tea scented with bergamot and cornflower petals.', price: 3.25, category: 'tea' },
  { id: 'matcha-latte', name: 'Matcha Latte', description: 'Ceremonial-grade matcha whisked with steamed oat milk.', price: 5.25, category: 'tea', tags: ['Signature'] },
  { id: 'chai-latte', name: 'Spiced Chai Latte', description: 'Our own blend of black tea, cardamom, cinnamon and ginger.', price: 4.75, category: 'tea', tags: ['Popular'] },
  { id: 'jasmine-green', name: 'Jasmine Green', description: 'Delicate green tea layered with fresh jasmine blossoms.', price: 3.25, category: 'tea' },
  { id: 'chamomile', name: 'Chamomile & Honey', description: 'Caffeine-free whole chamomile flowers with local honey.', price: 3.5, category: 'tea', tags: ['Caffeine-free'] },
  { id: 'iced-hibiscus', name: 'Iced Hibiscus', description: 'Tart and refreshing hibiscus with a hint of citrus.', price: 4.0, category: 'tea', tags: ['Caffeine-free'] },

  { id: 'croissant', name: 'Butter Croissant', description: 'Flaky, golden and laminated with French butter.', price: 3.75, category: 'desserts' },
  { id: 'cinnamon-roll', name: 'Cinnamon Roll', description: 'Soft swirls of cinnamon sugar with cream-cheese icing.', price: 4.5, category: 'desserts', tags: ['Popular'] },
  { id: 'tiramisu', name: 'Tiramisu', description: 'Espresso-soaked ladyfingers layered with mascarpone cream.', price: 6.5, category: 'desserts', tags: ['Signature'] },
  { id: 'cheesecake', name: 'New York Cheesecake', description: 'Creamy and dense, with a buttery graham crust.', price: 6.0, category: 'desserts' },
  { id: 'brownie', name: 'Fudge Brownie', description: 'Dark chocolate brownie with a crackly top. Gluten-free.', price: 4.0, category: 'desserts', tags: ['Gluten-free'] },
  { id: 'lemon-tart', name: 'Lemon Tart', description: 'Zesty lemon curd in a crisp shortbread shell.', price: 5.25, category: 'desserts' },
];

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
