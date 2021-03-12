import { Row, config } from 'react-awesome-styled-grid';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

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

  margin-bottom: 16px;

  ${props => config(props).media.md`
    text-align: left;
    margin-bottom: 36px;

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
  min-height: calc(100vh - 109px);

  ${props => config(props).media.md`
    min-height: calc(100vh - 109px);
  `}
`;

const jump = keyframes`
  50% {transform: translateY(100%);}
`;

export const ArrowDown = styled.img`
  position: absolute;
  right: 50%;
  bottom: 40px;

  animation: 1s ${jump} infinite ease-in-out;
`;

export const IlustraChico = styled.img.attrs({
  src: '/ilustra_chico.svg',
  alt: 'desenvolvedor ouvindo música com um notebook',
})`
  max-width: 250px;

  ${props => config(props).media.sm`
    max-width: 400px;
  `}

  ${props => config(props).media.md`
    max-width: 600px;
  `}
`;
