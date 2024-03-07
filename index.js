const apple = document.getElementById('apple');
var A;
var S;
var D;
var W;
var score = 0;
Xpos = 0;
Ypos = 0;
var recentScore = 0;
var wid = window.innerWidth;
var App = parseInt(wid / 100);
var maxApp = App * 100;
var Xapp = 14;
var Yapp = 14;
var tail;
let foodItemIndex = 0; // first cell
apple.style.marginTop = Yapp + 'px';
apple.style.marginLeft = Xapp + 'px';
console.log(wid)
while (Xapp % 100 != 0){
    console.log(Xapp % 100 != 0)
    Xapp = Math.floor(Math.random() * maxApp);
    apple.style.marginLeft = Xapp + 'px';
} 
while(Yapp % 100 != 0){
    console.log(Yapp % 100 != 0)
    Yapp = Math.floor(Math.random() * 800);
    apple.style.marginTop = Yapp + 'px';
}
console.log(Xapp, Yapp)

async function createFood() {
    foodItemIndex = Math.floor(Math.random() * numCells);
    if (currentSnake.includes(foodItemIndex)) {
      await wait(100);
      createFood();
    } else {
      cells[foodItemIndex].classList.add("apple");
    }
  }

function myFunction(x) {
    if (x.matches) { // If media query matches
        // while (Xapp % 100 != 0){
        //     console.log(Xapp % 100 != 0)
        //     Xapp = Math.floor(Math.random() * maxApp);
        //     apple.style.marginLeft = Xapp + 'px';
        // } 
        // while(Yapp % 100 != 0){
        //     console.log(Yapp % 100 != 0)
        //     Yapp = Math.floor(Math.random() * 800);
        //     apple.style.marginTop = Yapp + 'px';
        // }
        const w = document.getElementById('w');
        w.addEventListener('click', () => {
            console.log('w small')
            const lose = document.getElementById('lose')
            if(lose.style.display == 'block'){
                return
            }
            const snake = document.getElementById('snake');
            console.log('top')
            if(S){
                clearInterval(S);
            }
            if(A){
                clearInterval(A);
            }
            if(D){
                clearInterval(D);
            }
            if(W){
                clearInterval(W);
            }
            const pause = document.getElementById('pause');
            pause.textContent = ''
            W = setInterval(() => {
                Ypos -= 50
                if(Ypos < 0){
                    if(S){
                        clearInterval(S);
                    }
                    if(A){
                        clearInterval(A);
                    }
                    if(D){
                        clearInterval(D);
                    }
                    if(W){
                        clearInterval(W);
                    }
                    const lose = document.getElementById('lose')
                    lose.style.display = 'block';
                    return
                }
                snake.style.transform = 'rotate(180deg)'
                snake.style.marginTop = Ypos + 'px'
                if(Xpos == Xapp && Ypos == Yapp){
                    tail.classList.add("snake");
                    currentSnake.push(tail);
                    console.log(tail)
                    const scope = document.getElementById('score')
                    console.log('+1')
                    score += 1
                    scope.textContent = score;
                    Xapp = Math.floor(Math.random() * 400);
                    Yapp = Math.floor(Math.random() * 400);
                    while (Xapp % 50 != 0){
                        console.log(Xapp % 100 != 0)
                        Xapp = Math.floor(Math.random() * 400);
                        apple.style.marginLeft = Xapp + 'px';
                    } 
                    while(Yapp % 50 != 0){
                        console.log(Yapp % 100 != 0)
                        Yapp = Math.floor(Math.random() * 400);
                        apple.style.marginTop = Yapp + 'px';
                    }
                    console.log(Xapp, Yapp)
                }
            }, 250)
        
        }) 
        const a = document.getElementById('a');
        a.addEventListener('click', () => {
            console.log('a small')
            const lose = document.getElementById('lose')
            if(lose.style.display == 'block'){
                return
            }
            const snake = document.getElementById('snake');
            console.log('left')
            if(S){
                clearInterval(S);
            }
            if(D){
                clearInterval(D);
            }
            if(W){
                clearInterval(W);
            }
            if(A){
                clearInterval(A);
            }
            const pause = document.getElementById('pause');
            pause.textContent = ''
            A = setInterval(() => {
                Xpos -= 50
                if(Xpos < 0){
                    if(S){
                        clearInterval(S);
                    }
                    if(A){
                        clearInterval(A);
                    }
                    if(D){
                        clearInterval(D);
                    }
                    if(W){
                        clearInterval(W);
                    }
                    const lose = document.getElementById('lose')
                    lose.style.display = 'block'
                    return
                }
                snake.style.transform = 'rotate(90deg)'
                snake.style.marginLeft = Xpos + 'px'
                if(Xpos == Xapp && Ypos == Yapp){
                    console.log('+1')
                    const scope = document.getElementById('score')
                    score += 1
                    scope.textContent = score;
                    Xapp = Math.floor(Math.random() * 400);
                    Yapp = Math.floor(Math.random() * 400);
                    while (Xapp % 50 != 0){
                        console.log(Xapp % 10 != 0)
                        Xapp = Math.floor(Math.random() * 400);
                        apple.style.marginLeft = Xapp + 'px';
                    } 
                    while(Yapp % 50 != 0){
                        console.log(Yapp % 100 != 0)
                        Yapp = Math.floor(Math.random() * 400);
                        apple.style.marginTop = Yapp + 'px';
                    }
                    console.log(Xapp, Yapp)
                }
            }, 250)
        
        })
        
        const s = document.getElementById('s');
        s.addEventListener('click', () => {
            console.log('s small')
            const lose = document.getElementById('lose')
            if(lose.style.display == 'block'){
                return
            }
            const snake = document.getElementById('snake');
            console.log('bottom')
            if(D){
                clearInterval(D);
            }
            if(A){
                clearInterval(A);
            }
            if(W){
                clearInterval(W);
            }
            if(S){
                clearInterval(S);
            }
            const pause = document.getElementById('pause');
            pause.textContent = ''
            S = setInterval(() => {
                Ypos += 50
                if(Ypos > 450){
                    if(S){
                        clearInterval(S);
                    }
                    if(A){
                        clearInterval(A);
                    }
                    if(D){
                        clearInterval(D);
                    }
                    if(W){
                        clearInterval(W);
                    }
                    const lose = document.getElementById('lose')
                    lose.style.display = 'block'
                    return
                }
                snake.style.transform = 'rotate(0deg)'
                snake.style.marginTop = Ypos + 'px'
                if(Xpos == Xapp && Ypos == Yapp){
                    const scope = document.getElementById('score')
                    console.log('+1')
                    score += 1
                    scope.textContent = score;
                    Xapp = Math.floor(Math.random() * 400);
                    Yapp = Math.floor(Math.random() * 400);
                    while (Xapp % 50 != 0){
                        console.log(Xapp % 50 != 0)
                        Xapp = Math.floor(Math.random() * 400);
                        apple.style.marginLeft = Xapp + 'px';
                    } 
                    while(Yapp % 50 != 0){
                        console.log(Yapp % 50 != 0)
                        Yapp = Math.floor(Math.random() * 400);
                        apple.style.marginTop = Yapp + 'px';
                    }
                    console.log(Xapp, Yapp)
                }
            }, 250)
        
        
        })
        
        const d = document.getElementById('d');
        d.addEventListener('click', () => {
            const lose = document.getElementById('lose')
            if(lose.style.display == 'block'){
                return
            }
            const snake = document.getElementById('snake');
            console.log('right')
            if(S){
                clearInterval(S);
            }
            if(A){
                clearInterval(A);
            }
            if(W){
                clearInterval(W);
            }
            if(D){
                clearInterval(D);
            }
            const pause = document.getElementById('pause');
            pause.textContent = ''
            D = setInterval(() => {
                Xpos += 50
                if(Xpos > wid){
                    if(S){
                        clearInterval(S);
                    }
                    if(A){
                        clearInterval(A);
                    }
                    if(D){
                        clearInterval(D);
                    }
                    if(W){
                        clearInterval(W);
                    }
                    const lose = document.getElementById('lose')
                    lose.style.display = 'block'
                    return
                }
                snake.style.transform = 'rotate(270deg)'
                snake.style.marginLeft = Xpos + 'px'
                if(Xpos == Xapp && Ypos == Yapp){
                    console.log('+1')
                    const scope = document.getElementById('score')
                    score += 1
                    scope.textContent = score;
                    Xapp = Math.floor(Math.random() * 400);
                    Yapp = Math.floor(Math.random() * 400);
                    while (Xapp % 50 != 0){
                        console.log(Xapp % 10 != 0)
                        Xapp = Math.floor(Math.random() * 400);
                        apple.style.marginLeft = Xapp + 'px';
                    } 
                    while(Yapp % 50 != 0){
                        console.log(Yapp % 10 != 0)
                        Yapp = Math.floor(Math.random() * 400);
                        apple.style.marginTop = Yapp + 'px';
                    }
                    console.log(Xapp, Yapp)
                }
            }, 250)
        

        })
        
        const res = document.getElementById('reset')
        res.addEventListener('click', () => {
            console.log('res small')
            if(S){
                    clearInterval(S);
                }
                if(A){
                    clearInterval(A);
                }
                if(D){
                    clearInterval(D);
                }
                if(W){
                    clearInterval(W);
                }
                console.log('click')
                const snake = document.getElementById('snake');
                const recentScore = document.getElementById('rec')
                const scope = document.getElementById('score')
                recentScore.textContent = score
                score = 0;
                scope.textContent = 0;
                score = 0;
                Xpos = 0;
                Ypos = 0;
                Xapp = 14;
                Yapp = 14;
                apple.style.marginTop = Yapp + 'px';
                apple.style.marginLeft = Xapp + 'px';
                while (Xapp % 50 != 0){
                    console.log(Xapp % 50 != 0)
                    Xapp = Math.floor(Math.random() * 400);
                    apple.style.marginLeft = Xapp + 'px';
                } 
                while(Yapp % 50 != 0){
                    console.log(Yapp % 50 != 0)
                    Yapp = Math.floor(Math.random() * 400);
                    apple.style.marginTop = Yapp + 'px';
                }
                console.log(Xapp, Yapp)
                snake.style.marginTop = Ypos + 'px';
                snake.style.marginLeft = Xpos + 'px';
                snake.style.transform = 'rotate(0deg)';
                const lose = document.getElementById('lose')
                lose.style.display = 'none';
            }) 
        }else {
            w.style.display = 'none'; 
            s.style.display = 'none';
            a.style.display = 'none';
            d.style.display = 'none';
        addEventListener('keydown', (event) => {
            console.log(event.key)
            if(event.key == 'D' || event.key == 'd'){
                const lose = document.getElementById('lose')
                if(lose.style.display == 'block'){
                    return
                }
                const snake = document.getElementById('snake');
                console.log('right')
                if(S){
                    clearInterval(S);
                }
                if(A){
                    clearInterval(A);
                }
                if(W){
                    clearInterval(W);
                }
                if(D){
                    clearInterval(D);
                }
                const pause = document.getElementById('pause');
                pause.textContent = ''
                D = setInterval(() => {
                    Xpos += 100
                    if(Xpos > 1350){
                        if(S){
                            clearInterval(S);
                        }
                        if(A){
                            clearInterval(A);
                        }
                        if(D){
                            clearInterval(D);
                        }
                        if(W){
                            clearInterval(W);
                        }
                        const lose = document.getElementById('lose')
                        lose.style.display = 'block'
                        return
                    }
                    snake.style.transform = 'rotate(270deg)'
                    snake.style.marginLeft = Xpos + 'px'
                    if(Xpos == Xapp && Ypos == Yapp){
                        console.log('+1')
                        const scope = document.getElementById('score')
                        score += 1
                        scope.textContent = score;
                        Xapp = Math.floor(Math.random() * 800);
                        Yapp = Math.floor(Math.random() * 800);
                        while (Xapp % 100 != 0){
                            console.log(Xapp % 10 != 0)
                            Xapp = Math.floor(Math.random() * 800);
                            apple.style.marginLeft = Xapp + 'px';
                        } 
                        while(Yapp % 100 != 0){
                            console.log(Yapp % 10 != 0)
                            Yapp = Math.floor(Math.random() * 800);
                            apple.style.marginTop = Yapp + 'px';
                        }
                        console.log(Xapp, Yapp)
                    }
                }, 250)
            }
            if(event.key == 'A' || event.key == 'a'){
                const lose = document.getElementById('lose')
                if(lose.style.display == 'block'){
                    return
                }
                const snake = document.getElementById('snake');
                console.log('left')
                if(S){
                    clearInterval(S);
                }
                if(D){
                    clearInterval(D);
                }
                if(W){
                    clearInterval(W);
                }
                if(A){
                    clearInterval(A);
                }
                const pause = document.getElementById('pause');
                pause.textContent = ''
                A = setInterval(() => {
                    Xpos -= 100
                    if(Xpos < 0){
                        if(S){
                            clearInterval(S);
                        }
                        if(A){
                            clearInterval(A);
                        }
                        if(D){
                            clearInterval(D);
                        }
                        if(W){
                            clearInterval(W);
                        }
                        const lose = document.getElementById('lose')
                        lose.style.display = 'block'
                        return
                    }
                    snake.style.transform = 'rotate(90deg)'
                    snake.style.marginLeft = Xpos + 'px'
                    if(Xpos == Xapp && Ypos == Yapp){
                        console.log('+1')
                        const scope = document.getElementById('score')
                        score += 1
                        scope.textContent = score;
                        Xapp = Math.floor(Math.random() * 800);
                        Yapp = Math.floor(Math.random() * 800);
                        while (Xapp % 100 != 0){
                            console.log(Xapp % 10 != 0)
                            Xapp = Math.floor(Math.random() * 800);
                            apple.style.marginLeft = Xapp + 'px';
                        } 
                        while(Yapp % 100 != 0){
                            console.log(Yapp % 100 != 0)
                            Yapp = Math.floor(Math.random() * 800);
                            apple.style.marginTop = Yapp + 'px';
                        }
                        console.log(Xapp, Yapp)
                    }
                }, 250)
            }
            if(event.key == 'S' || event.key == 's'){
                const lose = document.getElementById('lose')
                if(lose.style.display == 'block'){
                    return
                }
                const snake = document.getElementById('snake');
                console.log('bottom')
                if(D){
                    clearInterval(D);
                }
                if(A){
                    clearInterval(A);
                }
                if(W){
                    clearInterval(W);
                }
                if(S){
                    clearInterval(S);
                }
                const pause = document.getElementById('pause');
                pause.textContent = ''
                S = setInterval(() => {
                    Ypos += 100
                    if(Ypos > 800){
                        if(S){
                            clearInterval(S);
                        }
                        if(A){
                            clearInterval(A);
                        }
                        if(D){
                            clearInterval(D);
                        }
                        if(W){
                            clearInterval(W);
                        }
                        const lose = document.getElementById('lose')
                        lose.style.display = 'block'
                        return
                    }
                    snake.style.transform = 'rotate(0deg)'
                    snake.style.marginTop = Ypos + 'px'
                    if(Xpos == Xapp && Ypos == Yapp){
                        const scope = document.getElementById('score')
                        console.log('+1')
                        score += 1
                        scope.textContent = score;
                        Xapp = Math.floor(Math.random() * 800);
                        Yapp = Math.floor(Math.random() * 800);
                        while (Xapp % 100 != 0){
                            console.log(Xapp % 100 != 0)
                            Xapp = Math.floor(Math.random() * 800);
                            apple.style.marginLeft = Xapp + 'px';
                        } 
                        while(Yapp % 100 != 0){
                            console.log(Yapp % 100 != 0)
                            Yapp = Math.floor(Math.random() * 800);
                            apple.style.marginTop = Yapp + 'px';
                        }
                        console.log(Xapp, Yapp)
                    }
                }, 250)
            }
            if(event.key == 'W' || event.key == 'w'){
                const lose = document.getElementById('lose')
                if(lose.style.display == 'block'){
                    return
                }
                const snake = document.getElementById('snake');
                console.log('top')
                if(S){
                    clearInterval(S);
                }
                if(A){
                    clearInterval(A);
                }
                if(D){
                    clearInterval(D);
                }
                if(W){
                    clearInterval(W);
                }
                const pause = document.getElementById('pause');
                pause.textContent = ''
                W = setInterval(() => {
                    Ypos -= 100
                    if(Ypos < 0){
                        if(S){
                            clearInterval(S);
                        }
                        if(A){
                            clearInterval(A);
                        }
                        if(D){
                            clearInterval(D);
                        }
                        if(W){
                            clearInterval(W);
                        }
                        const lose = document.getElementById('lose')
                        lose.style.display = 'block';
                        return
                    }
                    snake.style.transform = 'rotate(180deg)'
                    snake.style.marginTop = Ypos + 'px'
                    if(Xpos == Xapp && Ypos == Yapp){
                        const scope = document.getElementById('score')
                        console.log('+1')
                        score += 1
                        scope.textContent = score;
                        Xapp = Math.floor(Math.random() * 800);
                        Yapp = Math.floor(Math.random() * 800);
                        while (Xapp % 100 != 0){
                            console.log(Xapp % 100 != 0)
                            Xapp = Math.floor(Math.random() * 800);
                            apple.style.marginLeft = Xapp + 'px';
                        } 
                        while(Yapp % 100 != 0){
                            console.log(Yapp % 100 != 0)
                            Yapp = Math.floor(Math.random() * 800);
                            apple.style.marginTop = Yapp + 'px';
                        }
                        console.log(Xapp, Yapp)
                    }
                }, 250)
            }
            if(event.key == ' '){
                if(S){
                    clearInterval(S);
                }
                if(A){
                    clearInterval(A);
                }
                if(D){
                    clearInterval(D);
                }
                if(W){
                    clearInterval(W);
                }
                console.log('pause')
                const pause = document.getElementById('pause');
                pause.textContent = 'Game pause'
            }
        
        })
        const restart = document.getElementById('reset')
        if(restart) {
            restart.addEventListener('click', () => {
                if(S){
                    clearInterval(S);
                }
                if(A){
                    clearInterval(A);
                }
                if(D){
                    clearInterval(D);
                }
                if(W){
                    clearInterval(W);
                }
                console.log('click')
                const snake = document.getElementById('snake');
                const recentScore = document.getElementById('rec')
                const scope = document.getElementById('score')
                recentScore.textContent = score
                score = 0;
                scope.textContent = 0;
                Xpos = 0;
                Ypos = 0;
                Xapp = 14;
                Yapp = 14;
                apple.style.marginTop = Yapp + 'px';
                apple.style.marginLeft = Xapp + 'px';
                while (Xapp % 100 != 0){
                    console.log(Xapp % 100 != 0)
                    Xapp = Math.floor(Math.random() * 800);
                    apple.style.marginLeft = Xapp + 'px';
                } 
                while(Yapp % 100 != 0){
                    console.log(Yapp % 100 != 0)
                    Yapp = Math.floor(Math.random() * 800);
                    apple.style.marginTop = Yapp + 'px';
                }
                console.log(Xapp, Yapp)
                snake.style.marginTop = Ypos + 'px';
                snake.style.marginLeft = Xpos + 'px';
                snake.style.transform = 'rotate(0deg)';
                const lose = document.getElementById('lose')
                lose.style.display = 'none';
                
            }) 

        }
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 900px)")
  console.log(w)
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });
