import { lazy, Suspense } from 'react';

const Nav = lazy(() => import('Nav'));
const Main = lazy(() => import('Main'));
const Aside = lazy(() => import('Aside'));
const Footer = lazy(() => import('Footer'));

function Spinner() {
  // add aria role for loader
  return <div>Loading...</div>;
}

export default function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Nav />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Main />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Aside />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Footer />
      </Suspense>
    </>
  );
}
