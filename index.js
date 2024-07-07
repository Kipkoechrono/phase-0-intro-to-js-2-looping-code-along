// Code your solutions in this file
function countDown(number){
    while (number >= 0){
        console.log(number);
        number --;
    }
}
//Call the funtion 
countDown(10);


function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      // The 'thank you' message for each name
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      // Now add the message
      messages.push(message);
    }
    return messages;
  }
  
  //call the funtion;
  const result = writeCards(["Rono", "Charlie", "Kendrick"], "Prom");

  console.log(result);
  