import { Col } from 'react-awesome-styled-grid';
import * as S from './styles';

function Hero() {
  return (
    <S.Container>
      <S.StyledRow reverse={['xs', 'sm']}>
        <Col justify="center" xs={4} md={4}>
          <S.Title>Oi! Eu sou o Francisco!</S.Title>
          <S.Subtitle>
            Desenvolvedor <S.FeaturedText>frontend</S.FeaturedText>
          </S.Subtitle>
          <S.Paragraph>
            Trabalho com desenvolvimento desde 2015. Já trabalhei um pouco com .NET e C#, mas logo
            migrei para o frontend usando <S.FeaturedText>Javascript</S.FeaturedText>. Desde então,
            trabalhei com Angular, e atualmente, trabalho com{' '}
            <S.FeaturedText>ReactJS</S.FeaturedText>.
          </S.Paragraph>
        </Col>
        <Col justify="center" align="center" xs={4} md={4}>
          <img
            style={{ maxWidth: 600 }}
            src="/ilustra_chico.svg"
            alt="desenvolvedor ouvindo música com um notebook"
          />
        </Col>
      </S.StyledRow>
    </S.Container>
  );
}

export default Hero;
