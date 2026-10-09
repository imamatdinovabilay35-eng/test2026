<!DOCTYPE html>
<html lang="kk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informatika Test AI</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-950 text-white min-h-screen flex flex-col justify-between p-4">

    <!-- Басты контейнер -->
    <div class="max-w-md mx-auto w-full">
        
        <!-- Шапка / Жоғарғы бөлік -->
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-3">
                <div class="bg-blue-600/20 p-2.5 rounded-xl text-blue-400 font-bold">IT</div>
                <div>
                    <h1 class="text-sm font-bold text-white">Informatika Test AI</h1>
                    <p id="txt-desc" class="text-xs text-gray-400">1,000-нан астам саралған кәсіби тесттер</p>
                </div>
            </div>
            <!-- Тіл таңдау -->
            <select onchange="changelanguage(this.value)" class="bg-gray-900 border border-gray-800 text-xs text-gray-300 rounded-lg p-1.5 focus:outline-none">
                <option value="kk">Қазақша</option>
                <option value="uz">O'zbekcha</option>
                <option value="ru">Русский</option>
                <option value="kaa">Qaraqalpaqsha</option>
            </select>
        </div>

        <!-- Негізгі мәзір (Басты бет) -->
        <div id="main-menu">
            <!-- Түймелер панелі -->
            <div class="grid grid-cols-3 gap-2 pt-2 mb-4">
                <button onclick="openTest()" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium py-2.5 px-2 rounded-xl transition flex flex-col items-center justify-center space-y-1">
                    <span>📁</span> <span id="btn-bilet">Билеттер</span>
                </button>
                <button onclick="openTest()" class="bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-medium py-2.5 px-2 rounded-xl transition flex flex-col items-center justify-center space-y-1 border border-gray-800">
                    <span>⏱️</span> <span id="btn-imtihon">Емтихан</span>
                </button>
                <button onclick="openTest()" class="bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-medium py-2.5 px-2 rounded-xl transition flex flex-col items-center justify-center space-y-1 border border-gray-800">
                    <span>📊</span> <span id="btn-stat">Статистика</span>
                </button>
            </div>

            <!-- Бөлімдер тізімі -->
            <div id="txt-select-section" class="text-xs text-gray-400 px-1 mb-2">Бөлімдердің бірін таңлаңыз</div>
            
            <div onclick="openTest()" class="bg-gray-900 hover:bg-gray-850 border border-gray-800/80 p-4 rounded-2xl cursor-pointer transition flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="bg-blue-600/20 p-2.5 rounded-xl text-blue-400">💻</div>
                    <div>
                        <h2 class="text-xs font-bold text-white">Kompyuter tarixi va qurilmalari</h2>
                        <p class="text-[11px] text-gray-400">CPU, xotira, kiritish-chiqarish qurilmalari</p>
                    </div>
                </div>
                <span class="text-gray-500">→</span>
            </div>
        </div>

        <!-- Тест алаңы (Бастапқыда жасырын тұрады) -->
        <div id="content-section" class="bg-gray-900 border border-gray-800 p-4 rounded-2xl hidden space-y-4">
            <div class="flex justify-between items-center">
                <h2 id="test-title" class="text-sm font-bold text-white">Информатика тесті</h2>
                <button onclick="goBack()" class="bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-lg transition">Артқа</button></div>
            
            <!-- Сұрақ шығатын орын -->
            <div id="question-container" class="space-y-3">
                <!-- JavaScript арқылы динамикалық түрде толықтырылады -->
            </div>
        </div>

    </div>

    <!-- Footer -->
    <footer class="text-center text-[10px] text-gray-600 mt-8">
        Informatika Test AI © 2026
    </footer>

    <!-- JavaScript Логикасы мен Тест деректері бір жерде -->
    <script>
        // 5-сынып тест сұрақтары тікелей осында сақталады
        const grade5Questions = [
            {
                question: "Информатика пәні нені оқытады?",
                options: [
                    "A) Тек сурет салуды",
                    "B) Ақпаратты жинау, өңдеу, сақтау және тасымалдау тәсілдерін",
                    "C) Тек ойын ойнауды"
                ],
                answer: 1
            },
            {
                question: "Ақпарат ұғымы нені білдіреді?",
                options: [
                    "A) Қоршаған әлем туралы мәліметтер мен хабарлар",
                    "B) Тек компьютерлік файлдар",
                    "C) Математикалық формулалар ғана"
                ],
                answer: 0
            },
            {
                question: "Адам ақпаратты негізінен қай сезім мүшелері арқылы қабылдайды?",
                options: [
                    "A) Тек есту арқылы",
                    "B) Көру, есту, сипап сезу, дәм сезу, иіс сезу",
                    "C) Тек сипап сезу арқылы"
                ],
                answer: 1
            },
            {
                question: "Дербес компьютердің негізгі құрылғыларына қайсысы жатады?",
                options: [
                    "A) Жүйелік блок, монитор, пернетақта, тінтуір",
                    "B) Принтер, сканер, колонки",
                    "C) Флешка, модем, наушник"
                ],
                answer: 0
            },
            {
                question: "Пернетақтадағы «Enter» пернесінің қызметі қандай?",
                options: [
                    "A) Әріпті өшіру",
                    "B) Енгізуді аяқтау немесе келесі жолға көшу",
                    "C) Программаны толығымен өшіру"
                ],
                answer: 1
            }
        ];

        function openTest() {
            document.getElementById('main-menu').style.display = 'none';
            document.getElementById('content-section').style.display = 'block';
            loadFirstQuestion();
        }

        function goBack() {
            document.getElementById('content-section').style.display = 'none';
            document.getElementById('main-menu').style.display = 'block';
        }

        function loadFirstQuestion() {
            const container = document.getElementById('question-container');
            if (grade5Questions.length > 0) {
                const q = grade5Questions[0];
                let html = <p class="text-xs text-gray-200 font-medium mb-3">${q.question}</p><div class="space-y-2">;
                q.options.forEach((opt, idx) => {
                    html += <button onclick="checkAnswer(${idx}, ${q.answer})" class="w-full text-left bg-gray-800 hover:bg-gray-750 text-gray-300 text-xs p-2.5 rounded-xl transition border border-gray-700/50">${opt}</button>;
                });
                html += </div>;
                container.innerHTML = html;
            }
        }

        function checkAnswer(selected, correct) {
            if (selected === correct) {
                alert('Дұрыс! Жарайсыз.');
            } else {
                alert('Қате! Қайта көріңіз.');
            }
        }

        function changelanguage(lang) {
            const texts = {
                kk: { bilet: "Билеттер", imtihon: "Емтихан", stat: "Статистика", selectSec: "Бөлімдердің бірін таңлаңыз" },uz: { bilet: "Biletlar", imtihon: "Imtihon", stat: "Statistika", selectSec: "Bo'limlardan birini tanlang" },
                ru: { bilet: "Билеты", imtihon: "Экзамен", stat: "Статистика", selectSec: "Выберите один из разделов" },
                kaa: { bilet: "Biletler", imtihon: "Imtixan", stat: "Statistika", selectSec: "Bo'limlerden birin tańlańız" }
            };
            const t = texts[lang];
            if (t) {
                document.getElementById('btn-bilet').innerText = t.bilet;
                document.getElementById('btn-imtihon').innerText = t.imtihon;
                document.getElementById('btn-stat').innerText = t.stat;
                document.getElementById('txt-select-section').innerText = t.selectSec;
            }
        }
    </script>
