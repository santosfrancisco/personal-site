import { Container, Row, Col, config } from 'react-awesome-styled-grid';
import styled from 'styled-components';

const socialOptions = [
  {
    icon: '/github.svg',
    url: 'https://github.com/santosfrancisco',
    title: 'Github',
  },
  {
    icon: '/linkedin.svg',
    url: 'https://www.linkedin.com/in/santos-francisco/',
    title: 'Linkedin',
  },
  {
    icon: '/gmail.svg',
    url: '/#',
    title: 'Email',
  },
];

const StyledFooter = styled.footer`
  display: flex;
  height: 104px;
  ${props => config(props).media.sm`
    height: 85px;
  `}
`;

const Copyright = styled.p`
  margin: 0 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;

  ${props => config(props).media.sm`
    margin: 0;
  `}
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row align="center" reverse={['xs']} style={{ height: '100%' }}>
          <Col xs={4} sm={6} align={{ xs: 'center', sm: 'flex-start' }}>
            <Copyright>{`©${new Date().getFullYear()} Francisco Santos`}</Copyright>
          </Col>
          <Col xs={4} sm={2}>
            <Row justify="flex-end">
              {socialOptions.map(social => (
                <Col key={social.title} align={{ xs: 'center', sm: 'flex-end' }}>
                  <a href={social.url} target="_blank">
                    <img src={social.icon} width="48px" height="48px" />
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
