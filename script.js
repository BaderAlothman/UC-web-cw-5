alert("مرحبا بك في موقعي الذي سيحسب درجاتك ") ;             
let grade = prompt("اكتب درجتك");


if (grade>90) {
    console.log("امتياز");
}else if (grade<90) {
    console.log("جيد جدا");
}else if (grade<80){
    console.log("جيد");
}else if (grade<70){
    console.log ("مقبول");
}else if (grade<60){
    console.log ("ضعيف");
}else {
    console.log ("راسب");
}

// java script