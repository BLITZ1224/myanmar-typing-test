// စမ်းသပ်ရန် မြန်မာစာသားတိုများ
const paragraphs = [
    "မြန်မာစာသည်တို့စာဖြစ်သည်မြန်မာစာကိုချစ်မြတ်နိုးပါ",
    "ကွန်ပျူတာလက်ကွက်လေ့ကျင့်ခြင်းသည်အကျိုးရှိစေသည်",
    "ကြိုးစားမှုသည်အောင်မြင်ခြင်း၏သော့ချက်ဖြစ်ပါသည်"
];

const wordsContainer = document.getElementById('words-container');
const hiddenInput = document.getElementById('hidden-input');

let textToType = paragraphs[Math.floor(Math.random() * paragraphs.length)];
let charactersArray = [];

// စာသားတွေကို span tag လေးတွေထဲ တစ်လုံးချင်း ခွဲထည့်ခြင်း
function setupText() {
    wordsContainer.innerHTML = '';
    // မြန်မာစာလုံးတွေကို Array ခွဲထုတ်ခြင်း
    charactersArray = textToType.split('');
    
    charactersArray.forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.classList.add('char');
        charSpan.innerText = char;
        if (index === 0) charSpan.classList.add('current'); // စစချင်း နေရာပြရန်
        wordsContainer.appendChild(charSpan);
    });
}

// သုံးစွဲသူ screen ကိုနှိပ်တာနဲ့ စာရိုက်လို့ရအောင် လုပ်ခြင်း
window.addEventListener('click', () => hiddenInput.focus());
window.addEventListener('load', () => hiddenInput.focus());

hiddenInput.addEventListener('input', () => {
    const spans = wordsContainer.querySelectorAll('.char');
    const inputValue = hiddenInput.value.split('');
    
    spans.forEach((span, index) => {
        const character = inputValue[index];
        
        // ကာဆာ (Caret) နေရာ ရွှေ့ခြင်း Logic
        span.classList.remove('current');
        if (index === inputValue.length) {
            span.classList.add('current');
        }

        // မှန်/မှား အရောင်ပြောင်းခြင်း
        if (character == null) {
            span.classList.remove('correct', 'incorrect');
        } else if (character === span.innerText) {
            span.classList.add('correct');
            span.classList.remove('incorrect');
        } else {
            span.classList.add('incorrect');
            span.classList.remove('correct');
        }
    });

    // စာရိုက်လို့ ပြီးသွားရင်
    if (inputValue.length >= spans.length) {
        alert("ပြီးဆုံးပါပြီ။");
        // ဒီနေရာမှာ နောက်တစ်ကြောင်း ထပ်ပြောင်းဖို့ ကုဒ်ထည့်လို့ရပါတယ်
    }
});

// စတင်ပတ်မောင်းရန်
setupText();
