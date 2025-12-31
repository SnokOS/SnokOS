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
function downloadISO() {
    // In a real scenario, this would link to the actual ISO file
    alert('Downloading SnokOS Linux ISO...\n\nIn production, this would start the download of the ISO file.');
    console.log('ISO download initiated');
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
        downloadSubtitle: "Download SnokOS Linux and experience the future of computing.",
        downloadISO: "Download ISO",
        downloadTorrent: "Download Torrent",
        requirementsTitle: "System Requirements",
        req1: "Processor: 64-bit dual-core CPU",
        req2: "RAM: 4 GB minimum (8 GB recommended)",
        req3: "Storage: 25 GB available space",
        req4: "Graphics: OpenGL 3.3 compatible"
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
        downloadSubtitle: "Téléchargez SnokOS Linux et découvrez l'avenir de l'informatique.",
        downloadISO: "Télécharger ISO",
        downloadTorrent: "Télécharger Torrent",
        requirementsTitle: "Configuration Requise",
        req1: "Processeur: CPU double cœur 64 bits",
        req2: "RAM: 4 Go minimum (8 Go recommandé)",
        req3: "Stockage: 25 Go d'espace disponible",
        req4: "Graphiques: Compatible OpenGL 3.3"
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
        downloadSubtitle: "قم بتنزيل SnokOS Linux واختبر مستقبل الحوسبة.",
        downloadISO: "تحميل ISO",
        downloadTorrent: "تحميل Torrent",
        requirementsTitle: "متطلبات النظام",
        req1: "المعالج: وحدة معالجة مركزية ثنائية النواة 64 بت",
        req2: "الذاكرة: 4 جيجابايت كحد أدنى (8 جيجابايت موصى به)",
        req3: "التخزين: 25 جيجابايت من المساحة المتاحة",
        req4: "الرسومات: متوافق مع OpenGL 3.3"
    }
};

// Merge download translations with main translations
Object.keys(downloadTranslations).forEach(lang => {
    if (translations[lang]) {
        Object.assign(translations[lang], downloadTranslations[lang]);
    }
});
