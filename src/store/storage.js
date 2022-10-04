
export function getHeight(event,offset) {
    for(let i =0;i<=15;i++){
        if(i == event){
            return -offset*(i-1);
        }
    }
}

export function getNumsD(){
    let offset = 0;
    const nums = [];
    for(let i =0;i<=36;i++){
            if(i == 6 || i == 12 || i == 18 || i == 24 || i == 30 || i == 36){
                offset++
                nums.push({
                    offset: offset,
                    class: offset<=4?'main__product-nums pages__style-nums visible':'main__product-nums pages__style-nums'
                })
            }
    }
    return nums
}

export function getNumsN(){
    let offset = 0;
    const nums = [];
    for(let i =0;i<=36;i++){
        if(i == 4 || i == 8 || i == 12 || i == 16 || i == 20 || i == 24 || i == 28 || i == 32 || i == 36){
            offset++
            nums.push({
                offset: offset,
                class: offset<=4?'main__product-nums pages__style-nums visible':'main__product-nums pages__style-nums'
            })
        }
    }
    return nums
}

export function getNumsM(){
    let offset = 0;
    const nums = [];
    for(let i =0;i<=36;i++){
        if(i == 3 || i == 6 || i == 9 || i == 12 || i == 15 || i == 18 || i == 21 || i == 24 || i == 27 || i == 30 || i == 33 || i == 36){
            offset++
            nums.push({
                offset: offset,
                class: offset<=4?'main__product-nums pages__style-nums visible':'main__product-nums pages__style-nums'
            })
        }
    }
    return nums
}