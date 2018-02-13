const katzDeli = [];

function takeANumber(katzDeliLine, newCustomer){
    katzDeliLine.push(newCustomer);
    return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 1){
  katzDeliLine.shift();
  return `Currently serving ${katzDeliLine[0]} `
  } else{
  return "There is nobody waiting to be served!"
  }
}
