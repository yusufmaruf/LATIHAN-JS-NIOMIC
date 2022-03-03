//mengambil data pertama pada array
function arrayshift() {
    var nama = ['misel', 'alpha', 'samuel'];
    console.log(nama)
    console.log("=====================")
    var nama2 = nama.shift()
    console.log(nama2)
    return nama
}
console.log(arrayshift());