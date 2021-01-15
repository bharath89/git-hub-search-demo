
import { List, ListItem, Box, Heading, Text, Link, HStack, Tag } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function RepoList({ repositories }) {
    return (
        <Box w="100%" pl={10}>
            <List spacing={10}>
                {repositories.nodes.map(repo => (
                    <ListItem key={repo.id}>
                        <Heading as="h2" size="md">
                            <Link href={repo.url} isExternal> {repo.name}  <ExternalLinkIcon mx="5px" /></Link>
                            <Text fontSize="sm" fontWeight="normal" mt="1">
                                {repo.description}
                            </Text>
                        </Heading>
                        <HStack spacing={3} mt={2}>
                            {repo.languages.nodes.map(lang => (
                                <Tag size="sm" key={lang.name} variant="outline" color="#000" bgColor={lang.color}>
                                    {lang.name}
                                </Tag>
                            ))}
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}