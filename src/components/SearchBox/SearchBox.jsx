import PropTypes from 'prop-types';


export default function SearchBox({onChange}) {

    return (
        <div>
            <input type="text" onChange={e => onChange(e.target.value)}/>
        </div>
    );
};

SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired
};