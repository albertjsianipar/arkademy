function isPasswordValid(password) { 
    if (password.length == 8 && /[0-9]/.test(password) && /[a-z]/.test(password)) {
         console.log(true);
     } else {
         console.log(false);
     }
 }
 
 isPasswordValid('tgby7654');