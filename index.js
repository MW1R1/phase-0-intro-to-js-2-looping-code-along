// Code your solutions in this file
function writeCards(names, text) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message =`Thank you, ${names[i]}, for the wonderful ${text} gift!`;
        messages.push(message);
    }

    return messages;  
}

function countDown(){ 
    let i = 10;  
    while(i >= 0){
        console.log(i--);        
    }

}