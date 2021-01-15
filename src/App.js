import ThemeSwitcher from './components/ThemeSwitcher'
import { Flex, Spacer, Box } from "@chakra-ui/react"
import Home from './pages/Home'

export default function App() {
    return (
        <Box p={1}>
            <Flex>
                <Spacer />
                <ThemeSwitcher />
            </Flex>
            <Home />
        </Box>
    )
}