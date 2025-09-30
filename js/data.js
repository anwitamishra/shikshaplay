// ShikshaPlay - Mock Data for Quizzes and Badges

// Mock Quiz Data
const mockQuizzes = {
    math: {
        beginner: {
            id: "math-basic",
            subject: "Mathematics",
            level: "class6",
            pointsPerQuestion: 10,
                questions: [
                    {
                        question: "What is the value of 7 + 5?",
                        options: ["10", "12", "13"],
                        answer: 1
                    },
                    {
                        question: "Which is the largest two-digit number?",
                        options: ["99", "98", "100"],
                        answer: 0
                    },
                    {
                        question: "What is the perimeter of a square with side 8 cm?",
                        options: ["16 cm", "32 cm", "24 cm"],
                        answer: 1
                    },
                    {
                        question: "Which of these is a prime number?",
                        options: ["4", "9", "7"],
                        answer: 2
                    },
                    {
                        question: "What is 15 divided by 3?",
                        options: ["5", "3", "6"],
                        answer: 0
                    },
                    {
                        question: "The Roman numeral for 10 is:",
                        options: ["X", "V", "L"],
                        answer: 0
                    },
                    {
                        question: "Which shape has 3 sides?",
                        options: ["Square", "Triangle", "Rectangle"],
                        answer: 1
                    },
                    {
                        question: "What is the next even number after 8?",
                        options: ["9", "10", "12"],
                        answer: 1
                    },
                    {
                        question: "What is the product of 6 × 6?",
                        options: ["36", "12", "18"],
                        answer: 0
                    },
                    {
                        question: "Which is the smallest natural number?",
                        options: ["0", "1", "2"],
                        answer: 1
                    }
                ]
        },
        class7: {
            id: "math-class7",
            subject: "Mathematics",
            level: "class7",
            pointsPerQuestion: 10,
            questions: [
                {
                    question: "The smallest prime number is:",
                    options: ["1", "2", "3"],
                    answer: 1
                },
                {
                    question: "Value of 7² is:",
                    options: ["14", "49", "77"],
                    answer: 1
                },
                {
                    question: "The perimeter of a square of side 12 cm is:",
                    options: ["24 cm", "36 cm", "48 cm"],
                    answer: 2
                },
                {
                    question: "Simplify: 5 + (–3) =",
                    options: ["2", "–2", "8"],
                    answer: 0
                },
                {
                    question: "Area of a triangle =",
                    options: ["½ × base × height", "base × height", "2 × base × height"],
                    answer: 0
                },
                {
                    question: "1/2 + 1/3 = ?",
                    options: ["2/5", "5/6", "1/6"],
                    answer: 1
                },
                {
                    question: "Cube of 4 is:",
                    options: ["12", "64", "16"],
                    answer: 1
                },
                {
                    question: "The mean of 5, 10, 15 is:",
                    options: ["15", "10", "20"],
                    answer: 1
                },
                {
                    question: "The multiplicative inverse of 5 is:",
                    options: ["1/5", "–5", "5"],
                    answer: 0
                },
                {
                    question: "Which of these is a quadrilateral?",
                    options: ["Triangle", "Square", "Circle"],
                    answer: 1
                }
            ]
        }
    },
    science: {
        beginner: {
            id: "science-basic",
            subject: "Science",
            level: "class6",
            pointsPerQuestion: 10,
                questions: [
                    {
                        question: "Which part of the plant makes food?",
                        options: ["Root", "Leaf", "Stem"],
                        answer: 1
                    },
                    {
                        question: "Water boils at ___ degrees Celsius.",
                        options: ["100", "0", "50"],
                        answer: 0
                    },
                    {
                        question: "Which organ pumps blood in the human body?",
                        options: ["Liver", "Heart", "Lungs"],
                        answer: 1
                    },
                    {
                        question: "The process of plants making food is called:",
                        options: ["Respiration", "Photosynthesis", "Transpiration"],
                        answer: 1
                    },
                    {
                        question: "Which is a source of energy?",
                        options: ["Sun", "Moon", "Stars"],
                        answer: 0
                    },
                    {
                        question: "Animals that eat only plants are called:",
                        options: ["Carnivores", "Herbivores", "Omnivores"],
                        answer: 1
                    },
                    {
                        question: "Which gas do humans need to breathe?",
                        options: ["Oxygen", "Carbon dioxide", "Nitrogen"],
                        answer: 0
                    },
                    {
                        question: "The largest organ in the human body is:",
                        options: ["Skin", "Heart", "Liver"],
                        answer: 0
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Earth", "Mars", "Jupiter"],
                        answer: 1
                    },
                    {
                        question: "What do bees collect from flowers?",
                        options: ["Honey", "Nectar", "Pollen"],
                        answer: 1
                    }
                ]
        },
        class7: {
            id: "science-class7",
            subject: "Science",
            level: "class7",
            pointsPerQuestion: 10,
            questions: [
                {
                    question: "The SI unit of force is:",
                    options: ["Joule", "Newton", "Watt"],
                    answer: 1
                },
                {
                    question: "The process of conversion of water vapour into liquid is called:",
                    options: ["Evaporation", "Condensation", "Sublimation"],
                    answer: 1
                },
                {
                    question: "Which vitamin is obtained from sunlight?",
                    options: ["Vitamin A", "Vitamin D", "Vitamin C"],
                    answer: 1
                },
                {
                    question: "The metal that is liquid at room temperature is:",
                    options: ["Mercury", "Copper", "Iron"],
                    answer: 0
                },
                {
                    question: "The green pigment in plants is:",
                    options: ["Carotene", "Chlorophyll", "Haemoglobin"],
                    answer: 1
                },
                {
                    question: "Which is a renewable source of energy?",
                    options: ["Coal", "Petroleum", "Wind"],
                    answer: 2
                },
                {
                    question: "Which organ purifies blood in the human body?",
                    options: ["Liver", "Kidney", "Heart"],
                    answer: 1
                },
                {
                    question: "The Earth’s outermost layer is called:",
                    options: ["Mantle", "Core", "Crust"],
                    answer: 2
                },
                {
                    question: "Which part of the cell controls its activities?",
                    options: ["Nucleus", "Cytoplasm", "Membrane"],
                    answer: 0
                },
                {
                    question: "Which of these is a conductor of electricity?",
                    options: ["Plastic", "Copper", "Rubber"],
                    answer: 1
                }
            ]
        }
    },
    english: {
        beginner: {
            id: "english-basic",
            subject: "English",
            level: "class6",
            pointsPerQuestion: 10,
                questions: [
                    {
                        question: "Choose the correct plural: Child",
                        options: ["Childs", "Children", "Childes"],
                        answer: 1
                    },
                    {
                        question: "Fill in the blank: The sun ___ in the east.",
                        options: ["rise", "rises", "rose"],
                        answer: 1
                    },
                    {
                        question: "Which is a noun?",
                        options: ["Run", "Apple", "Quickly"],
                        answer: 1
                    },
                    {
                        question: "Opposite of Hot:",
                        options: ["Cold", "Warm", "Cool"],
                        answer: 0
                    },
                    {
                        question: "Choose the correct spelling:",
                        options: ["Recieve", "Receive", "Receeve"],
                        answer: 1
                    },
                    {
                        question: "Which is a verb?",
                        options: ["Run", "Blue", "Table"],
                        answer: 0
                    },
                    {
                        question: "Fill in the blank: She ___ reading a book.",
                        options: ["is", "are", "am"],
                        answer: 0
                    },
                    {
                        question: "Synonym of Happy:",
                        options: ["Sad", "Joyful", "Angry"],
                        answer: 1
                    },
                    {
                        question: "Antonym of Big:",
                        options: ["Large", "Huge", "Small"],
                        answer: 2
                    },
                    {
                        question: "Which is a pronoun?",
                        options: ["He", "Run", "Apple"],
                        answer: 0
                    }
                ]
        },
        class7: {
            id: "english-class7",
            subject: "English",
            level: "class7",
            pointsPerQuestion: 10,
            questions: [
                {
                    question: "Choose the correctly spelled word:",
                    options: ["Accomodation", "Accommodation", "Acommodation"],
                    answer: 1
                },
                {
                    question: "Opposite of Victory:",
                    options: ["Success", "Defeat", "Win"],
                    answer: 1
                },
                {
                    question: "Choose the adverb: He runs quickly.",
                    options: ["He", "Runs", "Quickly"],
                    answer: 2
                },
                {
                    question: "Fill in the blank: They ___ playing football.",
                    options: ["is", "are", "am"],
                    answer: 1
                },
                {
                    question: "Which is a conjunction?",
                    options: ["And", "Apple", "Running"],
                    answer: 0
                },
                {
                    question: "Synonym of Brave:",
                    options: ["Courageous", "Weak", "Afraid"],
                    answer: 0
                },
                {
                    question: "Antonym of Generous:",
                    options: ["Kind", "Selfish", "Noble"],
                    answer: 1
                },
                {
                    question: "Identify the verb: The bird flew away.",
                    options: ["Bird", "Flew", "Away"],
                    answer: 1
                },
                {
                    question: "Plural of Mouse is:",
                    options: ["Mouses", "Mice", "Mousees"],
                    answer: 1
                },
                {
                    question: "Which type of sentence is this? Close the door.",
                    options: ["Interrogative", "Imperative", "Declarative"],
                    answer: 1
                }
            ]
        }
    },
    general: {
        beginner: {
            id: "general-basic",
            subject: "General Knowledge",
            level: "class6",
            pointsPerQuestion: 10,
                questions: [
                    {
                        question: "Which is the capital of India?",
                        options: ["Mumbai", "Delhi", "Kolkata"],
                        answer: 1
                    },
                    {
                        question: "Who is the Prime Minister of India (2024)?",
                        options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah"],
                        answer: 0
                    },
                    {
                        question: "Which is the largest continent?",
                        options: ["Africa", "Asia", "Europe"],
                        answer: 1
                    },
                    {
                        question: "The national bird of India is:",
                        options: ["Sparrow", "Peacock", "Crow"],
                        answer: 1
                    },
                    {
                        question: "Which festival is known as the Festival of Colors?",
                        options: ["Diwali", "Holi", "Eid"],
                        answer: 1
                    },
                    {
                        question: "Which is the longest river in India?",
                        options: ["Ganga", "Yamuna", "Godavari"],
                        answer: 0
                    },
                    {
                        question: "Who wrote the national anthem of India?",
                        options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu"],
                        answer: 0
                    },
                    {
                        question: "Which is the smallest state in India?",
                        options: ["Goa", "Sikkim", "Tripura"],
                        answer: 0
                    },
                    {
                        question: "The Taj Mahal is located in:",
                        options: ["Delhi", "Agra", "Mumbai"],
                        answer: 1
                    },
                    {
                        question: "Which planet is closest to the Sun?",
                        options: ["Venus", "Mercury", "Earth"],
                        answer: 1
                    }
                ]
        },
        class7: {
            id: "general-class7",
            subject: "General Knowledge",
            level: "class7",
            pointsPerQuestion: 10,
            questions: [
                {
                    question: "Who is known as the Missile Man of India?",
                    options: ["Homi Bhabha", "A. P. J. Abdul Kalam", "Vikram Sarabhai"],
                    answer: 1
                },
                {
                    question: "The largest desert in the world is:",
                    options: ["Sahara", "Thar", "Gobi"],
                    answer: 0
                },
                {
                    question: "The currency of the USA is:",
                    options: ["Pound", "Dollar", "Euro"],
                    answer: 1
                },
                {
                    question: "The Red Fort is in:",
                    options: ["Delhi", "Agra", "Jaipur"],
                    answer: 0
                },
                {
                    question: "Which gas do plants release during photosynthesis?",
                    options: ["Oxygen", "Carbon dioxide", "Nitrogen"],
                    answer: 0
                },
                {
                    question: "Which is the national animal of India?",
                    options: ["Elephant", "Lion", "Tiger"],
                    answer: 2
                },
                {
                    question: "The highest mountain peak in the world is:",
                    options: ["Mount Everest", "Kanchenjunga", "K2"],
                    answer: 0
                },
                {
                    question: "The first man to step on the Moon was:",
                    options: ["Neil Armstrong", "Yuri Gagarin", "Rakesh Sharma"],
                    answer: 0
                },
                {
                    question: "Which Indian festival is also called the Festival of Lights?",
                    options: ["Diwali", "Holi", "Eid"],
                    answer: 0
                },
                {
                    question: "The national game of India is:",
                    options: ["Cricket", "Hockey", "Kabaddi"],
                    answer: 1
                }
            ]
        }
    }
};

