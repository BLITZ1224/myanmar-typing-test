const quoteDisplay = document.getElementById('quote-display');
const quoteInput = document.getElementById('quote-input');
const accuracyText = document.getElementById('accuracy');

quoteInput.addEventListener('input', () => {
    const arrayQuote = quoteDisplay.querySelectorAll('span');
    const arrayValue = quoteInput.value.split('');

    // အခြေခံ အမှားအမှန် စစ်ဆေးခြင်း Logic
    let correctCharacters = 0;
    
    // (အစပိုင်း စမ်းသပ်ရန်အတွက် ရိုက်သမျှစာလုံးအရေအတွက်ကို အခြေခံပြီး စစ်ထားခြင်းဖြစ်သည်)
    if(quoteInput.value === quoteDisplay.innerText) {
        alert("ဂုဏ်ယူပါတယ်! အောင်မြင်စွာ ရိုက်နှိပ်ပြီးပါပြီ။");
    }
});
