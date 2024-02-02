export function checkO() {
    if (this.campos.a1.value == 2) {
        if (this.campos.a2.value == 2 && this.campos.a3.value == 2) {
            //| O O O
            //|
            //|
            this.resetar = true;
            this.mensagem = "Você perdeu";
            this.status = 'win'
            document.querySelectorAll('.a1, .a2, .a3').forEach(elemento => {
                elemento.style.backgroundColor = '#ec4e4e';
            })
            console.log(this.mensagem)
        }
        if (this.campos.b1.value == 2 && this.campos.c1.value == 2) {
            //| O
            //| O
            //| O
            this.resetar = true
            this.mensagem = "Você perdeu"
            this.status = 'win'
            document.querySelectorAll('.a1, .b1, .c1').forEach(elemento => {
                elemento.style.backgroundColor = '#ec4e4e';
            })
            console.log(this.mensagem)
        }
        if (this.campos.b2.value == 2 && this.campos.c3.value == 2) {
            //| O
            //|   O
            //|     O
            this.resetar = true
            this.mensagem = "Você perdeu"
            this.status = 'win'
            document.querySelectorAll('.a1, .b2, .c3').forEach(elemento => {
                elemento.style.backgroundColor = '#ec4e4e';
            })
            console.log(this.mensagem)
        }
    }
    if (this.campos.a2.value == 2 && this.campos.b2.value == 2 && this.campos.c2.value == 2) {
        //|   O
        //|   O
        //|   O
        this.resetar = true
        this.mensagem = "Você perdeu"
        this.status = 'win'
        document.querySelectorAll('.a2, .b2, .c2').forEach(elemento => {
            elemento.style.backgroundColor = '#ec4e4e';
        })
        console.log(this.mensagem)
    }
    if (this.campos.a3.value == 2) {
        if (this.campos.b3.value == 2 && this.campos.c3.value == 2) {
            //|     O
            //|     O
            //|     O
            this.resetar = true
            this.mensagem = "Você perdeu"
            this.status = 'win'
            document.querySelectorAll('.a3, .b3, .c3').forEach(elemento => {
                elemento.style.backgroundColor = '#ec4e4e';
            })
            console.log(this.mensagem)
        }
        if (this.campos.b2.value == 2 && this.campos.c1.value == 2) {
            //|     O
            //|   O
            //| O
            this.resetar = true
            this.mensagem = "Você perdeu"
            this.status = 'win'
            document.querySelectorAll('.a3, .b2, .c1').forEach(elemento => {
                elemento.style.backgroundColor = '#ec4e4e';
            })
            console.log(this.mensagem)
        }
    }
    if (this.campos.b1.value == 2 && this.campos.b2.value == 2 && this.campos.b3.value == 2) {
        //|
        //| O O O
        //|
        this.resetar = true
        this.mensagem = "Você perdeu"
        this.status = 'win'
        document.querySelectorAll('.b1, .b2, .b3').forEach(elemento => {
            elemento.style.backgroundColor = '#ec4e4e';
        })
        console.log(this.mensagem)
    }
    if (this.campos.c1.value == 2 && this.campos.c2.value == 2 && this.campos.c3.value == 2) {
        //|
        //|
        //| O O O
        this.resetar = true
        this.mensagem = "Você perdeu"
        this.status = 'win'
        document.querySelectorAll('.c1, .c2, .c3').forEach(elemento => {
            elemento.style.backgroundColor = '#ec4e4e';
        })
        console.log(this.mensagem)
    }
}
export function checkX() {
    if (this.resetar == true) {
        return
    }
    if (this.campos.a1.value == 1) {
        if (this.campos.a2.value == 1 && this.campos.a3.value == 1) {
            //| X X X
            //|
            //|
            this.resetar = true;
            this.mensagem = "Você ganhou";
            this.status = 'win'
            document.querySelectorAll('.a1, .a2, .a3').forEach(elemento => {
                elemento.style.backgroundColor = '#61e261';
            })
            console.log(this.mensagem)
        }
        if (this.campos.b1.value == 1 && this.campos.c1.value == 1) {
            //| X
            //| X
            //| X
            this.resetar = true
            this.mensagem = "Você ganhou"
            this.status = 'win'
            document.querySelectorAll('.a1, .b1, .c1').forEach(elemento => {
                elemento.style.backgroundColor = '#61e261';
            })
            console.log(this.mensagem)
        }
        if (this.campos.b2.value == 1 && this.campos.c3.value == 1) {
            //| X
            //|   X
            //|     X
            this.resetar = true
            this.mensagem = "Você ganhou"
            this.status = 'win'
            document.querySelectorAll('.a1, .b2, .c3').forEach(elemento => {
                elemento.style.backgroundColor = '#61e261';
            })
            console.log(this.mensagem)
        }
    }
    if (this.campos.a2.value == 1 && this.campos.b2.value == 1 && this.campos.c2.value == 1) {
        //|   X
        //|   X
        //|   X
        this.resetar = true
        this.mensagem = "Você ganhou"
        this.status = 'win'
        document.querySelectorAll('.a2, .b2, .c2').forEach(elemento => {
            elemento.style.backgroundColor = '#61e261';
        })
        console.log(this.mensagem)
    }
    if (this.campos.a3.value == 1) {
        if (this.campos.b3.value == 1 && this.campos.c3.value == 1) {
            //|     X
            //|     X
            //|     X
            this.resetar = true
            this.mensagem = "Você ganhou"
            this.status = 'win'
            document.querySelectorAll('.a3, .b3, .c3').forEach(elemento => {
                elemento.style.backgroundColor = '#61e261';
            })
            console.log(this.mensagem)
        }
        if (this.campos.b2.value == 1 && this.campos.c1.value == 1) {
            //|     X
            //|   X
            //| X
            this.resetar = true
            this.mensagem = "Você ganhou"
            this.status = 'win'
            document.querySelectorAll('.a3, .b2, .c1').forEach(elemento => {
                elemento.style.backgroundColor = '#61e261';
            })
            console.log(this.mensagem)
        }
    }
    if (this.campos.b1.value == 1 && this.campos.b2.value == 1 && this.campos.b3.value == 1) {
        //|
        //| X X X
        //|
        this.resetar = true
        this.mensagem = "Você ganhou"
        this.status = 'win'
        document.querySelectorAll('.b1, .b2, .b3').forEach(elemento => {
            elemento.style.backgroundColor = '#61e261';
        })
        console.log(this.mensagem)
    }
    if (this.campos.c1.value == 1 && this.campos.c2.value == 1 && this.campos.c3.value == 1) {
        //|
        //|
        //| X X X
        this.resetar = true
        this.mensagem = "Você ganhou"
        this.status = 'win'
        document.querySelectorAll('.c1, .c2, .c3').forEach(elemento => {
            elemento.style.backgroundColor = '#61e261';
        })
        console.log(this.mensagem)
    }
}