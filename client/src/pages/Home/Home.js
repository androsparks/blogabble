import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import {SearchInput, Heading, Combobox, Pane} from 'evergreen-ui'

const Home = () => {
    const [search, setSearch] = useState("")
    const [looking, setLooking ] = useState("")
    const [results, setResults] = useState("")

    const findSearch = async () => {
        try{
            const {data} = await axios.get('/api/search', { params: { looking, search } })
            setResults(data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        findSearch()
    }, [looking, search])

    return (
        <main className="home-container"> 
        <Pane display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={250}>
        <Heading size={900} margin={10}> What are you looking for today? </Heading>
            <Combobox
                items={['User', 'Post']}
                margin={10}
                paddingLeft={100}
                height={40}
                width={380}
                onChange={selected => setLooking(selected)}
                placeholder="I am searching for a.."
                autocompleteProps={{
                    title: 'Select One'
                }}
            />
            <SearchInput margin={10} placeholder="Search using a keyword ..." height={40} onChange={e => setSearch(e.target.value)} />
        </Pane>
        <Pane>
            {results && results.map(result => <Link className="search-result"to={`/${looking === 'User' ? 'profile' : 'post' }/${result._id}`}><p> {result.title || result.firstName+ " "+result.lastName} </p></Link> 
             )}
        </Pane>
        </main>

    )
}

export default Home
