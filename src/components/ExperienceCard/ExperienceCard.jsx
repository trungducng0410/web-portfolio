import React, { useEffect, useState, createRef } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Tilt from 'react-tilt';
import ColorThief from 'colorthief';
import Parser from 'html-react-parser';
import PropTypes, { string } from 'prop-types';

const ExperienceCard = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    // eslint-disable-next-line prefer-template
    return typeof values === 'undefined' ? null : 'rgb(' + values.join(', ') + ')';
  }

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
        max: 8,
      }}
    >
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <Card className="card shadow text-center mb-5">
          <Card.Header
            style={{
              fontSize: '200%',
              fontWeight: 'bold',
              color: 'white',
              background: rgb(colorArrays),
            }}
          >
            {data.company}
          </Card.Header>
          <Card.Body>
            <img
              ref={imgRef}
              className="bg-white rounded-circle mb-5 img-center img-fluid shadow-lg "
              src={data.logo}
              style={{ width: '100px' }}
              onLoad={() => getColorArrays()}
              alt=""
            />
            <Card.Title style={{ fontSize: '200%', fontWeight: 'bold', marginBottom: '1rem' }}>
              {data.title}
            </Card.Title>
            <Card.Title style={{ fontSize: '150%', marginBottom: '1rem' }}>
              {data.from.toUpperCase()} – {data.to !== '' ? data.to.toUpperCase() : 'PRESENT'}
            </Card.Title>
            <Card.Text style={{ fontStyle: 'italic' }}>{Parser(data.description)}</Card.Text>
            <div
              style={{
                fontSize: '150%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <h4 style={{ margin: 0 }}>Technologies: </h4>
              {data.technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="badge"
                  style={{
                    fontSize: '105%',
                    padding: '0.5rem',
                    margin: '0.5rem',
                  }}
                  variant="primary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Fade>
    </Tilt>
  );
};

ExperienceCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    company: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    logo: PropTypes.string,
    technologies: PropTypes.arrayOf(string),
  }),
};

export default ExperienceCard;
