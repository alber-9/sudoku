class Sudoku {
    constructor(mezclas = 30) {
        this.datos = [/*
            1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 2, 2,
            3, 3, 3, 3, 3, 3, 3, 3, 3,
            4, 4, 4, 4, 4, 4, 4, 4, 4,
            5, 5, 5, 5, 5, 5, 5, 5, 5,
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            1, 2, 3, 4, 5, 6, 7, 8, 9,
            1, 2, 3, 4, 5, 6, 7, 8, 9
*/
            9,	2,	3,	8,	6,	1,	7,	4,	5,
            5,	4,	1,	2,	7,	9,	3,	8,	6,
            7,	6,	8,	4,	3,	5,	2,	9,	1,
            2,	8,	6,	7,	5,	3,	4,	1,	9,
            3,	7,	9,	6,	1,	4,	8,	5,	2,
            4,	1,	5,	9,	2,	8,	6,	3,	7,
            1,	9,	2,	3,	4,	7,	5,	6,	8,
            8,	3,	7,	5,	9,	6,	1,	2,	4,
            6,	5,	4,	1,	8,	2,	9,	7,	3
        ];
        //tablero oculto
        this.oculta=new Array(81);
        this.nuevo(mezclas);
        //para hacer la comprobaciones
        this.filas=new Array(9);
        this.columnas=new Array(9);
        this.miniSudoku=new Array(9);
    }
    intercambiaFila(i = 10) {
        switch (i) {
            case 0:
                this.cambiaFilas(1, 2);
                break;
            case 1:
                this.cambiaFilas(0, 2);
                break;
            case 2:
                this.cambiaFilas(0, 1);
                break;
            case 3:
                this.cambiaFilas(4, 5);
                break;
            case 4:
                this.cambiaFilas(3, 5);
                break;
            case 5:
                this.cambiaFilas(3, 4);
                break;
            case 6:
                this.cambiaFilas(7, 8);
                break;
            case 7:
                this.cambiaFilas(6, 8);
                break;
            case 8:
                this.cambiaFilas(6, 7);
                break;
            default:
                this.intercambiaFila(Math.floor(Math.random() * 9));
                break;
        }
        this.muestra(0.75);
    }

    cambiaFilas(a, b) {
        // debes implementar este código
        //let diferencia =b-a;
        let cont=a*9;
        for (let i = 0; i < 9; i++) {
            let temp = this.datos[cont];
            this.datos[cont] = this.datos[cont + 9];
            this.datos[cont + 9] = temp;
            cont += 1;  
        }
        
    }

    intercambiaColumna(i = 10) {
        switch (i) {
            case 0:
                this.cambiaColumnas(1, 2);
                break;
            case 1:
                this.cambiaColumnas(0, 2);
                break;
            case 2:
                this.cambiaColumnas(0, 1);
                break;
            case 3:
                this.cambiaColumnas(4, 5);
                break;
            case 4:
                this.cambiaColumnas(3, 5);
                break;
            case 5:
                this.cambiaColumnas(3, 4);
                break;
            case 6:
                this.cambiaColumnas(7, 8);
                break;
            case 7:
                this.cambiaColumnas(6, 8);
                break;
            case 8:
                this.cambiaColumnas(6, 7);
                break;
            default:
                this.intercambiaColumna(Math.floor(Math.random() * 9));
                break;
        }
        this.muestra(0.75);
    }
    validadFilas(){
        ///para recorre todas arrays 
        let constador=0;
        for (let a = 0 ; a < 9 ; a++){
             ///parar rellenar arrays
             let serie=[];
            for (let i = 0 ; i < 9 ; i++){
                serie[i]=i+constador;
            }
            
            this.filas[a]=serie.slice();
            constador+=9;
        }
    }
    validadColumnas(){
        ///para recorre todas arrays 
       
        for (let a = 0 ; a < 9 ; a++){
             ///parar rellenar arrays 
             let constador=a;
             let serie=[];
            for (let i = 0 ; i < 9 ; i++){
                serie[i]=constador;
                
                constador+=9
            }
            
            this.columnas[a]=serie.slice();
            constador+=9;
        }
    }
    //recorre cada mini sudoku para validad 
    validadMini(){
        
        this.miniSudoku[0]=this.recorre(0);
        this.miniSudoku[1]=this.recorre(3);
        this.miniSudoku[2]=this.recorre(6);

        this.miniSudoku[3]=this.recorre(27);
        this.miniSudoku[4]=this.recorre(30);
        this.miniSudoku[5]=this.recorre(33);

        this.miniSudoku[6]=this.recorre(54);
        this.miniSudoku[7]=this.recorre(57);
        this.miniSudoku[8]=this.recorre(60);
       
    }
    //depediendo del valor reorre cada mini sudoku 
    recorre(valor){
        let cont=0
        let serie=[];
        for (let a = 0 ; a < 3 ; a++){
            
            for (let i = 0 ; i < 3 ; i++){

                serie[cont++]=valor+i;
            }
            valor=serie[cont-1]+7;
        }
        return serie;
    }

    cambiaColumnas(a, b) {
        // debes implementar este código
        let diferencia=b-a; 
        let cont=a
        for (let i = 0 ; i < 9 ; i++){
            let tem=this.datos[cont];
            this.datos[cont]=this.datos[cont+diferencia];
            this.datos[cont+diferencia]=tem;
            cont+=9;
        }
       
    }
    //para validad todo
    guardar(){
        this.validadColumnas();
        this.validadFilas();
        this.validadMini();
    }
    //buscar el valor que esta pulsado para guardalo la referencia 
    encuentraValorEnEstructura(valor, estructura) {
        let estructuraActual;
        let nombreEstructura;

        switch (estructura) {
            case 'filas':
                estructuraActual = this.filas;
                nombreEstructura = 'fila';
                break;
            case 'columnas':
                estructuraActual = this.columnas;
                nombreEstructura = 'columna';
                break;
            case 'miniSudoku':
                estructuraActual = this.miniSudoku;
                nombreEstructura = 'miniSudoku';
                break;
            default:
                throw new Error('Estructura no válida');
        }

        for (let i = 0; i < estructuraActual.length; i++) {
            if (estructuraActual[i].includes(valor)) {
                return estructuraActual[i];
            }
        }

        return null;
    }
    nuevo(mezclas = 10) {
        for (let i = 0; i < mezclas; i++) {
            this.intercambiaFila();
            this.intercambiaColumna();
        }
    }
    
    muestra(porcentaje = 1) {
        for (let i = 0; i < 81; i++) {
            let celda = document.getElementById('td' + i);

            celda.innerText = Math.random() < porcentaje ? this.datos[i] : '';
            this.oculta[i] = celda.innerHTML;   

            // Elimina las clases existentes 
            celda.classList.remove("fijo", "editable");
            //le pones clase y depediendo de si esta relleno o falta que rellenar 
            if (celda.innerHTML != '') {
                celda.classList.add("fijo");
            } else {
                celda.classList.add("editable");
            }
        }
    }
    //recarga laa tabla despues de meter un valor
    recarga() {
        for (let i = 0; i < 81; i++) {
            document.getElementById('td' + i).innerText = this.oculta[i];
        }
        
    }
   

    estaResuelto() {
        let varidar = this.filas.concat(this.columnas,this.miniSudoku);
        let tem=true;
        // debe devolver true o false
        for (let i = 0; i < varidar.length; i++) {
            let subarray = varidar[i];
            let subarrayOrdenado = [...subarray].sort();
            
            for (let j = 0; j < subarrayOrdenado.length; j++) {
                let elemento = subarrayOrdenado[j];
                if (document.getElementById('td' + elemento).innerText=== ''){
                    
                    tem=false;
                }
                
                
            }
           
        }
        if (tem){
        tem=true;
        
        }

        this.mensaje(tem);
        return tem;
    }

    mensaje(tem){
    alert("la compreobacion es: "+tem);
    }
}


