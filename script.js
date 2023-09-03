function agregar(valor) {
    document.getElementById('pantalla').value += valor
}
//Borra y calcular no reciben parametros
function limpiar(){
    document.getElementById('pantalla').value = ' '
}
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}