
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
            if(i < Math.ceil(36/6)){    
                offset++
                nums.push({
                    offset: offset,
                    class: offset<=4?'main__product-nums pages__style-nums visible':'main__product-nums pages__style-nums'
                })
            }
    }
    nums[0].class = 'main__product-nums pages__style-nums visible active'
    return nums
}

export function getNumsN(sum){
    let offset = 0;
    const nums = [];
    for(let i =0;i<=sum;i++){
        if(i < Math.ceil(sum/4)){  
            offset++
            nums.push({
                offset: offset,
                class: offset<=4?'main__product-nums pages__style-nums visible':'main__product-nums pages__style-nums'
            })
        }
    }
    nums[0].class = 'main__product-nums pages__style-nums visible active'
    return nums
}

export function getNumsM(sum){
    let offset = 0;
    const nums = [];
    for(let i =0;i<=sum;i++){
        if(i < Math.ceil(sum/3)){  
            offset++
            nums.push({
                offset: offset,
                class: offset<=4?'main__product-nums pages__style-nums visible':'main__product-nums pages__style-nums'
            })
        }
    }
    nums[0].class = 'main__product-nums pages__style-nums visible active'
    return nums
}

export function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}