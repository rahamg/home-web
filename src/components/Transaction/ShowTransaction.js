import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader";

const ShowTransaction = () => {
  const showTransactionApi = "http://localhost:8080/transaction";

  const [transaction, setTransaction] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handelDelete = async (id) => {
    console.log("id : -", id);
    setIsLoading(true);
    try {
      const response = await fetch(showTransactionApi.concat("/") + id, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setTransaction(transaction.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = () => {
    axios
      .get(showTransactionApi)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (transaction.length < 0) {
    return <h1>no Transaction found</h1>;
  } else {
    return (
      <div className="home-main">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date </th>
              <th>Perticulars</th>
              <th>Amount</th>
              <th>Shop name</th>
              <th>User </th>
              <th>Paid BY </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transaction?.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{item.transDate}</td>
                  <td>{item.perticulars}</td>
                  <td>{item.amount}</td>
                  <td>{item.shopname}</td>
                  <td>{item.username}</td>
                  <td>{item.paidby}</td>
                  <td>
                    <Link to={`/transaction/${item.transid}`}>
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>
                    <Link to={`/transaction/${item.transid}`}>
                      <i className="fa fa-eye" aria-hidden="true"></i>
                    </Link>

                    <i
                      className="fa fa-trash-o"
                      aria-hidden="true"
                      onClick={() => handelDelete(item.transid)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ShowTransaction;
