<template>
<div id="overlay">
    <div id="painel">
        <div id="section-modos">
            <div id="modo-bot" class="modos" @click="changeMode('bot')">
                <img src="../assets/robot.png" alt="modo contra bot">
                <p>Contra bot</p>
            </div>
            <div id="modo-versus" class="modos" @click="changeMode('versus')">
                <img src="../assets/versus.png" alt="modo versus">
                <p>Versus</p>
            </div>
        </div>
        <div id="section-dificuldades">
            <p id="easyMode" class="dificults" @click="changeDifficulty('easy')" value="true">Fácil</p>
            <p id="mediumMode" class="dificults" @click="changeDifficulty('medium')" value="false">Médio</p>
            <p id="hardMode" class="dificults" @click="changeDifficulty('hard')" value="false">Difícil</p>
        </div>
        <div id="buttons">
            <button id="bCancelar" @click="cancelar">Cancelar</button>
            <button id="bSalvar" @click="salvar">Salvar</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "Painel",
    data() {
        return {
            inicio: true,
            newMode: 'bot',
            newDifficulty: 'easy',
        }
    },
    mounted() {
        if (this.inicio) {
            this.newMode = 'bot'
            this.newDifficulty = 'easy'
        }
        this.changeMode(this.newMode)
        this.changeDifficulty(this.newDifficulty)
        this.inicio = false
    },
    methods: {
        salvar() {
            this.$emit('salvar', {
                mode: this.newMode,
                difficulty: this.newDifficulty,
                alter: true
            })
            this.fecharPainel()
        },
        cancelar() {
            this.newMode = 'bot';
            this.newDifficulty = 'easy';
            this.fecharPainel()
        },
        fecharPainel() {
            document.querySelector('#overlay').style.display = 'none'
        },
        changeMode(auxMode) {
            const boxVersus = document.querySelector('#modo-versus')
            const boxBot = document.querySelector('#modo-bot')

            if (auxMode == 'versus') {
                boxVersus.style.borderColor = '#000000'
                boxBot.style.borderColor = '#0000001a'
            } else {
                boxBot.style.borderColor = '#000000'
                boxVersus.style.borderColor = '#0000001a'
            }
            this.newMode = auxMode
            console.log('Mudando modo para: ' + this.newMode)
        },
        changeDifficulty(auxDifficulty) {
            const checkEasy = document.querySelector('#easyMode')
            const checkMedium = document.querySelector('#mediumMode')
            const checkHard = document.querySelector('#hardMode')
            if (auxDifficulty == 'easy') {
                this.changeModeEasy(checkEasy, checkMedium, checkHard)
            } else if (auxDifficulty == 'medium') {
                this.changeModeMedium(checkEasy, checkMedium, checkHard)
            } else if (auxDifficulty == 'hard') {
                this.changeModeHard(checkEasy, checkMedium, checkHard)
            }
            this.newDifficulty = auxDifficulty
            console.log('Mudando dificuldade para: ' + this.newDifficulty)
        },
        changeModeEasy (checkEasy, checkMedium, checkHard) {
            checkEasy.style.borderColor = '#000000'
            checkMedium.style.borderColor = '#0000001a'
            checkHard.style.borderColor = '#0000001a'
            checkEasy.value = true
            checkMedium.value = false
            checkHard.value = false
        },
        changeModeMedium (checkEasy, checkMedium, checkHard) {
            checkEasy.style.borderColor = '#0000001a'
            checkMedium.style.borderColor = '#000000'
            checkHard.style.borderColor = '#0000001a'
            checkEasy.value = false
            checkMedium.value = true
            checkHard.value = false
        },
        changeModeHard (checkEasy, checkMedium, checkHard) {
            checkEasy.style.borderColor = '#0000001a'
            checkMedium.style.borderColor = '#0000001a'
            checkHard.style.borderColor = '#000000'
            checkEasy.value = false
            checkMedium.value = false
            checkHard.value = true
        }
    }
}
</script>
<style>
* {
    box-sizing: border-box;
}
#overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 900;
    user-select: none;
}
#painel {
    background-color: aliceblue;
    width: 700px;
    padding: 1rem;
    border-radius: 10px;
    z-index: 901;

}
#section-modos {
    display: flex;
    justify-content: space-evenly;
}
.modos {
    cursor: pointer;
    width: 7rem;
    height: auto;
    border: 0.2rem solid #0000001a;
    border-radius: 10px;
}
.modos > img {
    width: 5rem;
    margin: 0.3rem;
    height: auto;
}
.modos > p {
    font-size: 1.1rem;
    color: black;
    font-weight: 500;

    margin: 0;
}
.modos:hover > img {
    width: 5.3rem;
    margin: 0;
}
.modos:hover > p {
    font-size: 1.2rem;
}
#section-dificuldades {
    display: flex;
    justify-content: center;
    gap: 10px;

    margin: 0.5rem 0;
}
.dificults{
    color: black;
    font-size: 1rem;
    font-weight: 400;
    height: 2rem;
    width: 6rem;

    margin: 0.5rem 0;
    border: 0.15rem solid transparent;
    border-radius: 5px;
    cursor: pointer;
}
#easyMode {
    background-color: #3fee3f;
    padding: 0.2rem 2rem;
    opacity: 0.7;
}
#mediumMode {
    background-color: #ffff00;
    padding: 0.2rem 1rem;
    opacity: 0.7;
}
#hardMode {
    background-color: #ff5f5f;
    padding: 0.2rem 1rem;
    opacity: 0.7;
}
.dificults:hover {
    font-size: 1rem;
    font-weight: 700;
    padding: 0;
    opacity: 1;
}
#buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
#buttons > button {
    font-size: 1rem;
    font-weight: 500;
    height: 2rem;
    width: 5rem;
    border: 0.1rem solid black;
    border-radius: 0.6rem;
}
#bCancelar {
    background-color: #e2e2e2;
}
#bCancelar:hover {
    font-weight: 600;
    background-color: #bebebe;
}
#bSalvar {
    background-color: #5cb0ff;
}
#bSalvar:hover {
    font-weight: 600;
    background-color: #3aa0ff;
}
@media screen and (max-width: 600px) {
    #painel {
        width: 100%;
    }
}
</style>