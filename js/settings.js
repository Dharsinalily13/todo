const saveBtn = document.getElementById("save-pin");
const pinInput = document.getElementById("pin-input");
const pinMsg = document.getElementById("pin-msg");

saveBtn.addEventListener("click", () => {
    const pin = pinInput.value;
    if(pin.length === 4 && /^\d+$/.test(pin)){
        localStorage.setItem("userPIN", pin);
        pinMsg.textContent = "PIN saved!";
        pinInput.value = "";
    } else {
        pinMsg.style.color = "red";
        pinMsg.textContent = "Enter a valid 4-digit PIN";
    }
});
