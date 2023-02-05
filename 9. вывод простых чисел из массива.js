let Arr = [11, 2, 8, 5, 6, 12, 8, 29, 10,],
    Arr_2 = []

for (i in Arr) {

   for (let j = 2; j < Arr[i]; j++) {
      if (Arr[i] % j != 0) {
        break;
        } else {
            Arr_2.push(Arr[i])
        }
    }
}

for (i in Arr){
    if (Arr_2.indexOf(Arr[i], 0) == -1){
        console.log(Arr[i]);
    }
}



