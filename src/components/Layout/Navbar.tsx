import { useOnClickOutside } from 'hooks/useOnClickOutside';
import * as React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import Menu from './Menu';

const StyledNav = styled.nav`
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const StyledButton = styled.button`
  width: 152.5px;
  height: 61px;
  cursor: pointer;

  background: var(--white);
  border-radius: 4px;
  border: none;

  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 48px;

  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.1));
`;

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const ref = React.useRef<HTMLDivElement>();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  useOnClickOutside(ref, () => {
    setIsMenuOpen(false);
  });

  return (
    <StyledNav>
      <Container>
        <Row justify="space-between">
          <Col>
            <img src="/logo.svg" width="61px" height="61px" />
          </Col>
          <Col align="flex-end">
            <div ref={ref} style={{ position: 'relative' }}>
              <StyledButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? `<Fechar />` : `<Menu />`}
              </StyledButton>
              {isMenuOpen && <Menu />}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledNav>
  );
}

export default Navbar;