// Mock Badge Definitions
const mockBadges = [
    {
        id: "first-steps",
        name: "First Steps",
        description: "Complete your very first quiz",
        icon: "🌟",
        criteria: { type: "quizzes", value: 1 },
        rarity: "common",
        points: 50
    },
    {
        id: "quick-learner",
        name: "Quick Learner",
        description: "Score 80% or higher on a quiz",
        icon: "⚡",
        criteria: { type: "accuracy", value: 80 },
        rarity: "common",
        points: 75
    },
    {
        id: "perfect-score",
        name: "Perfect Score",
        description: "Get 100% on any quiz",
        icon: "💯",
        criteria: { type: "accuracy", value: 100 },
        rarity: "rare",
        points: 100
    },
    {
        id: "math-genius",
        name: "Math Genius",
        description: "Complete 3 math quizzes",
        icon: "🔢",
        criteria: { type: "subject", subject: "math", value: 3 },
        rarity: "common",
        points: 100
    },
    {
        id: "science-explorer",
        name: "Science Explorer",
        description: "Complete 3 science quizzes",
        icon: "🔬",
        criteria: { type: "subject", subject: "science", value: 3 },
        rarity: "common",
        points: 100
    },
    {
        id: "word-master",
        name: "Word Master",
        description: "Complete 3 English quizzes",
        icon: "📚",
        criteria: { type: "subject", subject: "english", value: 3 },
        rarity: "common",
        points: 100
    },
    {
        id: "knowledge-seeker",
        name: "Knowledge Seeker",
        description: "Complete 3 general knowledge quizzes",
        icon: "🌍",
        criteria: { type: "subject", subject: "general", value: 3 },
        rarity: "common",
        points: 100
    },
    {
        id: "daily-learner",
        name: "Daily Learner",
        description: "Take a quiz every day for 3 days",
        icon: "📅",
        criteria: { type: "streak", value: 3 },
        rarity: "rare",
        points: 150
    },
    {
        id: "speed-demon",
        name: "Speed Demon",
        description: "Complete a quiz in under 5 minutes",
        icon: "🏃",
        criteria: { type: "time", value: 300 }, // 300 seconds = 5 minutes
        rarity: "rare",
        points: 125
    },
    {
        id: "point-collector",
        name: "Point Collector",
        description: "Earn 500 total points",
        icon: "💰",
        criteria: { type: "points", value: 500 },
        rarity: "rare",
        points: 200
    },
    {
        id: "legendary-learner",
        name: "Legendary Learner",
        description: "Earn 1000 total points",
        icon: "👑",
        criteria: { type: "points", value: 1000 },
        rarity: "legendary",
        points: 1000
    }
];

