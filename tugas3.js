function devideAndSort(number) { // inisialisai fungsi dengan parameter number
    var arrNumber = ""; // inisialisasi variabel arrNumber dengan string kosong
    var temp = [] // inisialisasi variabel temp dengan array kosong
    var hasil = "" // inisialisai variabel hasil dengan string kosong
    if (typeof(number) == "number") { // cek apakah parameter number tipenya number
        arrNumber = String(number) // ubah parameter number menjadi string dan masukkan ke variabel arrNumber 
        for (var i = 0; i <= arrNumber.length; i++) {
            /* melakukan perulangan for dengan variabel i diinisialisai dengan 0,
            kodisi i lebih kecil dari atau sama dengan panjang dari variabel arrNumber,
            dan i ditambah dengan satu */
            if (arrNumber[i] && arrNumber[i] !== "0") { // cek apakah arrNumber ke -i ada nilainya dan arrNumber ke-i tidak sama dengan 0
                temp += arrNumber[i] // arrNumber ke-i ditambahkan ke variabel temp
            }
            if (arrNumber[i] == "0") { // cek apakah arrNumber ke-i sama dengan 0
                // jika benar
                hasil += sorting(temp)
                    /* panggil fungsi sorting dengan memasukkan variabel temp sebagai paramter dan hasil kembaliannya dimasukkan ke variabel string 
                    contoh : 555669 */
                temp = "" // variabel temp diubah menjadi string kosong
            }
            if (i == arrNumber.length) { // cek apah variabel i sama dengan panjang string di variabel arrNumber
                hasil += sorting(temp)
                    /* panggil fungsi sorting dengan memasukkan variabel temp sebagai paramter dan hasil kembaliannya dimasukkan ke variabel string 
                contoh : 555669 */
                temp = "" // variabek temp dibubah menjadi string kosong
            }
        }
    }
    console.log(hasil) // output : 55566914566956
}
var angka = 5956560159466056
devideAndSort(angka) // output : 55566914566956

function sorting(arrNumber) { // inisialisasi fungsi sorting dengan parameter arrNumber
    var min = 0 // inisialisai variabel min dengan 0
    var temp = 0 // inisialisasi varibael temp dengan 0
    var hasil = "" // inisialisai variabel hasil dengan string kosong
    var angka = [] // inisialisasi variabel angka dengan array kosong
    for (var i = 0; i < arrNumber.length; i++) {
        /* melakukan perulangan for dengan variabel i diinisialisai dengan 0,
         kodisi i lebih kecil dari atau sama dengan panjang dari variabel arrNumber,
         dan i ditambah dengan satu */
        angka[i] = Number(arrNumber[i]) // arrNumber ke - i diubah tipenya menjadi number dan dimasukkan ke variabel angka 
    }
    for (var i = 0; i < angka.length - 1; i++) {
        /* melakukan perulangan for dengan variabel i diinisialisai dengan 0,
         kodisi i lebih kecil dari atau sama dengan jumlah data pada array angka dikurangi 1,
         dan i ditambah dengan satu */
        min = i // variabel min diubah menjadi i
        for (var j = i + 1; j < angka.length; j++) {
            /* melakukan perulangan for dengan variabel j diinisialisai dengan variabel i ditambah 1,
            kodisi j lebih kecil dari jumlah data pada array angka,
            dan j ditambah dengan satu */
            if (angka[j] < angka[min]) { // cek apakah angka ke-j lebih kecil dari angka ke-min
                min = j // variabel min diganti dengan variabel j
            }
        }
        temp = angka[min]; // variabel temp diganti dengan variabel angka ke-min
        angka[min] = angka[i] // angka ke-min diganti dengan angka ke-i
        angka[i] = temp // angka ke-i diganti dengan variabel temp
    }

    for (i = 0; i < angka.length; i++) {
        /* melakukan perulangan for dengan variabel i diinisialisai dengan 0,
         kodisi i lebih kecil dari jumlah data pada array angka,
         dan i ditambah dengan satu */
        hasil += angka[i] // angka ke-i ditambahkan ke variabel hasil
    }
    return hasil // mengembalikan isi dari variabel hasil
        /* 
        contoh : 2143
         1 2 4 3  -> i = 0 j = 1
         angka[min] = 2,angka[j]= 4 dan 3 
         1 2 4 3 -> i = 1 j = 2
         angka[min] = 4 dan angka[j] = 3
         1 2 3 4 -> i = 2 j = 3   */
}

// ALGORITMA BAWAAN JAVASCRIPT
function devideAndSortJavascript(angka) { // inisialisai fungsi dengan parameter angka
    var arrNumber = []; // inisialisasi variabel arrNumber dengan array kosong
    var temp = [] // inisialisasi variabel temp dengan array kosong
    var hasil = [] // inisialisai variabel hasil dengan array kosong
    if (typeof angka == "number") { // cek apakah parameter angka berupa number
        // jika benar
        arrNumber = angka.toString().split("0") // parameter angka dijadikan string dengan method toString dan dipisah dengan method split berdasarkan string angka '0'
            // array : ['595656','159466','56']
    }
    temp = arrNumber.map((data) => { // data arrNumber diolah dengan method map yang didalamnya terdapat function dengan parameter data
            var tempAngka = data.toString().split("")
                /* inisialisai variabel tempAngka dengan parameter data diubah ke string dengan method toString dan di pisah dengan method split berdasaekan string kosong.
                Lalu dimasukkan ke variabel tempAngka.
                isi variabel tempAngka : ['5','9','5','6','5','6'] */
            var dataAngka = tempAngka.map((data) => { // variabel dataAngka diolah dengan method map yang didalamnya terdapat function dengan parameter data
                return parseInt(data); // mengembalikan data dari tipe string menjadi integer dan dimasukan ke variabel dataAngka
            })
            dataAngka.sort((a, b) => { // variabel dataAngka diurutkan dengan menggunakan method sort dan didalamnya dibuat arrow function dengan parameter a dan b 
                    return a - b // mengembalikan hasil pengurangan parameter a dan b 
                })
                /* jika hasilnya kurang dari 0, maka parameter a yang diurutkan terlebih dahulu. 
        Jika hasilnya lebih dari 0, maka paramter b yang akan diurutkan terlebih dahulu. 
        Jika hasilnya 0, tidak ada yang akan diurutkan */
            return dataAngka // mengembalikan variabel dataAngka dan dimasukkan ke variabel temp
        })
        // array pada dataAbgka : [[5,5,5,6,6.9],[1,4,5,6,6,9],[5,6]]
    hasil = temp.map((data) => { // data temp diolah dengan method map yang didalamnya terdapat function dengan parameter data
            return data.join("") // mengembalikan parameter data yang telah digabung dengan menggunakan method join dengan memakai string kosong
        })
        // array pada hasil : ['555669','145669','56']
        // lalu array hasil digabung dengan method join dengan string kosong("")
    console.log(hasil.join("")) // output : '55566914566956
}

devideAndSortJavascript(angka) // // output : '55566914566956