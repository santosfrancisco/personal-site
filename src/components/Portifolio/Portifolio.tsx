import { Col, Row } from 'react-awesome-styled-grid';
import * as S from './styles';
import { projects } from 'data';

const Portifolio = () => {
  return (
    <>
      {projects.map(project => (
        <S.Container key={project.url}>
          <Row>
            <Col xs={4} md={3}>
              <a href={project.url} target="_blank">
                <img src={project.image} alt={project.title} width="100%" />
              </a>
            </Col>
            <Col xs={4} md={5}>
              <a href={project.url} target="_blank">
                <S.ProjectTitle>{project.title}</S.ProjectTitle>
              </a>
              <S.ProjectInfo>{project.description}</S.ProjectInfo>
            </Col>
          </Row>
        </S.Container>
      ))}
    </>
  );
};

export default Portifolio;
