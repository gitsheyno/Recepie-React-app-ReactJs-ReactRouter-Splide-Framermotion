import { StyledForm, Search } from "./Styles/StyledForm"
import { FaSearch } from 'react-icons/fa'
const Filter = () => {
    return (
        <StyledForm>
            <input
                type="text"
            />
            <Search>
                <FaSearch />
            </Search>
        </StyledForm>
    )
}

export default Filter
