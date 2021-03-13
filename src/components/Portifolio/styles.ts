import styled from 'styled-components';

import { config } from 'react-awesome-styled-grid';

export const Container = styled.div`
  a {
    color: var(--primary);
    text-decoration: none;
  }
  & + & {
    margin-top: 64px;
  }
`;

export const ProjectTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-top: 32px;
  margin-bottom: 32px;

  ${props => config(props).media.md`
    margin-top: 0;
  
  `}
`;

export const ProjectInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
`;
