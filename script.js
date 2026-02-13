// Data
const materials = [
    {
        name: "Newspapers",
        category: "paper",
        recyclable: true,
        prep: "Keep clean and dry. bundle if required.",
        exclude: "Dirty/wet paper, tissues.",
        icon: "📰",
        bin: "recycle",
        quizDesc: "Paper is widely recyclable! Keep it dry."
    },
    {
        name: "Cardboard Boxes",
        category: "paper",
        recyclable: true,
        prep: "Flatten completely to save space.",
        exclude: "Greasy pizza boxes, wax-coated boxes.",
        icon: "📦",
        bin: "recycle",
        quizDesc: "Flatten boxes to save space in the bin."
    },
    {
        name: "Pizza Boxes (Greasy)",
        category: "paper",
        recyclable: false,
        prep: "N/A",
        exclude: "Oil contaminates the pulp.",
        icon: "🍕",
        bin: "compost",
        quizDesc: "Grease ruins paper recycling. Compost it!"
    },
    {
        name: "Plastic Bottles (PET)",
        category: "plastic",
        recyclable: true,
        prep: "Rinse out liquid. Keep cap on if requested.",
        exclude: "Bottles with hazardous residue.",
        icon: "🧴",
        bin: "recycle",
        quizDesc: "Rinse it out and keep the cap on!"
    },
    {
        name: "Plastic Bags",
        category: "plastic",
        recyclable: false,
        prep: "Reuse or return to store drop-off.",
        exclude: "Curbside bins (they jam machines).",
        icon: "🛍️",
        bin: "trash",
        quizDesc: "These jam sorting machines. Use store drop-off."
    },
    {
        name: "Glass Jars",
        category: "glass",
        recyclable: true,
        prep: "Rinse away food. Remove lids.",
        exclude: "Broken glass, ceramics, mirrors.",
        icon: "🫙",
        bin: "recycle",
        quizDesc: "Glass can be recycled endlessly!"
    },
    {
        name: "Broken Glass",
        category: "glass",
        recyclable: false,
        prep: "Wrap effectively for safety.",
        exclude: "Do not put in recycle bin.",
        icon: "🍷",
        bin: "trash",
        quizDesc: "Dangerous for sorters. Wrap and trash."
    },
    {
        name: "Soda Cans",
        category: "metal",
        recyclable: true,
        prep: "Empty completely. Rinse if sticky.",
        exclude: "Cans with paint/chemical residue.",
        icon: "🥤",
        bin: "recycle",
        quizDesc: "Aluminum is valuable and endlessly recyclable."
    },
    {
        name: "Aluminum Foil (Clean)",
        category: "metal",
        recyclable: true,
        prep: "Wipe clean and ball it up (2 inches+).",
        exclude: "Dirty foil with food stuck.",
        icon: "🌯",
        bin: "recycle",
        quizDesc: "Clean it and ball it up so it gets sorted."
    },
    {
        name: "Batteries",
        category: "metal",
        recyclable: false,
        prep: "Tape ends.",
        exclude: "Never put in hazardous household trash.",
        icon: "🔋",
        bin: "trash",
        quizDesc: "Hazardous! Take to special e-waste drop-off."
    },
    {
        name: "Milk Cartons",
        category: "paper",
        recyclable: true,
        prep: "Rinse and flatten. Keep cap on.",
        exclude: "Straws (usually trash).",
        icon: "🥛",
        bin: "recycle",
        quizDesc: "Cartons are often recyclable now. Rinse/flatten."
    },
    {
        name: "Electronics (E-Waste)",
        category: "metal",
        recyclable: false,
        prep: "Remove personal data.",
        exclude: "Regular bins.",
        icon: "📱",
        bin: "trash",
        quizDesc: "E-waste has nice metals but needs special drop-off."
    },
    {
        name: "Ceramics",
        category: "glass",
        recyclable: false,
        prep: "Donate if good.",
        exclude: "Recycle bins (melting point too high).",
        icon: "🏺",
        bin: "trash",
        quizDesc: "Ceramics don't melt like glass. Trash or donate."
    },
    {
        name: "Styrofoam",
        category: "plastic",
        recyclable: false,
        prep: "Reuse for shipping.",
        exclude: "Most curbside programs.",
        icon: "🥡",
        bin: "trash",
        quizDesc: "Hard to recycle. Avoid if possible!"
    },
    {
        name: "Magazines",
        category: "paper",
        recyclable: true,
        prep: "Remove plastic wrap.",
        exclude: "Wet or moldy paper.",
        icon: "📖",
        bin: "recycle",
        quizDesc: "Glossy paper is fine to recycle."
    },
    {
        name: "Banana Peel",
        category: "organic",
        recyclable: false,
        prep: "Compost bin.",
        exclude: "Recycling bin.",
        icon: "🍌",
        bin: "compost",
        quizDesc: "Organic waste goes in compost!"
    },
    {
        name: "Chips Bag",
        category: "plastic",
        recyclable: false,
        prep: "Trash bin.",
        exclude: "Recycling.",
        icon: "🍟",
        bin: "trash",
        quizDesc: "Multi-layer materials can't be recycled easily."
    },
    {
        name: "Broken Mirror",
        category: "glass",
        recyclable: false,
        prep: "Wrap carefully.",
        exclude: "Recycling.",
        icon: "🪞",
        bin: "trash",
        quizDesc: "Different chemicals than jars. Trash it."
    },
    {
        name: "Coffee Cup (Paper)",
        category: "paper",
        recyclable: false,
        prep: "Trash or separate lid.",
        exclude: "Recycling (plastic lining).",
        icon: "☕",
        bin: "trash",
        quizDesc: "Plastic lining makes these hard to recycle."
    },
    {
        name: "Light Bulb",
        category: "glass",
        recyclable: false,
        prep: "Wrap effectively.",
        exclude: "Bin recycling.",
        icon: "💡",
        bin: "trash",
        quizDesc: "Special disposal needed, not bin recycling."
    }
];


