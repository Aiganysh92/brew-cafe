import { Link } from 'react-router-dom';
import HeroArt from '../components/HeroArt';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menu';
import { site } from '../data/site';

const features = [
  { icon: '☕', title: 'Roasted In-House', text: 'We roast small batches every week so every cup is at its peak.' },
  { icon: '🌱', title: 'Ethically Sourced', text: 'Direct-trade beans and leaves from farms we know by name.' },
  { icon: '🥐', title: 'Baked Fresh Daily', text: 'Pastries and desserts come out of our oven each morning.' },
  { icon: '📶', title: 'Stay a While', text: 'Free Wi-Fi, plenty of outlets and the comfiest armchairs in town.' },
];

const testimonials = [
  { quote: 'The best flat white I’ve had outside of Melbourne. The cinnamon rolls are dangerous.', name: 'Maya R.' },
  { quote: 'My go-to spot to work remotely. Friendly staff, great music, and the cold brew is perfect.', name: 'Daniel K.' },
  { quote: 'Cozy, warm and welcoming. The matcha latte and tiramisu combo is unbeatable.', name: 'Priya S.' },
];

export default function Home() {
  const featured = menuItems.filter((i) => i.tags?.includes('Signature') || i.tags?.includes('Popular')).slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Welcome to {site.name}</p>
            <h1 className="hero__title">
              Where every cup <em>tells a story</em>
            </h1>
            <p className="hero__lead">
              Small-batch roasted coffee, loose-leaf teas and fresh-baked treats, served with warmth in the heart of
              the neighborhood.
            </p>
            <div className="hero__actions">
              <Link to="/menu" className="btn btn--primary">View Our Menu</Link>
              <Link to="/contact" className="btn btn--ghost">Find Us</Link>
            </div>
            <dl className="hero__stats">
              <div><dt>Since</dt><dd>2014</dd></div>
              <div><dt>Bean origins</dt><dd>12</dd></div>
              <div><dt>Cups poured</dt><dd>500k+</dd></div>
            </dl>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Why Brew Cafe</p>
            <h2>More than just coffee</h2>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <div key={f.title} className="feature">
                <span className="feature__icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Customer Favorites</p>
            <h2>Signature & popular picks</h2>
          </div>
          <div className="menu-grid">
            {featured.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="center">
            <Link to="/menu" className="btn btn--primary">See the Full Menu</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Kind Words</p>
            <h2>What our regulars say</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <figure key={t.name} className="testimonial">
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2>Come in, the coffee’s on.</h2>
            <p>Open daily from 7 AM at {site.address.street}.</p>
          </div>
          <Link to="/contact" className="btn btn--light">Plan Your Visit</Link>
        </div>
      </section>
    </>
  );
}
