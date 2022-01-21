var teks = "kasur"
var x = 0

if (typeof teks == "string") {
    x = teks.length - 1;
    console.log("Algoritma Biasa:")
    printPalindrom(teks, x, cekPalindrom)
    console.log("Method bawaan javascript:")
    printPalindromJavascript(teks, cekPalindrom)
} else {
    console.log("Kata harus berupa huruf")
}

// Palinfrom menggunakan algoritma biasa
function printPalindrom(kata, x, callback) {
    var hasil = ""
    while (x >= 0) {
        hasil = hasil + kata[x]
        x = x - 1
    }
    callback(kata, hasil)
}

// Palindrom menggunakan method bawaan javascript
function printPalindromJavascript(kata, callback) {
    var hasil = ""
    var arrKata = kata.split("")
    hasil = arrKata.reverse().join("");
    callback(kata, hasil)
}

function cekPalindrom(kata, hasil) {
    if (kata == hasil) {
        console.log("Palindrom")
    } else {
        console.log("Bukan Palindrom")
    }
}