import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import config from '../amplifyconfiguration.json'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure({
  Auth: {
    region: config.REGION,
    userPoolId: config.USER_POOL_ID,
    userPoolWebClientId: config.USER_POOL_CLIENT_ID
  }
})

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter Your Email Here',
      isRequired: true,
      label: 'Email:'
    },
  },
}

const HomePage = () => {
  return (
    <Authenticator
      variation="modal"
      hideSignUp={true}
      formFields={formFields}
    >
      {({ signOut, user }) => (
        <div>
          <h1>Hello {user.userId}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
};

export default HomePage;