// var arrayku = ['Luffy','Zoro','Sanji','Brook']


// function repIncludes(cek, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (cek == arr[i]) {
//             return true
//         }
//     }
//     return false
// }


// console.log(repIncludes('Zoro', arrayku))

// var array = ['Seto', 'Andi', 'Naruto', 'Popok']

// function repIndexOf(cek, arr) {
//     for ( i = 0; i < arr.length; i++) {
//         if (cek == arr[i]) {
//             return i
//         }
//     }
//     return -1

// }
// console.log(repIndexOf('Naruto', array))

// var arr2D=[7,'Sasuke',[3,'Naruto']]

// console.log(arr2D)

// function bebas(){
//     function e(){
//         return [7,3,2,[9,4,5]]
//     }
// }

// var me ={
//         nama;{
//             depan:'Maxstien '
//             belakang:'Hosang,
//         },
//     pekerjaan : 'Mahasiswa Purwadhika',
//     hobby : 'Badminton',

//     namafull: function () {
//         return this.nama.depan+' '+this.nama.belakang
//     }
// }





function sumFn (x) {
    let sumPositive = 0
    let sumNegative = 0

    for (let i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            sumPositive += x[i]
        } else {
            sumNegative += x[i]
        }
    }
    return [sumPositive, sumNegative]
}

console.log(sumFn([2, 8, -7, -8, 5, -3]));


function sumFn (x) {
    let sumPositive = 0
    let sumNegative = 0

    for (let i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            sumPositive += x[i]
        } else {
            sumNegative += x[i]
        }
    }
    return [sumPositive, sumNegative]
}
// function reversekata(inputString){
//     return inputString.split
//     inputString("").reverse("").join("");

// }
// console.log(reversekata("Ocang"))