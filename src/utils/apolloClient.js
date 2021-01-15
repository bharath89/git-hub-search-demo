import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql'
const GITHUB_TOKEN = '' //process.env.GITHUB_TOKEN


const httpLink = createHttpLink({
    uri: GITHUB_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {

    return {
        headers: {
            ...headers,
            authorization: `token ${GITHUB_TOKEN}`,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client
