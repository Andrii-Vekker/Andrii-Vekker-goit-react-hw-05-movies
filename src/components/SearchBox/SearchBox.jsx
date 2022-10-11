import PropTypes from 'prop-types';
import { SearchInput } from './SearchBox.styled';

export default function SearchBox({onChange}) {

    return (
        <div style={{width:"250px"}}>
            <SearchInput type="text" onChange={e => onChange(e.target.value)}/>
        </div>
    );
};

SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired
};