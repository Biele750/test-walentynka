
const CONFIG = {

    valentineName: "Żabko",

    pageTitle: "Zostaniesz moją Walentynką? 💝",

    // Tutaj emotki do gory
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // serca
        bears: ['🧸', '🐻']                       // mis
    },

    // pytanie i odp
    // Cust odp
    questions: {
        first: {
            text: "Lubisz mnie?",                                    // pytanie nr 1
            yesBtn: "Tak",                                             // tekst tak
            noBtn: "Nie",                                               // tekst nie
            secretAnswer: "Nie tylko lubię ale i kocham cię! ❤️"           // ukryta wiadomosc 
        },
        second: {
            text: "Jak bardzo mnie kochasz?",                          // pytanie jak bardzo mnie kocha
            startText: "Tak bardzo!",                                   // odp nad suwakiem
            nextBtn: "Dalej ❤️"                                         // Tekst dalej
        },
        third: {
            text: "Czy zostaniesz moją walentynką 14 lutego 2026? 🌹", // pytanie z data
            yesBtn: "Tak!",                                             // Tak
            noBtn: "Nie"                                                 // nie
        }
    },

    // Lov wiad
    // suwak
    loveMessages: {
        extreme: "WOOOOW Kochasz mnie tak bardzo?? 🥰🚀💝",  // 5000%
        high: "Jeszcze bardziej? 🚀💝",              // 1000%
        normal: "Aż tak? 🥰"                           // 100%
    },

    // wiad po "Tak!"
    celebration: {
        title: "Yay! Jestem najszczęśliwszym chłopakiem na świecie! 🎉💝💖💝💓",
        message: "Teraz odbierz swój prezent, duże buzi i jeszcze większe przytulenie!",
        emojis: "🎁💖🤗💝💋❤️💕"  // skaczace emotki
    },

    // kolor str

    colors: {
        backgroundStart: "#ffafbd",      // Gradient 1
        backgroundEnd: "#ffc3a0",        // Gradient 
        buttonBackground: "#ff6b6b",     // kolor przycisku 2
        buttonHover: "#ff8787",          // kolor przycisku
        textColor: "#ff4757"             // Text kolor 
    },

    // ustawienia animacji
  
    animations: {
        floatDuration: "15s",           // jak dlugo
        floatDistance: "50px",          // jak mocno sie ruszaja
        bounceSpeed: "0.5s",            // przedkosc
        heartExplosionSize: 1.5         // rozmiar 
    },

    // bcgr muzyka
    // 
    music: {
        enabled: true,                    
        autoplay: true,                   
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", 
        startText: "🎵 Play Music",       
        stopText: "🔇 Stop Music",        
        volume: 0.5                        
    }
};


window.VALENTINE_CONFIG = CONFIG; 
