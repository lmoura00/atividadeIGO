module.exports = class atendimento{
    constructor(){
        this.normal = []
        this.prioridade = []
        this.novoChamado = []
        this.chamado = 0
        this.chamadoNormal = 0
        this.chamadoPrioridade = 0
        this.chamadoTotal = 0
        this.count = 0
        this.countNormal = 0
        this.countPrioritario = 0
        this.senhaNormal = 1
        this.senhaPrioritaria = 1
        console.clear()
        console.log("-------- HOSPITAL MORTE CERTA --------")
        console.log("Bem vindo ao Hospital Morte Certa")
        console.log("\n")
        console.log("*OPÇÕES:*")
        console.log("-> Senha normal;\n")
        console.log("-> Senha prioritária;\n")
    }
    novaSenhaNormal(){
        console.clear()
        this.normal[this.countNormal] = this.senhaNormal+"n"
        console.log(this.senhaNormal+"n")
        this.countNormal++
        this.count++
        this.senhaNormal++
    }
    novaSenhaPrioritaria(){
        console.clear()
        this.prioridade[this.countPrioritario] = this.senhaPrioritaria+"p"
        console.log(this.senhaPrioritaria+"p")
        this.countPrioritario++
        this.count++
        this.senhaPrioritaria++
    }
    chamarPaciente(){
        if(this.chamado==2){
            if(this.countPrioritario>this.chamadoPrioridade){
                console.clear()
                console.log("O próximo a ser atendido será a senha: "+this.prioridade[this.chamadoPrioridade])
                this.chamadoTotal++
                this.chamado=0
                this.chamadoPrioridade++
            }
            else{
                console.clear()
                console.log("O próximo a ser atendido será a senha: "+this.normal[this.chamadoNormal])
                this.chamadoTotal++
                this.chamado++
                this.chamadoNormal++
            }
        }
        else{
            if(this.countNormal>this.chamadoNormal){
                console.clear()
                console.log("O próximo a ser atendido será a senha: "+this.normal[this.chamadoNormal])
                this.chamadoTotal++
                this.chamado++
                this.chamadoNormal++
            }
            else{
                console.clear()
                console.log("Nenhuma senha a mostrar")
            }
        }
    }
}
