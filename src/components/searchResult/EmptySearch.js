
import { Box, Center, Alert } from "@chakra-ui/react"

export default function EmptySearch() {
    return (
        <>
            <Center>
                <Box w="md" p={4}>
                    <Alert status="warning">
                        Enter username to search repositories...
                    </Alert>
                </Box>
            </Center>
        </>
    )
}