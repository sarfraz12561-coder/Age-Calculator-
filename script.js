// جب پیج لوڈ ہو جائے تو یہ فنکشن تیار رہے
document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.getElementById('actionButton');
    const resultDisplay = document.getElementById('result');

    if(mainButton) {
        mainButton.addEventListener('click', () => {
            // یہاں آپ اپنا فنکشن لکھ سکتے ہیں
            const userInput = document.getElementById('userInput').value;
            
            if(userInput === "") {
                resultDisplay.innerText = "براہ کرم کچھ لکھیں!";
                resultDisplay.style.color = "red";
            } else {
                resultDisplay.innerText = "آپ کا شکریہ! ہم نے آپ کا پیغام وصول کر لیا۔";
                resultDisplay.style.color = "green";
                console.log("User Input:", userInput);
            }
        });
    }
});

