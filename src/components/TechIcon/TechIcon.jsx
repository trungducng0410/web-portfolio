import React, { Fragment } from 'react';
import Tilt from 'react-tilt';
import PropTypes from 'prop-types';

const TechIcon = ({ item }) => {
  return (
    <Tilt className="Tilt" options={{ max: 25 }}>
      <Fragment key={item.id}>
        <div className="icon icon-lg icon-shape shadow rounded-circle" id={item.name}>
          <span className="iconify" data-icon={item.icon} data-inline="false" />
        </div>
      </Fragment>
    </Tilt>
  );
};

TechIcon.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
  }),
};

export default TechIcon;
