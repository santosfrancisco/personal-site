import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import * as React from 'react';
import { Col, Visible } from 'react-awesome-styled-grid';
import * as S from './styles';

function Hero() {
  const [showArrow, setShowArrow] = React.useState(true);

  useScrollPosition(({ currPos }) => setShowArrow(currPos.y > -100), [showArrow]);

  return (
    <S.Container>
      <S.StyledRow reverse={['xs', 'sm']}>
        <Col justify="center" xs={4} md={4}>
          <S.Title>Oi! Eu sou o Francisco!</S.Title>
          <S.Subtitle>
            Desenvolvedor <S.FeaturedText>frontend</S.FeaturedText>
          </S.Subtitle>
          <S.Paragraph>
            Trabalho com desenvolvimento desde 2016. Já trabalhei um pouco com .NET e C#, mas logo
            migrei para o frontend usando <S.FeaturedText>Javascript</S.FeaturedText>. Desde então,
            trabalhei com Angular, e atualmente, trabalho com{' '}
            <S.FeaturedText>ReactJS</S.FeaturedText>.
          </S.Paragraph>
        </Col>
        <Col justify="center" align="center" xs={4} md={4}>
          <S.IlustraChico />
        </Col>
      </S.StyledRow>
      {showArrow && (
        <Visible md lg xl>
          <S.ArrowDown src="/arrow_down_circle.svg" />
        </Visible>
      )}
    </S.Container>
  );
}

export default Hero;
