

function Main(props) {

    const {data} = props

    return (
        <div className = "apodContainer">       
            <img src = {data.hdurl || "space.jpg"} alt = {data.title || "space demo pic"}
            className = "apodImage"/>
        </div>
    )
}

export default Main