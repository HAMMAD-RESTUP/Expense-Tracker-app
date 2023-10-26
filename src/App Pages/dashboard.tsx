import { useState } from "react";

export default function Dashboard() {
    const [income, setIncome] = useState("Rs: 00");

    const addIncome = () => {
        // Assuming you want to add 100 to the current income
        const currentIncome = parseInt(income.replace("Rs: ", ""), 10); // Extract the numeric value
        const newIncome = currentIncome + 100;

        // Update the income state with the new value
        setIncome(`Rs: ${newIncome}`);
    };

    return (
        <>
            <h1>Dashboard</h1>
            <div>
                <p>Total Income {income}</p>
                {/* Button to trigger the addIncome function */}
                <button onClick={addIncome}>Add Income</button>
            </div>
        </>
    );
}
