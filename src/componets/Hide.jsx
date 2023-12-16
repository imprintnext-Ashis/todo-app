import { useEffect, useState } from "react";

function Hide(props) {
    const { setdivshow, divshow,buttonDisabled,setButtonDisabled } = props

    const handleButtonClick = () => {
        setdivshow(!divshow);
        setButtonDisabled(!buttonDisabled); 
      };

    const [plus, setplus] = useState("+")

    useEffect(() => {

        if (divshow) {
            setplus("-")
        }
        else {
            setplus("+")
        }
    }, [divshow])


    return (


        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",

            }}
        >
            <button
                className="btn btn-warning  my-5   "
                onClick={handleButtonClick}
                disabled={!buttonDisabled}
                style={{
                    width: "5rem",
                    fontSize: "27px"
                }}
            >{plus}</button>

        </div>


    );
}

export default Hide;