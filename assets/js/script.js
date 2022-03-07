(function main(){
    function createCalculator(){
        return {
            display: document.querySelector('.display'),

            start(){
                this.clickButton();
                this.pressEnter();
            },

            pressEnter(){
                this.display.addEventListener('keyup', (event) =>{
                    if(event.keyCode === 13){
                        this.makeAccount(); //o this continua sendo a calculadora por ser uma ArrowFunction
                    }
                });
            },

            clickButton(){
                //this -> no clickbutton é a calculadora
                document.addEventListener('click', function(event){
                    const element = event.target;
                    //console.log(this); aqui é o document
                    if(element.classList.contains('btn-num')){
                        this.btnForDisplay(element.innerText);
                    }

                    if(element.classList.contains('btn-clear')){
                        this.clearDisplay();
                    }

                    if(element.classList.contains('btn-del')){
                        this.deleteOne();
                    }

                    if(element.classList.contains('btn-equal')){
                        this.makeAccount();
                    }

                }.bind(this)); //fazendo com que o this aponte para a calculadora
                //(.bind) é um método de funções
                //Se usarmos ArrowFunction o this será cravado em quem criou o elemento
                //Ou seja, não mudam o comportamento do this
            },

            makeAccount(){
                let count = this.display.value;
                try{
                    count = eval(count);

                    if(!count || typeof(count) !== 'number'){
                        throw TypeError;
                        return;
                    }

                    this.display.value = count;
                }catch(error){
                    alert("Conta Inválida");
                    this.clearDisplay();
                    return;
                }
            },

            clearDisplay(){
                this.display.value = " ";
            },

            deleteOne(){
                this.display.value = this.display.value.slice(0,-1);
                //console.log(this.display.value);
            },

            btnForDisplay(content){
                this.display.value += content;
            }
        };
    }

    const calculator = createCalculator();
    calculator.start();
})();