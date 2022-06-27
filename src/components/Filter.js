import { StyledForm, Search } from "./Styles/StyledForm"
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useState } from "react"
const Filter = () => {
    const navigate = useNavigate()
    const [filtered, setFiltered] = useState('')
    const handleSearch = () => {
        if (filtered === '') {
            navigate('/')
        }
        else {
            navigate(`/searched/${filtered}`)
        }
    }
    return (
        <StyledForm>
            <input
                type="text"
                value={filtered}
                onChange={(e) => setFiltered(e.target.value)}
                onBlur={() => handleSearch()}
            />
            <Search>
                <FaSearch />
            </Search>
        </StyledForm>
    )
}

export default Filter
