const input_data = document.querySelector(".input_data .input");
const button = document.querySelector(".button button");
const image = document.querySelector("#qr-img")
button.addEventListener("click",()=>{
const inputValue = input_data.value.trim();
    if(inputValue==="")
    {
        alert("Please Enter Valid Input");

    }
    else{
        image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inputValue}`;
        image.alt=`QR Code for ${inputValue}`;
    }
});


