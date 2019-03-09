function hitungKembalian(total_belanja, uang) {
    let kembali = uang - total_belanja;

    let duaPuluhRibu = Math.floor(kembali / 20000);
    let sisa = kembali % 20000;
    let sepuluhRibu = Math.round(sisa / 10000);
    sisa = sisa % 10000;
    let duaRibu = Math.round(sisa / 2000);
    sisa = sisa % 2000;
    let limaRatus = Math.round(sisa / 500);

    console.log(duaPuluhRibu + " x 20000" + "\n" + sepuluhRibu + " x 10000" + "\n" + duaRibu + " x 2000" + "\n" + limaRatus + " x 500");
}

hitungKembalian(15500, 50000);