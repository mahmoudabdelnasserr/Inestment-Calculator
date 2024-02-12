import { calculateInvestmentResults, formatter } from "../util/investment";


export default function Result({userInput}){
    
    const resultData = calculateInvestmentResults(userInput);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    console.log(resultData);
    
        return (
           <table id="result">
            <thead id="thead">
                <tr>
                <th>Year</th>
                <th>Investment</th>
                <th>Interest (Year)</th>
                <th>Total Interst</th>
                <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(yearData => {
                        const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                        const totalCapitalInvested = yearData.valueEndOfYear - totalInterest;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalCapitalInvested)}</td>

                    </tr>
                })}
            </tbody>
            
            
           </table>
        );

}