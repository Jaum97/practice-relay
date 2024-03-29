//https://relay.dev/docs/en/experimental/api-reference

const React = require('React');

const {RelayEnvironmentProvider} = require('react-relay/hooks');

function Root() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  );
}

module.exports = Root;
