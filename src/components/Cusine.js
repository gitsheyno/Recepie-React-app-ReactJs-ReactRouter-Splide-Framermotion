import { useParams } from "react-router-dom"

const Cusine = () => {
    const { type } = useParams()
    console.log(type)
    return (
        <div>
            <p>{type}</p>
        </div>
    )
}

export default Cusine
