function calcSum() {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)
    const res = document.getElementById("result");
    res.innerHTML= "Sum is "+ (num1 + num2)  
    console.log(num1+num2)
}