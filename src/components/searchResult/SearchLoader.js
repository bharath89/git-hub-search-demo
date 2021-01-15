
import { Center, CircularProgress } from "@chakra-ui/react"

export default function SearchLoader() {
    return (
        <Center>
            <CircularProgress isIndeterminate />
        </Center>
    )
}