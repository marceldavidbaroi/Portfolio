// src/modules/common/pages/PageNotFound.tsx

import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-dark)' }}
    >
      <h1
        className="text-8xl font-terminal"
        style={{ color: 'var(--color-accent-2)' }}
      >
        404
      </h1>

      <p
        className="mt-4 text-lg font-terminal"
        style={{ color: 'var(--color-text-dark)' }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <p
        className="mt-2 font-terminal"
        style={{ color: 'var(--color-text-soft)' }}
      >
        You might have taken a wrong turn, but let’s get you back on track.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-lg shadow-md transition-all duration-200 font-terminal"
        style={{
          backgroundColor: 'var(--color-accent-1)',
          color: 'var(--color-bg)',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = 'var(--color-accent-2)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = 'var(--color-accent-1)')
        }
      >
        Go Home
      </Link>
    </div>
  );
}
