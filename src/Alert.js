function Alert(props) {
    const { alert } = props
    return (
        <>
            <h3
                style={{ textAlign: "center", color: "red" }}
            >{alert}</h3>
        </>
    );
}

export default Alert;