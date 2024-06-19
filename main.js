//nhập các phần tử N và add vào mảng
//input : n
//output: arr[n];

var formNhapN = document.getElementById("formInput");
let arrSo = [];

var inputValue = document.getElementById("mangSo");
document.getElementById("addSo").onclick = function () {
    var n = document.getElementById("soN").value * 1;
    arrSo.push(n);
    inputValue.value = arrSo;
    //in ra các giá trị arr trong input
    console.log(inputValue.value);

    document.getElementById("mangSo").style.borderColor = "#ccc";
    document.getElementById("mangSo").style.borderWidth = "1px";
    document.getElementById("mangSo").style.borderStyle = "solid";
    document.getElementById("mangSo").classList.add("bg-warning");
};

//1. Tính tổng các số dương trong mảng:
//input : value từ input ; output : sumOfPositiveNumber
function tinhTong(array) {
    let sumOfPositiveNumber = 0;
    for (let item of array) {
        if (item > 0) {
            sumOfPositiveNumber += item;
        }
    }
    return sumOfPositiveNumber;
}

document.querySelector(".sumPositive").onclick = function () {
    console.log("I'm a button sum of positive number");
    console.log(tinhTong(arrSo));
    document.getElementById("sumSoDuong").value = tinhTong(arrSo);
};

//2. count PositiveNumber
//input array output: 1 sum of this array

function demSoDuong(array) {
    let count = 0;
    for (let item of array) {
        if (item > 0) {
            count++;
        }
    }
    return count;
}
document.querySelector("#demDuong").onclick = function () {
    console.log("I'm a button count positive Number");

    document.getElementById("demSoDuong").value = demSoDuong(arrSo);
};
//3. find a min item in arr input: array output: min of that array
function findMin(array) {
    let min = array[0];
    for (let item of array) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}
document.querySelector("#btnMin").onclick = function () {
    console.log("I'm a button min value");

    document.getElementById("minNumber").value = findMin(arrSo);
};
//4. find a min Positive number in arr input: array output: minPositiveNumber of that array
function findPositiveMin(array) {
    let min = array[0];
    //min positive always is 1, check all array if there is any item have value more than 1 ; assign item for min
    for (let item of array) {
        if (item > 1 && min > item) {
            min = item;
        }
    }
    return min;
}
document.querySelector("#btnMinPositive").onclick = function () {
    console.log("I'm a button min positive value");

    document.getElementById("minPositiveNumber").value = findPositiveMin(arrSo);
};

//5. find a terminal even number in arr input: array output: a terminal even number of that array
function findTerminalEvenNumber(array) {
    let terminalEvenNumber = array[array.length - 1];
    //min positive always is 1, check all array if there is any item have value more than 1 ; assign item for min
    for (let item of array.reverse()) {
        if (item % 2 == 0) {
            terminalEvenNumber = item;
            break;
        } else {
            return -1;
        }
    }
    return terminalEvenNumber;
}
document.querySelector("#btnEvenNumberLast").onclick = function () {
    console.log("I'm a button last even value");

    document.getElementById("eventNumberLast").value =
        findTerminalEvenNumber(arrSo);
};

//6. Change order of number in array for a number selected
//input : 2 number have 2 diff index output: 2 number have index of each number other
function swapNumber(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
document.getElementById("btnSwap").onclick = function () {
    //to convert integer value of index1 & index 2
    let index1 = parseInt(document.getElementById("index1Number").value);
    let index2 = parseInt(document.getElementById("index2Number").value);
    swapNumber(arrSo, index1, index2);
    document.getElementById("arrayAfterSwap").value =
        "Mảng sau khi đổi: " +
        " từ vị trí " +
        index1 +
        " cho vị trí " +
        index2 +
        " : " +
        arrSo;
    document.getElementById("arrayAfterSwap").style.borderColor = "#ccc";
    document.getElementById("arrayAfterSwap").style.borderWidth = "1px";
    document.getElementById("arrayAfterSwap").style.borderStyle = "solid";
    document.getElementById("arrayAfterSwap").classList.add("bg-warning");
};
//7.Sort ascessding for array
function sortArrayAscending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
document.querySelector("#btnSort").onclick = function () {
    console.log("I'm a button sort array accessding");

    document.getElementById("sortArray").value = sortArrayAscending(arrSo);
};

//8. Find a first prime number in array
//input array => output: first prime
//create a function have parameter is a array return a prime
//agorithm: prime number is number have 2 divisor is itseft and 1

function findPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function findFirstPrime(array) {
    for (let i = 0; i < array.length; i++) {
        if (findPrime(array[i])) {
            return array[i];
        }
    }
    return -1;
}
document.querySelector("#btnPrime").onclick = function () {
    console.log("I'm a button find first prime");
    document.getElementById("firstPrimeNumber").value = findFirstPrime(arrSo);
};

//9.Count integer number in array
//input array => output : count of integer in that array
function countInteger(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        //using Number.isInteger to check
        if (Number.isInteger(array[i])) {
            count++;
        }
    }
    return count;
}
document.querySelector("#btnCountInteger").onclick = function () {
    document.getElementById("countInteger").value = countInteger(arrSo);
};

//10. Compare positive and negative
//input array output: result > < of that 2 component
function comparePositiveNegative(array) {
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positive++;
        } else if (array[i] < 0) {
            negative++;
        }
    }
    if (positive > negative) {
        return ">";
    } else if (positive < negative) {
        return "<";
    } else {
        return "=";
    }
}
document.querySelector("#btnCompare").onclick = function () {
    document.getElementById(
        "comparePositiveNegative"
    ).value = `Số dương ${comparePositiveNegative(arrSo)} Số âm `;
};
