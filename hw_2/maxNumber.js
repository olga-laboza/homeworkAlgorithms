/**Реализуйте и оцените алгоритм поиска максимального числа в неотсортированном массиве
 * (объясните почему именно такая оценка). Реализовать можно как в виде текста, псевдокода или блок-схемы, 
 * так и в виде реального кода. */

const array = [456, 56, 10, -7, 14, 34, 104];
console.log("max: ", getMax(array));

function getMax(array) { 
let max = array[0];                        //cost = 2 time = 2 - здесь 2 инструкции: поиска array[0] и присвоения значения max
for (let i = 0; i < array.length; i++) {    //cost = 2 time = 2n - 2 инструкции при инициализации цикла: присвоение и сравнение,
                                            // после каждой итерации будем иметь на 2 инструкции больше (инкремент и сравнение)
    if (array[i] >= max) {                  //предположим, что ветвление происходит мгновенно,
        max = array[i];                     // и не будем учитывать эту инструкцию при подсчёте
    }
}
return max;                                 
}
/* Получаем f(n) = 4 + 2n, следовательно асимптотическая линейная зависимость O(n) */

