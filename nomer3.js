function drawImage(number) {
    if (number % 2 == 0) {
        console.log("Angka harus ganjil!");
    } else {
        let middle = Math.round(number / 2);

        for (let i = 1; i <= number; i += 2) {
            for (let k = 0; k < ((number - middle) - i / 2); k++) {
                document.write('=  ');
            }
            for (let j = 0; j < i; j++) {
                document.write('@');
            }
            for (let l = 0; l < ((number - middle) - i / 2); l++) {
                document.write('=  ');
            }
            document.write('<br/>');
        }

        for (let i = number - 2; i >= 1; i -= 2) {
            for (let k = 0; k < ((number - middle) - i / 2); k++) {
                document.write('=  ');
            }
            for (let j = 0; j < i; j++) {
                document.write('@');
            }
            for (let l = 0; l < ((number - middle) - i / 2); l++) {
                document.write('=  ');
            }
            document.write('<br/>');
        }
    }
}

drawImage(7);