import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
const CreateTransaction = () => {
    const navigate = useNavigate();
    const createTransactionApi = "http://localhost:8080/transaction"
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [transaction, setTransaction] = useState({
        transDate: "",
        perticulars: "",
        amount: "",
        shopname: "",
        username: "",
        paidby: ""
    })

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, value)
        setTransaction({ ...transaction, [name]: value });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        console.log(transaction)
        try {
            setIsLoading(true);
            const response = await fetch(createTransactionApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transaction),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setTransaction({transDate: "",
                    perticulars: "",
                    amount: "",
                    shopname: "",
                    username: "",
                    paidby: ""})
                navigate('/show-transaction');
            } else {
                console.error('Form submission failed!');
            }

        } catch (error) {
            setError(error.message);
        } finally{
            setIsLoading(false);
        }
    }

    return (
        <div className='home-main'>
            <div className='heading'>
            {isLoading && <Loader />}
            {error && <p>Error: {error}</p>}
                <p>Transaction Form</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="transDate" className="form-label"> Transaction Date</label>
                    <input type="date" className="form-control" id="transDate" name="transDate" value={transaction.transDate} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="transDate" className="form-label"> Perticulars </label>
                    <input type="text" className="form-control" id="perticulars" name="perticulars" value={transaction.perticulars} onChange={handelInput} />
                </div>
                
                <div className="mb-3 mt-3">
                    <label for="amount" className="form-label">Amount</label>
                    <input type="number" className="form-control" id="amount" name="amount" value={transaction.amount} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="shopname" className="form-label">Shop Name</label>
                    <input type="text" className="form-control" id="shopname" name="shopname" value={transaction.shopname} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="paidby" className="form-label">Paid Via</label>
                    <input type="text" className="form-control" id="paidby" name="paidby" value={transaction.paidby} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="username" className="form-label">User ID</label>
                    <input type="text" className="form-control" id="username" name="username" value="giri" readOnly onChange={handelInput}/>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateTransaction