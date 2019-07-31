class Musisi {
    constructor(nama, laguHits, genre) {
        this.nama = nama,
            this.lagu = laguHits,
            this.genre = genre
    }
}

function CetakanMusik(nama, laguHits, genre) {
    return {
        nama: nama,
        lagu: laguHits,
        genre: genre
    }
}

// var cetak = CetakanMusik('nella kharisma','ditinggal rabi','dubstep')
// console.log(cetak)

// var musikKu = new Musisi('via vallen','bojokugalak','rock')
// console.log(musikKu)

class Mobil {
    constructor(warna, tipe, merek, tahun) {
        this.color = warna,
            this.type = tipe,
            this.brand = merek,
            this.year = tahun
    }
}

function tampilMobil(data) {
    var x = ''
    for (let i = 0; i < data.length; i++) {
        x += ('warna mobil : ' + data[i].color + ',' + 'tipe mobil : ' + data[i].type + ',' + 'merek mobil: ' + data[i].brand + ',' + 'tahun mobil: ' + data[i].year + '\n')
    }
    return x

}

var mobilbaru = tampilMobil('Hitam', 'sedan', 'toyota', '2003')
var data = [
    new Mobil('Hitam', 'sedan', 'toyota', '2003'),
    new Mobil('Merah', 'jeep', 'yamaha', '1930'),
    new Mobil('Grey', 'SUV ', 'Honda', '2019')
]

// console.log(tampilMobil(data))
// console.log(mobilbaru)


function median(values) {

    values.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];
    else
        return (values[half - 1] + values[half]) / 2;
}

var list1 = [20, 5, 100, 4, 23, 7, 2];
console.log(median(list1))