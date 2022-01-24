var teks = "kode asik" // inisialisai variabel teks dengan angka 123
var jumlahKata = 0 // inisialisasi variabel jumlahKata dengan angka 0

if (typeof teks == "string") { // cej apakah isi variabel teks adalah string 
    // jika benar isi variabel teks adalah string
    jumlahKata = teks.length; // jumlah teks dimasukkan ke variabel jumlahKata
    console.log("Algoritma Biasa:")
    printReserveWord(teks) // output : asik kode 
    console.log("Method bawaan javascript:")
    printReserveWordJavascript(teks) // output : 'asik kode'
} else { // jikq salah
    console.log("Kata harus berupa huruf") // output : 'Kata harus berupa huruf'
}

// Reserve Word menggunakan algoritma biasa
function printReserveWord(kalimat) { // inisialisai fungsi dengan parameter kalimat
    var hasil = "" // inisialisai variabel hasil dengan string kosong
    var i = 0 // inisialisai variabel i dengan 0
    var kata = "" // inisialisasi variabel kata dengan string kosong
    while (i <= jumlahKata) { // melakukan perulangan dengan while selama variabel i lebih kecil dari atau sama dengan variabel jumlahKata
        if (kalimat[i]) { // jika kalimat ke-i ada nilainya
            kata = kata + kalimat[i] // kalinat ke-i ditambahkan ke variabel kata
        }
        if (kalimat[i] == " ") { // jika kalimat ke-i berupa spasi
            hasil += kata // variabel kata ditambahkan ke variabel hasil 
            kata = "" // variabel kata diganti dengan string kosong
        }
        if (i == jumlahKata) { // jika variabel i sama dengan variabel jumlahKata
            hasil = kata + " " + hasil // variabel kata ditambahkan ke variabel hasil dengan spasi dan variabel hasil yang telah ditambahkan sebelumnya
        }
        i++ // variabel i ditambah satu.
    }
    console.log(hasil) // output : 'asik kode'
}

// Reserve word menggunakan method bawaan javascript
function printReserveWordJavascript(kata) { // inisialiasi fungsi dengan parameter kata
    var hasil = "" //  inisialisasi variabel hasil dengan string kosong
    var arrKata = kata.split(" ")
        /*inisalisasi variabel arrKata dengan parameter kata yang telah dipecah menjadi array dengan menggunakan method split dan dipisah berdasarkan spasi. 
        isi array : ['kode','asik']*/
    hasil = arrKata.reverse().join(" ") // variabel arrKata di balik dengan menggunakan method reserve, lalu gigabung menjadi string dengan method join dengan menggunakan spasi.
    console.log(hasil) // output : 'asik kode'
}