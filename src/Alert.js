function Alert(props) {
    const { alert,color } = props

    return (
        <>
            <h3
                style={{ textAlign: "center", color: color }}
            >{alert}</h3>
        </>
    );
}

export default Alert;