// Awareness Quiz Data
const awarenessQuestions = [
    {
        question: "What is the main goal of RecycleRight?",
        options: [
            "Selling recycled products",
            "Making recycling simple and understandable",
            "Charging for waste collection",
            "Promoting plastic use"
        ],
        correct: 1 // Index of correct answer
    },
    {
        question: "Why is recycling important?",
        options: [
            "It increases pollution",
            "It wastes resources",
            "It saves natural resources and energy",
            "It fills landfills faster"
        ],
        correct: 2
    },
    {
        question: "Which of the following is commonly recyclable?",
        options: [
            "Clean paper",
            "Food waste mixed with plastic",
            "Dirty tissues",
            "Used diapers"
        ],
        correct: 0
    },
    {
        question: "Before recycling plastic bottles, what should you do?",
        options: [
            "Throw them with food waste",
            "Burn them",
            "Clean and dry them",
            "Break glass into them"
        ],
        correct: 2
    },
    {
        question: "Which item belongs to e-waste?",
        options: [
            "Newspaper",
            "Mobile phone",
            "Banana peel",
            "Cardboard box"
        ],
        correct: 1
    },
    {
        question: "What happens when recyclable waste is not recycled?",
        options: [
            "Landfills increase",
            "Pollution decreases",
            "Resources are saved",
            "Energy is conserved"
        ],
        correct: 0
    },
    {
        question: "Which material can usually be recycled many times without losing quality?",
        options: [
            "Glass",
            "Thermocol",
            "Food waste",
            "Ceramic plates"
        ],
        correct: 0
    },
    {
        question: "Why should recycling instructions be simple?",
        options: [
            "To confuse people",
            "To reduce participation",
            "To help everyone understand and act",
            "To make recycling difficult"
        ],
        correct: 2
    },
    {
        question: "Which feature helps users learn through interaction?",
        options: [
            "Static poster",
            "Recycling quiz or sorting game",
            "Login system",
            "Payment gateway"
        ],
        correct: 1
    },
    {
        question: "Who benefits from recycling awareness?",
        options: [
            "Only industries",
            "Only students",
            "Everyone and the environment",
            "Only waste collectors"
        ],
        correct: 2
    }
];

const upcyclingIdeas = [
    {
        title: "Bottle Planter",
        material: "plastic",
        description: "Cut a plastic bottle in half, poke holes, and plant herbs.",
        icon: "🌱",
        image: "https://loremflickr.com/400/300/plant,garden"
    },
    {
        title: "Tin Can Pencil Holder",
        material: "metal",
        description: "Clean a can, paint it, and use it for desk organizing.",
        icon: "✏️",
        image: "https://loremflickr.com/400/300/pencil,art"
    },
    {
        title: "Cardboard Castle",
        material: "paper",
        description: "Use old boxes to build a play fort for pets or kids.",
        icon: "🏰",
        image: "https://loremflickr.com/400/300/cardboard,toy"
    },
    {
        title: "Jar Lanterns",
        material: "glass",
        description: "Put fairy lights inside old mason jars.",
        icon: "💡",
        image: "https://loremflickr.com/400/300/lantern,light"
    }
];

