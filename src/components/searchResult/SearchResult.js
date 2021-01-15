import SearchLoader from './SearchLoader'
import SearchError from './SearchError'
import UserCard from './UserCard'
import RepoList from './RepoList'
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
import { Center, Flex } from '@chakra-ui/react';

const REPO_SEARCH_QUERY = gql`
  query ($userId: String!){
    user(login: $userId) {
      name
      url
      login
      avatarUrl
      bio 
      company 
      location 
      repositories(last: 100, isLocked: false) {
        totalCount
        nodes {
          id
          name
          url
          description
          createdAt
          languages(last: 100)  {
            totalCount
            nodes {
              color
              name
            }
          }
        }
      }
    }
  }
`;

export default function SearchResult({ searchTerm }) {

  const { loading, data, error } = useQuery(REPO_SEARCH_QUERY, {
    variables: { userId: searchTerm },
  });

  if (loading) {
    return <SearchLoader />
  }

  if (error) {
    return <SearchError error={error} />
  }

  return (
    <Center>
      <Flex p={5}>
        <UserCard user={data.user} />
        <RepoList repositories={data.user.repositories} />
      </Flex >
    </Center>
  )
}