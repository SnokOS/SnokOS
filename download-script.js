// ============================================
// Download Page Script
// ============================================

// Slider functionality
let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// Auto-advance slider
setInterval(() => {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}, 5000);

// Download functions
function downloadISO(type) {
    // In a real scenario, this would link to the actual ISO file
    const typeName = type ? type.toUpperCase() : 'LINUX';

    // Find corresponding card and select it visually
    let category = type.split('-')[0];
    if (category === 'nas') category = 'nas';
    const card = document.getElementById(`option-${category}`);
    if (card) {
        // Remove active class from all options
        document.querySelectorAll('.download-option').forEach(opt => opt.classList.remove('active'));
        // Add active class to current selection
        card.classList.add('active');
    }

    // Update requirements based on selection
    updateRequirements(type);

    alert(`Downloading SnokOS ${typeName} ISO...\n\nIn production, this would start the download of the ISO file.`);
    console.log(`${typeName} ISO download initiated`);
}

function selectOption(element, type) {
    // Prevent event bubbling if clicking buttons inside
    if (event && event.target.tagName === 'BUTTON') return;

    // Remove active class from all options
    document.querySelectorAll('.download-option').forEach(opt => {
        opt.classList.remove('active');
    });

    // Add active class to current selection
    element.classList.add('active');

    // Trigger requirements update with animation
    updateRequirements(type);
}

// Requirements Database
const requirementsDB = {
    'linux-debian': {
        cpu: 'req1',
        ram: 'req2',
        storage: 'req3',
        gpu: 'req4'
    },
    'linux-ubuntu': {
        cpu: 'req1',
        ram: 'req2',
        storage: 'req3',
        gpu: 'req4'
    },
    'server-debian': {
        cpu: 'req1',
        ram: 'reqRamServer',
        storage: 'reqStorageServer',
        gpu: 'reqGpuServer'
    },
    'server-ubuntu': {
        cpu: 'req1',
        ram: 'reqRamServer',
        storage: 'reqStorageServer',
        gpu: 'reqGpuServer'
    },
    'nas': {
        cpu: 'reqCpuNas',
        ram: 'reqRamNas',
        storage: 'reqStorageNas',
        gpu: 'reqGpuNas'
    }
};

function updateRequirements(type) {
    const specs = requirementsDB[type] || requirementsDB['linux-debian'];
    const currentLang = localStorage.getItem('language') || 'en';
    const reqList = document.querySelector('.system-requirements ul');

    // Add animation class
    if (reqList) {
        reqList.classList.remove('requirements-list-animate');
        void reqList.offsetWidth; // Force reflow
        reqList.classList.add('requirements-list-animate');
    }

    // Helper to get translation
    const getTrans = (key) => {
        if (translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        } else if (downloadTranslations && downloadTranslations[currentLang] && downloadTranslations[currentLang][key]) {
            return downloadTranslations[currentLang][key];
        }
        return key;
    };

    // Update Text Content
    document.getElementById('req-cpu').textContent = getTrans(specs.cpu);
    document.getElementById('req-ram').textContent = getTrans(specs.ram);
    document.getElementById('req-storage').textContent = getTrans(specs.storage);
    document.getElementById('req-gpu').textContent = getTrans(specs.gpu);

    // Update data-i18n attributes to support language switching after selection
    document.getElementById('req-cpu').setAttribute('data-i18n', specs.cpu);
    document.getElementById('req-ram').setAttribute('data-i18n', specs.ram);
    document.getElementById('req-storage').setAttribute('data-i18n', specs.storage);
    document.getElementById('req-gpu').setAttribute('data-i18n', specs.gpu);
}

function downloadTorrent() {
    // In a real scenario, this would link to the torrent file
    alert('Downloading SnokOS Linux Torrent...\n\nIn production, this would download the torrent file.');
    console.log('Torrent download initiated');
}

