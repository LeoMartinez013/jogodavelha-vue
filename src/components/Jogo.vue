<template>
<div id="jogo">
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
</div>
<div id="resultado">
    <p id="mensagem">{{ mensagem }}</p>
    <p id="reiniciar" v-if="resetar" @click="reiniciar()">Reiniciar</p>
</div>
<div id="contadores">
    <p id="p-vitorias">Vitórias: <span id="cont-vitoria">{{ vitorias }}</span></p>
    <p id="p-empate">Empates: <span id="cont-empate">{{ empates }}</span></p>
    <p id="p-derrota">Derrotas: <span id="cont-derrota">{{ derrotas }}</span></p>
</div>
</template>
<script>
export default {
    name: "Jogo",
    data() {
        return {
            resetar: false,
            mensagem: "Você é o X",
            status: "null",
            mode: "easy",
            jogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
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
            }
            
        };
    },
    
    mounted() {
        for (let chave in this.campos) {
            if (this.campos.hasOwnProperty(chave)) {
                console.log(this.campos[chave].id);
            }
        }
    },
    methods: {
        mainGame(id) {
            //  Impede que o usuário interaja novamente após o final da partida      
            if (this.resetar) {
                return
            }
            let verif = this.click(id)
            if (verif) {
                this.checkX()
                this.jogadas++
                console.log('Check Empate: ' + this.resetar + ' ' + this.jogadas + ' ' + this.status)
                if (this.jogadas == 9 && this.status == 'null') {
                    this.draw()
                    console.log('Jogada: ' + this.jogadas)
                    return
                } else if (!this.resetar) {
                    this.robo()
                    this.checkO()
                }
                
                console.log('Jogada: ' + this.jogadas)
            }
        },
        click(id) {
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
        checkO() {
            console.log("verif check0: " + this.resetar)
            if (this.campos.a1.value == 2) {
                if (this.campos.a2.value == 2 && this.campos.a3.value == 2) {
                //| O O O
                //|
                //|
                    document.querySelectorAll('.a1, .a2, .a3').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.defeat()     
                } 
                if (this.campos.b1.value == 2 && this.campos.c1.value == 2) {
                //| O
                //| O
                //| O
                    document.querySelectorAll('.a1, .b1, .c1').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.defeat()   
                } 
                if (this.campos.b2.value == 2 && this.campos.c3.value == 2) {
                //| O
                //|   O
                //|     O
                    document.querySelectorAll('.a1, .b2, .c3').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.defeat()   
                }
            } 
            if (this.campos.a2.value == 2 && this.campos.b2.value == 2 && this.campos.c2.value == 2) {
            //|   O
            //|   O
            //|   O
                document.querySelectorAll('.a2, .b2, .c2').forEach(elemento => {
                    elemento.style.backgroundColor = '#ec4e4e';
                })
                this.defeat()
            }
            if (this.campos.a3.value == 2) {
                if (this.campos.b3.value == 2 && this.campos.c3.value == 2) {
                //|     O
                //|     O
                //|     O
                    document.querySelectorAll('.a3, .b3, .c3').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.defeat()
                } 
                if (this.campos.b2.value == 2 && this.campos.c1.value == 2) {
                //|     O
                //|   O
                //| O
                    document.querySelectorAll('.a3, .b2, .c1').forEach(elemento => {
                        elemento.style.backgroundColor = '#ec4e4e';
                    })
                    this.defeat()
                }
            } 
            if (this.campos.b1.value == 2 && this.campos.b2.value == 2 && this.campos.b3.value == 2) {
            //|
            //| O O O
            //|
                document.querySelectorAll('.b1, .b2, .b3').forEach(elemento => {
                    elemento.style.backgroundColor = '#ec4e4e';
                })
                this.defeat()
            } 
            if (this.campos.c1.value == 2 && this.campos.c2.value == 2 && this.campos.c3.value == 2) {
            //|
            //|
            //| O O O
                document.querySelectorAll('.c1, .c2, .c3').forEach(elemento => {
                    elemento.style.backgroundColor = '#ec4e4e';
                })
                this.defeat()
            }
        },
        checkX() {
            console.log("verif checkX: " + this.resetar)
            if (this.campos.a1.value == 1) {
                if (this.campos.a2.value == 1 && this.campos.a3.value == 1) {
                //| X X X
                //|
                //|
                    document.querySelectorAll('.a1, .a2, .a3').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victory()          
                } 
                if (this.campos.b1.value == 1 && this.campos.c1.value == 1) {
                //| X
                //| X
                //| X
                    document.querySelectorAll('.a1, .b1, .c1').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victory()
                } 
                if (this.campos.b2.value == 1 && this.campos.c3.value == 1) {
                //| X
                //|   X
                //|     X
                    document.querySelectorAll('.a1, .b2, .c3').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victory()
                }
            } 
            if (this.campos.a2.value == 1 && this.campos.b2.value == 1 && this.campos.c2.value == 1) {
            //|   X
            //|   X
            //|   X
                document.querySelectorAll('.a2, .b2, .c2').forEach(elemento => {
                    elemento.style.backgroundColor = '#61e261';
                })
                this.victory()
            }
            if (this.campos.a3.value == 1) {
                if (this.campos.b3.value == 1 && this.campos.c3.value == 1) {
                //|     X
                //|     X
                //|     X
                    document.querySelectorAll('.a3, .b3, .c3').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victory()
                } 
                if (this.campos.b2.value == 1 && this.campos.c1.value == 1) {
                //|     X
                //|   X
                //| X
                    document.querySelectorAll('.a3, .b2, .c1').forEach(elemento => {
                        elemento.style.backgroundColor = '#61e261';
                    })
                    this.victory()
                }
            } 
            if (this.campos.b1.value == 1 && this.campos.b2.value == 1 && this.campos.b3.value == 1) {
            //|
            //| X X X
            //|
                document.querySelectorAll('.b1, .b2, .b3').forEach(elemento => {
                    elemento.style.backgroundColor = '#61e261';
                })
                this.victory()
            } 
            if (this.campos.c1.value == 1 && this.campos.c2.value == 1 && this.campos.c3.value == 1) {
            //|
            //|
            //| X X X
                document.querySelectorAll('.c1, .c2, .c3').forEach(elemento => {
                    elemento.style.backgroundColor = '#61e261';
                })
                this.victory()
            }
        },
        victory(){
            this.resetar = true
            this.mensagem = "Você ganhou"
            this.status = "win"
            console.log(this.mensagem)
            this.vitorias++
        },
        draw(){
            this.resetar = true
            this.mensagem = "Empate"
            this.status = "draw"
            console.log(this.mensagem)
            this.empates++
        },
        defeat(){
            this.resetar = true;
            this.mensagem = "Você perdeu";
            this.status = "lose"
            console.log(this.mensagem)
            this.derrotas++
        },
        randomBot() {
            let repetido = false
            do {
                var idBot = Math.floor(Math.random() * (10 - 1) + 1);
                var cont = 1
                console.log('Check Random: ' + cont)
                switch (idBot) {
                    case 1:
                        if(this.campos.a1.value == 0) {
                            repetido = false
                            this.botA1()
                        } else {
                            repetido = true
                        }
                        break;
                    case 2:
                        if(this.campos.a2.value == 0) {
                            repetido = false
                            this.botA2()
                        } else {
                            repetido = true
                        }
                        break;
                    case 3:
                        if(this.campos.a3.value == 0) {
                            repetido = false
                            this.botA3()
                        } else {
                            repetido = true
                        }
                        break;
                    case 4:
                        if(this.campos.b1.value == 0) {
                            repetido = false
                            this.botB1()
                        } else {
                            repetido = true
                        }
                        break;
                    case 5:
                        if(this.campos.b2.value == 0) {
                            repetido = false
                            this.botB2()
                        } else {
                            repetido = true
                        }
                        break;
                    case 6:
                        if(this.campos.b3.value == 0) {
                            repetido = false
                            this.botB3()
                        } else {
                            repetido = true
                        }
                        break;
                    case 7:
                        if(this.campos.c1.value == 0) {
                            repetido = false
                            this.botC1()
                        } else {
                            repetido = true
                        }
                        break;
                    case 8:
                        if(this.campos.c2.value == 0) {
                            repetido = false
                            this.botC2()
                        } else {
                            repetido = true
                        }
                        break;
                    case 9:
                        if(this.campos.c3.value == 0) {
                            repetido = false
                            this.botC3()
                        } else {
                            repetido = true
                        }
                        break;
                }
            } while (repetido)
        },
        robo() {
            if (this.jogadas == 0) {
                this.randomBot()
                return
            }
            if(this.mode == 'easy'){
                //  Easy Mode
                this.randomBot()
                return
            } else if (this.mode == 'medium') {
                //  Medium Mode
                if (this.campos.a1.value == 1 ) {
                    if (this.campos.a2.value == 1 && this.campos.a3.value == 0) {
                    //| X X O
                    //|
                    //|
                        this.botA3()
                        return
                    }
                    if (this.campos.a3.value == 1 && this.campos.a2.value == 0) {
                    //| X O X
                    //|
                    //|
                        this.botA2()
                        return
                    }
                    if (this.campos.b1.value == 1 && this.campos.c1.value == 0) {
                    //| X
                    //| X
                    //| O
                        this.botC1()
                        return
                    }
                    if (this.campos.c1.value == 1 && this.campos.b1.value == 0) {
                    //| X
                    //| O
                    //| X
                        this.botB1()
                        return
                    }
                    if (this.campos.b2.value == 1 && this.campos.c3.value == 0) {
                    //| X
                    //|   X
                    //|     O
                        this.botC3()
                        return
                    }
                }
            }
        },
        botA1() {
            this.campos.a1.value = 2
            this.jogadas++
            console.log('Bot: A1')
        },
        botA2() {
            this.campos.a2.value = 2
            this.jogadas++
            console.log('Bot: A2')
        },
        botA3() {
            this.campos.a3.value = 2
            this.jogadas++
            console.log('Bot: A3')
        },
        botB1() {
            this.campos.b1.value = 2
            this.jogadas++
            console.log('Bot: B1')
        },
        botB2() {
            this.campos.b2.value = 2
            this.jogadas++
            console.log('Bot: B2')
        },
        botB3() {
            this.campos.b3.value = 2
            this.jogadas++
            console.log('Bot: B3')
        },
        botC1() {
            this.campos.c1.value = 2
            this.jogadas++
            console.log('Bot: C1')
        },
        botC2() {
            this.campos.c2.value = 2
            this.jogadas++
            console.log('Bot: C2')
        },
        botC3() {
            this.campos.c3.value = 2
            this.jogadas++
            console.log('Bot: C3')
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
            this.resetar = false
            this.status = 'null'
            this.mensagem = "Você é o X"
            document.querySelectorAll('.a1, .a2, .a3, .b1, .b2, .b3, .c1, .c2, .c3').forEach(elemento => {
                elemento.style.backgroundColor = '#ebeeff';
            })
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
#resultado {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ebeeff;
    width: calc(7rem + 7rem + 7rem + 4px);
    max-width: 500px;
    height: 2rem;
    margin: 0.5rem auto;
    border-radius: 5px;
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
#contadores {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    text-align: center;
    font-weight: 400;
    color: black;

    width: 20.3rem;
    height: auto;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    margin: 0 auto;

    background-color: #ebeeff;
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