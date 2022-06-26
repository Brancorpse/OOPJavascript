// iniciando projeto de POO com javascript e Node

// Criando  Factory

function createCircle(radius){
    return {
        draw: function(){
            console.log('draw');
        }
    }
}
// criando objeto, enviando parâmetro para o factory
const circle = createCircle(1);

circle.draw();

// Outro método de criar objeto é usando constructors
// Não usamos conceitos de classes no javascript
// implentado também a Abstração, com funções privadas

function Circle(radius) {
     
    this.radius = radius;
    // para mudar propriedades e funções para privado, mude-as para variáveis
    let defaultLocation = {x: 0, y: 0};
    
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        
        console.log('draw');        
        
    };
    Object.defineProperty(this, 'defaultLocation', {
      get: function() {
        return defaultLocation();
      },
      set: function(value) {
        if (!value.x || !value.y)
          throw new Error('Localização Inválida. ');
          
        defaultLocation = value;

      }    
    });

}



// instanciando objeto do constructor
const another = new Circle(10); 
another.getDefaultLocation();
another.draw();

// Criando outra chamada

Circle.call({}, 1);
// enviando arrays para a função
Circle.apply({}, [1, 2, 3]);
circle.draw();

const again = new Circle(1);

// Primitivos e referências

let obj = {value: 10};
function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

// a funçao roda devido o valor ser instanciado como objeto no começo
 
// adicionado e removendo propriedades 

circle.location = {x: 1};
// outra forma de add proprieade abaixo:
// circle['location'] = { x: 1};
// deletando propriedade
delete circle.location;

// Enumerando proprieades usando loop

for (let key in circle){
    console.log(key);
}
// outra forma de enumerar propriedades

const keys = Object.keys(circle);
console.log(keys);

// usando if

if ('radius' in circle) 
    console.log('circle has a radius');


// Exercício do relógio

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if (running)
          throw new Error('relógio já está rodando');
        running = true;  
        startTime = new Date();

    };
    this.stop = function(){
        if (!running)
          throw new Error('Relógio não começou');
        running = false;
        endTime = new endTime();  
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;

    };
    Object.defineProperty(this, 'duration', {
        get: function() {return duration; }
    });

}

const relogio = new Stopwatch();

