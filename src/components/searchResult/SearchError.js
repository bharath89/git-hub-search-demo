
import { Box, Center, Alert, AlertIcon } from "@chakra-ui/react"

export default function SearchError({ error }) {
    let errMsg = 'There was an error processing your request';

    if (error.message) {
        errMsg = error.message
    }

    return (
        <>
            <Center>
                <Box w="md" p={4}>
                    <Alert status="error">
                        <AlertIcon />
                        {errMsg}
                    </Alert>
                </Box>
            </Center>
        </>
    )
}