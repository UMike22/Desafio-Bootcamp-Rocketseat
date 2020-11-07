const users = {
    name : 'Mariana',
    transactions: [],
    balance: 0
}
const transaction1 = {
    type: 'credit',
    value: 50
}

const transaction2 = {
    type: 'debit',
    value: 10
}

function createTransaction (prop){
    if(prop.type == 'credit'){
        users.balance += prop.value
    }
    else  (prop.type == 'debit')
        users.balance -= prop.value
    
    return  users.transactions.push(prop.value)
}

createTransaction(transaction1)
createTransaction(transaction2)

console.log(users)



    
