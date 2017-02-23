/**
 * Created by mathiswan on 2017-02-23.
 */
import React, {PropTypes} from 'react'
import Header from './common/Header'

class App extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}

            </div>
        )
    }
};

App.propTypes = {
    children: PropTypes.object.isRequired //https://facebook.github.io/react/docs/typechecking-with-proptypes.html
};

export default App;