// Rotating Facts
const facts = [
    "Recycling one aluminum can saves enough energy to run a TV for 3 hours!",
    "Glass can be recycled endlessly without losing quality.",
    "Recycling paper saves trees, water, and oil.",
    "Plastic bottles can be recycled into new clothes and carpets!"
];
let currentFactIndex = 0;

function rotateFact() {
    const factEl = document.getElementById('daily-fact');
    if (factEl) {
        factEl.style.opacity = 0;
        setTimeout(() => {
            currentFactIndex = (currentFactIndex + 1) % facts.length;
            factEl.textContent = facts[currentFactIndex];
            factEl.style.opacity = 1;
        }, 500);
    }
}
setInterval(rotateFact, 5000);

// App State
let currentScore = 0;
let currentStreak = 0;
let currentQuestionIndex = 0;

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

// 1. Navigation Logic
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    if (navLinks.classList.contains('open')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

function navigateTo(sectionId) {
    sections.forEach(sec => sec.classList.remove('active-section'));
    document.getElementById(sectionId).classList.add('active-section');

    // Update active nav state
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });

    // Close mobile menu if open
    navLinks.classList.remove('open');
    if (navToggle.querySelector('i').classList.contains('fa-times')) {
        navToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
    }

    window.scrollTo(0, 0);
}

// Attach click handlers to nav items
navItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        navigateTo(sectionId);
    });
});

// 2. Materials Guide Logic
const materialsList = document.getElementById('materials-list');
const guideSearch = document.getElementById('guide-search');
const catBtns = document.querySelectorAll('.cat-btn');

function renderMaterials(filterCat = 'all', searchTerm = '') {
    materialsList.innerHTML = '';

    const filtered = materials.filter(item => {
        const matchesCat = filterCat === 'all' || item.category === filterCat;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        materialsList.innerHTML = '<p style="text-align:center; padding:20px;">No items found.</p>';
        return;
    }

    filtered.forEach(item => {
        const el = document.createElement('div');
        el.className = 'material-item';
        el.setAttribute('data-cat', item.category);
        el.innerHTML = `
            <div style="font-size: 2.5rem; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: #f8f9fa; border-radius: 10px; margin-right: 15px;">
                ${item.icon || '♻️'}
            </div>
            <div style="flex:1;">
                <h4>${item.name}</h4>
                <div style="font-size:0.8rem; color: var(--text-light); margin-top:5px;">
                    <p style="margin:2px 0;"><i class="fa-solid fa-hand-sparkles" style="color:var(--secondary);"></i> <strong>Prep:</strong> ${item.prep}</p>
                    <p style="margin:2px 0;"><i class="fa-solid fa-ban" style="color:var(--danger);"></i> <strong>No:</strong> ${item.exclude}</p>
                </div>
            </div>
            <div class="mat-status ${item.recyclable ? 'yes' : 'no'}">
                ${item.recyclable ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-xmark"></i>'}
            </div>
        `;
        materialsList.appendChild(el);
    });
}

catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMaterials(btn.getAttribute('data-cat'), guideSearch.value);
    });
});

guideSearch.addEventListener('input', (e) => {
    const activeCat = document.querySelector('.cat-btn.active').getAttribute('data-cat');
    renderMaterials(activeCat, e.target.value);
});

// 3. Quiz Logic (Sorting & Awareness)
let currentAwIndex = 0;
let currentAwScore = 0;
// Sorting Quiz State
let usedMaterialIndices = [];

function switchQuizMode(mode) {
    const sortingContainer = document.getElementById('quiz-sorting-container');
    const awarenessContainer = document.getElementById('quiz-awareness-container');
    const btnSorting = document.getElementById('mode-sorting');
    const btnAwareness = document.getElementById('mode-awareness');

    if (mode === 'sorting') {
        sortingContainer.style.display = 'block';
        awarenessContainer.style.display = 'none';
        btnSorting.classList.add('active');
        btnAwareness.classList.remove('active');
        if (currentQuestionIndex === 0 && currentScore === 0) {
            loadQuestion();
        }
    } else {
        sortingContainer.style.display = 'none';
        awarenessContainer.style.display = 'block';
        btnSorting.classList.remove('active');
        btnAwareness.classList.add('active');
        // Reset awareness quiz if starting fresh or just ensure it is rendered
        if (currentAwIndex === 0 && currentAwScore === 0) {
            loadAwarenessQuestion();
        }
    }
}
window.switchQuizMode = switchQuizMode; // Expose to global scope

