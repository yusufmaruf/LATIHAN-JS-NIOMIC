//memasukan data kedalam array di posisi tengah
function fsplice() {
    var kota = ['Jakarta', 'Palembang', 'Surabaya', 'Pasuruan']
    console.log(kota)
    kota.splice(2, 0, 'Palembang') //2 untuk menempatkan posisi kedalam array
        //0 untuk data dindalam array selanjutnya tidak dihapus
    console.log(kota)
        //
        //selain itu splice array bisa digunakan untyuk menghapus data dalam aray misal
    kota.splice(2, 1) //mengahpus kata palembang
    return kota
}
console.log(fsplice())