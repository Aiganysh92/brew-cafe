import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const values = [
  { title: 'Quality First', text: 'From green bean to final pour, we obsess over every detail so you don’t have to.' },
  { title: 'Community', text: 'We host open-mic nights, local art shows and latte-art classes for our neighbors.' },
  { title: 'Sustainability', text: 'Compostable cups, a bring-your-own-mug discount and zero-waste coffee grounds.' },
];

const team = [
  { name: 'Elena Martinez', role: 'Founder & Head Roaster', initials: 'EM' },
  { name: 'James Okafor', role: 'Lead Barista', initials: 'JO' },
  { name: 'Sofia Chen', role: 'Pastry Chef', initials: 'SC' },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Our story" subtitle="A small idea, a big love for coffee, and one very cozy corner." />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Since 2014</p>
            <h2>From a garage roaster to your neighborhood cafe</h2>
            <p>
              Brew Cafe started with a secondhand roaster in Elena’s garage and a simple belief: great coffee should
              feel personal. After years of sharing beans with friends and farmers’ market regulars, we opened our
              doors on Roastery Lane.
            </p>
            <p>
              Today we still roast every batch ourselves, work directly with growers across Ethiopia, Colombia and
              Guatemala, and bake everything in-house. What hasn’t changed is the feeling we want you to have when you
              walk in — like you’re right at home.
            </p>
          </div>
          <div className="about-card">
            <blockquote>
              “We don’t just serve coffee. We serve the ten quiet minutes that make your day better.”
            </blockquote>
            <p>— Elena Martinez, Founder</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">What We Believe</p>
            <h2>Our values</h2>
          </div>
          <div className="feature-grid feature-grid--3">
            {values.map((v) => (
              <div key={v.title} className="feature">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">The People</p>
            <h2>Meet the team</h2>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-card">
                <div className="avatar" aria-hidden="true">{m.initials}</div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
          <div className="center">
            <Link to="/contact" className="btn btn--primary">Come Say Hello</Link>
          </div>
        </div>
      </section>
    </>
  );
}
