import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container center">
        <p className="eyebrow">404</p>
        <h1>This cup is empty</h1>
        <p>We couldn’t find the page you were looking for.</p>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
      </div>
    </section>
  );
}