function loadQuestion() {
    // End after 10 questions for a session
    if (currentQuestionIndex >= 10) {
        // End of quiz
        document.getElementById('quiz-card').innerHTML = `
            <div class="quiz-icon">🏆</div>
            <h3>Quiz Verified!</h3>
            <p>You scored ${currentScore} / 10</p>
            <button class="btn btn-primary" onclick="resetQuiz()">Play Again</button>
        `;
        document.getElementById('next-question').style.display = 'none';
        return;
    }

    // Pick a random material that hasn't been used yet this round
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * materials.length);
    } while (usedMaterialIndices.includes(randomIndex) && usedMaterialIndices.length < materials.length);

    // If we ran out of unique items (unlikely with 10 cap but safe check)
    if (usedMaterialIndices.length >= materials.length) {
        usedMaterialIndices = []; // Reset for endless play if needed
    }

    usedMaterialIndices.push(randomIndex);
    const q = materials[randomIndex];

    // Store current item index for answer checking
    document.getElementById('quiz-card').setAttribute('data-current-index', randomIndex);

    document.getElementById('quiz-icon').textContent = q.icon || '♻️';
    document.getElementById('quiz-item-name').textContent = q.name;
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-feedback').className = 'feedback';

    // Enable buttons
    document.querySelectorAll('.quiz-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
    });

    document.getElementById('next-question').style.display = 'none';
}

document.querySelectorAll('.quiz-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        handleAnswer(btn);
    });
});

document.getElementById('next-question').addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

window.resetQuiz = function () {
    currentQuestionIndex = 0;
    currentScore = 0;
    currentStreak = 0;
    document.getElementById('score').textContent = 0;
    document.getElementById('streak').textContent = 0;

    // Rebuild quiz UI structure if it was replaced by end-screen
    const quizCard = document.getElementById('quiz-card');
    quizCard.innerHTML = `
        <div class="quiz-icon" id="quiz-icon"></div>
        <h3 id="quiz-item-name"></h3>
        <div class="quiz-options">
            <button class="btn quiz-btn" data-type="recycle">♻️ Recycle</button>
            <button class="btn quiz-btn" data-type="compost">🍂 Compost</button>
            <button class="btn quiz-btn" data-type="trash">🗑️ Trash</button>
        </div>
        <p class="feedback" id="quiz-feedback"></p>
    `;

    // Re-attach listeners because we overwrote the DOM
    document.querySelectorAll('.quiz-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            handleAnswer(btn);
        });
    });

    loadQuestion();
}

function handleAnswer(btn) {
    const selectedType = btn.getAttribute('data-type');
    const currentIndex = parseInt(document.getElementById('quiz-card').getAttribute('data-current-index'));
    const material = materials[currentIndex];
    const correctType = material.bin; // 'recycle', 'compost', 'trash'
    const feedback = document.getElementById('quiz-feedback');

    if (selectedType === correctType) {
        feedback.textContent = `Correct! ${material.quizDesc || material.prep}`;
        feedback.classList.add('correct');
        currentScore++;
        currentStreak++;
        document.getElementById('score').textContent = currentScore;
        document.getElementById('streak').textContent = currentStreak;
    } else {
        feedback.textContent = `Oops! It's ${correctType}. ${material.quizDesc || material.exclude}`;
        feedback.classList.add('wrong');
        currentStreak = 0;
        document.getElementById('streak').textContent = currentStreak;
    }

    document.querySelectorAll('.quiz-btn').forEach(b => {
        b.disabled = true;
        if (b !== btn) b.style.opacity = '0.5';
    });

    document.getElementById('next-question').style.display = 'block';
}