const miSudoku = new Sudoku();

miSudoku.muestra(0.5);
miSudoku.guardar();

function nuevoSudoku(evento) {
    for (let i = 0; i < 81; i++) {
        let celda = document.getElementById('td' + i);
        celda.classList.remove("seleccionado", "pulsado","gamehighlighttd");
    }
    let tablaOculta = document.getElementById('tablaOculta')
    tablaOculta.style.display = 'none';
    evento.preventDefault();
    miSudoku.nuevo();
    let seleccion = document.getElementById('seleccion').value;
    miSudoku.muestra(seleccion);
    miSudoku.validadColumnas();
    miSudoku.validadFilas();
    miSudoku.validadMini();
}
//poner el color que tocas
function establecerColorDeFondo(idElemento) {
    var elemento = document.getElementById(idElemento);
    
    
        elemento.classList.add("seleccionado");
}

let celdaUltimoFoco = -1;
let celdaUltimoFocoOculto = -1;


function ponerColor(dato){
    let vFila=miSudoku.encuentraValorEnEstructura(dato, "filas");
    let vColumnas=miSudoku.encuentraValorEnEstructura(dato, "columnas");
    let vMini=miSudoku.encuentraValorEnEstructura(dato, "miniSudoku");
    
    
    if (vFila && vColumnas && vMini) {
        let varidar = vFila.concat(vColumnas, vMini);
        var lista = new Set();
        for (let i = 0; i < varidar.length; i++) {
            establecerColorDeFondo("td" + varidar[i]);
            let valor=document.getElementById("td" + varidar[i]).innerText
            if (valor!=''){ 
                lista.add(valor);
            }
           
        }
        // Ocultar celdas con valores duplicados
        for (let valor of lista) {
            for (let i = 0; i < 81; i++) {
                let celda = document.getElementById("td" + i);
                if (celda.innerText === valor) {
                    document.getElementById(valor).style.display = "none";
                }
            }
        }
    } else {
        console.error('No se pudo encontrar el valor en las estructuras.');
    }
}
function clickEnTabla(evento) {

    if (evento.target.id.charAt(0) != 't' || evento.target.id.charAt(1) != 'd')
        return; 

    document.getElementById("icono").classList.remove("gamehighlighttd");
    for (let i = 0; i < 81; i++) {
        let celda = document.getElementById('td' + i);
        celda.classList.remove("seleccionado", "pulsado");
        if(i>0 && i<10){
            
            document.getElementById(i).style.display = "table-cell";
        } 
    }
    let numero = parseInt(evento.target.id.charAt(2) + evento.target.id.charAt(3));
    if (!evento.target.classList.contains("fijo")){
        ponerColor(numero);
        document.getElementById(evento.target.id).classList.add("pulsado");
    }
    if (celdaUltimoFoco != -1) {
    document.getElementById(celdaUltimoFoco).classList.remove("gamehighlighttd");
    //para mostrar la tabla que pueda eligir el numero a colocar
    let tablaOculta = document.getElementById('tablaOculta')

    const editable = evento.target.classList.contains("editable");
    
    if (editable ){
        // Cambiar el estilo para mostrar la tabla
        tablaOculta.style.display = 'table';
        if (celdaUltimoFocoOculto != -1) 
        document.getElementById(celdaUltimoFocoOculto).classList.remove("gamehighlighttd");
    }
    else{
            // Cambiar el estilo para mostrar la tabla
            tablaOculta.style.display = 'none';
            if (celdaUltimoFocoOculto != -1) 
            document.getElementById(celdaUltimoFocoOculto).classList.remove("gamehighlighttd");
            
        }
    }
    
    evento.target.classList.add("gamehighlighttd");
    celdaUltimoFoco = evento.target.id;
}
function Oculta(evento) {
  
    if (evento.target.id==10){
        miSudoku.oculta[celdaUltimoFoco.charAt(2)+celdaUltimoFoco.charAt(3)]='';
    }else{
       miSudoku.oculta[celdaUltimoFoco.charAt(2)+celdaUltimoFoco.charAt(3)]=evento.target.id;
    }
    miSudoku.recarga();
    if (celdaUltimoFocoOculto != -1) {
        document.getElementById(celdaUltimoFocoOculto).classList.remove("gamehighlighttd");
       
    }
    evento.target.classList.add("gamehighlighttd");
    celdaUltimoFocoOculto = evento.target.id;
}
document.getElementById('tablaOculta').addEventListener('click', Oculta);
document.getElementById('nuevoSudoku').addEventListener('click', nuevoSudoku);

document.getElementById('playtable').addEventListener('click', clickEnTabla);
document.addEventListener('keydown', function (event) {
    // Verifica si la tecla presionada es un número del 1 al 9
    if (event.key >= '1' && event.key <= '9') {
        // Llama a la función con el valor numérico
        ponerNumero(parseInt(event.key));
    }
});

// Correcto: pasa la referencia de la función como segundo argumento

document.getElementById('comprobar').addEventListener('click', function () {
    
    miSudoku.estaResuelto();
    
});
document.getElementById('rendise').addEventListener('click', function () {
   
    for (let i = 0; i < 81; i++) {
        let celda = document.getElementById('td' + i);
        celda.classList.remove("seleccionado", "pulsado");
        document.getElementById('td' + i).innerText = miSudoku.datos[i];
    
    }
    //miSudoku.muestra(1);
   
});
//cuando pinche fuera de la tabla 
document.addEventListener('click', function(event) {
    // Verifica si el clic ocurrió fuera de la tabla
    const tabla = document.getElementById('playtable');
    const clicDentroDeTabla = tabla.contains(event.target);
    const tablaOcul = document.getElementById('tablaOculta');
    const clicDentroDeTablaOcul = tablaOcul.contains(event.target);

    // Si el clic no ocurrió dentro de la tabla, realiza las acciones que deseas
    if (!(clicDentroDeTabla || clicDentroDeTablaOcul)) {
        //quito el color de filas, columnas y minisudoku 
        for (let i = 0; i < 81; i++) {
            let celda = document.getElementById('td' + i);
            celda.classList.remove("seleccionado", "pulsado","gamehighlighttd");
        }//oculte la tabla de abajo 
        let tablaOculta = document.getElementById('tablaOculta')
        tablaOculta.style.display = 'none';
        // Puedes realizar las acciones que necesites aquí
    }
});
//document.getElementById('comprobar').addEventListener('click', miSudoku.estaResuelto());

function ponerNumero(numero) {
    if (celdaUltimoFoco != -1 && !document.getElementById(celdaUltimoFoco).classList.contains("fijo")) {
        document.getElementById(celdaUltimoFoco).innerText = numero;
    }
}
