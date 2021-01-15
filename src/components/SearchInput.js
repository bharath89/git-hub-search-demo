import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'


export default function SearchInput({ value = '', onChange = () => { } }) {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
            />
            <Input value={value} onChange={onChange} type="text" placeholder="Enter user name" />
        </InputGroup>

    )
}