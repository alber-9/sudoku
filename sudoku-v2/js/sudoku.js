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
        this.oculta=new Array(81);
        this.nuevo(mezclas);
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
        
        let diferencia =b-a;
        let cont=a*9;
        for (let i = 0; i < 9; i++) {
            let temp = this.datos[cont];
            this.datos[cont] = this.datos[cont + 9];
            this.datos[cont + 9] = temp;
            cont += 1;  // Incrementar en 9 para pasar a la siguiente columna
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
                //onsole.log(i+constador);
            }
            //console.log(serie);
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
            //console.log(serie);
            this.columnas[a]=serie.slice();
            constador+=9;
        }
    }
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
       // console.log(this.miniSudoku)
    }

    recorre(valor){
        let cont=0
        let serie=[];
        for (let a = 0 ; a < 3 ; a++){
            
            for (let i = 0 ; i < 3 ; i++){

                serie[cont++]=valor+i;
            }
            valor=serie[cont-1]+7;
        }
        //console.log(serie);
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
    guardar(){
        this.validadColumnas();
        this.validadFilas();
        this.validadMini();
    }
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
    
            if (celda.innerHTML != '') {
                celda.classList.add("fijo");
            } else {
                celda.classList.add("editable");
            }
        }
    }
    recarga() {
        for (let i = 0; i < 81; i++) {
            document.getElementById('td' + i).innerText = this.oculta[i];
        }
        
    }
    capaOculta(numero){
        return this.oculta[numero];
    }

    estaResuelto() {
        // debe devolver true o false

       
    }
}


const miSudoku = new Sudoku();

miSudoku.muestra(0.5);
miSudoku.guardar();

function nuevoSudoku(evento) {
    evento.preventDefault();
    miSudoku.nuevo();
    let seleccion = document.getElementById('seleccion').value;
    
    for (let i = 0; i < 81; i++) {
        let celda = document.getElementById('td' + i);
        celda.classList.remove("seleccionado", "pulsado");
    }
}
//poner el color que tocas
function establecerColorDeFondo(idElemento) {
    var elemento = document.getElementById(idElemento);
    
    //if (elemento) {
        elemento.classList.add("seleccionado");
  //  } else {
     //   console.error('Elemento no encontrado con el ID: ' + idElemento);
    //}
}

let celdaUltimoFoco = -1;
let celdaUltimoFocoOculto = -1;

function ponerColor(dato){
    let vFila=miSudoku.encuentraValorEnEstructura(dato, "filas");
    let vColumnas=miSudoku.encuentraValorEnEstructura(dato, "columnas");
    let vMini=miSudoku.encuentraValorEnEstructura(dato, "miniSudoku");
    //let varidar=vFila.concat(vColumnas,vMini);
    // borrar toda las clase con ese nombre
    
    if (vFila && vColumnas && vMini) {
        let varidar = vFila.concat(vColumnas, vMini);
        for (let i = 0; i < varidar.length; i++) {
            establecerColorDeFondo("td" + varidar[i]);
            
        }
    } else {
        console.error('No se pudo encontrar el valor en las estructuras.');
    }
}
function clickEnTabla(evento) {
    if (evento.target.id.charAt(0) != 't' || evento.target.id.charAt(1) != 'd')
        return;
    console.log("click en el id: " + evento.target.id);
    console.log("último foco en " + celdaUltimoFoco);
    // borrar toda las clase con ese nombre
    for (let i = 0; i < 81; i++) {
        let celda = document.getElementById('td' + i);
        celda.classList.remove("seleccionado", "pulsado");
    }
    let numero = parseInt(evento.target.id.charAt(2) + evento.target.id.charAt(3));
    if (!evento.target.classList.contains("fijo")){
     //   ponerColor(numero);
        document.getElementById(evento.target.id).classList.add("pulsado");
    }
    if (celdaUltimoFoco != -1) {
    document.getElementById(celdaUltimoFoco).classList.remove("gamehighlighttd");
    //para mostrar la tabla que pueda eligir el numero a colocar
    var tablaOculta = document.getElementById('tablaOculta')
    
    const editable = evento.target.classList.contains("editable");
    console.log(editable)
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
    
    
    console.log("click en el id: " + evento.target.id);
    //console.log("último foco en " + celdaUltimoFoco);
    console.log("*"+miSudoku.oculta[celdaUltimoFoco.charAt(2)+celdaUltimoFoco.charAt(3)]+"----");
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

document.getElementById('nuevoSudoku').addEventListener('click', nuevoSudoku);

document.getElementById('playtable').addEventListener('click', clickEnTabla);
document.getElementById('tablaOculta').addEventListener('click', Oculta);
