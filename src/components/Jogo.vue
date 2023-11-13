<template>
<div id="main">
    <div id="jogo">
        <p>
            <button @click="click(a1.id), robo(), checkX()" v-bind:style="{ color: a1.cor }" class="campo a1">{{ a1.texto }}</button>
            <button @click="clickA2(), robo(), checkX()" v-bind:style="{ color: a2.cor }" class="campo a2">{{ a2.texto }}</button>
            <button @click="clickA3(), robo(), checkX()" v-bind:style="{ color: a3.cor }" class="campo a3">{{ a3.texto }}</button>
        </p>
        <p>
            <button @click="clickB1()" v-bind:style="{ color: b1.cor }" class="campo b1">{{ b1.texto }}</button>
            <button @click="clickB2()" v-bind:style="{ color: b2.cor }" class="campo b2"></button>
            <button @click="clickB3()" v-bind:style="{ color: b3.cor }" class="campo b3">{{ b3.texto }}</button>
        </p>
        <p>
            <button @click="clickC1()" v-bind:style="{ color: c1.cor }" class="campo c1">{{ c1.texto }}</button>
            <button @click="clickC2()" v-bind:style="{ color: c2.cor }" class="campo c2">{{ c2.texto }}</button>
            <button @click="clickC3()" v-bind:style="{ color: c3.cor }" class="campo c3">{{ c3.texto }}</button>
        </p>
    </div>
    <div id="Resultado">
        <p>{{ mensagem }}</p>
        <button v-if="resetar" @click="reiniciar()">Reiniciar</button>
    </div>
</div>
</template>
<script>
export default {
    name: 'Jogo',
    data(){
        return{
            resetar: false,
            mensagem: '',
            campos: {
                id: 1, cor: '#000', texto: '1'
            },
            a1: {
                id: 1, texto: '', cor: '#ebeeff', value: 0
            },
            a2: {
                id: 2, texto: '', cor: '#000', value: 0
            },
            a3: {
                id: 3, texto: '', cor: '#000', value: 0
            },
            b1: {
                id: 4, texto: '', cor: '#000', value: 0
            },
            b2: {
                id: 5, texto: '', cor: '#000', value: 0
            },
            b3: {
                id: 6, texto: '', cor: '#000', value: 0
            },
            c1: {
                id: 7, texto: '', cor: '#000', value: 0
            },
            c2: {
                id: 8, texto: '', cor: '#000', value: 0
            },
            c3: {
                id: 9, texto: '', cor: '#000', value: 0
            },
        }
        
    },
    created(){
        this.mensagem = 'Você é o X'
    },
    methods: {
        checkX(){
            if(this.a1.texto=='X'){
                //| X X X
                //|
                //|
                if(this.a2.texto=='X'){
                    if(this.a3.texto=='X'){
                        this.mensagem='Você ganhou';
                        this.resetar = true;
                        this.a1.cor='#008600';
                        this.a2.cor='#008600';
                        this.a3.cor='#008600';
                    }
                }
                //| X
                //| X
                //| X
                else if(this.b1.texto=='X'){
                    if(this.c1.texto=='X'){

                    }
                }
                //| X
                //|   X
                //|     X
                else if(this.c1.texto=='X'){

                }
            }
        },
        robo(){
            setTimeout(() => {
                if(!this.b3.value){
                    this.b3.texto = 'O'
                    this.b3.cor = '#810101'
                    this.b3.value = 1
                }else{
    
                }
            }, 100)
        },
        click(id) {
            switch (id) {
                case 1:
                    if (!this.a1.value) {
                        this.a1.texto = 'X'
                        this.a1.cor = '#009900'
                        this.a1.value = 1
                    }
                    break;
                case 2:
                    if(!this.a2.value){
                        this.a2.texto = 'X'
                        this.a2.cor = '#009900'
                        this.a2.value = 1
                    }
                    break;
                case 3:
                    if(!this.a3.value){
                        this.a3.texto = 'X'
                        this.a3.cor = '#009900'
                        this.a3.value = 1
                    }
                    break;
            }
        },


        clickA1(){
            if(!this.a1.value){
                this.a1.texto = 'X'
                this.a1.cor = '#009900'
                this.a1.value = 1
            }
        },
        clickA2(){
            if(!this.a2.value){
                this.a2.texto = 'X'
                this.a2.cor = '#009900'
                this.a2.value = 1
            }
        },
        clickA3(){
            if(!this.a3.value){
                this.a3.texto = 'X'
                this.a3.cor = '#009900'
                this.a3.value = 1
            }
        },
        clickB1(){
            if(!this.b1.value){
                this.b1.texto = 'X'
                this.b1.cor = '#009900'
                this.b1.value = 1
            }
        },
        clickB2(){
            if(!this.b2.value){
                this.b2.texto = 'X'
                this.b2.cor = '#009900'
                this.b2.value = 1
            }
        },
        clickB3(){
            if(!this.b3.value){
                this.b3.texto = 'X'
                this.b3.cor = '#058101'
                this.b3.value = 1
            }
        },
        clickC1(){
            if(!this.c1.value){
                this.c1.texto = 'X'
                this.c1.cor = '#009900'
                this.c1.value = 1
            }
        },
        clickC2(){
            if(!this.c2.value){
                this.c2.texto = 'X'
                this.c2.cor = '#009900'
                this.c2.value = 1
            }
        },
        clickC3(){
            if(!this.c3.value){
                this.c3.texto = 'X'
                this.c3.cor = '#009900'
                this.c3.value = 1
            }
        },
        reiniciar(){
            
        }
    }
    
}
</script>
<style scoped>
    /*
    verde: '#009900',
    vermelho: '#810101',
    preto: '#000',
    */
    #main {
        height: 80vh;
    }
    #jogo {
        background-color: #a298ff;
        text-align: center;

        height: 250px;
        width: 310px;

        display: block;
        position: static;
        top: 10px;
        left: 100vw;

        margin: 0px 25vw;
    }
    #jogo > p {
        background-color: #ffa3a3;
        height: 70px;
        width: 300px;
        margin: 0;
    }
    .campo {
        font-size: 72px;
        text-align: center;
        
        height: 70px;
        width: 70px;
        
        background-color: #ebeeff;

        padding: 0px;
        border:  1px #000 bold;
        margin: 0px;
    }
    .campo:hover{
        cursor: pointer;
        color: #dde0f7;
        background-color: #dde0f7;
    }
    #Resultado > p {
        font-size: 20px;
        text-align: center;
        color: #000;
        background-color: #b6b5b5;

        height: 30px;
        width: 50%;
        
        margin: 10px 25% 0 25%;
    }
    #Resultado > button {

    }
</style>