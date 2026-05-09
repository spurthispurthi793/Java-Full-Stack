class BankAccount {

    #balance;
    #pin;

    constructor(accountHolder, accountType, balance, pin) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.#balance = balance;
        this.#pin = pin;
        this.transactionHistory = [];
    }

    verifyPin(pin) {

        if (this.#pin === pin) {
            return true;
        } else {
            console.log("Invalid PIN");
            return false;
        }
    }

    deposit(amount) {

        if (amount > 0) {

            this.#balance += amount;

            this.transactionHistory.push(
                "Deposited: ₹" + amount
            );

            console.log("Amount Deposited Successfully");
        }
    }

    withdraw(amount) {

        if (amount <= 0) {
            console.log("Invalid Withdrawal Amount");
        }

        else if (amount > this.#balance) {
            console.log("Insufficient Balance");
        }

        else {

            this.#balance -= amount;

            this.transactionHistory.push(
                "Withdrawn: ₹" + amount
            );

            console.log("Withdrawal Successful");
        }
    }

    calculateInterest() {

        if (this.accountType === "Savings") {

            let interest = this.#balance * 0.05;

            console.log("Interest Amount: ₹" + interest);
        }

        else {
            console.log("Interest not available for Current Account");
        }
    }

    showBalance() {
        console.log("Current Balance: ₹" + this.#balance);
    }

    showTransactionHistory() {

        console.log("Transaction History");

        this.transactionHistory.forEach((transaction) => {
            console.log(transaction);
        });
    }
}

const account1 = new BankAccount(
    "Rahul",
    "Savings",
    10000,
    1234
);

if (account1.verifyPin(1234)) {

    account1.deposit(5000);

    account1.withdraw(2000);

    account1.showBalance();

    account1.calculateInterest();

    account1.showTransactionHistory();
}
