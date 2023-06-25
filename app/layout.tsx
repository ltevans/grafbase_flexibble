// Imports

import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarkable developer projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <Navbar />

        <main>
          {/*  */}
          {children}
          {/*  */}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
