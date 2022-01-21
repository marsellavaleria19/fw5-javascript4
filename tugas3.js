function devideAndSort(number) {
    var arrNumber = "";
    var temp = []
    var hasil = ""
    if (typeof(number) == "number") {
        arrNumber = String(number)
        for (var i = 0; i <= arrNumber.length; i++) {
            if (arrNumber[i] && arrNumber[i] !== "0") {
                temp += arrNumber[i]
            }
            if (arrNumber[i] == "0") {
                hasil += sorting(temp)
                temp = ""
            }
            if (i == arrNumber.length) {
                hasil += sorting(temp)
                temp = ""
            }
        }
    }
    console.log(hasil)
}
var angka = 5956560159466056
devideAndSort(angka)

function sorting(arrNumber) {
    var min = 0
    var temp = 0
    var hasil = ""
    var angka = []
    for (var i = 0; i < arrNumber.length; i++) {
        angka[i] = Number(arrNumber[i])
    }
    for (var i = 0; i < angka.length; i++) {
        min = i
        for (var j = i + 1; j < angka.length; j++) {
            if (angka[j] < angka[min]) {
                min = j
            }
        }
        temp = angka[min];
        angka[min] = angka[i]
        angka[i] = temp
    }

    for (i = 0; i < angka.length; i++) {
        hasil += angka[i]
    }
    return hasil
}

// ALGORITMA BAWAAN JAVASCRIPT
function devideAndSortJavascript(angka) {
    var arrNumber = [];
    var temp = []
    var hasil = []
    if (typeof angka == "number") {
        arrNumber = angka.toString().split("0")
    }
    temp = arrNumber.map((data) => {
        var tempAngka = data.toString().split("")
        var dataAngka = tempAngka.map((data) => {
            return parseInt(data);
        })
        dataAngka.sort((a, b) => { return a - b })
        return dataAngka
    })
    hasil = temp.map((data) => {
        return data.join("")
    })

    console.log(hasil.join(""))
}

devideAndSortJavascript(angka)