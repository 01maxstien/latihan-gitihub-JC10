var arrItem=['Jeruk','Apel','Leci']
var arrPrice=[3000,7000,1000]



function tambahItem(item,harga){
    var menu=''
    arrItem.push(item)
    arrPrice.push(harga)

    for(let i = 0; i < arrItem.length; i++){
        menu +=(i+1)+'.'+arrItem[i]+' Rp.'+arrPrice[i]+'\n'
    }
    return menu
}

var arrTempat=['Medan','bandung','jakarta','manado','jayapura']
var arrKode=[4,34,3,21,5]

function hapusItem(pos){
    var hapus=''
    arrTempat.splice(arrKode.indexOf(pos),1)
    arrKode.splice(arrKode.indexOf(pos),1)

    console.log(arrTempat)
    console.log(arrKode)
}

function tampilItem(pos){
   var x = arrTempat.indexOf(pos)

   console.log('Kota anda: '+ arrTempat[x]+'\n'+' kode pos: '+ arrKode[x])
}
// console.log(menu)
// console.log(tambahItem('mangga',12000))
// console.log(hapusItem('bandung'))
tampilItem('jakarta')