</body>
</html>// 1. С интерфейсинин тилдик котормолору
const translations = {
  kk: {
    title: "Ұстаз & Аттестация Тренажеры",
    subtitle: "Барлық пәндер бойынша аттестацияға арналған тест жүйесі",
    selectSubject: "Пәнді таңдаңыз:",
    startBtn: "Тестті бастау",
    subjects: {
      pedagogy: "Педагогика мен психология",
      informatics: "Информатика",
      math: "Математика",
      kazakh: "Қазақ тілі мен әдебиеті",
      primary: "Бастауыш сынып методикасы",
      history: "Қазақстан тарихы",
      physics: "Физика",
      biology: "Биология"
    }
  },
  uz: {
    title: "Ustoz & Attestatsiya Trenajori",
    subtitle: "Barcha fanlar boʻyicha attestatsiyaga moʻljallangan test tizimi",
    selectSubject: "Fanni tanlang:",
    startBtn: "Testni boshlash",
    subjects: {
      pedagogy: "Pedagogika va psihologiya",
      informatics: "Informatika",
      math: "Matematika",
      kazakh: "Qozoq tili va adabiyoti",
      primary: "Boshlangʻich sinf metodikasi",
      history: "Qozogʻiston tarixi",
      physics: "Fizika",
      biology: "Biologiya"
    }
  },
  kaa: {
    title: "Ustaz & Attestatsiya Trenajeri",
    subtitle: "Barliq pənler boyınsha attestatsiyaǵa arnalǵan test sisteması",
    selectSubject: "Pándi saylań:",
    startBtn: "Testti baslaw",
    subjects: {
      pedagogy: "Pedagogika hám psixologiya",
      informatics: "Informatika",
      math: "Matematika",
      kazakh: "Qazaq tili hám ádebiyatı",
      primary: "Baslawısh klas metodikası",
      history: "Qazaqstan tariyxı",
      physics: "Fizika",
      biology: "Biologiya"
    }
  }
};

// 2. Суроолорду көбөйтүү үчүн база түзүмү (Ар бир тил жана предмет боюнча)
const questionBank = {
  kk: {
    pedagogy: [
      { question: "Педагогиканың негізгі объектісі не?", options: ["Адам", "Оқыту процесі", "Мектеп", "Қоғам"], answer: 1 },
      // Бул жерге жүздөгөн жаңы суроолорду кошууга болот
    ],
    math: [
      { question: "2 + 2 * 2 нешеге тең?", options: ["8", "6", "4", "2"], answer: 1 }
    ]
  },
  uz: {
    pedagogy: [
      { question: "Pedagogikaning asosiy obyekti nima?", options: ["Inson", "Oʻqitish jarayoni", "Maktab", "Jamiyat"], answer: 1 }
    ],
    math: [
      { question: "2 + 2 * 2 nechaga teng?", options: ["8", "6", "4", "2"], answer: 1 }
    ]
  },
  kaa: {
    pedagogy: [
      { question: "Pedagogikanıń tiykarǵı obyekti ne?", options: ["Insan", "Oqıtıw процесси", "Mektep", "Cempya"], answer: 1 }
    ],
    math: [
      { question: "2 + 2 * 2 neshege teń?", options: ["8", "6", "4", "2"], answer: 1 }
    ]
  }
};

// 3. Тилди алмаштыруу функциясы
function changeLanguage() {
  const lang = document.getElementById("langSelect").value;
  
  // Тексттерди жаңыртуу
  document.getElementById("site-title").innerText = translations[lang].title;
  document.getElementById("site-subtitle").innerText = translations[lang].subtitle;
  document.getElementById("subject-label").innerText = translations[lang].selectSubject;

  // Пэндердин (предметтердин) тизмесин жаңыртуу
  const subjectSelect = document.getElementById("subjectSelect");
  subjectSelect.innerHTML = "";
  
  for (const [key, value] of Object.entries(translations[lang].subjects)) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.innerText = value;
    subjectSelect.appendChild(opt);
  }
}
