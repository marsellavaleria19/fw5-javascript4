var teks = "kasur" // inisialisai variabel teks dengan kata "kasur"
var x = 0 // inisialisai variabel x dengan 0

if (typeof teks == "string") { // cek apakah isi dari variabel teks adalah string
    // kondisi jika isi variabel teks adalah string
    x = teks.length - 1; // variabel x diisi dengan jumlah teks dikurangi 1
    console.log("Algoritma Biasa:")
    printPalindrom(teks, x, cekPalindrom) // output : Bukan Palindrom
    console.log("Method bawaan javascript:")
    printPalindromJavascript(teks, cekPalindrom) // output : Bukan Palindrom
        /* fungsi printPalindrom proses didalamnya memakai algoritma biasa.
        fungsi printPalindromJavascript : proses didalamnya memakai method bawaan javascript */
} else { // kodisi jika isi variabel teks bukan stribg 
    console.log("Kata harus berupa huruf") // output : Kata harus berupa huruf
}

// Palinfrom menggunakan algoritma biasa
function printPalindrom(kata, x, callback) { //inisialisasi fungsi dengan parameter kata, x dan callback 
    var hasil = "" // inisialisai variabel hasil dengan string kosong
    while (x >= 0) { // melakukan perulangan dengan while selama parameter x lebih besar dari atau sama dengan 0
        hasil = hasil + kata[x] // variabel kata ke-x ditambahkan ke variabel hasil.
        x = x - 1 // variabel x dikurangi satu
    }
    callback(kata, hasil) // panggil parameter callback berupa function dengan memasukkan kata dan hasil sebagai parameter.
}

// Palindrom menggunakan method bawaan javascript
function printPalindromJavascript(kata, callback) { // inisialisai fungsi dengan paratmeter kata, dan callback
    var hasil = "" // inisialsi variabel hasil dengan string kosong
    var arrKata = kata.split("") // memecah parameter kata menjadi array dengan menggunakan method split dan dipisah berdasarkan string kosong dan ditampung di variabel arrKata 
    hasil = arrKata.reverse().join("");
    //variabel arrKata direverse agar array yang ada di dalam variabel kata terbalik. Lalu digabung dengan menggunakan method join dengan pemisah string kosong 

    callback(kata, hasil) // parameter callback yang berupa fungsi dengan memasukkan variabel kata dan hasil sebagai parameter.
}

function cekPalindrom(kata, hasil) { //inisialisai fungsi dengan parameter kata dan hasil
    if (kata == hasil) { // cek apakah isi parameter kata sama dengan parameter hasil 
        console.log("Palindrom") // jika sama output : 'Palindrom'
    } else { // jika tidak sama, output : 'Bukan Palindrom'
        console.log("Bukan Palindrom")
    }
}