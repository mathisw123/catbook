/**
 * Created by mathiswan on 2017-02-23.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/"
                       activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/cats" activeClassName="active">Cats</Link>
        </nav>
    );
};

export default Header;