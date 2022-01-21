var teks = 123
var jumlahKata = 0

if (typeof teks == "string") {
    jumlahKata = teks.length;
    console.log("Algoritma Biasa:")
    printReserveWord(teks)
    console.log("Method bawaan javascript:")
    printReserveWordJavascript(teks)
} else {
    console.log("Kata harus berupa huruf")
}

// Reserve Word menggunakan algoritma biasa
function printReserveWord(kalimat) {
    var hasil = ""
    var i = 0
    var kata = ""
    while (i <= jumlahKata) {
        if (kalimat[i]) {
            kata = kata + kalimat[i]
        }
        if (kalimat[i] == " ") {
            hasil += kata
            kata = ""
        }
        if (i == jumlahKata) {
            hasil = kata + " " + hasil
        }
        i++
    }
    console.log(hasil)
}

// Reserve word menggunakan method bawaan javascript
function printReserveWordJavascript(kata) {
    var hasil = ""
    var arrKata = kata.split(" ")
    hasil = arrKata.reverse().join(" ")
    console.log(hasil)
}