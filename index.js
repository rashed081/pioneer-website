//login button event handler
const loginBtn= document.getElementById("login");
 loginBtn.addEventListener("click",function(){
     const loginArea=document.getElementById("login-area");
     loginArea.style.display="none";
     const transactionArea = document.getElementById("transaction-area");
     transactionArea.style.display="Block";
 })

 //deposit button event handler
const depositBtn= document.getElementById("depositbtn");
depositBtn.addEventListener("click", function(){
    const depositAmount= parseFloat(document.getElementById("depositAmount").value);
    updateSpanText("currentAmount", depositAmount);
    updateSpanText("currentBalance", depositAmount);
    document.getElementById("depositAmount").value="";
    
})
//withdraw button event handler 
const withdrawBtn= document.getElementById("withdrawbtn");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount= parseFloat(document.getElementById("withdrawAmount").value);
    updateSpanText("currentWithdraw", withdrawAmount);
    updateSpanText("currentBalance", withdrawAmount * (-1));
    document.getElementById("withdrawAmount").value="";

    
})
function updateSpanText(id,depositAmount){
    const current = document.getElementById(id).innerText;
    const currentNumber= parseFloat(current);
    const totalAmount = depositAmount + currentNumber;
    document.getElementById(id).innerText=totalAmount;
}
 