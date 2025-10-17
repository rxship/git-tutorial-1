function print(name){
    console.log("hello " + name);
}


//testing out the function
print("Rushi");

function total(n){
    let sum = 0;
    for(let i=0; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(total(5)); // should print 15

