let amountInput = document.querySelector("input[type = text]");
let currnceyFrom = document.querySelector("select[name = currency-from]");
let currnceyTo = document.querySelector("select[name = currency-to]");
let convertBtn = document.querySelector("button");
let convertResult = document.querySelector(".second-row span");

convertBtn.addEventListener("click",function(){
    if(currnceyFrom.value == currnceyFrom.children[1].value && currnceyTo.value == currnceyTo.children[1].value){
        let result = (amountInput.value * 572.2600).toFixed(3);
        convertResult.innerHTML = `${result} SDG`;
    } else if (currnceyFrom.value == currnceyFrom.children[1].value && currnceyTo.value == currnceyTo.children[2].value){
        let result = (amountInput.value * 19.14).toFixed(3);
        convertResult.innerHTML = `${result} EGP`;
    } else if (currnceyFrom.value == currnceyFrom.children[1].value && currnceyTo.value == currnceyTo.children[3].value){
    let result = (amountInput.value * 0.38).toFixed(3);
    convertResult.innerHTML = `${result} OMR`;
    } else if (currnceyFrom.value == currnceyFrom.children[1].value && currnceyTo.value == currnceyTo.children[4].value){
    let result = (amountInput.value * 3.75).toFixed(3);
    convertResult.innerHTML = `${result} SAR`;
    } else if (currnceyFrom.value == currnceyFrom.children[1].value && currnceyTo.value == currnceyTo.children[5].value){
    let result = (amountInput.value * 3.67).toFixed(3);
    convertResult.innerHTML = `${result} AED`;
    } else if (currnceyFrom.value == currnceyFrom.children[2].value && currnceyTo.value == currnceyTo.children[1].value){
    let result = (amountInput.value * 1479.32).toFixed(3);
    convertResult.innerHTML = `${result} SDG`;
    } else if (currnceyFrom.value == currnceyFrom.children[2].value && currnceyTo.value == currnceyTo.children[2].value){
    let result = (amountInput.value * 49.72).toFixed(3);
    convertResult.innerHTML = `${result} EGP`;
    } else if (currnceyFrom.value == currnceyFrom.children[2].value && currnceyTo.value == currnceyTo.children[3].value){
        convertResult.innerHTML = `&#128517`;
    } else if (currnceyFrom.value == currnceyFrom.children[2].value && currnceyTo.value == currnceyTo.children[4].value){
        let result = (amountInput.value * 9.75).toFixed(3);
        convertResult.innerHTML = `${result} SAR`;
    } else if (currnceyFrom.value == currnceyFrom.children[2].value && currnceyTo.value == currnceyTo.children[5].value){
        let result = (amountInput.value * 9.54).toFixed(3);
        convertResult.innerHTML = `${result} AED`;
    } else if (currnceyFrom.value == currnceyFrom.children[3].value && currnceyTo.value == currnceyTo.children[1].value){
        convertResult.innerHTML = `&#128530`;
    } else if (currnceyFrom.value == currnceyFrom.children[3].value && currnceyTo.value == currnceyTo.children[2].value){
        let result = (amountInput.value * 0.034).toFixed(3);
        convertResult.innerHTML = `${result} EGP`;
    } else if (currnceyFrom.value == currnceyFrom.children[3].value && currnceyTo.value == currnceyTo.children[3].value){
        let result = (amountInput.value * 0.00068).toFixed(3);
        convertResult.innerHTML = `${result} OMR`;
    } else if (currnceyFrom.value == currnceyFrom.children[3].value && currnceyTo.value == currnceyTo.children[4].value){
        let result = (amountInput.value * 0.0066).toFixed(3);
        convertResult.innerHTML = `${result} SAR`;
    } else if (currnceyFrom.value == currnceyFrom.children[3].value && currnceyTo.value == currnceyTo.children[5].value){
        let result = (amountInput.value * 0.0064).toFixed(3);
        convertResult.innerHTML = `${result} AED`;
    } else if (currnceyFrom.value == currnceyFrom.children[4].value && currnceyTo.value == currnceyTo.children[1].value){
        let result = (amountInput.value * 29.77).toFixed(3);
        convertResult.innerHTML = `${result} SDG`;
    } else if (currnceyFrom.value == currnceyFrom.children[4].value && currnceyTo.value == currnceyTo.children[2].value){
        convertResult.innerHTML = `&#128557`;
    } else if (currnceyFrom.value == currnceyFrom.children[4].value && currnceyTo.value == currnceyTo.children[3].value){
        let result = (amountInput.value * 0.020).toFixed(3);
        convertResult.innerHTML = `${result} OMR`;
    } else if (currnceyFrom.value == currnceyFrom.children[4].value && currnceyTo.value == currnceyTo.children[4].value){
        let result = (amountInput.value * 0.20).toFixed(3);
        convertResult.innerHTML = `${result} SAR`;
    } else if (currnceyFrom.value == currnceyFrom.children[4].value && currnceyTo.value == currnceyTo.children[5].value){
        let result = (amountInput.value * 0.19).toFixed(3);
        convertResult.innerHTML = `${result} AED`;
    } else if (currnceyFrom.value == currnceyFrom.children[5].value && currnceyTo.value == currnceyTo.children[1].value){
        let result = (amountInput.value * 155.05).toFixed(3);
        convertResult.innerHTML = `${result} SDG`;
    } else if (currnceyFrom.value == currnceyFrom.children[5].value && currnceyTo.value == currnceyTo.children[2].value){
        let result = (amountInput.value * 5.21).toFixed(3);
        convertResult.innerHTML = `${result} EGP`;
    } else if (currnceyFrom.value == currnceyFrom.children[5].value && currnceyTo.value == currnceyTo.children[3].value){
        let result = (amountInput.value * 0.10).toFixed(3);
        convertResult.innerHTML = `${result} OMR`;
    } else if (currnceyFrom.value == currnceyFrom.children[5].value && currnceyTo.value == currnceyTo.children[4].value){
        let result = (amountInput.value * 1.02).toFixed(3);
        convertResult.innerHTML = `${result} SAR`;
    } else if (currnceyFrom.value == currnceyFrom.children[5].value && currnceyTo.value == currnceyTo.children[4].value){
        let result = (amountInput.value * 1.02).toFixed(3);
        convertResult.innerHTML = `${result} SAR`;
    } else if (currnceyFrom.value == currnceyFrom.children[5].value && currnceyTo.value == currnceyTo.children[5].value){
        convertResult.innerHTML = `&#129300`;
    };

    if(currnceyFrom.value == currnceyFrom.children[0].value && currnceyTo.value == currnceyTo.children[0].value){
        convertResult.innerHTML = `All fields required`;
    };

    if(amountInput.value == ""){
        convertResult.innerHTML = `Please Enter a Valid Number`;
    };

});

