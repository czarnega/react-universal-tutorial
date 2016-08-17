import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class App extends Component {

  render() {
    return (
      <div>
        <Helmet
          title='React Universal Tutorial'
          titleTemplate='%s'
          meta={[
            {'char-set': 'utf-8'},
            {'name': 'description', 'content': 'Introductory tutorial for server side rendering with React'}
          ]}
        />
        <nav>
          <ul>
            <li><Link to='/'>Users</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
