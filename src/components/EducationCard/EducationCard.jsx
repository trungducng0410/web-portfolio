import React, { useEffect, useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Tilt from 'react-tilt';
import PropTypes from 'prop-types';

const EducationCard = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Tilt
      className="Tilt"
      options={{
        reverse: false,
        max: 8,
        perspective: 1000,
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
      }}
    >
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <Card className="card shadow mt-4">
          <h3>
            <strong>{data.university}</strong>
          </h3>
          <h4>{data.title}</h4>
          <Badge
            className="badge"
            style={{ fontSize: '120%', padding: '0.5rem', marginBottom: '1rem' }}
            variant="primary"
          >
            {data.from.toUpperCase()} - {data.to !== '' ? data.to.toUpperCase() : 'PRESENT'}
          </Badge>
          <h4>
            GPA: <strong>{data.gpa}</strong>
          </h4>
        </Card>
      </Fade>
    </Tilt>
  );
};

EducationCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    university: PropTypes.string,
    title: PropTypes.string,
    gpa: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
  }),
};

export default EducationCard;
