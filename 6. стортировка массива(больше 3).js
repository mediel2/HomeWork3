let NumArr = new Array(1, 6, 7, 8, 3, 4, 5, 6)

for (i in NumArr){
    if (NumArr[i] <= 3){
        NumArr.splice(i, 1)
    }
}    

console.log(NumArr)
