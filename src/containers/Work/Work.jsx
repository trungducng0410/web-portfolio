import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../components/Title/Title';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import PortfolioContext from '../../context/context';

const Work = () => {
  const { experiences } = useContext(PortfolioContext);

  return (
    <section id="work">
      <Container>
        <div className="work-wrapper">
          <Title title="Work Experience" />
        </div>
        <Row style={{ justifyContent: 'center' }}>
          {experiences.map((exp) => (
            <Col key={exp.id} lg="4">
              <ExperienceCard key={exp.id} data={exp} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Work;
