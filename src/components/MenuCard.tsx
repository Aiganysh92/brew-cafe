import { formatPrice, type MenuItem } from '../data/menu';

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card">
      <div className="menu-card__head">
        <h3 className="menu-card__name">{item.name}</h3>
        <span className="menu-card__dots" aria-hidden="true" />
        <span className="menu-card__price">{formatPrice(item.price)}</span>
      </div>
      <p className="menu-card__desc">{item.description}</p>
      {item.tags && (
        <ul className="tags" aria-label="Tags">
          {item.tags.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
