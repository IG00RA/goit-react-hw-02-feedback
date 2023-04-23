import PropTypes from 'prop-types';

export const Section = ({ children, tittle }) => {
  return (
    <>
      <h2>{tittle}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  tittle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
