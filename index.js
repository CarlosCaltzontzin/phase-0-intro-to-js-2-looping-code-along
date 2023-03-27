// Code your solutions in this file
const names = [];

function writeCards(names,event){
    const msg = [];
    for(let i = 0; i < names.length; i++){
        msg[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    };
    return msg;
};

function countDown(n){
    let count = n;
    while(count >= 0){
        console.log(count--);
    };
};