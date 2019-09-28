# From schema.graphql
# https://github.com/relayjs/relay-examples/blob/master/todo/data/schema.graphql

type Query {
  viewer: User

  # Fetches an object given its ID
  node(
    # The ID of an object
    id: ID!
  ): Node
}

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(
  operation,
  variables,
) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export default environment;
