const katzDeli = [];

function takeANumber(katzDeliLine, newCustomer){
    katzDeliLine.push(newCustomer);
    return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length-1} in line.`
}
