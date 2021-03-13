import { ReactNode } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 66px;
  text-align: center;
  margin: 32px 0 96px;

  span {
    border-bottom: 4px solid var(--secondary);
    padding: 0 24px 8px;
  }
`;

type props = {
  children: ReactNode;
};

const PageTitle = ({ children }: props) => (
  <>
    <Title>
      <span>{children}</span>
    </Title>
  </>
);

export default PageTitle;
