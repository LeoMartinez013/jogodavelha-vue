<template>
<Painel @salvar="salvarDados"/>
<section id="jogo">
    <div @click="mainGame(campos.a1.id)" class="campo a1">
        <img v-if="campos.a1.value == 1" id="a1-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.a1.value == 2" id="a1-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
    <div @click="mainGame(campos.a2.id)" class="campo a2">
        <img v-if="campos.a2.value == 1" id="a2-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.a2.value == 2" id="a2-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
    <div @click="mainGame(campos.a3.id)" class="campo a3">
        <img v-if="campos.a3.value == 1" id="a3-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.a3.value == 2" id="a3-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
    <div @click="mainGame(campos.b1.id)" class="campo b1">
        <img v-if="campos.b1.value == 1" id="b1-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.b1.value == 2" id="b1-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
    <div @click="mainGame(campos.b2.id)" class="campo b2">
        <img v-if="campos.b2.value == 1" id="b2-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.b2.value == 2" id="b2-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
    <div @click="mainGame(campos.b3.id)" class="campo b3">
        <img v-if="campos.b3.value == 1" id="b3-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.b3.value == 2" id="b3-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
    <div @click="mainGame(campos.c1.id)" class="campo c1">
        <img v-if="campos.c1.value == 1" id="c1-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.c1.value == 2" id="c1-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
    <div @click="mainGame(campos.c2.id)" class="campo c2">
        <img v-if="campos.c2.value == 1" id="c2-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.c2.value == 2" id="c2-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
    <div @click="mainGame(campos.c3.id)" class="campo c3">
        <img v-if="campos.c3.value == 1" id="c3-X" src="../assets/x.png" alt="" class="img-campos">
        <img v-if="campos.c3.value == 2" id="c3-O" src="../assets/o.png" alt="" class="img-campos">
    </div>
</section>
<section id="section-2">
    <div id="resultado">
        <p id="mensagem">{{ mensagem }}</p>
        <p id="reiniciar" v-if="reset" @click="reiniciar()">Reiniciar</p>
    </div>
    <div id="infos">
        <p>
            modo:
            <span v-if="mode == 'bot'">Contra bot</span>
            <span v-if="mode == 'versus'">Versus</span>
        </p>
        <p>
            dificuldade:
            <span v-if="difficulty == 'easy'">Fácil</span>
            <span v-if="difficulty == 'medium'">Médio</span>
            <span v-if="difficulty == 'hard'">Difícil</span>

        </p>
    </div>
    <div id="contadores">
        <p id="p-vitoria-X">
            <span v-if="mode == 'bot'">Vitórias: </span>
            <span v-if="mode == 'versus'">Vitórias do X: </span>
            <span id="cont-vitoriasX">{{ vitoriasX }}</span>
        </p>
        <p id="p-empate">
            Empates: <span id="cont-empate">{{ empates }}</span></p>
        <p id="p-vitoria-O">
            <span v-if="mode == 'bot'">Derrotas: </span>
            <span v-if="mode == 'versus'">Vitórias do O: </span>
            <span id="cont-vitoriasO">{{ vitoriasO }}</span>
        </p>
    </div>
