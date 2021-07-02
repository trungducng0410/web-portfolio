import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../../components/Title/Title';
import EducationCard from '../../components/EducationCard/EducationCard';
import PortfolioContext from '../../context/context';

const Education = () => {
  const { educations } = useContext(PortfolioContext);

  return (
    <section id="education">
      <Container>
        <div className="education-wrapper">
          <Title title="Education" />
        </div>
        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
          {educations.map((education) => (
            <Col key={education.id} md={6} sm={12}>
              <EducationCard data={education} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
