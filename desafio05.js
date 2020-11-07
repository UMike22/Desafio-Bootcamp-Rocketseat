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

function createTransaction (transaction){
      users.transactions.push(transaction)
    if(transaction.type === 'credit'){
        users.balance += transaction.value
    }
    else  
        users.balance -= transaction.value
    
}

function getHigherTransactionByType(typeOfTransiction){
    let HigherTransaction = 0
    let HigherValue = 0
    for(props of users.transactions){
        if(props.type == typeOfTransiction && props.value > HigherValue){
            HigherValue = props.value
            HigherTransaction = props
        }
    }
    return HigherTransaction
}

function getAverageTransactionValue (){
    let sum = 0
    for (prop of users.transactions){
        sum += prop.value
}   
    return sum/users.transactions.length
}

function getTransactionsCount (){
    let count = {
        credit : 0,
        debit : 0
    }
    for (props of users.transactions){
        if(props.type === 'credit'){
            count.credit ++
        }
        else{
            count.debit ++
        }
    }
    return count
}
    

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(users)

console.log(getHigherTransactionByType('credit'))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())