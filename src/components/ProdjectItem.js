import PropTypes from 'prop-types';
import Project from './Prodject';

export default function ProjectItem (props) {
  const { item } = props;
  return (
    <img className='project' src={item.img} alt="" />
  )
}

ProjectItem.propTypes = {
  item: PropTypes.instanceOf(Project).isRequired
};