// Encouraging messages for different score ranges
const encouragementMessages = {
    perfect: [
        "Outstanding! You're absolutely brilliant! 🌟",
        "Perfect score! You're a true champion! 🏆",
        "Incredible! You nailed every question! 💯",
        "Amazing work! You're unstoppable! ⭐"
    ],
    excellent: [ // 80-99%
        "Excellent work! You're doing fantastic! 🎉",
        "Great job! You're really learning well! 👏",
        "Wonderful! Keep up the amazing work! 🌟",
        "Superb performance! You should be proud! 🎊"
    ],
    good: [ // 60-79%
        "Good job! You're making great progress! 👍",
        "Well done! Keep practicing and you'll improve! 📈",
        "Nice work! You're on the right track! ✨",
        "Great effort! Learning takes time and you're doing well! 🌱"
    ],
    needsWork: [ // 40-59%
        "Good try! Practice makes perfect! 💪",
        "Nice effort! Keep learning and you'll get better! 📚",
        "You're learning! Try again and improve your score! 🎯",
        "Keep going! Every mistake is a step towards success! 🌟"
    ],
    keepTrying: [ // 0-39%
        "Don't give up! Learning is a journey! 🚀",
        "Keep trying! You can do this! 💪",
        "Every expert was once a beginner! Keep practicing! 🌱",
        "Stay positive! Your next quiz will be better! ⭐"
    ]
};

