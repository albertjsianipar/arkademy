function hitungParkir(jam) {
    let counter = 2;
    let biaya = 0;

    if (jam == 1) {
        biaya = 2000;
    } else if (jam == 2) {
        biaya = 4000;
    } else {
        biaya = 4000;
        while (counter < jam) {
            counter++;
            if (biaya > 10000) {
                biaya = 10000;
            } else {
                biaya += 1000;
            }
        }
    }
    console.log(biaya);
}

hitungParkir(8);