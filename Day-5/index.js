//return mengubah suatu function menjadi value yang di return

// function kali(a,b){
//     return a*b
// }

// console.log(kali(5,2))

var string = 'abcdefg'

function hapusvokal(a) {
    var x = a.replace(/[aiueo]/gi, '')

    return x
}
console.log(hapusvokal('hAlo namaku bEntO'))

function parkir(p) {
    let i = 1
    var total = 0
    while (i <= p) {
        if (i <= 2) {
            total += 2000
        } else {
            total += 500
        }
        i++
    }
    return total
}
console.log(parkir(4) + " Rupiah")

function ganjilgenap(bil) {
    var nilai
    if (bil % 2 == 0) {
        nilai = "Bilangan anda Genap"
    } else {
        nilai = "Bilangan anda Ganjil"
    }
    return nilai
}
console.log(ganjilgenap(7))


function maxNumber(a, b, c) {
    var m = Math.max(a, b, c)
    return m
}
console.log(maxNumber(200, 350, 10))

function filterString(f) {
    var filter = f.filter(Number)
    return filter
}
console.log(filterString(['Galau', 7, 2, 'Doraemon', 'Meja', 'Leci', 9]))

function removeChar(r) {
    var remove = r.slice(1, (r.length - 1))
    return remove
}
console.log(removeChar('Gak kuat akutuh'))




//  var buah='apel,kiwi,jeruk,nanas'
// var halo='halo halo bandung'

// console.log(string.indexOf('d'))
// console.log(string.lastIndexOf('d'))
// console.log(tulisan.trim())
// console.log(tulisan.trim().indexOf('h'))
// console.log(buah.slice(6,10))
// console.log(buah.slice(6))
// console.log(buah.replace(/apel/g,'melon'))

// console.log(halo.replace(/[aiueo]/gi,''))

// var arrBuah=['jeruk','apel','kiwi','nanas']
// console.log(arrBuah.toString())
// console.log(arrBuah.join(' '))
// arrBuah.push('mangga')
// arrBuah.pop()
// console.log(arrBuah)