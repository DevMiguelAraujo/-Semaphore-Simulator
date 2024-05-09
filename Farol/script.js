const light = document.querySelectorAll('.light')
let color = document.querySelector(".on").classList[1]
let counter = 0
const fastWay = () => {
    if (counter <= 4){
        counter = 5
    }
}
const verif = ()=>{
    switch(color){
        case 'verde':
            setTimeout(() => {
                if(counter >= 9){
                    light[2].classList.remove('on')
                    light[2].classList.add('off')
                    light[1].classList.remove('off')
                    light[1].classList.add('on')
                    color = document.querySelector(".on").classList[1]
                    return verif()
                }
                counter += 1
                verif()
            }, 1000);
        break;
        case 'vermelho':
            setTimeout(() => {
                light[0].classList.remove('on')
                light[0].classList.add('off')
                light[2].classList.remove('off')
                light[2].classList.add('on')
                color = document.querySelector(".on").classList[1]
                counter = 0
                return verif()
            }, 10000);
        break
        default:
            setTimeout(() => {
                light[1].classList.remove('on')
                light[1].classList.add('off')
                light[0].classList.remove('off')
                light[0].classList.add('on')
                color = document.querySelector(".on").classList[1]
                return verif()
            }, 5000);
    }
}
verif()