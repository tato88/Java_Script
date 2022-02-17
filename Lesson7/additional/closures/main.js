let date = new Date();
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
if (month <= 9) {
    month = '0' + month
}
if (day <= 9) {
    day = '0' + day
}
if (hours <= 9) {
    hours = '0' + hours
}
if (minutes <= 9) {
    minutes = '0' + minutes
}
if (seconds <= 9) {
    seconds = '0' + seconds
}

let userCard = number => {

    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    }
    return {
        getCardOptions: function () {
            return card
        },
        putCredits: function (cash) {
            card.balance += cash
            let transactionTime = {
                operationType: "Put Credits",
                credits: cash,
                operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.push(transactionTime)
            return (card.balance)
        },
        takeCredits: function (cash) {
            if ((cash < card.transactionLimit + 1) && (cash <= card.balance)) {
                card.balance -= cash
                let transactionTime = {
                    operationType: "Get Credits",
                    credits: cash,
                    operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.push(transactionTime)
                return card.balance
            } else if (cash >= card.transactionLimit + 1) {
                console.log(`Error. Your transaction limit is ${card.transactionLimit}`)
            } else if (cash > card.balance) {
                console.log(`Error. Your balance is ${card.balance}`)
            }
        },
        setTransactionLimit: function (cash) {
            card.transactionLimit = cash
            let transactionTime = {
                operationType: "Transaction limit change",
                credits: cash,
                operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.push(transactionTime)
            // return card.transactionLimit
        },
        transferCredits: function (cash, sendTo) {

            if (cash <= card.balance) {
                let transactionTime = {
                    operationType: `Transaction from This card to card${sendTo.getCardOptions().key}`,
                    credits: cash,
                    operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.push(transactionTime)
                let transactionTime1 = {
                    operationType: `Transaction to This card from card${card.key}`,
                    credits: cash,
                    operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
                }
                sendTo.getCardOptions().historyLogs.push(transactionTime1)

                card.balance -= cash
                let tax = cash / 200
                cash -= tax
                sendTo.getCardOptions().balance += cash
            } else console.log(`Wrong value. Your balance is ${card.balance}`)
        }
    }

}
let card1 = userCard(1)
let card3 = userCard(3)
card1.transferCredits(50,card3)
console.log(card1.getCardOptions())
console.log(card3.getCardOptions())

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = []
    }

    addCard = function (numC) {
        for (let card of this.cards) {
            if (card.key === numC) {
                console.log(`You already have card with this identificator`)
                return
            }
        }
        if ((numC > 0) && (numC < 4)) {
            let card = userCard(numC)
            this.cards.push(card.getCardOptions())
        } else
            (console.log('You cannot have much than 3 cards'))
    }
}


let userBob = new UserAccount(`Bob`)
userBob.addCard(1)
console.log(userBob)
userBob.addCard(1)
console.log(userBob)
userBob.addCard(2)
console.log(userBob)
