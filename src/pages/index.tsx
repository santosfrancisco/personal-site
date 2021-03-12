import Layout from 'components/Layout';
import Hero from 'components/Hero';
import { Col, Row } from 'react-awesome-styled-grid';
import Skills from 'components/Skills';

import Title from 'components/Title';
import Timeline from 'components/Timeline';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Row style={{ marginBottom: 72 }}>
        <Col xs={4} md={3}>
          <Title style={{ marginBottom: 64 }}>Skills</Title>
          <Skills />
        </Col>
        <Col xs={4} md={4} offset={{ md: 1 }}>
          <Title style={{ marginBottom: 64 }}>Por onde andei</Title>
          <Timeline />
        </Col>
      </Row>
    </Layout>
  );
}
