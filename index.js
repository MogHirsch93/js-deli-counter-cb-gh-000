const katzDeli = [];

function takeANumber(katzDeliLine, newCustomer){
    katzDeliLine.push(newCustomer);
    return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 1){
  let firstInQueue = katzDeliLine[0]
  katzDeliLine.shift();
  return `Currently serving ${firstInQueue} `
  } else{
  return "There is nobody waiting to be served!"
  }
}