// Add download page translations
const downloadTranslations = {
    en: {
        downloadHeroTitle: "Download SnokOS Linux",
        downloadHeroSubtitle: "A modern, beautiful, and powerful Linux distribution designed for developers, creators, and enthusiasts.",
        featuresTitle: "Key Features",
        feature1Title: "Lightning Fast",
        feature1Desc: "Optimized for performance with fast boot times and responsive desktop experience.",
        feature2Title: "Beautiful Design",
        feature2Desc: "Modern, elegant interface with customizable themes and stunning visual effects.",
        feature3Title: "Secure & Private",
        feature3Desc: "Built with security in mind, with regular updates and privacy-focused defaults.",
        feature4Title: "Developer Friendly",
        feature4Desc: "Pre-installed development tools and easy package management for developers.",
        feature5Title: "Open Source",
        feature5Desc: "100% free and open-source software, built by the community for the community.",
        feature6Title: "Easy to Use",
        feature6Desc: "User-friendly interface perfect for both beginners and advanced users.",
        screenshotsTitle: "See SnokOS in Action",
        screenshot1Caption: "Beautiful Desktop Environment",
        screenshot2Caption: "Modern System Features",
        screenshot3Caption: "Powerful Terminal Experience",
        downloadTitle: "Ready to Get Started?",
        downloadSubtitle: "Choose the version that fits your needs.",
        downloadLinuxTitle: "Download SnokOS Linux",
        downloadLinuxDesc: "A modern Linux distribution for developers and enthusiasts.",
        downloadServerTitle: "Download SnokOS Server",
        downloadServerDesc: "Powerful server OS for enterprise applications.",
        downloadNasTitle: "Download SnokOS NAS Storage",
        downloadNasDesc: "Specialized OS for Network Attached Storage solutions.",
        downloadBtn: "Download",
        downloadDebian: "Debian Edition",
        downloadUbuntu: "Ubuntu Edition",
        downloadISO: "Download ISO",
        downloadTorrent: "Download Torrent",
        requirementsTitle: "System Requirements",
        req1: "Processor: 64-bit dual-core CPU",
        req2: "RAM: 4 GB minimum (8 GB recommended)",
        req3: "Storage: 25 GB available space",
        req4: "Graphics: OpenGL 3.3 compatible",
        // Specific Requirements
        reqCpuNas: "Processor: 64-bit quad-core CPU",
        reqRamServer: "RAM: 2 GB minimum (4 GB recommended)",
        reqStorageServer: "Storage: 10 GB available space",
        reqGpuServer: "Graphics: Not required (Headless)",
        reqRamNas: "RAM: 8 GB minimum (16 GB recommended)",
        reqStorageNas: "Storage: 16 GB Boot drive + Storage drives",
        reqGpuNas: "Graphics: Not required (Web Interface)"
    },
    fr: {
        downloadHeroTitle: "Télécharger SnokOS Linux",
        downloadHeroSubtitle: "Une distribution Linux moderne, belle et puissante conçue pour les développeurs, créateurs et passionnés.",
        featuresTitle: "Fonctionnalités Clés",
        feature1Title: "Ultra Rapide",
        feature1Desc: "Optimisé pour les performances avec des temps de démarrage rapides et une expérience de bureau réactive.",
        feature2Title: "Design Magnifique",
        feature2Desc: "Interface moderne et élégante avec des thèmes personnalisables et des effets visuels époustouflants.",
        feature3Title: "Sécurisé et Privé",
        feature3Desc: "Conçu avec la sécurité à l'esprit, avec des mises à jour régulières et des paramètres axés sur la confidentialité.",
        feature4Title: "Convivial pour Développeurs",
        feature4Desc: "Outils de développement préinstallés et gestion facile des paquets pour les développeurs.",
        feature5Title: "Open Source",
        feature5Desc: "Logiciel 100% gratuit et open-source, construit par la communauté pour la communauté.",
        feature6Title: "Facile à Utiliser",
        feature6Desc: "Interface conviviale parfaite pour les débutants et les utilisateurs avancés.",
        screenshotsTitle: "Voir SnokOS en Action",
        screenshot1Caption: "Magnifique Environnement de Bureau",
        screenshot2Caption: "Fonctionnalités Système Modernes",
        screenshot3Caption: "Expérience Terminal Puissante",
        downloadTitle: "Prêt à Commencer?",
        downloadSubtitle: "Choisissez la version qui correspond à vos besoins.",
        downloadLinuxTitle: "Télécharger SnokOS Linux",
        downloadLinuxDesc: "Une distribution Linux moderne pour les développeurs et passionnés.",
        downloadServerTitle: "Télécharger SnokOS Server",
        downloadServerDesc: "OS serveur puissant pour applications d'entreprise.",
        downloadNasTitle: "Télécharger SnokOS NAS Storage",
        downloadNasDesc: "OS spécialisé pour solutions de stockage en réseau.",
        downloadBtn: "Télécharger",
        downloadDebian: "Édition Debian",
        downloadUbuntu: "Édition Ubuntu",
        downloadISO: "Télécharger ISO",
        downloadTorrent: "Télécharger Torrent",
        requirementsTitle: "Configuration Requise",
        req1: "Processeur: CPU double cœur 64 bits",
        req2: "RAM: 4 Go minimum (8 Go recommandé)",
        req3: "Stockage: 25 Go d'espace disponible",
        req4: "Graphiques: Compatible OpenGL 3.3",
        // Specific Requirements
        reqCpuNas: "Processeur: CPU quad-core 64 bits",
        reqRamServer: "RAM: 2 Go minimum (4 Go recommandé)",
        reqStorageServer: "Stockage: 10 Go d'espace disponible",
        reqGpuServer: "Graphiques: Non requis (Headless)",
        reqRamNas: "RAM: 8 Go minimum (16 Go recommandé)",
        reqStorageNas: "Stockage: 16 Go disque de démarrage + disques de données",
        reqGpuNas: "Graphiques: Non requis (Interface Web)"
    },
    ar: {
        downloadHeroTitle: "تحميل SnokOS Linux",
        downloadHeroSubtitle: "توزيعة لينكس حديثة وجميلة وقوية مصممة للمطورين والمبدعين والمتحمسين.",
        featuresTitle: "المميزات الرئيسية",
        feature1Title: "سريع للغاية",
        feature1Desc: "محسّن للأداء مع أوقات إقلاع سريعة وتجربة سطح مكتب سريعة الاستجابة.",
        feature2Title: "تصميم جميل",
        feature2Desc: "واجهة حديثة وأنيقة مع سمات قابلة للتخصيص وتأثيرات بصرية مذهلة.",
        feature3Title: "آمن وخاص",
        feature3Desc: "مبني مع وضع الأمان في الاعتبار، مع تحديثات منتظمة وإعدادات تركز على الخصوصية.",
        feature4Title: "صديق للمطورين",
        feature4Desc: "أدوات تطوير مثبتة مسبقاً وإدارة حزم سهلة للمطورين.",
        feature5Title: "مفتوح المصدر",
        feature5Desc: "برمجيات مجانية ومفتوحة المصدر 100%، مبنية من قبل المجتمع للمجتمع.",
        feature6Title: "سهل الاستخدام",
        feature6Desc: "واجهة سهلة الاستخدام مثالية للمبتدئين والمستخدمين المتقدمين.",
        screenshotsTitle: "شاهد SnokOS في العمل",
        screenshot1Caption: "بيئة سطح مكتب جميلة",
        screenshot2Caption: "ميزات نظام حديثة",
        screenshot3Caption: "تجربة طرفية قوية",
        downloadTitle: "هل أنت مستعد للبدء؟",
        downloadSubtitle: "اختر النسخة التي تناسب احتياجاتك.",
        downloadLinuxTitle: "تحميل SnokOS Linux",
        downloadLinuxDesc: "توزيعة لينكس حديثة للمطورين والمتحمسين.",
        downloadServerTitle: "تحميل SnokOS Server",
        downloadServerDesc: "نظام تشغيل خادم قوي لتطبيقات المؤسسات.",
        downloadNasTitle: "تحميل SnokOS NAS Storage",
        downloadNasDesc: "نظام تشغيل متخصص لحلول التخزين الشبكي.",
        downloadBtn: "تحميل",
        downloadDebian: "نسخة ديبيان",
        downloadUbuntu: "نسخة أوبونتو",
        downloadISO: "تحميل ISO",
        downloadTorrent: "تحميل Torrent",
        requirementsTitle: "متطلبات النظام",
        req1: "المعالج: وحدة معالجة مركزية ثنائية النواة 64 بت",
        req2: "الذاكرة: 4 جيجابايت كحد أدنى (8 جيجابايت موصى به)",
        req3: "التخزين: 25 جيجابايت من المساحة المتاحة",
        req4: "الرسومات: متوافق مع OpenGL 3.3",
        // Specific Requirements
        reqCpuNas: "المعالج: وحدة معالجة مركزية رباعية النواة 64 بت",
        reqRamServer: "الذاكرة: 2 جيجابايت كحد أدنى (4 جيجابايت موصى به)",
        reqStorageServer: "التخزين: 10 جيجابايت من المساحة المتاحة",
        reqGpuServer: "الرسومات: غير مطلوبة (Headless)",
        reqRamNas: "الذاكرة: 8 جيجابايت كحد أدنى (16 جيجابايت موصى به)",
        reqStorageNas: "التخزين: 16 جيجابايت قرص إقلاع + أقراص تخزين",
        reqGpuNas: "الرسومات: غير مطلوبة (واجهة ويب)"
    }
};

// Merge download translations with main translations
Object.keys(downloadTranslations).forEach(lang => {
    if (translations[lang]) {
        Object.assign(translations[lang], downloadTranslations[lang]);
    }
});
