
import { Box, Flex, Center, Alert } from "@chakra-ui/react"
import { useState } from "react"
import { useDebouncedCallback } from 'use-debounce';
import SearchInput from '../components/SearchInput'
import SearchResult from '../components/searchResult/SearchResult'
import EmptySearch from '../components/searchResult/EmptySearch'

export default function Home() {
    const [query, setQuery] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
        setSearchTerm('')
        debounced.callback(e.target.value)
    }

    const debounced = useDebouncedCallback(
        (value) => {
            setSearchTerm(value)
        },
        500
    );

    return (
        <>
            <Center>
                <Box width="md" p={4}>
                    <SearchInput value={query} onChange={handleChange} />
                </Box>
            </Center>
            {!query && <EmptySearch />}
            {searchTerm && <SearchResult searchTerm={searchTerm} />}
        </>
    )
}