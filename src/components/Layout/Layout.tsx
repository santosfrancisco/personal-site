import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import { Container } from './styles';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
