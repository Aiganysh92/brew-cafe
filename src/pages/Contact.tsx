import { useState, type FormEvent } from 'react';
import PageHeader from '../components/PageHeader';
import { site } from '../data/site';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const empty: FormState = { name: '', email: '', message: '' };

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // No backend yet — this is where a real submission would happen.
      setSent(true);
      setValues(empty);
    }
  };

  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" subtitle="Questions, catering orders or just want to say hi? We’d love to hear from you." />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h2>Visit us</h2>
              <address>
                {site.address.street}
                <br />
                {site.address.city}
              </address>
            </div>
            <div className="info-card">
              <h2>Call or email</h2>
              <p>
                <a href={`tel:${site.phone.replace(/\D/g, '')}`}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div className="info-card">
              <h2>Opening hours</h2>
              <ul className="hours">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <h2>Send us a message</h2>
            {sent && (
              <p className="form-success" role="status">
                Thanks for reaching out! We’ll get back to you within one business day.
              </p>
            )}

            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={update('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={update('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className="field__error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={update('message')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <span id="message-error" className="field__error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn--primary btn--block">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
