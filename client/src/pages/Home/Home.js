import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {SearchInput, Heading, Combobox, Pane} from 'evergreen-ui'

const Home = () => {
    const [search, setSearch] = useState("")
    const [looking, setLooking ] = useState("")

    const findSearch = async () => {
        try{
            const response = await axios.get('/api/search', { params: { looking, search } })
        } catch(error){
            console.log(error)
        }
       
    }

    useEffect(() => {
        findSearch()
    }, [looking, search])

    return (
        <main>
        
        <Pane display="flex" flexDirection="column">
        <Heading> What are you looking for today? </Heading>
            <Combobox
                items={['User', 'Post']}
                width={200}
                onChange={selected => setLooking(selected)}
                placeholder="I am searching for a.."
                autocompleteProps={{
                    // Used for the title in the autocomplete.
                    title: 'Select One'
                }}
            />
            <SearchInput placeholder="Search ..." height={40} onChange={e => setSearch(e.target.value)} />
        </Pane>
        </main>

    )
}

export default Home
