const quotesWithColors = [
    { quote: "The only way to do great work is to love what you do. - Steve Jobs", color:"blue"},
    { quote:"Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll", color: "green"},
    { quote: "Believe you can and you're halfway there. - Theodore Roosevelt", color:"purple"},
    { quote:"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt", color:"pink"},
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill", color:"yellow"},
    { quote: "Strive not to be a success, but rather to be of value. - Albert Einstein", color: "red"},
    { quote: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt", color:"dark blue"},
    { quote: "It is during our darkest moments that we must focus to see the light. - Aristotle", color: "turquoise"},
    { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer", color: "coral" },
    { quote: "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln", color: "olive"},
    { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein", color: "maroon"},
    { quote: "The best way to predict the future is to create it. - Peter Drucker", color: "gray" },
    { quote: "Don't watch the clock; do what it does. Keep going. - Sam Levenson", color: "cyan"},
    { quote: "The only place where success comes before work is in the dictionary. - Vidal Sassoon", color: "magenta"},
    { quote:"The road to success and the road to failure are almost exactly the same. - Colin R. Davis", color: "indigo"},
    { quote: "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau", color: "teal"},
    { quote: "Opportunities don't happen, you create them. - Chris Grosser", color: "lime"},
    { quote: "Don't be afraid to give up the good to go for the great. - John D. Rockefeller", color: "brown"},
    { quote: "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson", color: "lavander"},
    { quote: "The only place where success comes before work is in the dictionary. - Vidal Sassoon", color: "black"},
    { quote: "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill", color: "yellow"},
    { quote: "If you really look closely, most overnight successes took a long time. - Steve Jobs", color: "blue"},
    { quote: "You don't have to be great to start, but you have to start to be great. - Zig Ziglar", color: "pink"},
    { quote: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt", color: "black"},
    { quote: "Dream big and dare to fail. - Norman Vaughan", color: "green"},
    { quote: "The secret of success is to do the common thing uncommonly well. - John D. Rockefeller Jr.", color: "navy"},
    { quote: "It does not matter how slowly you go as long as you do not stop. - Confucius", color: "orange"},
    { quote: "Success is not in what you have, but who you are. - Bo Bennett", color: "black"},
    { quote: "Action is the foundational key to all success. - Pablo Picasso", color: "purple"},
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotesWithColors.length);
    const quoteElement = document.getElementById('quote');
    const quote = quotesWithColors[randomIndex].quote;
    const color = quotesWithColors[randomIndex].color;
    quoteElement.textContent = quote;
    quoteElement.style.color = color;
}
