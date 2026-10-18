import { Link } from 'react-router-dom';
import Logo from './Logo';
import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link to="/" className="brand brand--light">
            <Logo />
            <span>{site.name}</span>
          </Link>
          <p className="footer__tagline">{site.tagline}</p>
        </div>

        <div>
          <h3 className="footer__heading">Explore</h3>
          <ul className="footer__list">
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Visit</h3>
          <address className="footer__list">
            {site.address.street}
            <br />
            {site.address.city}
            <br />
            <a href={`tel:${site.phone.replace(/\D/g, '')}`}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>

        <div>
          <h3 className="footer__heading">Hours</h3>
          <ul className="footer__list">
            {site.hours.map((h) => (
              <li key={h.days}>
                <strong>{h.days}</strong>
                <br />
                {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