// Motivational quotes for results page
const motivationalQuotes = [
    "The more you learn, the more you realize how much you don't know, and that's the beauty of learning!",
    "Education is the key that unlocks the golden door to freedom.",
    "Learning is a treasure that will follow its owner everywhere.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Every accomplishment starts with the decision to try.",
    "Believe in yourself and all that you are. You are capable of amazing things!",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "The only impossible journey is the one you never begin."
];

// Function to get a random quiz for a subject
function getQuizForSubject(subject, level = 'beginner') {
    if (mockQuizzes[subject] && mockQuizzes[subject][level]) {
        return JSON.parse(JSON.stringify(mockQuizzes[subject][level])); // Deep copy
    }
    return null;
}

// Function to get all available subjects
function getAvailableSubjects() {
    return Object.keys(mockQuizzes);
}

// Function to get encouragement message based on score
function getEncouragementMessage(percentage) {
    let category;
    if (percentage === 100) category = 'perfect';
    else if (percentage >= 80) category = 'excellent';
    else if (percentage >= 60) category = 'good';
    else if (percentage >= 40) category = 'needsWork';
    else category = 'keepTrying';
    
    const messages = encouragementMessages[category];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Function to get random motivational quote
function getRandomMotivationalQuote() {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

// Function to get badge by ID
function getBadgeById(badgeId) {
    return mockBadges.find(badge => badge.id === badgeId);
}

// Function to get all badges
function getAllBadges() {
    return mockBadges;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        mockQuizzes,
        mockBadges,
        encouragementMessages,
        motivationalQuotes,
        getQuizForSubject,
        getAvailableSubjects,
        getEncouragementMessage,
        getRandomMotivationalQuote,
        getBadgeById,
        getAllBadges
    };
}
