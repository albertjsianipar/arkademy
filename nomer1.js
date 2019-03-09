function getBiodata(name, address, hobbies, is_married, school, skills) {
    let biodata = {
        name: name,
        address: address,
        hobbies: hobbies,
        is_married: is_married,
        school: school,
        skills: skills
    }

    return JSON.stringify(biodata);
}

getBiodata("Fajri", "Pondok Gede", ["Coding", "Reading", "Watching"], false, {"highschool": "SMAN 6 Bekasi", "university": "STMIK Bidakara"}, [ {"1": "javascript"}, {"2" :"java"}]);