import { IconButton, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'


export default function ThemeSwitcher() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} />
    )
}