const katzDeli = [];

function takeANumber(katzDeliLine, newCustomer){
    katzDeliLine.push(newCustomer);
    return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  katzDeliLine.shift();
  return "There is nobody waiting to be served!"
}
