//write your JS code here:
const OPERATIONS =[
    {operation: "push", data: [[1, 2, 3], 4]},
    {operation: "+", data: [1, 2, 3]},
    {operation: "+", data: [3]},
    {operation: "*", data: [2, 3]},
    {operation: "filter", data: [[1, 2, 3], 3]},
    {operation: "merge", data: [[1, 2, 3], [4, 5], [6], [7]]},
]

function opSum(data){
    let result = 0;
    for(let i = 0; i < data.length; i++){
        result += data[i];
    }
    return result;
}

function opMul(data){
    return data.reduce(
        (acc, curr) => acc * curr,
        1
    );
}

function opPush(data){
    let arr = data[0];
    for(let i = 1; i < data.length; i++){
        arr.push(data[i]);
    }
    return arr;
}

function opMerge(data){
    let arr = data[0];
    for(let i = 1; i < data.length; i++){
        arr.concat(data[i]);
    }

    return arr;
}

function batchProcessing(operations){
    for(let i = 0; i < operations.length; i++){
        const op = operations[i];
        switch(op.operation){
            case"+":
                console.log(opSum(op.data));
                break;
            case "*":
                console.log(opMul(op.data));
                break;
            case "push":
                console.log(opPush(op.data));
                break;
            case "merge":
                console.log(opMerge(op.data));
                break;
            case "filter":
                console.log(opFilter(op.data));
                break;
        }
    }
}