import { RequestHandler } from "express";
import { OkPacket, RowDataPacket } from "mysql2";
import database from "../database"

export interface ExpectedSQLResult extends OkPacket {
    affectedRows: number;
    insertId: number;
  }
  
export const submitTransferInfo: RequestHandler<{
    account: string;
    description: string;
    destination: string;
    amount: number;
  
  }> = (req, res) => {
    const { account, description, destination, amount } = req.body;

    database
    .query<ExpectedSQLResult>(
        "INSERT INTO contact_us (account, description, destination, amount) VALUES (?, ?, ?, ?)",
        [account, description, destination, amount])
    .then(([result]) => {
       if(result.affectedRows === 0) {
            res.status(400).send("WARNING: Error creating a new entry in the database");
        }   else {
            res.location(`/api/transfers/${result.insertId}`).sendStatus(201);
        } 
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("WARNING: Internal Server Error");
    });
  };