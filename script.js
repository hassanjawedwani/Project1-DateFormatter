const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedTime = `${day}-${month}-${year}`;
const inputSelectOption = document.getElementById('inputSelectOption');
const output = document.getElementById('output');
output.textContent = formattedTime ;
inputSelectOption.addEventListener("change", () => {
    switch(inputSelectOption.value) {
        case "yyyy-mm-dd": 
        output.textContent = formattedTime  
                             .split("-")
                             .reverse() 
                             .join("-");
        break;
        
        case "mm-dd-yyyy-h-m": 
        output.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
        break;

        default: 
        output.textContent = formattedTime;
    
    }
}); 

