let a = prompt('Введите число: ');

while (a < 10){
    let a = prompt('Число недостаточно большое, введите ещё раз: ')
    if (a >= 10){
        break
    }
}
