import { Row, config } from 'react-awesome-styled-grid';
import styled from 'styled-components';

export const Container = styled.div`
  /* padding-top: 24px;
  padding-bottom: 24px;

  ${props => config(props).media.md`
    padding-top: 48px;
    padding-bottom: 48px;

  `} */
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 24px;
  line-height: 48px;
  text-align: center;

  ${props => config(props).media.md`
    text-align: left;
    font-size: 36px;

  `}
`;

export const Subtitle = styled.h2`
  font-weight: 800;
  font-size: 24px;
  line-height: 48px;
  text-align: center;

  margin-bottom: 36px;

  ${props => config(props).media.md`
    text-align: left;

  `}
`;

export const FeaturedText = styled.span`
  color: var(--secondary);
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 0.05em;
`;

export const StyledRow = styled(Row)`
  min-height: calc(100vh - 109px - 121px - 48px);

  ${props => config(props).media.md`
    min-height: calc(100vh - 109px - 121px - 96px);
  `}
`;