</section>
</template>
<script>
import { defesa, ataque } from './bot/bot.js'
import Painel from '../components/Painel.vue'
export default {
    name: "Jogo",
    components: {
        Painel
    },
    data() {
        return {
            reset: false,
            mode: "bot",
            vezJogar: 0,
            mensagem: "Você é o X",
            status: "null",
            difficulty: "easy",
            jogadas: 0,
            vitoriasX: 0,
            empates: 0,
            vitoriasO: 0,
            campos: {
                a1: {
                    id: 1,
                    value: 0,
                },
                a2: {
                    id: 2,
                    value: 0,
                },
                a3: {
                    id: 3,
                    value: 0,
                },
                b1: {
                    id: 4,
                    value: 0,
                },
                b2: {
                    id: 5,
                    value: 0,
                },
                b3: {
                    id: 6,
                    value: 0,
                },
                c1: {
                    id: 7,
                    value: 0,
                },
                c2: {
                    id: 8,
                    value: 0,
                },
                c3: {
                    id: 9,
                    value: 0,
                },
            },
            steps: {
                step1: {
                    campo: 0,
                    value: 0
                },
                step2: {
                    campo: 0,
                    value: 0
                },
                step3: {
                    campo: 0,
                    value: 0
                },
                step4: {
                    campo: 0,
                    value: 0
                },
                step5: {
                    campo: 0,
                    value: 0
                },
                step6: {
                    campo: 0,
                    value: 0
                },
                step7: {
                    campo: 0,
                    value: 0
                },
                step8: {
                    campo: 0,
                    value: 0
                },
                step9: {
                    campo: 0,
                    value: 0
                },
            }
        }
    },
    mounted() {
        /*for (let chave in this.campos) {
            if (this.campos.hasOwnProperty(chave)) {
                console.log(this.campos[chave].id);
            }
        }*/
    },
    methods: {
        salvarDados(pass) {
            if (pass.alter) {
                this.reiniciar()
                this.mode = pass.mode
                this.difficulty = pass.difficulty
                this.vitoriasX = 0
                this.empates = 0
                this.vitoriasO = 0

                if (this.mode == 'versus') {
                    this.vezJogar = this.randomVezJogar()
                    if (this.vezJogar == 1) {
                        this.mensagem = 'Vez do X'
                    } else {
                        this.mensagem = 'Vez do O'
                    }
                } else {
                    this.vezJogar = 1
                }
                
            }
        },
        mainGame(id) {
            //  Impede que o usuário interaja novamente após o final da partida      
            if (this.reset) {
                return
            }
            if (this.mode == 'bot') {
                this.modeBot(id)
            } else {
                this.modeVersus(id)
            }
        },
        modeBot(id) {
            let verif = this.clickX(id)
            
            if (verif) {
                this.registerSteps(id)
                this.checkX()
                this.jogadas++
                console.log('Jogada: ' + this.jogadas)
                if (this.jogadas == 9 && this.status == 'null') {
                    this.draw()
                    console.log('Jogada: ' + this.jogadas)
                    return
                } else if (!this.reset) {
                    this.vezJogar = 2
                    id = this.botLogic()
                    this.registerSteps(id)
                    this.checkO()
                    this.jogadas++
                    console.log('Jogada: ' + this.jogadas)
                    this.vezJogar = 1
                }
                
                
            }
        },
        registerSteps(id) {
            const chaves = Object.keys(this.steps)
            
            var chaveStep = chaves[this.jogadas]
            this.steps[chaveStep].value = this.vezJogar
            this.steps[chaveStep].campo = id
        },
        showSteps() {
            console.log('Exibindo steps: ')
            for (let step in this.steps){
                if (this.steps[step].value != 0){
                    console.log(this.steps[step].value + ' > ' + this.steps[step].campo)
                }
            }   
        },
        modeVersus(id) {
            if (this.vezJogar == 1) {
                let verif = this.clickX(id)
                if (verif) {
                    this.checkX()
                    this.jogadas++
                    if (this.jogadas == 9 && this.status == 'null') {
                        this.draw()
                        console.log('Jogada: ' + this.jogadas)
                        return
                    }
                    this.mensagem = 'Vez do O'
                    this.vezJogar = 2
                }
            } else if (this.vezJogar == 2) {
                let verif = this.clickO(id)
                if (verif) {
                    this.checkO()
                    this.jogadas++
                    if (this.jogadas == 9 && this.status == 'null') {
                        this.draw()
                        console.log('Jogada: ' + this.jogadas)
                        return
                    }
                    this.mensagem = 'Vez do X'
                    this.vezJogar = 1
                }
            }
        },
        clickX(id) {
            //  Define o campo que deve ser selecionado pelo id
            switch (id) {
                case 1:
                    if (this.campos.a1.value == 0) {
                        this.campos.a1.value = 1;
                        return true
                    } 
                    break;
                case 2:
                    if (this.campos.a2.value == 0) {
                        this.campos.a2.value = 1;
                        return true
                    } 
                    break;
                case 3:
                    if (this.campos.a3.value == 0) {
                        this.campos.a3.value = 1;
                        return true
                    } 
                    break;
                case 4:
                    if (this.campos.b1.value == 0) {
                        this.campos.b1.value = 1;
                        return true
                    }
                    break;
                case 5:
                    if (this.campos.b2.value == 0) {
                        this.campos.b2.value = 1
                        return true
                    } 
                    break;
                case 6:
                    if (this.campos.b3.value == 0) {
                        this.campos.b3.value = 1
                        return true
                    } 
                    break;
                case 7:
                    if (this.campos.c1.value == 0) {
                        this.campos.c1.value = 1
                        return true
                    }
                    break;
                case 8:
                    if (this.campos.c2.value == 0) {
                        this.campos.c2.value = 1
                        return true
                    }
                    break;
                case 9:
                    if (this.campos.c3.value == 0) {
                        this.campos.c3.value = 1
                        return true
                    }
                    break;
                default:
                    console.error("Erro no switch.");
                    break;
            }
            return false
        },
        clickO(id) {
            //  Define o campo que deve ser selecionado pelo id
            switch (id) {
                case 1:
                    if (this.campos.a1.value == 0) {
                        this.campos.a1.value = 2;
                        return true
                    } 
                    break;
                case 2:
                    if (this.campos.a2.value == 0) {
                        this.campos.a2.value = 2;
                        return true
                    } 
                    break;
                case 3:
                    if (this.campos.a3.value == 0) {
                        this.campos.a3.value = 2;
                        return true
                    } 
                    break;
                case 4:
                    if (this.campos.b1.value == 0) {
                        this.campos.b1.value = 2;
                        return true
                    }
                    break;
                case 5:
                    if (this.campos.b2.value == 0) {
                        this.campos.b2.value = 2
                        return true
                    } 
                    break;
                case 6:
                    if (this.campos.b3.value == 0) {
                        this.campos.b3.value = 2
                        return true
                    } 
                    break;
                case 7:
                    if (this.campos.c1.value == 0) {
                        this.campos.c1.value = 2
                        return true
                    }
                    break;
                case 8:
                    if (this.campos.c2.value == 0) {
                        this.campos.c2.value = 2
                        return true
                    }
                    break;
                case 9:
                    if (this.campos.c3.value == 0) {
                        this.campos.c3.value = 2
                        return true
                    }
                    break;
                default:
                    console.error("Erro no switch.");
                    break;
            }
            return false
        },
        checkO() {
            if (this.campos.a1.value == 2) {
                if (this.campos.a2.value == 2 && this.campos.a3.value == 2) {
                //| O O O
                //|
                //|
                    document.querySelectorAll('.a1, .a2, .a3').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.victoryO()     
                } 
                if (this.campos.b1.value == 2 && this.campos.c1.value == 2) {
                //| O
                //| O
                //| O
                    document.querySelectorAll('.a1, .b1, .c1').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.victoryO()   
                } 
                if (this.campos.b2.value == 2 && this.campos.c3.value == 2) {
                //| O
                //|   O
                //|     O
                    document.querySelectorAll('.a1, .b2, .c3').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.victoryO()   
                }
            } 
            if (this.campos.a2.value == 2 && this.campos.b2.value == 2 && this.campos.c2.value == 2) {
            //|   O
            //|   O
            //|   O
                document.querySelectorAll('.a2, .b2, .c2').forEach(elemento => {
                    elemento.style.backgroundColor = '#ec4e4e';
                })
                this.victoryO()
            }
            if (this.campos.a3.value == 2) {
                if (this.campos.b3.value == 2 && this.campos.c3.value == 2) {
                //|     O
                //|     O
                //|     O
                    document.querySelectorAll('.a3, .b3, .c3').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.victoryO()
                } 
                if (this.campos.b2.value == 2 && this.campos.c1.value == 2) {
                //|     O
                //|   O
                //| O
                    document.querySelectorAll('.a3, .b2, .c1').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.victoryO()
                }
            } 
            if (this.campos.b1.value == 2 && this.campos.b2.value == 2 && this.campos.b3.value == 2) {
            //|
            //| O O O
            //|
                document.querySelectorAll('.b1, .b2, .b3').forEach(elemento => {
                    elemento.style.backgroundColor = '#ec4e4e';
                })
                this.victoryO()
            } 
            if (this.campos.c1.value == 2 && this.campos.c2.value == 2 && this.campos.c3.value == 2) {
            //|
            //|
            //| O O O
                document.querySelectorAll('.c1, .c2, .c3').forEach(elemento => {
                    elemento.style.backgroundColor = '#ec4e4e';
                })
                this.victoryO()
            }
        },
        checkX() {
            if (this.campos.a1.value == 1) {
                if (this.campos.a2.value == 1 && this.campos.a3.value == 1) {
                //| X X X
                //|
                //|
                    document.querySelectorAll('.a1, .a2, .a3').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victoryX()          
                } 
                if (this.campos.b1.value == 1 && this.campos.c1.value == 1) {
                //| X
                //| X
                //| X
                    document.querySelectorAll('.a1, .b1, .c1').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victoryX()
                } 
                if (this.campos.b2.value == 1 && this.campos.c3.value == 1) {
                //| X
                //|   X
                //|     X
                    document.querySelectorAll('.a1, .b2, .c3').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victoryX()
                }
            } 
            if (this.campos.a2.value == 1 && this.campos.b2.value == 1 && this.campos.c2.value == 1) {
            //|   X
            //|   X
            //|   X
                document.querySelectorAll('.a2, .b2, .c2').forEach(elemento => {
                    elemento.style.backgroundColor = '#61e261';
                })
                this.victoryX()
            }
            if (this.campos.a3.value == 1) {
                if (this.campos.b3.value == 1 && this.campos.c3.value == 1) {
                //|     X
                //|     X
                //|     X
                    document.querySelectorAll('.a3, .b3, .c3').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victoryX()
                } 
                if (this.campos.b2.value == 1 && this.campos.c1.value == 1) {
                //|     X
                //|   X
                //| X
                    document.querySelectorAll('.a3, .b2, .c1').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victoryX()
                }
            } 
            if (this.campos.b1.value == 1 && this.campos.b2.value == 1 && this.campos.b3.value == 1) {
            //|
            //| X X X
            //|
                document.querySelectorAll('.b1, .b2, .b3').forEach(elemento => {
                    elemento.style.backgroundColor = '#61e261';
                })
                this.victoryX()
            } 
            if (this.campos.c1.value == 1 && this.campos.c2.value == 1 && this.campos.c3.value == 1) {
            //|
            //|
            //| X X X
                document.querySelectorAll('.c1, .c2, .c3').forEach(elemento => {
                    elemento.style.backgroundColor = '#61e261';
                })
                this.victoryX()
            }
        },
        victoryX(){
            this.reset = true
            if (this.mode == 'bot') {
                this.mensagem = "Você ganhou"
                this.status = "win"
            } else {
                this.mensagem = "Vitória do X";
                this.status = "X"
            }
            console.log(this.mensagem)
            this.vitoriasX++
            this.showSteps()
        },
        draw(){
            this.reset = true
            this.mensagem = "Empate"
            this.status = "draw"
            console.log(this.mensagem)
            this.empates++
            this.showSteps()
        },
        victoryO(){
            this.reset = true;
            if (this.mode == 'bot') {
                this.mensagem = "Você perdeu";
                this.status = "lose"
            } else {
                this.mensagem = "Vitória do O";
                this.status = "O"
            }
            console.log(this.mensagem)
            this.vitoriasO++
            this.showSteps()
        },
        randomVezJogar() {
            var vez = Math.floor(Math.random() * (3 - 1) + 1)
            return vez  
        },
        randomBot() {
            let repetido = true
            const chaves = Object.keys(this.campos)
            do {
                var idBot = Math.floor(Math.random() * (10 - 1) + 1);
                var auxIdBot = idBot - 1
                var chaveBot = chaves[auxIdBot]
                if (this.campos[chaveBot].value == 0){
                    return this.botMove(idBot)
                }
            } while (repetido)

        },
        botLogic() {
            if (this.jogadas == 0) {
                this.randomBot()
                return
            }
            let move = 0
            if(this.difficulty == 'easy'){
                //  Easy Mode
                return this.randomBot()
            } else if (this.difficulty == 'medium') {
                //  Medium Mode
                move = ataque(this.campos)
                console.log('Check medium ' + move)
            } else if (this.difficulty == 'hard') {
                move = ataque(this.campos)
                console.log('Check hard ' + move)
            }
            return this.botMove(move)
        },
        botMove(move) {
            switch (move) {
                case 1:
                    if(this.campos.a1.value == 0) {
                        this.campos.a1.value = 2
                        console.log('Bot: A1')
                    }
                    break;
                case 2:
                    if(this.campos.a2.value == 0) {
                        this.campos.a2.value = 2
                        console.log('Bot: A2')
                    }
                    break;
                case 3:
                    if(this.campos.a3.value == 0) {
                        this.campos.a3.value = 2
                        console.log('Bot: A3')
                    }
                    break;
                case 4:
                    if(this.campos.b1.value == 0) {
                        this.campos.b1.value = 2
                        console.log('Bot: B1')
                    }
                    break;
                case 5:
                    if(this.campos.b2.value == 0) {
                        this.campos.b2.value = 2
                        console.log('Bot: B2')
                    }
                    break;
                case 6:
                    if(this.campos.b3.value == 0) {
                        this.campos.b3.value = 2
                        console.log('Bot: B3')
                    }
                    break;
                case 7:
                    if(this.campos.c1.value == 0) {
                        this.campos.c1.value = 2
                        console.log('Bot: C1')
                    }
                    break;
                case 8:
                    if(this.campos.c2.value == 0) {
                        this.campos.c2.value = 2
                        console.log('Bot: C2')
                    }
                    break;
                case 9:
                    if(this.campos.c3.value == 0) {
                        this.campos.c3.value = 2
                        console.log('Bot: C3')
                    }
                    break;
                default:
                    return this.randomBot()
            }
            return move
        },   
        reiniciar() {
            this.campos.a1.value = 0
            this.campos.a2.value = 0
            this.campos.a3.value = 0
            this.campos.b1.value = 0
            this.campos.b2.value = 0
            this.campos.b3.value = 0
            this.campos.c1.value = 0
            this.campos.c2.value = 0
            this.campos.c3.value = 0
            this.jogadas = 0
            this.reset = false
            this.status = 'null'
            if (this.mode == 'bot') {
                this.mensagem = "Você é o X"
                for (let step in this.steps) {
                    this.steps[step].campo = 0
                    this.steps[step].value = 0
                }
            } else {
                this.vezJogar = this.randomVezJogar()
                if (this.vezJogar == 1) {
                    this.mensagem = 'É a vez do X'
                } else {
                    this.mensagem = 'É a vez do O'
                }
            }
            document.querySelectorAll('.a1, .a2, .a3, .b1, .b2, .b3, .c1, .c2, .c3').forEach(elemento => {
                elemento.style.backgroundColor = '#ebeeff';
            })
            this.vezJogar = 1
            console.clear()
        },
    },
};
</script>
<style scoped>
:root {
    --campoWin: #61e261;
    --campoLose: #ec4e4e;
}
#jogo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: auto;
    background-color: #000000;

    height: min-content;
    width: min-content;

    max-height: 500px;
    max-width: 500px;

    border: 0.1rem solid #000000;
    border-radius: 10px;
    margin: 0 auto;
}
.a1 {
    border-top-left-radius: 10px;
}
.a3 {
    border-top-right-radius: 10px;
}
.c1 {
    border-bottom-left-radius: 10px;
}
.c3 {
    border-bottom-right-radius: 10px;
}
.campo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebeeff ;

    height: 7rem;
    width: 7rem;
    border: 0.1px #000 solid;
    margin: 0px;
}
.campo:hover {
    cursor: pointer;
    color: #dde0f7;
    background-color: #dde0f7;
}
.img-campos {
    box-sizing: border-box;
    height: 70%;
    width: auto;
}
#section-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "resultado resultado"
        "infos contadores";
    gap: 5% 2%;
    max-width: 500px;
    width: 80%;

    margin: 10px auto 0 auto;
}
#section-2 > div {
    background-color: #ebeeff;
    border-radius: 5px;
}
#resultado {
    grid-area: resultado;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
#mensagem {
    font-size: 1.2rem;
    color: #000;
    margin: 0;
}
#reiniciar {
    font-size: 1.2rem;
    color: #000;
    margin: 0;  
}
#reiniciar:hover {
    text-decoration: underline;
    cursor: pointer;
}
#infos {
    grid-area: infos;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 400;
    color: black;
    padding: 0.2rem 0.5rem;
}
#infos > p {
    margin: 0;
}
#contadores {
    grid-area: contadores;
    display: flex;
    flex-direction: column;

    text-align: center;
    font-weight: 400;
    color: black;

    padding: 0.2rem 0.5rem;
}
#contadores > p { 
    font-size: 1rem;
    margin: 0;
}
@media screen and (max-width: 400px) {
    .campo {
        width: 5rem;
        height: 5rem;
    }
}
@media screen and (max-width: 300px) {
    .campo {
        width: 3rem;
        height: 3rem;
    }
}
</style>