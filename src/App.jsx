import Header from "./components/header";
import Inputs from "./components/Inputs";
import { useState } from "react";
import Result from "./components/Result";
import Error from "./components/Error";
function App() {


    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });
    const inputIsValid = userInput.duration >= 1;

    function handleInputChange(identifier, newValue) {
        setUserInput(prevValue => {
            return {
                ...prevValue,
                [identifier]: +newValue

            };

        });
    }
    return (
        <>
            <Header />
            <Inputs userInput={userInput} onChange={handleInputChange} />
            {inputIsValid ? <Result userInput={userInput} /> : <Error />}
        </>
    );


}

export default App
