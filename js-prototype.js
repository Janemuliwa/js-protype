function bankAccount(accNo, accName, balance) {
  this.accNo = accNo;
  this.accName = accName;
  this.balance = balance;
}

bankAccount.prototype.deposit = function (dAmount) {
  if (isNaN(parseFloat(dAmount))) {
      return console.log('please enter the amount in numbers')
  } else if (Math.sign(dAmount) === -1) {
      return console.log('please enter a positive number')
  } else {
      return console.log(`you have deposited ${dAmount} and this is your balance ${this.balance += dAmount}`)
  }
}

bankAccount.prototype.withdraw = function (wAmount) {
  if (wAmount > this.balance) {
      return console.log(`you do not have sufficient balance in your account. Your account balance is ${this.balance}`)
  } else {
      return console.log(`you have withdrawn ${wAmount} and this is your balance ${this.balance -= wAmount}`)
  }
}
bankAccount.prototype.getBalance = function () {
  return console.log(`your balance is ${this.balance}`)
}
bankAccount.prototype.generateIBAN = function() {
  const IBAN = Math.random.toString(36).substring(3,8).toUpperCase()
  return console.log (`you IBAN number is ${IBAN+ this.accNo}`)
}
const jane = new bankAccount (785367456787, "jane muthui",200) 

user1 = new bankAccount(001, 'jane', 100000)
console.log(user1.deposit(6000))
console.log(user1.withdraw(30000))
console.log(user1.getBalance())