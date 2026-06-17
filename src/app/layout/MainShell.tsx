import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainShellProps {
  children: ReactNode;
}

export default function MainShell({ children }: MainShellProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-body selection:bg-accent/10 selection:text-primary">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
