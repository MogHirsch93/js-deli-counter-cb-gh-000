const katzDeli = [];

function takeANumber(katzDeliLine, newCustomer){
    katzDeliLine.push(newCustomer);
  return `You are number ${katzDeliLine[katzDeliLine.length-1]}`
}