// Awareness Quiz Functions
function loadAwarenessQuestion() {
    const q = awarenessQuestions[currentAwIndex];
    if (!q) {
        // End of quiz
        document.getElementById('aw-quiz-card').innerHTML = `
           <div style="font-size: 4rem; margin-bottom: 20px;">🎉</div>
           <h3>Awareness Check Complete!</h3>
           <p>You scored ${currentAwScore} / ${awarenessQuestions.length}</p>
           <button class="btn btn-primary" onclick="resetAwarenessQuiz()">Try Again</button>
        `;
        document.getElementById('aw-next-question').style.display = 'none';
        return;
    }

    document.getElementById('aw-score').textContent = currentAwScore;
    document.getElementById('aw-question').textContent = `${currentAwIndex + 1}. ${q.question}`;

    // Render Options
    const optionsContainer = document.getElementById('aw-options');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'aw-option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAwarenessAnswer(idx, btn);
        optionsContainer.appendChild(btn);
    });

    // Reset feedback
    const feedback = document.getElementById('aw-feedback');
    feedback.textContent = '';
    feedback.className = 'feedback';
    document.getElementById('aw-next-question').style.display = 'none';
}

function handleAwarenessAnswer(selectedIndex, btnElement) {
    const q = awarenessQuestions[currentAwIndex];
    const feedback = document.getElementById('aw-feedback');
    const allBtns = document.querySelectorAll('.aw-option-btn');

    if (selectedIndex === q.correct) {
        feedback.textContent = "Correct! ✅";
        feedback.classList.add('correct');
        btnElement.classList.add('correct');
        currentAwScore++;
        document.getElementById('aw-score').textContent = currentAwScore;
    } else {
        feedback.textContent = "Incorrect. The correct answer is highlighted.";
        feedback.classList.add('wrong');
        btnElement.classList.add('wrong');
        // Highlight correct one
        allBtns[q.correct].classList.add('correct');
    }

    // Disable all
    allBtns.forEach(b => {
        b.disabled = true;
        if (!b.classList.contains('correct') && !b.classList.contains('wrong')) {
            b.style.opacity = '0.6';
        }
    });

    document.getElementById('aw-next-question').style.display = 'block';
}

document.getElementById('aw-next-question').addEventListener('click', () => {
    currentAwIndex++;
    loadAwarenessQuestion();
});

window.resetAwarenessQuiz = function () {
    currentAwIndex = 0;
    currentAwScore = 0;

    // Rebuild UI
    const card = document.getElementById('aw-quiz-card');
    card.innerHTML = `
        <div class="quiz-question-text">
            <h3 id="aw-question"></h3>
        </div>
        <div class="quiz-options-vertical" id="aw-options"></div>
        <p class="feedback" id="aw-feedback"></p>
    `;

    loadAwarenessQuestion();
}

// 4. Calculator Logic
const calcBtn = document.getElementById('calc-btn');
if (calcBtn) {
    calcBtn.addEventListener('click', () => {
        const cans = parseInt(document.getElementById('calc-cans').value) || 0;
        const bottles = parseInt(document.getElementById('calc-bottles').value) || 0;
        const paper = parseInt(document.getElementById('calc-paper').value) || 0;

        // Energy per item (rough approximation in Wh)
        // Can: ~100Wh, Bottle: ~50Wh, Paper stack: ~20Wh
        const energyWh = (cans * 100) + (bottles * 50) + (paper * 20);
        const trees = (paper * 0.002); // very rough

        const energyKWh = (energyWh / 1000).toFixed(2);

        document.getElementById('res-energy').textContent = `${energyKWh} kWh`;
        document.getElementById('res-trees').textContent = trees > 0 ? trees.toFixed(3) : "0";

        // Dynamic comparison
        let text = "Great job!";
        if (energyWh > 60) text = "⚡ Enough to power a 10W LED bulb for " + Math.floor(energyWh / 10) + " hours!";
        if (energyWh > 2000) text = "📺 Enough to watch TV for " + Math.floor(energyWh / 100) + " hours!";

        document.getElementById('res-comparison').textContent = text;
        document.getElementById('calc-results').style.display = 'block';
    });
}

// 5. Upcycling Logic
const upcycleGrid = document.getElementById('upcycle-grid');
function renderUpcycling() {
    upcycleGrid.innerHTML = '';
    upcyclingIdeas.forEach(idea => {
        const el = document.createElement('div');
        el.className = 'upcycle-card';
        el.innerHTML = `
            <div class="upcycle-img" style="background-image: url('${idea.image}'); background-size: cover; background-position: center;">
                <!-- Icon as overlay if image fails to load or for style -->
            </div>
            <div class="upcycle-content">
                <span class="tag">${idea.material}</span>
                <h3>${idea.title}</h3>
                <p style="font-size:0.95rem; color: var(--text-light); margin-top:5px;">${idea.description}</p>
            </div>
        `;
        upcycleGrid.appendChild(el);
    });
}


// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Render initial data
    renderMaterials();
    loadQuestion();
    renderUpcycling();
});
