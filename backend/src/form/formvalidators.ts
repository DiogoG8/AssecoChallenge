import { RequestHandler } from "express";


/* Validator Middleware*/
export const validateTransfer: RequestHandler<{
    account: string;
    description: string;
    destination: string;
    amount: number;
  
  }> = (req, res, next) => {

    const { account, description, destination, amount } = req.body;
    const errors = [];

    /*RegEx Used to Build Conditions*/
    const amountRegex = /[0-9]/;
    const IBANRegex = /^PT[0-9]{2}[0-9]{21}$/;


    /*Transfer's Account Validator*/
    if(account == null) {
        errors.push({ field: "account", message: "This field is required"})
    } else if (account === "Choose Account") {
        errors.push({ field: "account", message: "Choose an account!"})
    }
    
    /*Transfer's Description Validator*/
    if(description == null) {
        errors.push({ field: "description", message: "This field is required"})
    } else if (description.length < 20) {
        errors.push({ field: "description", message: "This field needs to have at least 20 characters"})
    }

    /*Transfer's IBAN Destination Validator*/
    if (destination == null) {
        errors.push({ field: "destination", message: "This field is required"})
    } else if  (!IBANRegex.test(destination)) {
        errors.push({ field: "destination", message: 'The destination IBAN needs to follow the Portuguese Standards' });
    } else if  (destination.length !== 25) {
        errors.push({ field: "destination", message: 'The destination IBAN needs to have exactly 25 characters' });
    }

    /*Transfer's Amount Validator*/
    if(amount == null) {
        errors.push({ field: "amount", message: "This field is required"})
    } else if (amount < 100) {
        errors.push({ field: "amount", message: "The amount needs to be at least 100€"})
    } else if (amount > 10000) {
        errors.push({ field: "amount", message: "The amount needs to be at max 10000€"})
    } else if (!amountRegex.test(amount)) {
        errors.push({ field: "amount", message: "The amount field needs to be a number" });
    }

    /*If Errors Exist, Send a Status. If not, Proceeds*/
    if (errors.length) {
        res.status(422).json({ validationErrors: errors });
      } else {
        next();
      }
  }