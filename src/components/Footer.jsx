

function Footer(props) {

    const {showModal, handleToggleModal, data} = props

    return (
        <footer>
            <div className = "apodGradient"></div>
            <div>
                <h2>{data?.title}</h2>
                <h1>NASA APOD</h1>
            </div>
            <button onClick = {handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer