let n1=document.getElementById("n1").addEventListener("click",numero1)
let n2=document.getElementById("n2").addEventListener("click",numero2)
let n3=document.getElementById("n3").addEventListener("click",numero3)
let n4=document.getElementById("n4").addEventListener("click",numero4)
let n5=document.getElementById("n5").addEventListener("click",numero5)
let n6=document.getElementById("n6").addEventListener("click",numero6)
let n7=document.getElementById("n7").addEventListener("click",numero7)
let n8=document.getElementById("n8").addEventListener("click",numero8)
let n9=document.getElementById("n9").addEventListener("click",numero9)
let n0=document.getElementById("n0").addEventListener("click",numero0)
let reset=document.getElementById("ce").addEventListener("click",resetear)
let suma=document.getElementById("s").addEventListener("click",suma)
let resta=document.getElementById("r").addEventListener("click",resta)
let multiplicacion=document.getElementById("m").addEventListener("click",multiplacion)
let divison=document.getElementById("d").addEventListener("click",division)
let resultado=document.getElementById("rs").addEventListener("click",resultado)
let num1
let num2
let operacion //guarda la operacion hasta que se resete los valores
let res 
let activado=false
function numero1() {
n1.innerContent
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+n1 //combina el valor del resultado y añade el valor de numero
}

function numero2() {
let numero=document.getElementById("n2").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function numero3() {
let numero=document.getElementById("n3").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function numero4() {
let numero=document.getElementById("n4").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function numero5() {
let numero=document.getElementById("n5").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function numero6() {
let numero=document.getElementById("n6").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function numero7() {
let numero=document.getElementById("n7").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function numero8() {
let numero=document.getElementById("n8").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function numero9() {
let numero=document.getElementById("n9").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function numero0() {
let numero=document.getElementById("n0").innerHTML
let numeroActual=document.getElementById("resultado").innerHTML //guarda el valor que hay en resultado
document.getElementById("resultado").innerHTML=numeroActual+numero //combina el valor del resultado y añade el valor de numero
}
function ce(){
 //borra el valor que hay en resultado
document.getElementById("resultado").innerHTML=""
}
function resetear(){
document.getElementById("resultado").innerHTML=""
num1 = 0
num2 = 0
operacion = " "
activado=false
res=0
}
function suma(){
num1 = document.getElementById("resultado").textContent
operacion = "+" //guarda valor para usarlo como opcion en resolver
ce()
}
function resta(){
num1 = document.getElementById("resultado").textContent
operacion = "-" //guarda valor para usarlo como opcion en resolver
ce()
}
function multiplacion(){
num1 = document.getElementById("resultado").textContent
operacion = "*" //guarda valor para usarlo como opcion en resolver
ce()
}
function division(){
num1 = document.getElementById("resultado").textContent
operacion = "/" //guarda valor para usarlo como opcion en resolver
ce()
}
function resultado(){
num2 = document.getElementById("resultado").textContent
resolver()
}



function resolver(){
switch(operacion){
case "+":

 if(activado==true){
let rs=res + parseFloat(num2)
document.getElementById("resultado").textContent =rs
console.log(rs)

 }
else{
  
  activado=true
}

break
case "-":
res = parseFloat(num1) - parseFloat(num2)
if(activado==true){
let rs=res - parseFloat(num2)
document.getElementById("resultado").textContent = rs
 }
else{

}
activado=true
break
case "*":
res = parseFloat(num1) * parseFloat(num2)
if(activado==true){
let rs=res*parseFloat(num2)
document.getElementById("resultado").textContent = rs
 }
else{}
activado=true
break
case "/":
res = parseFloat(num1) / parseFloat(num2)
break
}
document.getElementById("resultado").textContent = res

}