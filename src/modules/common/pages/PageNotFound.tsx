// src/modules/common/pages/PageNotFound.tsx

import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚧 404</h1>
      <p style={{ fontSize: '1.5rem' }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <p style={{ marginTop: '1rem' }}>
        Maybe you took a wrong turn. Let's get you back{' '}
        <Link to="/" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          home
        </Link>
        .
      </p>
      <img
        src="https://illustrations.popsy.co/white/resistance-band.svg"
        alt="Lost"
        style={{ marginTop: '2rem', maxWidth: '300px', width: '100%' }}
      />
    </div>
  );
}
