import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import MenuCard from '../components/MenuCard';
import { categories, menuItems, type MenuCategory } from '../data/menu';

type Filter = MenuCategory | 'all';

export default function Menu() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? categories : categories.filter((c) => c.id === filter);

  return (
    <>
      <PageHeader
        eyebrow="Our Menu"
        title="Brewed with care"
        subtitle="Oat, almond and soy milk available at no extra charge. Add an extra shot for $0.75."
      />

      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter menu by category">
            {(['all', ...categories.map((c) => c.id)] as Filter[]).map((id) => (
              <button
                key={id}
                type="button"
                className={`filter ${filter === id ? 'is-active' : ''}`}
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                {id === 'all' ? 'All' : categories.find((c) => c.id === id)!.label}
              </button>
            ))}
          </div>

          {visible.map((cat) => (
            <section key={cat.id} className="menu-section" aria-labelledby={`cat-${cat.id}`}>
              <div className="menu-section__head">
                <h2 id={`cat-${cat.id}`}>{cat.label}</h2>
                <p>{cat.blurb}</p>
              </div>
              <div className="menu-grid">
                {menuItems
                  .filter((i) => i.category === cat.id)
                  .map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
