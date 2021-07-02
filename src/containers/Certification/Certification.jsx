import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../../components/Title/Title';

const Certification = () => {
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
    <section id="certification">
      <Container>
        <div className="certification-wrapper">
          <Title title="Certification" />
        </div>
      </Container>
    </section>
  );
};

export default Certification;
