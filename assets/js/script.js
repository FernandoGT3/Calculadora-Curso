(function main(){
    function createCalculator(){
        return {
            display: document.querySelector('.display'),
            

            start(){
                this.clickButton()
            },

            clickButton(){
                //this -> no clickbutton é a calculadora
                document.addEventListener('click', function(event){
                    const element = event.target;
                    //console.log(this); aqui é o document
                    if(element.classList.contains('btn-num')){
                        this.btnForDisplay(element.innerText);
                    }
                }.bind(this)); //fazendo com que o this aponte para a calculadora
                //(.bind) é um método de funções
            },

            btnForDisplay(valor){
                this.display.value += valor;
            }
        };
    }

    const calculator = createCalculator();
    calculator.start();
})();