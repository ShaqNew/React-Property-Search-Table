import React, { useState } from "react";
import TransactionDetails from "../TransactionDetails/transactionDetails";
import { IProperty } from "../../utils/dataTypes";
import "./tableRow.scss";

const TableRow = (props:{property:IProperty}) => {
  const { property } = props;
  const {id, outcode, street, lrTransactions} = property
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <>
        <div
        data-testid="table-row"
        className="tableRow"
        onClick={() => {
            setShowDetails(!showDetails);
        }}
        >{
            !showDetails?
            <i className="fa-solid fa-angle-down"></i>:
            <i className="fa-solid fa-minus"></i>
        }
            <div data-testid="table-row-id" className="tableRow__id rowInfo">{id}</div>
            <div data-testid="table-row-outcode" className="tableRow__outcode rowInfo">{outcode}</div>
            <div data-testid="table-row-street" className="tableRow__street rowInfo">{street}</div>
            <div data-testid="table-row-transactions" className="tableRow__transactions rowInfo">
                {property.lrTransactions.length}
            </div>
        </div>
            {showDetails ? <TransactionDetails transactions={lrTransactions} /> : null}
    </>
  );
};

export default TableRow;
