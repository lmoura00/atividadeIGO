const normal = require('./linked-list-models')
const prioritario = require('./linked-list-models')

module.exports = class LinkedList{
    constructor(){
        this.equals = require('./util')
        this.count = 0
        this.head = undefined
        this.chamado = 0
        this.chamadoTotal = 0
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
            console.log("Chamando prioridade")
            this.chamado = 0
            this.chamadoTotal++
            //aqui vai chamar prioridade
            //ao findar de chamar o prioridade, reseta o chamado para 0, com isso volta a chamar o normal
        }
        else{
            console.log("chamando normal")
            this.chamado++
            this.chamadoTotal++
            //lembrando que ele deve adionar um ao chamado toda vez q terminar de chamar uma senha 
        }
    }
    pegarElemento(index){
        if(index>=0 && index<this.count){
            let no = this.head
            for(let i =0 ; i< index && no != null;i++){
                no = no.next
            }
            return no
        }
        else{
            console.log("Index impossível!! Tente outro valor")
        }
    }
    addOndeEuQuiser(num, index){
        if(index>=0 && index<=this.count){
            const no = new normal(num)
            if(index === 0){
                const atual = this.head
                no.next = atual
                this.head = no
            }
            else{
                const antes = this.pegarElemento(index-1)
                no.next = antes.next
                antes.next = no
            }
            this.count++
            console.log("O número ", num, ' foi adicionado com sucesso.')
        }
        else{
            console.log("Index impossível!! Tente novamente")
        }
    }
   
}



