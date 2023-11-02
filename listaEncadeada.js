const normal = require('./linked-list-models')
const prioritario = require('./linked-list-models')

module.exports = class LinkedList{
    constructor(){
        this.equals = require('./util')
        this.count = 0
        this.head = undefined
        this.chamado = 0
        this.senha = 1
    }
    senhaNormal(){
        const no = new normal(this.senha)
        let atual
        if(this.head == null){
            this.head = no;
        }
        else{
            atual = this.head
            while (atual.next != null){
                atual = atual.next
            }
            atual.next = no
        }
        console.clear()
        console.log("A senha ", this.senha, ' foi adicionado com sucesso como atendimento normal')
        this.count++
        this.senha++
    }
    senhaPrioridade(){
        const no = new prioritario(this.senha)
        let atual
        if(this.head == null){
            this.head = no;
        }
        else{
            atual = this.head
            while (atual.next != null){
                atual = atual.next
            }
            atual.next = no
        }
        console.clear()
        console.log("A senha ", this.senha, ' foi adicionado com sucesso como atendimento prioritario')
        this.count++
        this.senha++
    }
    chamarPaciente(){
        if(this.chamado === 2){
            //aqui vai chamar prioridade
            //ao findar de chamar o prioridade, reseta o chamado para 0, com isso volta a chamar o normal
        }
        else{
            //aqui vai chamar normal
            //lembrando que ele deve adionar um ao chamado toda vez q terminar de chamar uma senha 
        }
    }
   
}



