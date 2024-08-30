// async js

// it is primarily a synchronous language - line by line execution.

//line 1
// long time taking code  - async task.
// line 3


// 1 ms is 1/1000 s

// non-blocking tasks - executed first.
// later the offloaded tasks execute.

// just to not block the script/ thread.


console.log("line 1");

Offload(10000000000);

console.log("line 3");


// date objects;

async function Offload(n){

    const now = new Date()

    const s = await Sum(n);

    const now2 = new Date()

    console.log(now2 - now)

    console.log(s);

}

function Sum(n){
    let accumulator = 0;
    for(let i=0; i<n; i++){
        accumulator+=i;
    }
    return accumulator;
}

