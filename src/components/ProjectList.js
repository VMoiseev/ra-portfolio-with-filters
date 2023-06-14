import ProjectItem from './ProdjectItem';
import PropTypes from 'prop-types';

export default function ProjectList (props) {
  return (
    <div className='projectsBox'>
      { props.projects.map(o => <ProjectItem key={o.id} item={o}/>) }
    </div>
  )
}

ProjectItem.propTypes = {
  projects: PropTypes.array
};
