import { Box, Image, Badge, Link, Heading, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function UserCard({ user }) {

    return (
        <Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">

                <Image src={user.avatarUrl} alt={user.name} />

                <Box px="6" pt="6">
                    <Link href={user.url} isExternal>
                        <Heading as="h1" size="md">
                            {user.name} <Text display='inline' fontWeight="normal" fontSize="sm">{user.login}</Text>
                            <ExternalLinkIcon mx="5px" />
                        </Heading>
                    </Link>
                </Box>

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {user.company &&
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                {user.company}
                            </Badge>
                        }
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            ml="2" >
                            {user.location}
                        </Box>
                    </Box>
                    {user.bio &&
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated >
                            {user.bio}
                        </Box>
                    }
                    <Box d="flex" mt="2" alignItems="center">
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {user.repositories.totalCount} repositories
                    </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}