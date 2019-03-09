function drawImage(number) {
    if (number % 2 == 0) {
        console.log("Angka harus ganjil!");
    } else {
        let middle = Math.round(number / 2);
        let minusMiddle = middle - 1;
        let plusMiddle = middle + 1;

        //outer loop
        for (let i = 1; i <= number; i++) {
            //inner loop
            for (let j = 1; j <= number; j++) {
                if (j == middle || i == middle) {
                    document.write('*');
                } else if ((i != 1 && i != 5) && j == minusMiddle) {
                    document.write('*');
                } else if ((i != 1 && i != 5) && j == plusMiddle) {
                    document.write('*');
                } else {
                    document.write('=');
                }
            }
            document.write('<br/>');
        }
    }
}

drawImage(5);