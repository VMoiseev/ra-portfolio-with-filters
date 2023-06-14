import PropTypes from 'prop-types';

export default function Toolbar (props) {
  const { filters, selected, onSelectFilter } = props;
  return (
    <>
      { filters.map(o => 
        <button
          key={o}
          className={o === selected ? 'btn active' : 'btn'}
          onClick={onSelectFilter}>{o}
        </button>
      ) }
    </>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
}
