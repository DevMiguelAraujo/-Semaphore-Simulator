const light = document.querySelectorAll('.light')
let color = document.querySelector(".verde").classList[1]
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
                    light[2].classList.remove('verde')
                    light[1].classList.add('amarelo')
                    color = light[1].classList[1]
                    return verif()
                }
                counter += 1
                return verif()
            }, 1000);
        break;
        case 'vermelho':
            setTimeout(() => {
                light[0].classList.remove('vermelho')
                light[2].classList.add('verde')
                color = light[2].classList[1]
                counter = 0
                return verif()
            }, 10000);
        break
        default:
            setTimeout(() => {
                light[1].classList.remove('amarelo')
                light[0].classList.add('vermelho')
                color = light[0].classList[1]
                return verif()
            }, 5000);
    }
}
verif()
