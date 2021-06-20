import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return (<div>
      <h2>Hello {user.name}</h2>
      <p>Hello {user.email}</p>
      <img src={user.picture} alt='' />
    </div>
    );
  }
}

export default withAuth0(Profile);
