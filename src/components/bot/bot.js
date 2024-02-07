export function defesa(campos) {
    //=====================================================================================
    //  VERTICAL
    //=====================================================================================
    if (campos.a1.value == 1 && campos.b1.value == 1 && campos.c1.value == 0) {
    //| X
    //| X
    //| O
        return 7
    } else if (campos.a1.value == 1 && campos.c1.value == 1 && campos.b1.value == 0) {
    //| X
    //| O
    //| X
        return 4
    } else if (campos.b1.value == 1 && campos.c1.value == 1 && campos.a1.value == 0){
    //| O
    //| X
    //| X
        return 1
    } else if (campos.a2.value == 1 && campos.b2.value == 1 && campos.c2.value == 0) {
    //|   X
    //|   X
    //|   O
        return 8
    } else if (campos.a2.value == 1 && campos.c2.value == 1 && campos.b2.value == 0) {
    //|   X
    //|   O
    //|   X
        return 5
    } else if (campos.b2.value == 1 && campos.c2.value == 1 && campos.a2.value == 0) {
    //|   O
    //|   X
    //|   X
        return 2
    } else if (campos.a3.value == 1 && campos.b3.value == 1 && campos.c3.value == 0) {
    //|     X
    //|     X
    //|     O
        return 9
    }  else if (campos.a3.value == 1 && campos.c3.value == 1 && campos.b3.value == 0) {
    //|     X
    //|     O
    //|     X
        return 6
    }  else if (campos.b3.value == 1 && campos.c3.value == 1 && campos.a3.value == 0) {
    //|     O
    //|     X
    //|     X
        return 3
    }
    //=====================================================================================
    //  HORIZONTAL
    //=====================================================================================
    if (campos.a1.value == 1 && campos.a2.value == 1 && campos.a3.value == 0) {
    //| X X O
    //|
    //|
        return 3
    } else if (campos.a1.value == 1 && campos.a3.value == 1 && campos.a2.value == 0) {
    //| X O X
    //|
    //|
        return 2
    } else if (campos.a2.value == 1 && campos.a3.value == 1 && campos.a1.value == 0) {
    //| O X X
    //|
    //|
        return 1
    } else if (campos.b1.value == 1 && campos.b2.value == 1 && campos.b3.value == 0) {
    //|
    //| X X O
    //|
        return 6
    } else if (campos.b1.value == 1 && campos.b3.value == 1 && campos.b2.value == 0) {
    //|
    //| X O X
    //|
        return 5
    } else if (campos.b2.value == 1 && campos.b3.value == 1 && campos.b1.value == 0) {
    //|
    //| O X X
    //|
        return 4
    } else if (campos.c1.value == 1 && campos.c2.value == 1 && campos.c3.value == 0) {
    //|
    //|
    //| X X O
        return 9
    } else if (campos.c1.value == 1 && campos.c3.value == 1 && campos.c2.value == 0) {
    //|
    //|
    //| X O X
        return 8
    } else if (campos.c1.value == 1 && campos.c3.value == 1 && campos.c1.value == 0) {
    //|
    //|
    //| O X X
        return 7
    }
    //=====================================================================================
    //  DIAGONAL
    //=====================================================================================
    if (campos.a1.value == 1 && campos.b2.value == 1 && campos.c3.value == 0) {
    //| X
    //|   X
    //|     O
        return 9
    } else if (campos.a1.value == 1 && campos.c3.value == 1 && campos.b2.value == 0) {
    //| X
    //|   O
    //|     X
        return 5
    } else if (campos.b2.value == 1 && campos.c3.value == 1 && campos.a1.value == 0) {
    //| O
    //|   X
    //|     X
        return 1
    } else if (campos.a3.value == 1 && campos.b2.value == 1 && campos.c1.value == 0) {
    //|     X
    //|   X
    //| O
        return 7
    } else if (campos.a3.value == 1 && campos.c1.value == 1 && campos.b2.value == 0) {
    //|     X
    //|   O
    //| X
        return 5
    } else if (campos.b2.value == 1 && campos.c1.value == 1 && campos.a3.value == 0) {
    //|     O
    //|   X
    //| X
        return 3
    }

    return 0
}
export function ataque(campos) {
    let move = 0
    //=====================================================================================
    //  VERTICAL
    //=====================================================================================
    if (campos.a1.value == 2 && campos.b1.value == 2 && campos.c1.value == 0) {
    //| O
    //| O
    //| 
        return 7
    } else if (campos.a1.value == 2 && campos.c1.value == 2 && campos.b1.value == 0) {
    //| O
    //| 
    //| O
        return 4
    } else if (campos.b1.value == 2 && campos.c1.value == 2 && campos.a1.value == 0){
    //| 
    //| O
    //| O
        return 1
    } else if (campos.a2.value == 2 && campos.b2.value == 2 && campos.c2.value == 0) {
    //|   O
    //|   O
    //|   
        return 8
    } else if (campos.a2.value == 2 && campos.c2.value == 2 && campos.b2.value == 0) {
    //|   O
    //|   
    //|   O
        return 5
    } else if (campos.b2.value == 2 && campos.c2.value == 2 && campos.a2.value == 0) {
    //|   
    //|   O
    //|   O
        return 2
    } else if (campos.a3.value == 2 && campos.b3.value == 2 && campos.c3.value == 0) {
    //|     O
    //|     O
    //|     
        return 9
    } else if (campos.a3.value == 2 && campos.c3.value == 2 && campos.b3.value == 0) {
    //|     O
    //|     
    //|     O
        return 6
    } else if (campos.b3.value == 2 && campos.c3.value == 2 && campos.a3.value == 0) {
    //|     
    //|     O
    //|     O
        return 3
    }
    //=====================================================================================
    //  HORIZONTAL
    //=====================================================================================
    if (campos.a1.value == 2 && campos.a2.value == 2 && campos.a3.value == 0) {
    //| O O 
    //|
    //|
        return 3
    } else if (campos.a1.value == 2 && campos.a3.value == 2 && campos.a2.value == 0) {
    //| O   O
    //|
    //|
        return 2
    } else if (campos.a2.value == 2 && campos.a3.value == 2 && campos.a1.value == 0) {
    //|   O O
    //|
    //|
        return 1
    } else if (campos.b1.value == 2 && campos.b2.value == 2 && campos.b3.value == 0) {
    //|
    //| O O 
    //|
        return 6
    } else if (campos.b1.value == 2 && campos.b3.value == 2 && campos.b2.value == 0) {
    //|
    //| O   O
    //|
        return 5
    } else if (campos.b2.value == 2 && campos.b3.value == 2 && campos.b1.value == 0) {
    //|
    //|   O O
    //|
        return 4
    } else if (campos.c1.value == 2 && campos.c2.value == 2 && campos.c3.value == 0) {
    //|
    //|
    //| O O 
        return 9
    } else if (campos.c1.value == 2 && campos.c3.value == 2 && campos.c2.value == 0) {
    //|
    //|
    //| O   O
        return 8
    } else if (campos.c1.value == 2 && campos.c3.value == 2 && campos.c1.value == 0) {
    //|
    //|
    //|   O O 
        return 7
    }
    //=====================================================================================
    //  DIAGONAL
    //=====================================================================================
    if (campos.a1.value == 2 && campos.b2.value == 2 && campos.c3.value == 0) {
    //| O
    //|   O
    //|     
        return 9
    } else if (campos.a1.value == 2 && campos.c3.value == 2 && campos.b2.value == 0) {
    //| O
    //|   
    //|     O
        return 5
    } else if (campos.b2.value == 2 && campos.c3.value == 2 && campos.a1.value == 0) {
    //| 
    //|   O
    //|     O
        return 1
    } else if (campos.a3.value == 2 && campos.b2.value == 2 && campos.c1.value == 0) {
    //|     O
    //|   O
    //| 
        return 7
    } else if (campos.a3.value == 2 && campos.c1.value == 2 && campos.b2.value == 0) {
    //|     O
    //|   
    //| O
        return 5
    } else if (campos.b2.value == 2 && campos.c1.value == 2 && campos.a3.value == 0) {
    //|     
    //|   O
    //| O
        return 3
    }
    
    move = defesa(campos)
    
    return move
}