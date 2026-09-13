/* =========================================================
   DATA SWARM - COMPLETE APP.JS
   Made by Taha Karmani
   Multilingual Aquatic Data Marketplace & Simulation
   Languages: English (EN), French (FR), Arabic (AR)
   ========================================================= */

'use strict';

/* =========================================================
   1. TRANSLATIONS (i18n) DICTIONARY
   ========================================================= */

const translations = {
  en: {
    app_title: "Data Swarm",
    ask_launcher: "Data Swarm AI",
    app_subtitle: "Aquatic Data Library",
    auth_eyebrow: "A living library of fish data",
    auth_heading: "Follow the<br><em>whole school.</em>",
    auth_desc: "Discover datasets that make aquatic life visible, one signal at a time.",
    auth_swarm_status: "The swarm follows your cursor",
    login_eyebrow: "Welcome back",
    login_title: "Enter the water",
    login_label_name: "Your name",
    login_name_ph: "Taha",
    login_label_email: "Email address",
    login_email_ph: "you@example.com",
    login_btn: "Sign in to Data Swarm",
    login_note: "Your name appears when you explore and download datasets.",
    login_err_name: "Please enter your name.",
    login_err_name_len: "Your name must contain at least 2 characters.",
    login_err_email: "Please enter a valid email address.",
    login_err_registered: "That name is already registered on this device. Please choose another name.",
    nav_explore: "Explore data",
    nav_researchers: "For researchers",
    balance_label: "Balance:",
    btn_welcome_email: "Email welcome note",
    btn_logout: "Back to login",
    btn_my_downloads: "My downloads",
    hero_eyebrow: "The living data library",
    hero_heading: "Better questions<br><em>start in the water.</em>",
    hero_intro: "Curated fish datasets for ocean lovers, students, storytellers, and scientists. Find a dataset, follow the evidence, make something meaningful.",
    hero_cta: "Browse the collection",
    catalog_eyebrow: "Field notes / 004",
    catalog_heading: "Find your next field trip.",
    catalog_note: "Every dataset is documented, downloadable, and made to be understood.",
    search_placeholder: "Search species, place, or topic",
    filter_all: "All data",
    filter_oceans: "Oceans",
    filter_freshwater: "Freshwater",
    filter_climate: "Climate",
    buy_btn: "Buy data",
    photo_label: "Fish photograph",
    formats_label: "CSV · JSON",
    empty_catalog: "No datasets match that search yet.",
    redeem_eyebrow: "Have a code?",
    redeem_title: "Add credits to your library.",
    redeem_desc: "Enter your code below and the credits will be added to this device.",
    redeem_input_ph: "Enter your code",
    redeem_btn: "Redeem code",
    redeem_empty: "Please enter a code.",
    redeem_invalid: "That code is not valid.",
    redeem_success: "{amount} credits added. Your balance is {balance}.",
    gallery_eyebrow: "From the field archive",
    gallery_title: "Meet the subjects.",
    gallery_desc: "Real underwater references for the curious minds behind every dataset.",
    gallery_caption_1: "Reef fish / coral gardens",
    gallery_caption_2: "Open water / shark routes",
    gallery_caption_3: "Mangrove nurseries / Mangrove Jack",
    about_eyebrow: "Built for curious minds",
    about_heading: "Data should feel<br><em>alive.</em>",
    about_desc: "Data Swarm makes the hidden patterns of aquatic life easier to find and more rewarding to explore. Each collection pairs clean files with context from the people who gathered them.",
    about_link: "Talk to the swarm ↗",
    footer_copy: "© 2026 Data Swarm",
    footer_credit: "Made by Taha Karmani",
    preview_eyebrow: "Photo preview",
    preview_desc: "Review the fish photo before adding this dataset to your bag.",
    preview_link: "Open original photo ↗",
    checkout_eyebrow: "Data Swarm checkout",
    checkout_title: "Choose payment",
    checkout_price: "Dataset price:",
    checkout_balance_label: "Your balance",
    checkout_pay_balance: "Pay with balance",
    checkout_or: "or",
    checkout_pay_paypal: "Pay with PayPal",
    checkout_pay_card: "Pay with bank card",
    checkout_secure: "Demo checkout — no real card or PayPal payment is processed.",
    checkout_need_more: "You need {amount} more",
    checkout_success: "Payment successful",
    checkout_external_demo: "{method} demo payment\n\nDataset: {title}\nPrice: {price}\n\nPress OK to simulate a successful payment.",
    checkout_external_success: "{method} payment successful",
    download_started: "{title} downloaded ({format})",
    wallet_eyebrow: "Data Swarm wallet",
    wallet_title: "Your balance",
    wallet_available: "Available credits",
    wallet_redeem_label: "Redeem credit code",
    wallet_code_ph: "Enter code",
    wallet_redeem_btn: "Redeem",
    library_eyebrow: "Your collection",
    library_title: "My downloads",
    library_intro: "Datasets you've purchased from Data Swarm.",
    library_empty: "You haven't purchased any datasets yet.",
    library_view_data: "View live data",
    toast_signin_first: "Please sign in first",
    toast_welcome_sent: "Welcome note prepared for {email}",
    filter_species: "Species", filter_location: "Location", filter_water: "Water type", filter_date: "Collected after", detail_btn: "Explore dataset", detail_title: "Dataset intelligence", detail_preview: "Data preview", detail_download: "Download dataset", detail_license: "License", detail_observations: "Observations", detail_source: "Source", detail_map: "Observation map", detail_trend: "Observation trend", map_filters: "Map filters", map_region: "All regions", map_species: "All species", map_year: "All years", map_area: "Interactive fish observation map", map_region_label: "Map region", map_species_label: "Map species", map_year_label: "Map year", profile_back: "Back to collection", profile_field_guide: "DATA SWARM / FIELD GUIDE", profile_dossier: "Aquatic species dossier", profile_reference: "Reference image", profile_verified: "Verified record", profile_at_glance: "At a glance", profile_common_name: "Common name", profile_scientific_name: "Scientific name", profile_observed_in: "Observed in", profile_water: "Water", profile_habitat: "Habitat", profile_typical_size: "Typical size", profile_depth: "Depth record", profile_salinity: "Salinity", profile_record: "The record", profile_what_we_know: "What we know", profile_record_text: "This profile brings together the field signals behind the {title} collection. It is a living record: each observation adds context about where this species occurs, how its environment changes, and what researchers should notice next.", profile_temperature: "sample temperature", profile_oxygen: "dissolved oxygen", profile_quality: "data quality", profile_habitat_range: "Habitat & range", profile_habitat_text: "The current archive places this fish around {location}, recorded through {source}. The collection was first catalogued on {date} and covers a {type}.", profile_conservation: "Conservation note", profile_conservation_text: "{access}. Use the observations as evidence for careful questions about aquatic ecosystems, not as a substitute for local management guidance.", profile_raw_signals: "Explore the raw signals", profile_view_data: "View data table", profile_records: "records", contributor_title: "Submit an observation", contributor_btn: "Submit observation", lab_title: "Data Swarm Lab", lab_desc: "Data → AI → insights → conservation", ask_title: "Ask DATA SWARM", ask_placeholder: "Ask about species, places, or years", ask_button: "Ask", ask_intro: "Search the catalog in natural language. Answers are grounded in Data Swarm records."
  },
  fr: {
    app_title: "Data Swarm",
    app_subtitle: "Bibliothèque de données aquatiques",
    auth_eyebrow: "Une bibliothèque vivante de données marines",
    auth_heading: "Suivez tout<br><em>le banc de poissons.</em>",
    auth_desc: "Découvrez des jeux de données qui révèlent la vie sous-marine, un signal à la fois.",
    auth_swarm_status: "L'essaim suit votre curseur",
    login_eyebrow: "Bon retour",
    login_title: "Plongez dans l'eau",
    login_label_name: "Votre nom",
    login_name_ph: "Taha",
    login_label_email: "Adresse e-mail",
    login_email_ph: "vous@exemple.com",
    login_btn: "Se connecter à Data Swarm",
    login_note: "Votre nom apparaît lorsque vous explorez et téléchargez des données.",
    login_err_name: "Veuillez entrer votre nom.",
    login_err_name_len: "Votre nom doit contenir au moins 2 caractères.",
    login_err_email: "Veuillez entrer une adresse e-mail valide.",
    login_err_registered: "Ce nom est déjà enregistré sur cet appareil. Veuillez en choisir un autre.",
    nav_explore: "Explorer les données",
    nav_researchers: "Pour les chercheurs",
    balance_label: "Solde :",
    btn_welcome_email: "E-mail de bienvenue",
    btn_logout: "Déconnexion",
    btn_my_downloads: "Mes téléchargements",
    hero_eyebrow: "La bibliothèque de données vivante",
    hero_heading: "Les meilleures questions<br><em>naissent dans l'eau.</em>",
    hero_intro: "Jeux de données sur les poissons pour les passionnés d'océan, étudiants et scientifiques. Choisissez un jeu de données, suivez les indices, créez de l'impact.",
    hero_cta: "Parcourir la collection",
    catalog_eyebrow: "Notes de terrain / 004",
    catalog_heading: "Trouvez votre prochaine expédition.",
    catalog_note: "Chaque jeu de données est documenté, téléchargeable et clair.",
    search_placeholder: "Rechercher une espèce, un lieu, un sujet...",
    filter_all: "Toutes les données",
    filter_oceans: "Océans",
    filter_freshwater: "Eaux douces",
    filter_climate: "Climat",
    buy_btn: "Acheter",
    photo_label: "Photographie marine",
    formats_label: "CSV · JSON",
    empty_catalog: "Aucun jeu de données ne correspond à cette recherche.",
    redeem_eyebrow: "Vous avez un code ?",
    redeem_title: "Ajoutez des crédits à votre compte.",
    redeem_desc: "Entrez votre code ci-dessous pour créditer votre solde sur cet appareil.",
    redeem_input_ph: "Entrez votre code",
    redeem_btn: "Utiliser le code",
    redeem_empty: "Veuillez entrer un code.",
    redeem_invalid: "Ce code n'est pas valide.",
    redeem_success: "{amount} crédits ajoutés. Votre solde est de {balance}.",
    gallery_eyebrow: "Archives de terrain",
    gallery_title: "Rencontrez les espèces.",
    gallery_desc: "De véritables références sous-marines pour accompagner vos recherches.",
    gallery_caption_1: "Poissons de récif / jardins coralliens",
    gallery_caption_2: "Pleine mer / routes des requins",
    gallery_caption_3: "Pépinières de mangroves / Vivaneau des mangroves",
    about_eyebrow: "Conçu pour les esprits curieux",
    about_heading: "Les données doivent<br><em>être vivantes.</em>",
    about_desc: "Data Swarm rend les mystères de la vie aquatique accessibles et passionnants à explorer. Chaque collection associe des données fiables au contexte de leurs explorateurs.",
    about_link: "Contacter l'équipe ↗",
    footer_copy: "© 2026 Data Swarm",
    footer_credit: "Créé par Taha Karmani",
    preview_eyebrow: "Aperçu de la photo",
    preview_desc: "Examinez la photo avant d'ajouter ce jeu de données.",
    preview_link: "Ouvrir la photo originale ↗",
    checkout_eyebrow: "Paiement Data Swarm",
    checkout_title: "Choisir le mode de paiement",
    checkout_price: "Prix du jeu de données :",
    checkout_balance_label: "Votre solde",
    checkout_pay_balance: "Payer avec mon solde",
    checkout_or: "ou",
    checkout_pay_paypal: "Payer avec PayPal",
    checkout_pay_card: "Payer par carte bancaire",
    checkout_secure: "Paiement de démonstration — aucun prélèvement bancaire réel.",
    checkout_need_more: "Il vous manque {amount}",
    checkout_success: "Paiement réussi",
    checkout_external_demo: "Paiement démo {method}\n\nJeu de données : {title}\nPrix : {price}\n\nAppuyez sur OK pour simuler un paiement réussi.",
    checkout_external_success: "Paiement {method} réussi",
    download_started: "{title} téléchargé ({format})",
    wallet_eyebrow: "Portefeuille Data Swarm",
    wallet_title: "Votre solde",
    wallet_available: "Crédits disponibles",
    wallet_redeem_label: "Utiliser un code promo",
    wallet_code_ph: "Entrez le code",
    wallet_redeem_btn: "Valider",
    library_eyebrow: "Votre collection",
    library_title: "Mes téléchargements",
    library_intro: "Jeux de données achetés sur Data Swarm.",
    library_empty: "Vous n'avez pas encore acheté de données.",
    library_view_data: "Voir les données en direct",
    toast_signin_first: "Veuillez vous connecter d'abord",
    toast_welcome_sent: "Message de bienvenue préparé pour {email}",
    filter_species: "Espèce", filter_location: "Lieu", filter_water: "Type d'eau", filter_date: "Collecté après", detail_btn: "Explorer les données", detail_title: "Intelligence du jeu de données", detail_preview: "Aperçu des données", detail_download: "Télécharger les données", detail_license: "Licence", detail_observations: "Observations", detail_source: "Source", detail_map: "Carte des observations", detail_trend: "Tendance des observations", map_filters: "Filtres de carte", map_region: "Toutes les régions", map_species: "Toutes les espèces", map_year: "Toutes les années", map_area: "Carte interactive des observations de poissons", map_region_label: "Région de la carte", map_species_label: "Espèce sur la carte", map_year_label: "Année sur la carte", profile_back: "Retour à la collection", profile_field_guide: "DATA SWARM / GUIDE DE TERRAIN", profile_dossier: "Dossier d'espèce aquatique", profile_reference: "Image de référence", profile_verified: "Donnée vérifiée", profile_at_glance: "En bref", profile_common_name: "Nom commun", profile_scientific_name: "Nom scientifique", profile_observed_in: "Observé à", profile_water: "Eau", profile_habitat: "Habitat", profile_typical_size: "Taille habituelle", profile_depth: "Profondeur enregistrée", profile_salinity: "Salinité", profile_record: "Le relevé", profile_what_we_know: "Ce que nous savons", profile_record_text: "Ce profil rassemble les signaux de terrain de la collection {title}. C'est un relevé vivant : chaque observation apporte un contexte sur la présence de cette espèce, les changements de son environnement et les prochaines questions à poser.", profile_temperature: "température de l'échantillon", profile_oxygen: "oxygène dissous", profile_quality: "qualité des données", profile_habitat_range: "Habitat et répartition", profile_habitat_text: "Les archives actuelles situent ce poisson autour de {location}, grâce à une collecte par {source}. La collection a été cataloguée le {date} et correspond à un {type}.", profile_conservation: "Note de conservation", profile_conservation_text: "{access}. Utilisez ces observations pour poser des questions précises sur les écosystèmes aquatiques, et non comme substitut aux recommandations de gestion locales.", profile_raw_signals: "Explorer les signaux bruts", profile_view_data: "Voir le tableau de données", profile_records: "enregistrements", contributor_title: "Soumettre une observation", contributor_btn: "Soumettre l'observation", lab_title: "Data Swarm Lab", lab_desc: "Données → IA → résultats → conservation", ask_title: "Demander à DATA SWARM", ask_placeholder: "Rechercher une espèce, un lieu ou une année", ask_button: "Demander", ask_intro: "Interrogez le catalogue en langage naturel. Les réponses utilisent les données Data Swarm."
  },
  ar: {
    app_title: "داتا سوارم (Data Swarm)",
    app_subtitle: "المكتبة الرقمية للبيانات المائية",
    auth_eyebrow: "مكتبة حية لبيانات الأسماك والحياة البحرية",
    auth_heading: "اتبع سرب<br><em>الأسماك بالكامل.</em>",
    auth_desc: "اكتشف مجموعات البيانات العلمية التي تجعل الحياة المائية مرئية وواضحة، إشارة تلو الأخرى.",
    auth_swarm_status: "السرب يتبع حركة المؤشر بدقة",
    login_eyebrow: "مرحباً بعودتك",
    login_title: "ادخل إلى الأعماق",
    login_label_name: "الاسم",
    login_name_ph: "طه",
    login_label_email: "البريد الإلكتروني",
    login_email_ph: "you@example.com",
    login_btn: "الدخول إلى داتا سوارم",
    login_note: "يظهر اسمك عند استكشاف مجموعات البيانات وتنزيلها.",
    login_err_name: "يرجى إدخال اسمك.",
    login_err_name_len: "يجب أن يتكون الاسم من حرفين على الأقل.",
    login_err_email: "يرجى إدخال بريد إلكتروني صحيح.",
    login_err_registered: "هذا الاسم مسجل بالفعل على هذا الجهاز. يرجى اختيار اسم آخر.",
    nav_explore: "استكشف البيانات",
    nav_researchers: "للباحثين والعلماء",
    balance_label: "الرصيد:",
    btn_welcome_email: "رسالة ترحيبية",
    btn_logout: "تسجيل الخروج",
    btn_my_downloads: "تنزيلاتي",
    hero_eyebrow: "مكتبة البيانات المائية الحية",
    hero_heading: "أفضل التساؤلات<br><em>تبدأ في أعماق المياه.</em>",
    hero_intro: "مجموعات بيانات منتقاة لعشاق المحيط والطلاب ورواة القصص والعلماء. اختر مجموعة بيانات، واتبع الأدلة، واصنع أبحاثاً ذات قيمة.",
    hero_cta: "تصفح المجموعة",
    catalog_eyebrow: "ملاحظات ميدانية / 004",
    catalog_heading: "حدد وجهة رحلتك الميدانية القادمة.",
    catalog_note: "كل مجموعة بيانات موثقة بالكامل، قابلة للتنزيل الفوري، ومصممة لتكون مفهومة.",
    search_placeholder: "ابحث عن نوع سمك، موطن، أو موضوع...",
    filter_all: "جميع البيانات",
    filter_oceans: "المحيطات",
    filter_freshwater: "المياه العذبة",
    filter_climate: "المناخ",
    buy_btn: "شراء البيانات",
    photo_label: "صورة توثيقية حقيقية",
    formats_label: "CSV · JSON",
    empty_catalog: "لا توجد مجموعات بيانات تطابق هذا البحث حالياً.",
    redeem_eyebrow: "هل لديك رمز ترويجي؟",
    redeem_title: "أضف رصيداً إلى محفظتك.",
    redeem_desc: "أدخل الرمز الترويجي أدناه وستتم إضافة الرصيد لحسابك على هذا الجهاز.",
    redeem_input_ph: "أدخل الرمز الترويجي",
    redeem_btn: "استرداد الرمز",
    redeem_empty: "يرجى إدخال الرمز.",
    redeem_invalid: "هذا الرمز غير صالح.",
    redeem_success: "تمت إضافة {amount} رصيد. رصيدك الحالي هو {balance}.",
    gallery_eyebrow: "من الأرشيف الميداني",
    gallery_title: "تعرف على الكائنات البحرية.",
    gallery_desc: "مراجع وصور تصويرية حقيقية تحت الماء توثق كل مجموعة بيانات.",
    gallery_caption_1: "أسماك الشعاب / حدائق المرجان",
    gallery_caption_2: "المياه المفتوحة / مسارات القروش",
    gallery_caption_3: "مشاتل المانغروف / سمك جاك المانغروف",
    about_eyebrow: "صُمم للعقول الشغوفة",
    about_heading: "البيانات يجب<br><em>أن تنبض بالحياة.</em>",
    about_desc: "يجعل داتا سوارم اكتشاف أنماط الحياة المائية أسهل وأكثر إمتاعاً. يجمع كل أرشيف بين ملفات البيانات المنظمة والسياق الميداني للباحثين الذين جمعوها.",
    about_link: "تواصل مع فريق السرب ↗",
    footer_copy: "© 2026 داتا سوارم (Data Swarm)",
    footer_credit: " تم التطوير بواسطة طه قرماني   (Taha Karmani)",
    preview_eyebrow: "معاينة الصورة",
    preview_desc: "عاين صورة الكائن البحري قبل تنزيل مجموعة البيانات.",
    preview_link: "فتح الصورة الأصلية ↗",
    checkout_eyebrow: "الدفع في داتا سوارم",
    checkout_title: "اختر طريقة الدفع",
    checkout_price: "سعر مجموعة البيانات:",
    checkout_balance_label: "رصيدك الحالي",
    checkout_pay_balance: "الدفع باستخدام الرصيد",
    checkout_or: "أو",
    checkout_pay_paypal: "الدفع بواسطة PayPal",
    checkout_pay_card: "الدفع بالبطاقة البنكية",
    checkout_secure: "دفع تجريبي — لا تتم معالجة أي مبالغ حقيقية.",
    checkout_need_more: "تحتاج إلى {amount} إضافية",
    checkout_success: "تمت عملية الدفع بنجاح",
    checkout_external_demo: "دفع تجريبي عبر {method}\n\nمجموعة البيانات: {title}\nالسعر: {price}\n\nاضغط موافق لمحاكاة نجاح الدفع.",
    checkout_external_success: "تم الدفع عبر {method} بنجاح",
    download_started: "تم تنزيل {title} بصيغة ({format})",
    wallet_eyebrow: "محفظة داتا سوارم",
    wallet_title: "رصيدك الحالي",
    wallet_available: "الرصيد المتاح",
    wallet_redeem_label: "استرداد رمز رصيد",
    wallet_code_ph: "أدخل الرمز هنا",
    wallet_redeem_btn: "تفعيل",
    library_eyebrow: "مجموعتك الخاصة",
    library_title: "تنزيلاتي",
    library_intro: "مجموعات البيانات التي قمت بشرائها من داتا سوارم.",
    library_empty: "لم تقم بشراء أي مجموعات بيانات حتى الآن.",
    library_view_data: "عرض البيانات المباشرة",
    toast_signin_first: "يرجى تسجيل الدخول أولاً",
    toast_welcome_sent: "تم تجهيز رسالة الترحيب للبريد {email}",
    filter_species: "النوع", filter_location: "الموقع", filter_water: "نوع المياه", filter_date: "تاريخ الجمع بعد", detail_btn: "استكشف البيانات", detail_title: "ذكاء مجموعة البيانات", detail_preview: "معاينة البيانات", detail_download: "تنزيل مجموعة البيانات", detail_license: "الترخيص", detail_observations: "عدد الملاحظات", detail_source: "المصدر", detail_map: "خريطة الملاحظات", detail_trend: "اتجاه الملاحظات", map_filters: "مرشحات الخريطة", map_region: "جميع المناطق", map_species: "جميع الأنواع", map_year: "جميع السنوات", map_area: "خريطة تفاعلية لملاحظات الأسماك", map_region_label: "منطقة الخريطة", map_species_label: "نوع السمك على الخريطة", map_year_label: "سنة الخريطة", profile_back: "العودة إلى المجموعة", profile_field_guide: "داتا سوارم / الدليل الميداني", profile_dossier: "ملف النوع المائي", profile_reference: "صورة مرجعية", profile_verified: "سجل موثق", profile_at_glance: "نظرة سريعة", profile_common_name: "الاسم الشائع", profile_scientific_name: "الاسم العلمي", profile_observed_in: "موقع الرصد", profile_water: "المياه", profile_habitat: "الموطن", profile_typical_size: "الحجم المعتاد", profile_depth: "العمق المسجل", profile_salinity: "الملوحة", profile_record: "السجل", profile_what_we_know: "ما نعرفه", profile_record_text: "يجمع هذا الملف إشارات الرصد الميداني من مجموعة {title}. إنه سجل حي؛ فكل ملاحظة تضيف سياقاً حول أماكن وجود هذا النوع وتغير بيئته والأسئلة التي ينبغي للباحثين طرحها لاحقاً.", profile_temperature: "درجة حرارة العينة", profile_oxygen: "الأكسجين المذاب", profile_quality: "جودة البيانات", profile_habitat_range: "الموطن والانتشار", profile_habitat_text: "تضع السجلات الحالية هذا السمك حول {location}، وقد جُمعت البيانات من خلال {source}. سُجلت المجموعة لأول مرة في {date} وهي تمثل {type}.", profile_conservation: "ملاحظة للحفاظ على البيئة", profile_conservation_text: "{access}. استخدم الملاحظات لطرح أسئلة دقيقة حول النظم البيئية المائية، وليس بديلاً عن إرشادات الإدارة المحلية.", profile_raw_signals: "استكشف الإشارات الخام", profile_view_data: "عرض جدول البيانات", profile_records: "سجلات", contributor_title: "إرسال ملاحظة", contributor_btn: "إرسال الملاحظة", lab_title: "مختبر داتا سوارم", lab_desc: "البيانات ← الذكاء الاصطناعي ← الرؤى ← حماية الطبيعة", ask_title: "اسأل داتا سوارم", ask_placeholder: "اسأل عن نوع أو موقع أو سنة", ask_button: "اسأل", ask_intro: "ابحث في الكتالوج بلغة طبيعية. الإجابات مبنية على سجلات داتا سوارم."
  }
};

Object.assign(translations.en, {
  choose_dataset: 'Choose a dataset', map_panel_intro: 'Open any card to see its observation story, preview rows, and environmental signals.',
  ai_capabilities: 'AI capabilities', catalog_search: 'Catalog search', species_context: 'Species context', evidence_linked: 'Evidence linked', map_search: 'Search real measurements', map_searching: 'Searching GBIF...', map_refresh: 'Refresh real measurements', metric_observations: 'Observations', metric_size: 'Average size', metric_weight: 'Average weight', metric_live_data: 'Search real data', metric_depth: 'Depth', metric_temperature: 'Temperature', metric_quality: 'Quality', metric_timeline: 'Observation timeline',
  contributor_desc: 'Turn a sighting into a useful signal for the shared aquatic record.', species_placeholder: 'Species', location_placeholder: 'Location', water_temperature_placeholder: 'Water temperature °C',
  chat_ask: 'Ask Data Swarm', chat_assistant: 'Data Swarm AI', chat_connecting: 'Connecting to Ollama', chat_ready: 'ready', chat_thinking: 'Thinking...', chat_missing: 'Ollama model not found', chat_unavailable: 'Connection unavailable', chat_close: 'Close chat', chat_welcome: 'Welcome to the swarm.', chat_intro: 'I can explain fish, oceans, climate, conservation, or help you find a dataset.', chat_find: 'Find a dataset', chat_topic: 'Explain a topic', chat_conservation: 'Explore conservation', chat_placeholder: 'Ask anything about aquatic life...', chat_local: 'LOCAL MODEL', chat_private: 'PRIVATE BY DEFAULT',
  ask_title: 'Ask DATA SWARM', ask_intro: 'Search the catalog in natural language. Answers are grounded in Data Swarm records.', ask_placeholder: 'Ask about species, places, or years', ask_button: 'Ask',
  contributor_title: 'Submit an observation', contributor_btn: 'Submit observation'
});
Object.assign(translations.fr, {
  choose_dataset: 'Choisissez une collection', map_panel_intro: 'Ouvrez une fiche pour découvrir son récit d’observations, ses lignes d’aperçu et ses signaux environnementaux.',
  ai_capabilities: 'Fonctions IA', catalog_search: 'Recherche du catalogue', species_context: 'Contexte de l’espèce', evidence_linked: 'Preuves liées', map_search: 'Rechercher des mesures réelles', map_searching: 'Recherche GBIF...', map_refresh: 'Actualiser les mesures réelles', metric_observations: 'Observations', metric_size: 'Taille moyenne', metric_weight: 'Poids moyen', metric_live_data: 'Rechercher des données réelles', metric_depth: 'Profondeur', metric_temperature: 'Température', metric_quality: 'Qualité', metric_timeline: 'Chronologie des observations',
  contributor_desc: 'Transformez une observation en signal utile pour les archives aquatiques communes.', species_placeholder: 'Espèce', location_placeholder: 'Lieu', water_temperature_placeholder: 'Température de l’eau °C',
  chat_ask: 'Demander à Data Swarm', chat_assistant: 'Data Swarm IA', chat_connecting: 'Connexion à Ollama', chat_ready: 'prêt', chat_thinking: 'Réflexion...', chat_missing: 'Modèle Ollama introuvable', chat_unavailable: 'Connexion indisponible', chat_close: 'Fermer le chat', chat_welcome: 'Bienvenue dans l’essaim.', chat_intro: 'Je peux expliquer les poissons, les océans, le climat, la conservation ou vous aider à trouver une collection.', chat_find: 'Trouver une collection', chat_topic: 'Expliquer un sujet', chat_conservation: 'Explorer la conservation',   chat_placeholder: 'Posez une question sur la vie aquatique...', chat_local: 'MODÈLE LOCAL', chat_private: 'PRIVÉ PAR DÉFAUT',
  ask_title: 'Demander à DATA SWARM', ask_intro: 'Recherchez dans le catalogue en langage naturel. Les réponses sont fondées sur les enregistrements Data Swarm.', ask_placeholder: 'Demandez sur les espèces, lieux ou années', ask_button: 'Demander',
  contributor_title: 'Soumettre une observation', contributor_btn: 'Envoyer l\'observation'
});
Object.assign(translations.ar, {
  choose_dataset: 'اختر مجموعة بيانات', map_panel_intro: 'افتح أي بطاقة لرؤية قصة ملاحظاتها وصفوف المعاينة والإشارات البيئية.',
  ai_capabilities: 'قدرات الذكاء الاصطناعي', catalog_search: 'البحث في الكتالوج', species_context: 'سياق النوع', evidence_linked: 'أدلة مرتبطة', map_search: 'البحث عن قياسات حقيقية', map_searching: 'جارٍ البحث في GBIF...', map_refresh: 'تحديث القياسات الحقيقية', metric_observations: 'الملاحظات', metric_size: 'متوسط الحجم', metric_weight: 'متوسط الوزن', metric_live_data: 'البحث عن بيانات حقيقية', metric_depth: 'العمق', metric_temperature: 'درجة الحرارة', metric_quality: 'الجودة', metric_timeline: 'الخط الزمني للملاحظات',
  contributor_desc: 'حوّل مشاهدتك إلى إشارة مفيدة للسجل المائي المشترك.', species_placeholder: 'النوع', location_placeholder: 'الموقع', water_temperature_placeholder: 'درجة حرارة المياه °م',
  chat_ask: 'اسأل داتا سوارم', chat_assistant: 'داتا سوارم AI', chat_connecting: 'جارٍ الاتصال بـ Ollama', chat_ready: 'جاهز', chat_thinking: 'جارٍ التفكير...', chat_missing: 'لم يتم العثور على نموذج Ollama', chat_unavailable: 'الاتصال غير متاح', chat_close: 'إغلاق المحادثة', chat_welcome: 'مرحباً بك في السرب.', chat_intro: 'يمكنني شرح الأسماك والمحيطات والمناخ والحفاظ على البيئة أو مساعدتك في العثور على مجموعة بيانات.', chat_find: 'ابحث عن مجموعة', chat_topic: 'اشرح موضوعاً', chat_conservation: 'استكشف الحفاظ على البيئة',   chat_placeholder: 'اسأل عن الحياة المائية...', chat_local: 'نموذج محلي', chat_private: 'خاص افتراضياً',
  ask_title: 'اسأل داتا سوارم', ask_intro: 'ابحث في الكتالوج باللغة الطبيعية. الإجابات مبنية على سجلات داتا سوارم.', ask_placeholder: 'اسأل عن الأنواع والمواقع أو السنوات', ask_button: 'اسأل',
  contributor_title: 'إرسال ملاحظة', contributor_btn: 'إرسال الملاحظة'
});

let currentLang = localStorage.getItem('dataSwarmLang') || 'ar';

function getCurrentLanguage() {
  return currentLang;
}

function t(key, params = {}) {
  const lang = getCurrentLanguage();
  let text = translations[lang]?.[key] || translations.en?.[key] || key;
  Object.keys(params).forEach(param => {
    text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
  });
  return text;
}

function setLanguage(lang) {
  if (!translations[lang]) {
    lang = 'en';
  }
  currentLang = lang;
  localStorage.setItem('dataSwarmLang', lang);

  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update active state on all language pickers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateStaticTranslations();
  updateMapTranslations();
  renderProducts();
  updateBalanceDisplay();
  updateBrandText();
}

function updateStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = t(key);
    if (translation.includes('<') && translation.includes('>')) {
      el.innerHTML = translation;
    } else {
      el.textContent = translation;
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    el.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
}

function updateMapTranslations() {
  const map = $('#observationMap');
  const region = $('#mapRegionFilter')?.value || '';
  const species = $('#mapSpeciesFilter')?.value || '';
  const year = $('#mapYearFilter')?.value || '';
  document.querySelector('.map-controls')?.setAttribute('aria-label', t('map_filters'));
  document.querySelector('#observationMap')?.setAttribute('aria-label', t('map_area'));
  [['mapRegionFilter', 'map_region_label'], ['mapSpeciesFilter', 'map_species_label'], ['mapYearFilter', 'map_year_label']].forEach(([id, key]) => $('#' + id)?.setAttribute('aria-label', t(key)));
  [['mapRegionFilter', 'map_region'], ['mapSpeciesFilter', 'map_species'], ['mapYearFilter', 'map_year']].forEach(([id, key]) => {
    const select = $('#' + id);
    if (select?.options[0]) select.options[0].textContent = t(key);
  });
  if (map?.dataset.ready) updateObservationMap();
  if (region) $('#mapRegionFilter').value = region;
  if (species) $('#mapSpeciesFilter').value = species;
  if (year) $('#mapYearFilter').value = year;
}

function setupLanguagePickers() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.dataset.lang;
      if (lang) {
        setLanguage(lang);
      }
    });
  });
}

/* =========================================================
  2. DATASETS (135 MULTILINGUAL DATASETS)
   ========================================================= */

const datasets = [
  {
    id: 1,
    category: 'Oceans',
    visual: 'ocean',
    price: 24,
    titles: {
      en: 'Reef census: Great Barrier Reef',
      fr: 'Recensement récifal : Grande Barrière',
      ar: 'إحصاء الشعاب المرجانية: الحاجز المرجاني العظيم'
    },
    species: {
      en: 'Reef fish',
      fr: 'Poissons de récif',
      ar: 'أسماك الشعاب'
    },
    tags: {
      en: 'Survey / 2024',
      fr: 'Enquête / 2024',
      ar: 'مسح ميداني / 2024'
    },
    descriptions: {
      en: '12,400 observations across 86 reef sites, with species, depth, and bleaching status.',
      fr: '12 400 observations sur 86 sites récifaux, avec espèces, profondeur et état de blanchissement.',
      ar: '12,400 ملاحظة عبر 86 موقعاً للشعاب، مع تحديد الأنواع والعمق وحالة التبييض.'
    }
  },
  {
    id: 2,
    category: 'Freshwater',
    visual: 'fresh',
    price: 18,
    titles: {
      en: 'The freshwater atlas',
      fr: "L'atlas des eaux douces",
      ar: 'أطلس المياه العذبة العالمي'
    },
    species: {
      en: 'Arapaima',
      fr: 'Arapaïma',
      ar: 'الأربيمة العملاقة'
    },
    tags: {
      en: 'Atlas / Global',
      fr: 'Atlas / Mondial',
      ar: 'أطلس / عالمي'
    },
    descriptions: {
      en: 'A worldwide index of freshwater fish habitats, migration routes, and water quality.',
      fr: 'Un index mondial des habitats de poissons d’eau douce, routes de migration et qualité de l’eau.',
      ar: 'فهرس عالمي لمواطن أسماك المياه العذبة ومسارات هجرتها وجودة المياه.'
    }
  },
  {
    id: 3,
    category: 'Climate',
    visual: 'climate',
    price: 32,
    titles: {
      en: 'When the ocean gets warmer',
      fr: "Quand l'océan se réchauffe",
      ar: 'عندما ترتفع حرارة المحيطات'
    },
    species: {
      en: 'Schooling fish',
      fr: 'Poissons de banc',
      ar: 'أسماك الأسراب'
    },
    tags: {
      en: 'Time series / 1980–2023',
      fr: 'Série temporelle / 1980–2023',
      ar: 'سلسلة زمنية / 1980–2023'
    },
    descriptions: {
      en: 'Four decades of temperature and population data for 140 pelagic species.',
      fr: 'Quatre décennies de données de température et de populations pour 140 espèces pélagiques.',
      ar: 'أربعة عقود من بيانات درجات الحرارة وتعداد 140 نوعاً من الأسماك السطحية.'
    }
  },
  {
    id: 4,
    category: 'Oceans',
    visual: 'ocean',
    price: 21,
    titles: {
      en: 'Night lights, deep fish',
      fr: 'Lumières nocturnes, faune abyssale',
      ar: 'أضواء الليل وأسماك الأعماق'
    },
    species: {
      en: 'Deep sea fish',
      fr: 'Poissons des grands fonds',
      ar: 'أسماك الأعماق السحيقة'
    },
    tags: {
      en: 'Acoustics / 2025',
      fr: 'Acoustique / 2025',
      ar: 'مسح صوتي / 2025'
    },
    descriptions: {
      en: 'Echo-sounder readings that map life in the mesopelagic zone after dark.',
      fr: 'Relevés d’écho-sondeur cartographiant la vie en zone mésopélagique après la tombée de la nuit.',
      ar: 'قراءات السونار الصوتي التي ترسم خريطة الحياة في منطقة الأعماق المتوسطة بعد حلول الظلام.'
    }
  },
  {
    id: 5,
    category: 'Freshwater',
    visual: 'fresh',
    price: 16,
    titles: {
      en: 'River giants',
      fr: 'Géants des rivières',
      ar: 'عمالقة الأنهار'
    },
    species: {
      en: 'Arapaima gigas',
      fr: 'Arapaïma géant',
      ar: 'الأربيمة النهرية'
    },
    tags: {
      en: 'Field guide / 18 rivers',
      fr: 'Guide de terrain / 18 rivières',
      ar: 'دليل ميداني / 18 نهراً'
    },
    descriptions: {
      en: 'Size, movement, and spawning records for the world’s largest freshwater fish.',
      fr: 'Taille, déplacements et données de frai pour les plus grands poissons d’eau douce du monde.',
      ar: 'سجلات الأحجام والتحركات ومواسم التكاثر لأكبر أسماك المياه العذبة في العالم.'
    }
  },
  {
    id: 6,
    category: 'Climate',
    visual: 'climate',
    price: 27,
    titles: {
      en: 'Coral recovery signals',
      fr: 'Signaux de rétablissement du corail',
      ar: 'إشارات تعافي المرجان'
    },
    species: {
      en: 'Coral reef fish',
      fr: 'Poissons de récif corallien',
      ar: 'أسماك الشعاب المرجانية'
    },
    tags: {
      en: 'Longitudinal / 2010–2024',
      fr: 'Longitudinal / 2010–2024',
      ar: 'دراسة تتبعية / 2010–2024'
    },
    descriptions: {
      en: 'A visual dataset tracking how reef communities respond after extreme heat.',
      fr: 'Un jeu de données visuel suivant la réponse des récifs après des chaleurs extrêmes.',
      ar: 'مجموعة بيانات مرئية تتبع استجابة مجتمعات الشعاب المرجانية لموجات الحر الشديدة.'
    }
  },
  {
    id: 7,
    category: 'Oceans',
    visual: 'ocean',
    price: 19,
    titles: {
      en: 'Kelp forest neighbors',
      fr: 'Voisins des forêts de varech',
      ar: 'سكان غابات عشب البحر'
    },
    species: {
      en: 'Rockfish',
      fr: 'Sébaste',
      ar: 'سمك الصخر'
    },
    tags: {
      en: 'Camera traps / 2025',
      fr: 'Pièges photographiques / 2025',
      ar: 'كاميرات المراقبة / 2025'
    },
    descriptions: {
      en: 'Daily encounters between kelp, rockfish, and the predators that shape the forest.',
      fr: 'Rencontres quotidiennes entre varech, sébastes et prédateurs façonnant la forêt.',
      ar: 'تسجيلات يومية للتفاعل بين عشب البحر وأسماك الصخر والمفترسات البحرية.'
    }
  },
  {
    id: 8,
    category: 'Freshwater',
    visual: 'fresh',
    price: 29,
    titles: {
      en: 'Salmon homeward routes',
      fr: 'Les routes de retour du saumon',
      ar: 'مسارات عودة السلمون للوطن'
    },
    species: {
      en: 'Atlantic salmon',
      fr: 'Saumon atlantique',
      ar: 'سلمون الأطلسي'
    },
    tags: {
      en: 'Telemetry / 12 seasons',
      fr: 'Télémétrie / 12 saisons',
      ar: 'تتبع عن بعد / 12 موسماً'
    },
    descriptions: {
      en: 'Tagged salmon journeys from open water back to the rivers where they began.',
      fr: 'Voyages de saumons balisés depuis la haute mer jusqu’à leurs rivières natales.',
      ar: 'رحلات السلمون المتبعة من المحيط المفتوح إلى الأنهار التي ولدوا فيها.'
    }
  },
  {
    id: 9,
    category: 'Oceans',
    visual: 'ocean',
    price: 14,
    titles: {
      en: 'The tiny fish census',
      fr: 'Le recensement des petits poissons',
      ar: 'إحصاء الأسماك الدقيقة واليرقات'
    },
    species: {
      en: 'Small schooling fish',
      fr: 'Petits poissons de banc',
      ar: 'صغار أسماك الأسراب'
    },
    tags: {
      en: 'Plankton net / 2023',
      fr: 'Filet à plancton / 2023',
      ar: 'شبكة العوالق / 2023'
    },
    descriptions: {
      en: 'A close look at larvae and small schooling fish across a coastal transect.',
      fr: 'Une étude détaillée des larves et petits poissons sur un transect côtier.',
      ar: 'نظرة دقيقة على اليرقات والأسماك الدقيقة عبر قطاع ساحلي بيئي.'
    }
  },
  {
    id: 10,
    category: 'Climate',
    visual: 'climate',
    price: 23,
    titles: {
      en: 'Mangrove nurseries',
      fr: 'Pépinières de mangroves',
      ar: 'مشاتل أشجار المانغروف'
    },
    species: {
      en: 'Mangrove Jack',
      fr: 'Vivaneau des mangroves',
      ar: 'سمك جاك المانغروف'
    },
    tags: {
      en: 'Habitat study / 2024',
      fr: 'Étude d’habitat / 2024',
      ar: 'دراسة الموطن / 2024'
    },
    descriptions: {
      en: 'Juvenile fish counts showing how mangrove roots protect young coastal life.',
      fr: 'Comptages de juvéniles montrant comment les mangroves protègent la vie côtière.',
      ar: 'إحصاءات صغار الأسماك توضح كيف تحمي جذور المانغروف الحياة الساحلية اليافعة.'
    }
  },
  {
    id: 11,
    category: 'Freshwater',
    visual: 'fresh',
    price: 17,
    titles: {
      en: 'Lake depth voices',
      fr: 'Les voix des profondeurs lacustres',
      ar: 'أصوات أعماق البحيرات'
    },
    species: {
      en: 'Wels catfish',
      fr: 'Silure glane',
      ar: 'سمك السلور الويلزي'
    },
    tags: {
      en: 'Hydrophone / 2022',
      fr: 'Hydrophone / 2022',
      ar: 'مستقبل صوت مائي / 2022'
    },
    descriptions: {
      en: 'Sound recordings and species observations from deep, quiet freshwater lakes.',
      fr: 'Enregistrements acoustiques et observations d’espèces dans des lacs profonds.',
      ar: 'تسجيلات صوتية وملاحظات لأنواع الأسماك في أعماق البحيرات العذبة الهادئة.'
    }
  },
  {
    id: 12,
    category: 'Climate',
    visual: 'climate',
    price: 34,
    titles: {
      en: 'Tuna on the move',
      fr: 'Thons en mouvement',
      ar: 'التونة في مسارات الهجرة'
    },
    species: {
      en: 'Bluefin tuna',
      fr: 'Thon rouge',
      ar: 'التونة ذات الزعانف الزرقاء'
    },
    tags: {
      en: 'Satellite tags / 2015–2024',
      fr: 'Balises satellite / 2015–2024',
      ar: 'تتبع الأقمار الصناعية / 2015–2024'
    },
    descriptions: {
      en: 'Nine years of migration, temperature, and feeding-zone data for bluefin tuna.',
      fr: 'Neuf ans de données de migration, température et zones d’alimentation pour le thon rouge.',
      ar: 'تسع سنوات من بيانات الهجرة ودرجات الحرارة ومناطق التغذية للتونة الزرقاء.'
    }
  },
  {
    id: 13,
    category: 'Oceans',
    visual: 'ocean',
    price: 15,
    titles: {
      en: 'Clownfish anemone life',
      fr: 'Vie symbiotique du poisson-clown',
      ar: 'حياة سمكة المهرج وشقائق النعمان'
    },
    species: {
      en: 'Clownfish',
      fr: 'Poisson-clown',
      ar: 'سمكة المهرج'
    },
    tags: {
      en: 'Reef behavior / 2024',
      fr: 'Comportement récifal / 2024',
      ar: 'سلوك الشعاب / 2024'
    },
    descriptions: {
      en: 'Social groups, anemone partnerships, and territory patterns of clownfish.',
      fr: 'Groupes sociaux, partenariats avec les anémones et territoires des poissons-clowns.',
      ar: 'المجموعات الاجتماعية وشراكات شقائق النعمان وأنماط السيطرة المكانية لسمكة المهرج.'
    }
  },
  {
    id: 14,
    category: 'Oceans',
    visual: 'ocean',
    price: 22,
    titles: {
      en: 'Blue tang migrations',
      fr: 'Migrations du chirurgien bleu',
      ar: 'هجرات سمكة التانج الزرقاء'
    },
    species: {
      en: 'Blue tang',
      fr: 'Chirurgien bleu',
      ar: 'سمكة التانج الزرقاء'
    },
    tags: {
      en: 'Reef telemetry / 2023',
      fr: 'Télémétrie récifale / 2023',
      ar: 'تتبع الشعاب / 2023'
    },
    descriptions: {
      en: 'Movement and feeding records for blue tang across protected tropical reefs.',
      fr: 'Données de déplacement et d’alimentation du chirurgien bleu sur les récifs protégés.',
      ar: 'سجلات الحركة والتغذية لأسماك التانج الزرقاء عبر الشعاب المرجانية الاستوائية المحمية.'
    }
  },
  {
    id: 15,
    category: 'Oceans',
    visual: 'ocean',
    price: 31,
    titles: {
      en: 'Shark nursery survey',
      fr: 'Enquête sur les nurseries de requins',
      ar: 'مسح مشاتل القروش الساحلية'
    },
    species: {
      en: 'Blacktip shark',
      fr: 'Requin à pointes noires',
      ar: 'قرش الحافة السوداء'
    },
    tags: {
      en: 'Coastal survey / 2025',
      fr: 'Enquête côtière / 2025',
      ar: 'مسح ساحلي / 2025'
    },
    descriptions: {
      en: 'Juvenile shark sightings, size measurements, and nursery habitat conditions.',
      fr: 'Observations de jeunes requins, mesures de taille et conditions des habitats de nurserie.',
      ar: 'مشاهدات صغار القروش وقياسات الأحجام وظروف الموائل الساحلية الحاضنة.'
    }
  },
  {
    id: 16,
    category: 'Oceans',
    visual: 'ocean',
    price: 18,
    titles: {
      en: 'Seahorse slow worlds',
      fr: 'Le monde secret des hippocampes',
      ar: 'العوالم الهادئة لفرس البحر'
    },
    species: {
      en: 'Seahorse',
      fr: 'Hippocampe',
      ar: 'فرس البحر'
    },
    tags: {
      en: 'Macro video / 2024',
      fr: 'Vidéo macro / 2024',
      ar: 'تصوير ماكرو / 2024'
    },
    descriptions: {
      en: 'Close-range observations of courtship, camouflage, and feeding behavior.',
      fr: 'Observations rapprochées des parades nuptiales, du camouflage et de l’alimentation.',
      ar: 'ملاحظات مقربة لسلوك التودد والتمويه والتغذية الدقيقة لفرس البحر.'
    }
  },
  {
    id: 17,
    category: 'Oceans',
    visual: 'ocean',
    price: 28,
    titles: {
      en: 'Manta ray oceanic routes',
      fr: 'Les routes océaniques des raies manta',
      ar: 'مسارات أسماك شيطان البحر (مانتا)'
    },
    species: {
      en: 'Reef manta ray',
      fr: 'Raie manta de récif',
      ar: 'شيطان البحر المرجاني'
    },
    tags: {
      en: 'Satellite tags / 2021–2025',
      fr: 'Balises satellite / 2021–2025',
      ar: 'تتبع الأقمار / 2021–2025'
    },
    descriptions: {
      en: 'Long-distance routes and cleaning-station visits of reef manta rays.',
      fr: 'Trajets longue distance et visites des stations de nettoyage des raies manta.',
      ar: 'مسارات الهجرة لمسافات طويلة وزيارات محطات التنظيف لأسماك المانتا.'
    }
  },
  {
    id: 18,
    category: 'Oceans',
    visual: 'ocean',
    price: 25,
    titles: {
      en: 'Octopus adaptive intelligence',
      fr: 'Intelligence adaptative de la pieuvre',
      ar: 'الذكاء التكيفي للأخطبوط'
    },
    species: {
      en: 'Giant Pacific octopus',
      fr: 'Pieuvre géante du Pacifique',
      ar: 'أخطبوط المحيط الهادئ'
    },
    tags: {
      en: 'Behavior study / 2024',
      fr: 'Étude de comportement / 2024',
      ar: 'دراسة سلوكية / 2024'
    },
    descriptions: {
      en: 'Problem-solving trials, den choice, and color-change observations.',
      fr: 'Essais de résolution de problèmes, choix d’abris et changements de couleur.',
      ar: 'تجارب حل المشكلات واختيار المخابئ وملاحظات التمويه وتغير الألوان.'
    }
  },
  {
    id: 19,
    category: 'Oceans',
    visual: 'ocean',
    price: 20,
    titles: {
      en: 'Penguin plunge records',
      fr: 'Plongées des manchots royaux',
      ar: 'سجلات غوص البطاريق الملكية'
    },
    species: {
      en: 'King penguin',
      fr: 'Manchot royal',
      ar: 'البطريق الملكي'
    },
    tags: {
      en: 'Dive log / 2022–2025',
      fr: 'Journal de plongée / 2022–2025',
      ar: 'سجل الغوص / 2022–2025'
    },
    descriptions: {
      en: 'Dive depth, travel speed, and feeding success from tagged penguins.',
      fr: 'Profondeur de plongée, vitesse et taux de succès de capture des proies.',
      ar: 'أعماق الغوص وسرعة الحركة ومعدلات نجاح التغذية للبطاريق المتبعة.'
    }
  },
  {
    id: 20,
    category: 'Freshwater',
    visual: 'fresh',
    price: 16,
    titles: {
      en: 'Golden river guardians',
      fr: 'Gardiens dorés des fleuves',
      ar: 'حراس الأنهار الذهبية'
    },
    species: {
      en: 'Golden dorado',
      fr: 'Dorado doré',
      ar: 'سمك الدورادو الذهبي'
    },
    tags: {
      en: 'River survey / 2023',
      fr: 'Enquête fluviale / 2023',
      ar: 'مسح نهري / 2023'
    },
    descriptions: {
      en: 'Population structure and spawning habitat for a powerful South American river fish.',
      fr: 'Structure de population et frayères d’un puissant prédateur d’Amérique du Sud.',
      ar: 'بنية التعداد ومواطن التكاثر لسمك نهري قوي في أمريكا الجنوبية.'
    }
  },
  {
    id: 21,
    category: 'Freshwater',
    visual: 'fresh',
    price: 19,
    titles: {
      en: 'The electric eel atlas',
      fr: "L'atlas de l'anguille électrique",
      ar: 'أطلس الأنقليس الكهربائي'
    },
    species: {
      en: 'Electric eel',
      fr: 'Anguille électrique',
      ar: 'الأنقليس الكهربائي'
    },
    tags: {
      en: 'Field atlas / 2024',
      fr: 'Atlas de terrain / 2024',
      ar: 'أطلس ميداني / 2024'
    },
    descriptions: {
      en: 'Electric discharge patterns, microhabitats, and seasonal activity across Amazon waterways.',
      fr: 'Décharges électriques, micro-habitats et activité saisonnière en Amazonie.',
      ar: 'أنماط التفريغ الكهربائي والموائل الدقيقة والنشاط الموسمي في حوض الأمازون.'
    }
  },
  {
    id: 22,
    category: 'Freshwater',
    visual: 'fresh',
    price: 21,
    titles: {
      en: 'Salmon spawning chronicles',
      fr: 'Chroniques du frai des saumons',
      ar: 'سجلات تكاثر السلمون الأحمر'
    },
    species: {
      en: 'Sockeye salmon',
      fr: 'Saumon rouge',
      ar: 'السلمون الأحمر'
    },
    tags: {
      en: 'Spawning survey / 2025',
      fr: 'Enquête de frai / 2025',
      ar: 'مسح التكاثر / 2025'
    },
    descriptions: {
      en: 'Run timing, body coloration changes, and stream temperatures across major tributaries.',
      fr: 'Périodes de remontée, changements de coloration et températures des cours d’eau.',
      ar: 'توقيت رحلات الصعود وتغيرات ألوان الجسم ودرجات حرارة الجداول النهرية.'
    }
  },
  {
    id: 23,
    category: 'Freshwater',
    visual: 'fresh',
    price: 12,
    titles: {
      en: 'Betta behavioral display',
      fr: 'Parades comportementales du combattant',
      ar: 'استعراضات سلوك سمكة البيتا'
    },
    species: {
      en: 'Betta fish',
      fr: 'Poisson combattant',
      ar: 'سمكة البيتا المقاتلة'
    },
    tags: {
      en: 'Behavior archive / 2023',
      fr: 'Archives de comportement / 2023',
      ar: 'أرشيف سلوكي / 2023'
    },
    descriptions: {
      en: 'Color shifts, fin spreading, and territorial dynamics in wild and captive populations.',
      fr: 'Changements de couleur, déploiement des nageoires et territorialité.',
      ar: 'تغيرات الألوان وبسط الزعانف وديناميكيات السيطرة المكانية لدى أسماك البيتا.'
    }
  },
  {
    id: 24,
    category: 'Oceans',
    visual: 'ocean',
    price: 17,
    titles: {
      en: 'Frogfish camouflage tactics',
      fr: 'Tactiques de camouflage du poisson-grenouille',
      ar: 'تكتيكات تمويه سمكة الضفدع'
    },
    species: {
      en: 'Frogfish',
      fr: 'Poisson-grenouille',
      ar: 'سمكة الضفدع'
    },
    tags: {
      en: 'Reef macro / 2024',
      fr: 'Macro récifal / 2024',
      ar: 'ماكرو الشعاب / 2024'
    },
    descriptions: {
      en: 'A visual archive of ambush positions, lure movement, and skin texture adaptation.',
      fr: 'Archive visuelle des positions d’embuscade, leurres et textures cutanées.',
      ar: 'أرشيف مرئي لمواقع الكمائن وحركات الطعم التكيفي وتغير ملمس الجلد.'
    }
  },
  {
    id: 25,
    category: 'Climate',
    visual: 'climate',
    price: 26,
    titles: {
      en: 'Whale shark plankton tracking',
      fr: 'Pistage des requins-baleines',
      ar: 'تتبع قرش الحوت وتجمعات العوالق'
    },
    species: {
      en: 'Whale shark',
      fr: 'Requin-baleine',
      ar: 'قرش الحوت'
    },
    tags: {
      en: 'Photo ID / 2018–2025',
      fr: 'Photo-identification / 2018–2025',
      ar: 'تعريف تصويري / 2018–2025'
    },
    descriptions: {
      en: 'Individual spot-pattern identification matching seasonal plankton bloom hotspots.',
      fr: 'Identification individuelle par motifs de taches lors des efflorescences planctoniques.',
      ar: 'تحديد الهوية الفردية عبر أنماط النقط تزامناً مع ازدهار العوالق الموسمية.'
    }
  },
  {
    id: 26,
    category: 'Climate',
    visual: 'climate',
    price: 14,
    titles: {
      en: 'Flying fish aerodynamic launch',
      fr: 'Aérodynamisme des poissons-volants',
      ar: 'ديناميكيات طيران الأسماك الطائرة'
    },
    species: {
      en: 'Flying fish',
      fr: 'Poisson volant',
      ar: 'السمك الطائر'
    },
    tags: {
      en: 'Surface survey / 2022',
      fr: 'Enquête de surface / 2022',
      ar: 'مسح سطحي / 2022'
    },
    descriptions: {
      en: 'Wind speed, wave height, and glide duration metrics for pelagic flying fish.',
      fr: 'Vitesse du vent, hauteur des vagues et durée de vol plané des poissons volants.',
      ar: 'مقاييس سرعة الرياح وارتفاع الأمواج ومدة التحليق الشراعي للأسماك الطائرة.'
    }
  },
  {
    id: 27,
    category: 'Oceans',
    visual: 'ocean',
    price: 24,
    titles: {
      en: 'Bioluminescent abyss',
      fr: 'Abysses bioluminescents',
      ar: 'أعماق البحار ذاتية الإضاءة'
    },
    species: {
      en: 'Frilled shark & Lanternfish',
      fr: 'Requin-lézard et poisson-lanterne',
      ar: 'القرش المزركش وأسماك الفانوس'
    },
    tags: {
      en: 'Deep net / 2024',
      fr: 'Chalut profond / 2024',
      ar: 'مسح الأعماق / 2024'
    },
    descriptions: {
      en: 'Photophore intensity and vertical diel migration records from the bathypelagic zone.',
      fr: 'Intensité des photophores et migrations verticales en zone bathypélagique.',
      ar: 'سجلات شدة الأعضاء المضيئة والهجرة العمودية اليومية في المنطقة السحيقة.'
    }
  },
  {
    id: 28,
    category: 'Oceans',
    visual: 'ocean',
    price: 18,
    titles: {
      en: 'Pufferfish geometric nests',
      fr: 'Nids géométriques du poisson-ballon',
      ar: 'الأعشاش الهندسية لسمكة الينفوخ'
    },
    species: {
      en: 'Pufferfish',
      fr: 'Poisson-ballon',
      ar: 'سمكة الينفوخ (المنفاخ)'
    },
    tags: {
      en: 'Seabed mapping / 2023',
      fr: 'Cartographie des fonds / 2023',
      ar: 'مسح قاع البحر / 2023'
    },
    descriptions: {
      en: 'Circular seabed sand garden sculptures, mate attraction, and grain size analysis.',
      fr: 'Sculptures de sable circulaires, attraction des partenaires et granulométrie.',
      ar: 'منحوتات رملية دائرية في قاع البحر لجذب الشريك مع تحليل حبيبات الرمل.'
    }
  },
  // NEW DATASETS (29 to 48)
  {
    id: 29,
    category: 'Oceans',
    visual: 'ocean',
    price: 28,
    titles: {
      en: 'Coelacanth living fossils',
      fr: 'Cœlacanthe : fossiles vivants',
      ar: 'أحافير شوكيات الجوف الحية (السيلاكانث)'
    },
    species: {
      en: 'Coelacanth (Latimeria)',
      fr: 'Cœlacanthe (Latimeria)',
      ar: 'سمكة السيلاكانث القديمة'
    },
    tags: {
      en: 'Deep submarine / 2025',
      fr: 'Sous-marin profond / 2025',
      ar: 'غواصة الأعماق / 2025'
    },
    descriptions: {
      en: 'Lobe-finned movement, cave clustering, and electro-receptive rostral organ scans from deep volcanic slopes.',
      fr: 'Nageoires lobées, rassemblements en grottes et organes électro-récepteurs sur pentes volcaniques.',
      ar: 'حركات الزعانف الفصية والتجمع في الكهوف ومسح الأعضاء الكهروحسية على المنحدرات البركانية.'
    }
  },
  {
    id: 30,
    category: 'Oceans',
    visual: 'ocean',
    price: 25,
    titles: {
      en: 'Sailfish high-speed burst',
      fr: 'Pointes de vitesse du voilier',
      ar: 'انقضاضات سمكة الشراع فائقة السرعة'
    },
    species: {
      en: 'Atlantic sailfish',
      fr: 'Espadon voilier',
      ar: 'سمكة الشراع الأطلسية'
    },
    tags: {
      en: 'High-speed sonar / 2024',
      fr: 'Sonar haute vitesse / 2024',
      ar: 'سونار فائق السرعة / 2024'
    },
    descriptions: {
      en: 'Recorded burst speeds exceeding 100 km/h, bill slashes, and cooperative schooling attacks.',
      fr: 'Vitesses de pointe dépassant 100 km/h, frappes du rostre et attaques coordonnées en banc.',
      ar: 'تسجيلات سرعات انقضاض تفوق 100 كم/ساعة، وضربات المنقار والهجمات الجماعية المنظمة.'
    }
  },
  {
    id: 31,
    category: 'Freshwater',
    visual: 'fresh',
    price: 27,
    titles: {
      en: 'Beluga sturgeon ancient giants',
      fr: 'Esturgeon béluga : géants ancestraux',
      ar: 'سمك الحفش البيلوغا العملاق'
    },
    species: {
      en: 'Beluga sturgeon (Huso huso)',
      fr: 'Esturgeon béluga (Huso huso)',
      ar: 'حفش البيلوغا (Huso huso)'
    },
    tags: {
      en: 'Basin telemetry / 2024',
      fr: 'Télémétrie de bassin / 2024',
      ar: 'تتبع الحوض النهري / 2024'
    },
    descriptions: {
      en: 'Lifespan, upstream river spawning journeys, and conservation corridors across Danube and Caspian basins.',
      fr: 'Longévité, montaison fluviale pour le frai et corridors de conservation en mer Caspienne.',
      ar: 'متوسط العمر ومسارات التكاثر في أعالي الأنهار وممرات الحماية البيئية في حوض قزوين والدانوب.'
    }
  },
  {
    id: 32,
    category: 'Oceans',
    visual: 'ocean',
    price: 30,
    titles: {
      en: 'Giant Pacific octopus maze study',
      fr: 'Labyrinthes de la pieuvre géante',
      ar: 'متاهات وذكاء أخطبوط المحيط الهادئ'
    },
    species: {
      en: 'Giant Pacific octopus',
      fr: 'Pieuvre géante du Pacifique',
      ar: 'أخطبوط الباسيفيك العملاق'
    },
    tags: {
      en: 'Cognition lab / 2025',
      fr: 'Labo de cognition / 2025',
      ar: 'مختبر الإدراك / 2025'
    },
    descriptions: {
      en: 'Spatial memory tests, tactile object classification, and suckers-driven chemical sensing telemetry.',
      fr: 'Tests de mémoire spatiale, classification tactile et détection chimique par les ventouses.',
      ar: 'اختبارات الذاكرة المكانية وتصنيف الأشياء باللمس والاستشعار الكيميائي عبر الممصات.'
    }
  },
  {
    id: 33,
    category: 'Climate',
    visual: 'climate',
    price: 21,
    titles: {
      en: 'Lionfish invasive expansion',
      fr: 'Expansion invasive de la rascasse',
      ar: 'تمدد أسماك أسد البحر الغازية'
    },
    species: {
      en: 'Red lionfish (Pterois volitans)',
      fr: 'Rascasse volante (Pterois)',
      ar: 'سمكة الأسد الحمراء'
    },
    tags: {
      en: 'Invasive tracking / 2024',
      fr: 'Suivi invasif / 2024',
      ar: 'تتبع الأنواع الغازية / 2024'
    },
    descriptions: {
      en: 'Warming water tolerance, native reef predation rates, and population density changes in the Atlantic.',
      fr: 'Tolérance au réchauffement, taux de prédation sur les récifs et densité de population.',
      ar: 'تحمل المياه الدافئة ومعدلات افتراس أسماك الشعاب المحلية وتغيرات الكثافة في الأطلسي.'
    }
  },
  {
    id: 34,
    category: 'Oceans',
    visual: 'ocean',
    price: 23,
    titles: {
      en: 'Leafy seadragon mimicry',
      fr: 'Mimétisme du dragon de mer feuillu',
      ar: 'تمويه ومحاكاة تنين البحر المورق'
    },
    species: {
      en: 'Leafy seadragon',
      fr: 'Dragon de mer feuillu',
      ar: 'تنين البحر المورق'
    },
    tags: {
      en: 'Coastal transect / 2023',
      fr: 'Transect côtier / 2023',
      ar: 'قطاع ساحلي / 2023'
    },
    descriptions: {
      en: 'Leaf appendage sway physics, kelp bed camouflage fidelity, and site fidelity in South Australia.',
      fr: 'Oscillation des appendices foliacés, fidélité au camouflage et sédentarité en Australie du Sud.',
      ar: 'فيزياء تمايل الزوائد الورقية ودقة التمويه في قيعان الأعشاب والتمسك بالموطن في جنوب أستراليا.'
    }
  },
  {
    id: 35,
    category: 'Climate',
    visual: 'climate',
    price: 33,
    titles: {
      en: 'Antarctic icefish antifreeze blood',
      fr: 'Le sang antigel du poisson des glaces',
      ar: 'دم سمكة الجليد القطبية المضاد للتجمد'
    },
    species: {
      en: 'Antarctic toothfish & Icefish',
      fr: 'Légine australe et poisson des glaces',
      ar: 'سمكة الجليد القطبية'
    },
    tags: {
      en: 'Polar polarimetry / 2025',
      fr: 'Polarimétrie polaire / 2025',
      ar: 'قياسات قطبية / 2025'
    },
    descriptions: {
      en: 'Antifreeze glycoprotein concentration, transparent blood physiology, and sub-zero survival depth metrics.',
      fr: 'Glycoprotéines antigel, sang translucide sans hémoglobine et survie sous zéro degré.',
      ar: 'تركيز البروتينات السكرية المضادة للتجمد وفسيولوجيا الدم الشفاف ومقاييس البقاء تحت الصفر.'
    }
  },
  {
    id: 36,
    category: 'Oceans',
    visual: 'ocean',
    price: 26,
    titles: {
      en: 'Goblin shark jaws & electro-sensors',
      fr: 'Requin gobelin : mâchoires et capteurs',
      ar: 'فكي ومستشعرات قرش العفريت السحيق'
    },
    species: {
      en: 'Goblin shark (Mitsukurina)',
      fr: 'Requin gobelin (Mitsukurina)',
      ar: 'قرش العفريت (Mitsukurina)'
    },
    tags: {
      en: 'Deep trench / 2024',
      fr: 'Fosse sous-marine / 2024',
      ar: 'الخنادق السحيقة / 2024'
    },
    descriptions: {
      en: 'Rapid jaw protrusion kinematic logs, ampullae of Lorenzini density, and deep benthic feeding records.',
      fr: 'Cinématique de projection ultra-rapide des mâchoires et détection électrosensorielle.',
      ar: 'حركية اندفاع الفكين فائقة السرعة وكثافة حويصلات لورنزيني للتغذية في قاع الأعماق.'
    }
  },
  {
    id: 37,
    category: 'Oceans',
    visual: 'ocean',
    price: 19,
    titles: {
      en: 'Mahi-mahi pelagic sprints',
      fr: 'Sprints pélagiques de la coryphène',
      ar: 'انطلاقات سمكة الماهي ماهي السريعة'
    },
    species: {
      en: 'Mahi-mahi (Dorado)',
      fr: 'Coryphène (Mahi-mahi)',
      ar: 'سمكة الماهي ماهي (الدورادو)'
    },
    tags: {
      en: 'Current tracking / 2024',
      fr: 'Suivi des courants / 2024',
      ar: 'تتبع التيارات البحرية / 2024'
    },
    descriptions: {
      en: 'Fast growth rates, surface flotsam association, and speed logs along warm boundary currents.',
      fr: 'Croissance rapide, association aux débris flottants et vitesses en courants chauds.',
      ar: 'معدلات النمو السريع والتجمع حول الأجسام العائمة وسجلات السرعة على طول التيارات الدافئة.'
    }
  },
  {
    id: 38,
    category: 'Oceans',
    visual: 'ocean',
    price: 36,
    titles: {
      en: 'Great white shark apex circuits',
      fr: 'Circuits du grand requin blanc',
      ar: 'مسارات القرش الأبيض الكبير'
    },
    species: {
      en: 'Great white shark',
      fr: 'Grand requin blanc',
      ar: 'القرش الأبيض الكبير'
    },
    tags: {
      en: 'Acoustic array / 2025',
      fr: 'Réseau acoustique / 2025',
      ar: 'مصفوفة صوتية / 2025'
    },
    descriptions: {
      en: 'Pelagic open-ocean journeys, seal colony hunting patrols, and seasonal temperature preferences.',
      fr: 'Traversées océaniques, patrouilles de chasse près des phoques et thermorégulation.',
      ar: 'رحلات عبر المحيط المفتوح ودوريات صيد مستعمرات الفقمة وتفضيلات درجات الحرارة الموسمية.'
    }
  },
  {
    id: 39,
    category: 'Oceans',
    visual: 'ocean',
    price: 20,
    titles: {
      en: 'Flashlight fish split-second blinks',
      fr: 'Éclats lumineux du poisson-phare',
      ar: 'وميض سمكة المصباح الفوري'
    },
    species: {
      en: 'Flashlight fish (Anomalops)',
      fr: 'Poisson-phare (Anomalops)',
      ar: 'سمكة المصباح الوامضة'
    },
    tags: {
      en: 'Night diving / 2024',
      fr: 'Plongée de nuit / 2024',
      ar: 'غوص ليلي / 2024'
    },
    descriptions: {
      en: 'Sub-ocular photophore shutters, schooling synchronization in moonless nights, and zooplankton strikes.',
      fr: 'Obturateurs de photophores, synchronisation du banc et attaques de zooplancton nocturne.',
      ar: 'إغلاق وفتح الأعضاء المضيئة تحت العين والتزامن الجماعي في الليالي المظلمة وافتراس العوالق.'
    }
  },
  {
    id: 40,
    category: 'Freshwater',
    visual: 'fresh',
    price: 22,
    titles: {
      en: 'Alligator gar river fortress',
      fr: 'Lépisosté osseux : forteresse fluviale',
      ar: 'سمكة التمساح الغار الحصينة'
    },
    species: {
      en: 'Alligator gar (Atractosteus)',
      fr: 'Lépisosté osseux (Atractosteus)',
      ar: 'سمكة الغار التمساحية'
    },
    tags: {
      en: 'Floodplain study / 2023',
      fr: 'Plaine inondable / 2023',
      ar: 'دراسة السهول الفيضية / 2023'
    },
    descriptions: {
      en: 'Heavy ganoid scale armor, vascularized swim bladder air-breathing, and bayou ambush dynamics.',
      fr: 'Écailles ganoïdes protectrices, respiration aérienne et embuscades en bayous.',
      ar: 'دروع القشور العظمية الصلبة وتنفس الهواء الجوي عبر المثانة الهوائية والكمائن في المستنقعات.'
    }
  },
  {
    id: 41,
    category: 'Oceans',
    visual: 'ocean',
    price: 29,
    titles: {
      en: 'Scalloped hammerhead seamount spirals',
      fr: 'Spirales des requins-marteaux',
      ar: 'تجمعات قرش المطرقة في الجبال البحرية'
    },
    species: {
      en: 'Scalloped hammerhead',
      fr: 'Requin-marteau halicorne',
      ar: 'قرش المطرقة المقوس'
    },
    tags: {
      en: 'Geomagnetic study / 2025',
      fr: 'Étude géomagnétique / 2025',
      ar: 'دراسة المغناطيسية الأرضية / 2025'
    },
    descriptions: {
      en: 'Geomagnetic navigation along volcanic ridges, schooling thermoregulation, and night offshore squid hunting.',
      fr: 'Navigation géomagnétique sur crêtes volcaniques et chasse nocturne de calmars.',
      ar: 'الملاحة عبر خطوط المغناطيسية الأرضية حول القمم البركانية وصيد الحبار الليلي في الأعماق.'
    }
  },
  {
    id: 42,
    category: 'Oceans',
    visual: 'ocean',
    price: 25,
    titles: {
      en: 'Napoleon wrasse coral architect',
      fr: 'Labre géant : architecte des récifs',
      ar: 'سمكة نابليون المعمارية المرجانية'
    },
    species: {
      en: 'Napoleon wrasse (Cheilinus)',
      fr: 'Labre géant / Napoléon',
      ar: 'سمكة نابليون (اللبروسية)'
    },
    tags: {
      en: 'Reef health / 2024',
      fr: 'Santé récifale / 2024',
      ar: 'صحة الشعاب / 2024'
    },
    descriptions: {
      en: 'Toxic crown-of-thorns starfish predation, coral rubble excavation, and long-term home range fidelity.',
      fr: 'Prédation sur les étoiles de mer venimeuses et fidélité au domaine vital récifal.',
      ar: 'افتراس نجم البحر الشوكي السام وحفر الركام المرجاني والتمسك بمناطق المعيشة طويلة الأمد.'
    }
  },
  {
    id: 43,
    category: 'Climate',
    visual: 'climate',
    price: 31,
    titles: {
      en: 'Vampire squid oxygen minimum survival',
      fr: 'Calmar vampire et zones d’hypoxie',
      ar: 'بقاء الحبار مصاص الدماء في نقص الأكسجين'
    },
    species: {
      en: 'Vampire squid (Vampyroteuthis)',
      fr: 'Calmar vampire',
      ar: 'الحبار مصاص الدماء'
    },
    tags: {
      en: 'Hypoxia zone / 2025',
      fr: 'Zone d’hypoxie / 2025',
      ar: 'نطاق نقص الأكسجين / 2025'
    },
    descriptions: {
      en: 'Metabolic depression in ocean oxygen minimum layers, marine snow detrital feeding, and bioluminescent tips.',
      fr: 'Métabolisme réduit en couches pauvres en oxygène et alimentation par neige marine.',
      ar: 'خفض معدل الأيض في طبقات المحيط الخالية من الأكسجين والتغذي على الثلج البحري العضوي.'
    }
  },
  {
    id: 44,
    category: 'Freshwater',
    visual: 'fresh',
    price: 18,
    titles: {
      en: 'Amazon peacock bass territory wars',
      fr: 'Guerres de territoire du tucunaré',
      ar: 'معارك النفوذ لسمكة الطاووس في الأمازون'
    },
    species: {
      en: 'Peacock bass (Cichla)',
      fr: 'Tucunaré / Peacock bass',
      ar: 'سمكة الطاووس (التوكوناري)'
    },
    tags: {
      en: 'Blackwater river / 2024',
      fr: 'Rivière d’eau noire / 2024',
      ar: 'أنهار المياه السوداء / 2024'
    },
    descriptions: {
      en: 'Visual ocelli eye-spot deterrents, explosive surface hunting, and acidic blackwater pH adaptations.',
      fr: 'Ocelles visuels défensifs, attaques explosives en surface et pH des eaux noires.',
      ar: 'البقع العينية الرادعة على الذيل وهجمات الصيد السطحية المتفجرة والتكيف مع حموضة المياه السوداء.'
    }
  },
  {
    id: 45,
    category: 'Climate',
    visual: 'climate',
    price: 12,
    titles: {
      en: 'Ocean sunfish (Mola mola) surface warming',
      fr: 'Thermorégulation du poisson-lune',
      ar: 'حمام الشمس الحراري لسمكة شمس المحيط'
    },
    species: {
      en: 'Ocean sunfish (Mola mola)',
      fr: 'Poisson-lune (Mola mola)',
      ar: 'سمكة شمس المحيط (مولا مولا)'
    },
    tags: {
      en: 'Depth logger / 2025',
      fr: 'Enregistreur de profondeur / 2025',
      ar: 'مسجل الأعماق / 2025'
    },
    descriptions: {
      en: 'Vertical oscillation between icy jellyfish hunting depths and surface sun-basking thermoregulation.',
      fr: 'Alternance entre plongées glaciales à méduses et réchauffement en surface.',
      ar: 'التنقل العمودي بين أعماق صيد قناديل البحر الباردة والطفو السطحي لامتصاص حرارة الشمس.'
    }
  },
  {
    id: 46,
    category: 'Oceans',
    visual: 'ocean',
    price: 12,
    titles: {
      en: 'Chambered nautilus buoyancy hydrostatics',
      fr: 'Hydrostatique du nautile chambré',
      ar: 'فيزياء الطفو الهيدروستاتيكي لحيوان النوتيلاس'
    },
    species: {
      en: 'Chambered nautilus',
      fr: 'Nautile chambré',
      ar: 'النوتيلاس ذو الحجرات'
    },
    tags: {
      en: 'Deep trap telemetry / 2024',
      fr: 'Pièges profonds / 2024',
      ar: 'تتبع المصائد العميقة / 2024'
    },
    descriptions: {
      en: 'Siphuncle liquid evacuation, gas chamber pressure equilibrium, and vertical daily migrations in coral drop-offs.',
      fr: 'Évacuation liquide par siphon, équilibre des gaz et montées nocturnes sur tombants.',
      ar: 'تفريغ السوائل عبر الأنبوب وتوازن ضغط غازات الحجرات والهجرة الليلية على جروف الشعاب.'
    }
  },
  {
    id: 47,
    category: 'Freshwater',
    visual: 'fresh',
    price: 12,
    titles: {
      en: 'Discus fish flooded forest breeding',
      fr: 'Reproduction des discus en igapó',
      ar: 'تكاثر سمك الديسكس في غابات الإيغابو المغمورة'
    },
    species: {
      en: 'Discus fish (Symphysodon)',
      fr: 'Discus (Symphysodon)',
      ar: 'سمك الديسكس (Symphysodon)'
    },
    tags: {
      en: 'Igapó ecology / 2023',
      fr: 'Écologie d’igapó / 2023',
      ar: 'بيئة الغابات المغمورة / 2023'
    },
    descriptions: {
      en: 'Parental epidermal mucus feeding for fry, submerged root shelter choice, and wet-season spawning triggers.',
      fr: 'Nourrissage des alevins par mucus parental, abris sous racines et saison des pluies.',
      ar: 'إفراز المخاط الجلدي المغذي للصغار واختيار جذور الأشجار الغارقة ومحفزات موسم الأمطار.'
    }
  },
  {
    id: 48,
    category: 'Climate',
    visual: 'climate',
    price: 32,
    titles: {
      en: 'Basking shark plankton corridor migrations',
      fr: 'Corridors de plancton du requin pèlerin',
      ar: 'مسارات تغذية قرش التشميس على العوالق'
    },
    species: {
      en: 'Basking shark (Cetorhinus)',
      fr: 'Requin pèlerin (Cetorhinus)',
      ar: 'قرش التشميس العملاق'
    },
    tags: {
      en: 'Thermal front / 2025',
      fr: 'Front thermique / 2025',
      ar: 'الجبهات الحرارية / 2025'
    },
    descriptions: {
      en: 'Gill-raker filter feeding volumes, thermal front aggregation tracking, and transatlantic overwintering dives.',
      fr: 'Filtration par branchiospines, agrégation sur fronts thermiques et plongées hivernales.',
      ar: 'أحجام ترشيح العوالق عبر الأسنان الخيشومية وتتبع الجبهات الحرارية والغوص الشتوي العميق.'
    }
  }
];

const additionalFish = [
  ['Atlantic cod spawning grounds', 'Frayères de morue de l’Atlantique', 'مناطق تكاثر سمك القد الأطلسي', 'Atlantic cod', 'Morue de l’Atlantique', 'سمك القد الأطلسي', 'Oceans', 18, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Atlantic_cod.jpg', 'Cold-water survey / 2024', 'Reproduction, depth, and seasonal aggregation records from North Atlantic shelf waters.'],
  ['Giant grouper reef territory', 'Territoire du mérou géant', 'إقليم الهامور العملاق في الشعاب', 'Giant grouper', 'Mérou géant', 'الهامور العملاق', 'Oceans', 23, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Epinephelus_lanceolatus.jpg', 'Reef census / 2025', 'Size structure and territory observations for a long-lived reef predator.'],
  ['Humphead wrasse recovery', 'Rétablissement de la napoléon', 'تعافي سمكة نابليون', 'Humphead wrasse', 'Napoléon', 'سمكة نابليون', 'Climate', 26, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Napoleon_wrasse.jpg', 'Protected reef / 2024', 'Photo-identification and cleaning-station visits across protected coral reefs.'],
  ['Moray eel night patrols', 'Patrouilles nocturnes des murènes', 'دوريات ثعابين البحر الليلية', 'Giant moray eel', 'Murène géante', 'ثعبان البحر العملاق', 'Oceans', 16, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gymnothorax_javanicus.jpg', 'Night camera / 2023', 'Nocturnal hunting routes, den sharing, and reef temperature observations.'],
  ['Barracuda coastal ambushes', 'Embuscades côtières des barracudas', 'كمائن البراكودا الساحلية', 'Great barracuda', 'Grand barracuda', 'سمك البراكودا العظيم', 'Oceans', 20, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sphyraena_barracuda.jpg', 'Acoustic tags / 2024', 'Acceleration bursts and coordinated hunting records from tropical lagoons.'],
  ['Herring school acoustics', 'Acoustique des bancs de harengs', 'صوت أسراب الرنجة', 'Atlantic herring', 'Hareng atlantique', 'رنجة الأطلسي', 'Climate', 22, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Atlantic_herring_(Clupea_harengus).jpg', 'Echosounder / 2022–2025', 'School density, migration timing, and acoustic signatures across a warming shelf sea.'],
  ['Moonfish deep-water thermals', 'Thermiques du poisson-lune', 'التيارات الحرارية لسمكة الشمس', 'Ocean sunfish', 'Poisson-lune', 'سمكة الشمس المحيطية', 'Climate', 24, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mola_mola_in_the_Azores.jpg', 'Drift tags / 2025', 'Basking behavior and vertical movements linked to changing thermal layers.'],
  ['Oceanic manta cleaning stations', 'Stations de nettoyage des mantas océaniques', 'محطات تنظيف مانتا المحيط', 'Oceanic manta ray', 'Raie manta océanique', 'شيطان البحر المحيطي', 'Oceans', 29, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Manta_birostris-Thailand.jpg', 'Photo ID / 2021–2025', 'Individual markings, cleaning visits, and plankton-rich current observations.'],
  ['Hammerhead shark school geometry', 'Géométrie des bancs de requins-marteaux', 'هندسة أسراب أسماك المطرقة', 'Scalloped hammerhead shark', 'Requin-marteau halicorne', 'قرش المطرقة المنحني', 'Climate', 30, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Scalloped_hammerhead_shark.jpg', 'Diver survey / 2024', 'School formation, water temperature, and migration corridors around oceanic islands.'],
  ['Nudibranch reef color archive', 'Archive chromatique des nudibranches', 'أرشيف ألوان البزاقات البحرية', 'Nudibranch', 'Nudibranche', 'البزاقة البحرية', 'Oceans', 13, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Chromodoris_willani.jpg', 'Macro transect / 2025', 'Color patterns, prey associations, and microhabitat records from shallow reefs.'],
  ['Tropical seagrass pipefish census', 'Recensement des syngnathes des herbiers', 'إحصاء أسماك أنابيب الأعشاب البحرية', 'Pipefish', 'Syngnathe', 'سمكة أنبوبية', 'Oceans', 15, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Doryrhamphus_dactyliophorus.jpg', 'Seagrass survey / 2024', 'Camouflage, pair bonds, and juvenile abundance in coastal seagrass beds.'],
  ['Deep-sea viperfish migrations', 'Migrations du poisson-vipère abyssal', 'هجرات سمكة الأفعى في الأعماق', 'Viperfish', 'Poisson-vipère', 'سمكة الأفعى البحرية', 'Oceans', 27, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Chauliodus_sloani.jpg', 'Deep trawl / 2024', 'Vertical migration and bioluminescent signaling across the midnight zone.'],
  ['European eel river passage', 'Passage de l’anguille européenne', 'عبور ثعبان البحر الأوروبي للأنهار', 'European eel', 'Anguille européenne', 'ثعبان البحر الأوروبي', 'Freshwater', 25, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Anguilla_anguilla.jpg', 'River telemetry / 2023–2025', 'Passage timing, barriers, and silver eel movement toward the open Atlantic.'],
  ['Rainbow trout stream resilience', 'Résilience de la truite arc-en-ciel', 'مرونة سمك السلمون المرقط في الجداول', 'Rainbow trout', 'Truite arc-en-ciel', 'السلمون المرقط قوس قزح', 'Freshwater', 17, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rainbow_trout.png', 'Stream survey / 2024', 'Growth, dissolved oxygen, and spawning habitat in mountain watersheds.'],
  ['Piranha floodplain dynamics', 'Dynamique des piranhas des plaines inondables', 'ديناميكيات البيرانا في السهول الفيضية', 'Red-bellied piranha', 'Piranha à ventre rouge', 'سمكة البيرانا حمراء البطن', 'Freshwater', 19, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pygocentrus_nattereri.jpg', 'Flood pulse / 2023', 'Flood-season movements, shoaling behavior, and dissolved oxygen in Amazon backwaters.'],
  ['Mekong giant catfish routes', 'Routes du poisson-chat géant du Mékong', 'مسارات سمك السلور العملاق في الميكونغ', 'Mekong giant catfish', 'Poisson-chat géant du Mékong', 'سمك السلور العملاق في الميكونغ', 'Freshwater', 28, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pangasianodon_gigas.jpg', 'Basin telemetry / 2024', 'Migration corridors and spawning habitat for one of the world’s largest river fish.'],
  ['African lungfish dry-season survival', 'Survie du protoptère en saison sèche', 'بقاء سمكة الرئة الأفريقية في موسم الجفاف', 'African lungfish', 'Protoptère africain', 'سمكة الرئة الأفريقية', 'Freshwater', 21, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Protopterus_aethiopicus.jpg', 'Wetland survey / 2022–2024', 'Aestivation burrows, rainfall cycles, and recovery after seasonal wetlands refill.'],
  ['Lake Malawi cichlid diversity', 'Diversité des cichlidés du lac Malawi', 'تنوع أسماك السيكليد في بحيرة ملاوي', 'Lake Malawi cichlids', 'Cichlidés du lac Malawi', 'أسماك السيكليد في بحيرة ملاوي', 'Freshwater', 23, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maylandia_zebra.jpg', 'Diversity survey / 2025', 'Color morphs, rocky habitat niches, and community turnover along the lake shore.'],
  ['Amazon archerfish aim accuracy', 'Précision de tir du poisson-archer', 'دقة تصويب سمكة الرامي', 'Archerfish', 'Poisson-archer', 'سمكة الرامي', 'Freshwater', 14, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Toxotes_jaculatrix.jpg', 'Behavior study / 2024', 'Surface aiming angles, prey distance, and learning performance in mangrove streams.'],
  ['Guppy urban stream adaptation', 'Adaptation des guppys aux ruisseaux urbains', 'تكيف أسماك الغوبي في الجداول الحضرية', 'Guppy', 'Guppy', 'سمكة الغوبي', 'Freshwater', 11, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Poecilia_reticulata_male.jpg', 'Urban ecology / 2025', 'Color variation, predator pressure, and water quality across urban stream networks.'],
  ['Antarctic icefish oxygen limits', 'Limites d’oxygène des poissons des glaces', 'حدود الأكسجين لأسماك الجليد القطبية', 'Antarctic icefish', 'Poisson des glaces antarctique', 'سمكة الجليد القطبية', 'Climate', 31, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Chaenocephalus_aceratus.jpg', 'Polar transect / 2024', 'Heart physiology, dissolved oxygen, and distribution shifts in warming Antarctic waters.'],
  ['Yellowfin tuna feeding fronts', 'Zones d’alimentation du thon albacore', 'جبهات تغذية التونة صفراء الزعنفة', 'Yellowfin tuna', 'Thon albacore', 'التونة صفراء الزعنفة', 'Climate', 26, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Yellowfin_tuna.jpg', 'Satellite tags / 2020–2025', 'Feeding depth and movement around productive ocean temperature fronts.'],
  ['Sardine climate pulse', 'Pouls climatique des sardines', 'النبض المناخي لأسماك السردين', 'Pacific sardine', 'Sardine du Pacifique', 'سردين المحيط الهادئ', 'Climate', 18, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sardinops_sagax.jpg', 'Time series / 1985–2025', 'Recruitment, upwelling strength, and school biomass across four decades.'],
  ['Black marlin ocean crossings', 'Traversées océaniques du makaire noir', 'عبور سمك المارلن الأسود للمحيطات', 'Black marlin', 'Makaire noir', 'المارلن الأسود', 'Climate', 33, 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Black_marlin.jpg', 'Satellite tags / 2019–2025', 'Long-distance routes, diving profiles, and thermal habitat preferences.']
].forEach((fish, index) => {
  const id = 49 + index;
  datasets.push({
    id,
    category: fish[6],
    visual: fish[6] === 'Freshwater' ? 'fresh' : fish[6] === 'Climate' ? 'climate' : 'ocean',
    price: fish[7],
    titles: { en: fish[0], fr: fish[1], ar: fish[2] },
    species: { en: fish[3], fr: fish[4], ar: fish[5] },
    tags: { en: fish[9], fr: 'Étude de terrain / 2024', ar: 'دراسة ميدانية / 2024' },
    descriptions: {
      en: fish[10],
      fr: `Données de terrain sur ${fish[4]}, couvrant son comportement, son habitat et les variations saisonnières des milieux aquatiques.`,
      ar: `بيانات ميدانية عن ${fish[5]} تشمل السلوك والموطن والتغيرات الموسمية في البيئات المائية.`
    }
  });
  if (id === 49) {
    datasets[datasets.length - 1].tags.fr = 'Étude des eaux froides / 2024';
    datasets[datasets.length - 1].tags.ar = 'مسح المياه الباردة / 2024';
    datasets[datasets.length - 1].descriptions.fr = 'Données sur la reproduction, la profondeur et les rassemblements saisonniers dans les eaux du plateau nord-atlantique.';
    datasets[datasets.length - 1].descriptions.ar = 'بيانات عن التكاثر والأعماق والتجمعات الموسمية في مياه جرف شمال الأطلسي.';
  }
});

datasets.forEach((dataset, index) => {
  const locations = dataset.category === 'Freshwater'
    ? ['Amazon Basin', 'Danube Delta', 'Mekong Basin', 'Lake Malawi', 'Pacific Northwest']
    : dataset.category === 'Climate'
      ? ['Mediterranean Sea', 'North Atlantic', 'Southern Ocean', 'Coral Triangle', 'Pacific Ocean']
      : ['Great Barrier Reef', 'Red Sea', 'North Atlantic', 'Coral Triangle', 'Pacific Ocean'];
  const sourceTypes = ['Research survey', 'Acoustic monitoring', 'Photo identification', 'Satellite telemetry'];
  dataset.scientificName = dataset.species.en.match(/\(([^)]+)\)/)?.[1] || `${dataset.species.en.replace(/[^A-Za-z ]/g, '').trim()} sp.`;
  dataset.location = locations[index % locations.length];
  dataset.collectedDate = `${2022 + (index % 5)}-${String((index % 9) + 1).padStart(2, '0')}-15`;
  dataset.waterType = dataset.category === 'Freshwater' ? 'Freshwater' : 'Saltwater';
  dataset.source = sourceTypes[index % sourceTypes.length];
  dataset.observations = 420 + ((dataset.id * 137) % 11800);
  dataset.datasetType = index % 3 === 0 ? 'Time series' : index % 3 === 1 ? 'Field survey' : 'Species archive';
  dataset.license = dataset.id % 4 === 0 ? 'CC BY-NC 4.0' : 'CC BY 4.0';
  dataset.premium = dataset.price >= 25;
  dataset.trend = Array.from({ length: 7 }, (_, point) => 28 + ((dataset.id * 7 + point * 13) % 54));
  dataset.sizes = [18, 24, 31, 38, 46].map(size => size + (dataset.id % 7));
  dataset.temperatures = dataset.category === 'Freshwater' ? [19, 20, 21, 22, 23] : [18, 20, 22, 23, 24];
  dataset.depth = 12 + ((dataset.id * 17) % 480);
  dataset.weight = null;
  dataset.oxygen = (5.2 + ((dataset.id * 3) % 38) / 10).toFixed(1);
  dataset.salinity = dataset.category === 'Freshwater' ? 0 : 31 + (dataset.id % 7);
  dataset.qualityScore = 82 + (dataset.id % 17);
});

const expansionSpecies = [
  ['Atlantic bluefin tuna', 'Thon rouge de l’Atlantique', 'التونة زرقاء الزعنفة الأطلسية', 'Mediterranean Sea', 'Oceans', 121],
  ['European anchovy', 'Anchois européen', 'الأنشوفة الأوروبية', 'Mediterranean Sea', 'Oceans', 122],
  ['Atlantic mackerel', 'Maquereau de l’Atlantique', 'الإسقمري الأطلسي', 'North Atlantic', 'Oceans', 123],
  ['Red snapper', 'Vivaneau rouge', 'النهاش الأحمر', 'Gulf of Mexico', 'Oceans', 10],
  ['Mahi-mahi', 'Coryphène commune', 'سمكة ماهي ماهي', 'Pacific Ocean', 'Oceans', 37],
  ['Pacific halibut', 'Flétan du Pacifique', 'الهلبوت الباسيفيكي', 'North Pacific', 'Oceans', 7],
  ['Sardine', 'Sardine', 'السردين', 'North Atlantic', 'Climate', 71],
  ['Atlantic salmon', 'Saumon atlantique', 'سلمون الأطلسي', 'North Atlantic rivers', 'Freshwater', 8],
  ['Nile tilapia', 'Tilapia du Nil', 'البلطي النيلي', 'Lake Victoria', 'Freshwater', 44],
  ['Common carp', 'Carpe commune', 'الشبوط الشائع', 'Danube Basin', 'Freshwater', 11],
  ['Zebrafish', 'Poisson-zèbre', 'سمك الزرد', 'Ganges Basin', 'Freshwater', 23],
  ['Paddlefish', 'Spatulaire', 'سمك المجداف', 'Mississippi Basin', 'Freshwater', 40],
  ['Blue catfish', 'Poisson-chat bleu', 'السلور الأزرق', 'Mississippi Basin', 'Freshwater', 11],
  ['Lake trout', 'Touladi', 'تراوت البحيرة', 'Great Lakes', 'Freshwater', 8],
  ['Giant trevally', 'Carangue ignobilis', 'السمك الملكي العملاق', 'Indian Ocean', 'Oceans', 42],
  ['Oceanic whitetip shark', 'Requin océanique à pointes blanches', 'قرش المحيط أبيض الطرف', 'Indian Ocean', 'Climate', 38],
  ['European seabass', 'Bar européen', 'القاروص الأوروبي', 'Mediterranean Sea', 'Oceans', 124],
  ['European sardine', 'Sardine européenne', 'السردين الأوروبي', 'Mediterranean Sea', 'Oceans', 125],
  ['Atlantic horse mackerel', 'Chinchard commun', 'الإسقمري الحصاني الأطلسي', 'Mediterranean Sea', 'Oceans', 126],
  ['Gilthead seabream', 'Dorade royale', 'الدنيس الملكي', 'Mediterranean Sea', 'Oceans', 127],
  ['Common dentex', 'Denté commun', 'سمك الدنيس الشائع', 'Mediterranean Sea', 'Oceans', 128],
  ['Red mullet', 'Rouget de vase', 'البوري الأحمر', 'Mediterranean Sea', 'Oceans', 129],
  ['European hake', 'Merlu européen', 'النازلي الأوروبي', 'Mediterranean Sea', 'Oceans', 130],
  ['Common pandora', 'Pageot commun', 'سمك الباندورا الشائع', 'Mediterranean Sea', 'Oceans', 131],
  ['Mediterranean grouper', 'Mérou brun', 'الهامور المتوسطي', 'Mediterranean Sea', 'Oceans', 132],
  ['John Dory', 'Saint-Pierre', 'سمك القديس بطرس', 'Mediterranean Sea', 'Oceans', 133],
  ['Mediterranean moray', 'Murène commune', 'الموراي المتوسطي', 'Mediterranean Sea', 'Oceans', 134],
  ['Common stingray', 'Pastenague commune', 'اللخمة الشائعة', 'Mediterranean Sea', 'Oceans', 135],
  ['Tiger shark', 'Requin tigre', 'قرش النمر', 'Indian Ocean', 'Climate', 136],
  ['Mako shark', 'Requin mako', 'قرش الماكو', 'Atlantic Ocean', 'Climate', 137]
];

const expeditionNames = ['Blue Current', 'Tidal Atlas', 'Deep Signal', 'Reef Window', 'River Pulse', 'Open Water', 'Coastal Ledger', 'Moonlit Transect', 'Wild Basin', 'Thermal Front'];
const expansionLocations = ['Mediterranean Sea', 'Gulf of Gabes', 'Aegean Sea', 'North Atlantic Shelf', 'Coral Sea', 'Great Australian Bight', 'Red Sea', 'Gulf of Aden', 'Arabian Sea', 'Bay of Bengal', 'Andaman Sea', 'South China Sea', 'Java Sea', 'Banda Sea', 'Tasman Sea', 'Ross Sea', 'Weddell Sea', 'Caribbean Sea', 'Gulf of California', 'Bering Sea', 'Amazon Basin', 'Orinoco Basin', 'Mekong Basin', 'Danube Delta', 'Nile Delta', 'Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Mississippi Basin', 'Murray-Darling Basin', 'Congo Basin', 'Yangtze Basin'];
const expansionSources = ['Research survey', 'Acoustic monitoring', 'Photo identification', 'Satellite telemetry', 'eDNA sampling', 'Fisher logbook', 'Autonomous buoy'];
const expansionHabitats = ['coral reef', 'seagrass meadow', 'coastal shelf', 'open ocean', 'mangrove nursery', 'river channel', 'freshwater lake', 'deep sea', 'estuary', 'kelp forest'];
const scientificNames = {
  'Atlantic bluefin tuna': 'Thunnus thynnus',
  'European seabass': 'Dicentrarchus labrax',
  'European anchovy': 'Engraulis encrasicolus',
  'European sardine': 'Sardina pilchardus',
  'Atlantic mackerel': 'Scomber scombrus',
  'Atlantic horse mackerel': 'Trachurus trachurus',
  'Gilthead seabream': 'Sparus aurata',
  'Common dentex': 'Dentex dentex',
  'Red mullet': 'Mullus barbatus',
  'European hake': 'Merluccius merluccius',
  'Common pandora': 'Pagellus erythrinus',
  'Mediterranean grouper': 'Epinephelus marginatus',
  'John Dory': 'Zeus faber',
  'Mediterranean moray': 'Muraena helena',
  'Common stingray': 'Dasyatis pastinaca',
  'Tiger shark': 'Galeocerdo cuvier',
  'Mako shark': 'Isurus oxyrinchus'
};

for (let id = datasets.length + 1; id <= 135; id++) {
  const fish = expansionSpecies[(id - 73) % expansionSpecies.length];
  const sequence = id - 72;
  const year = 2018 + (sequence % 9);
  const expedition = expeditionNames[(sequence - 1) % expeditionNames.length];
  const uniqueLocation = expansionLocations[(sequence - 1) % expansionLocations.length];
  const habitat = expansionHabitats[(sequence - 1) % expansionHabitats.length];
  const source = expansionSources[(sequence - 1) % expansionSources.length];
  const uniqueObservations = 500 + sequence * 17;
  const dataset = {
    id,
    category: fish[4],
    visual: fish[4] === 'Freshwater' ? 'fresh' : fish[4] === 'Climate' ? 'climate' : 'ocean',
    price: id % 5 === 0 ? 5 : 8 + (id % 26),
    photoId: fish[5],
    titles: {
      en: `${expedition} ${fish[0]}`,
      fr: `Expédition ${expedition} : ${fish[1]}`,
      ar: `رحلة ${expedition}: ${fish[2]}`
    },
    species: { en: fish[0], fr: fish[1], ar: fish[2] },
    tags: {
      en: `${source} / ${year}`,
      fr: `${source} / ${year}`,
      ar: `${source} / ${year}`
    },
    descriptions: {
      en: `${uniqueObservations} observations of ${fish[0]} in the ${habitat} at ${uniqueLocation}, documenting a distinct ${expedition.toLowerCase()} field run.`,
      fr: `${uniqueObservations} observations de ${fish[1]} dans ${habitat} à ${uniqueLocation}, issues d’une campagne ${expedition.toLowerCase()} distincte.`,
      ar: `${uniqueObservations} ملاحظة عن ${fish[2]} في ${habitat} بموقع ${uniqueLocation} ضمن رحلة ${expedition} الميدانية.`
    },
    scientificName: scientificNames[fish[0]] || `${fish[0].replace(/[^A-Za-z ]/g, '').trim()} sp.`,
    location: uniqueLocation,
    collectedDate: `${year}-${String(((sequence * 7) % 12) + 1).padStart(2, '0')}-${String(((sequence * 11) % 27) + 1).padStart(2, '0')}`,
    waterType: fish[4] === 'Freshwater' ? 'Freshwater' : 'Saltwater',
    source,
    observations: uniqueObservations,
    datasetType: ['Field survey', 'Time series', 'Species archive', 'Environmental scan'][sequence % 4],
    license: id % 4 === 0 ? 'CC BY-NC 4.0' : 'CC BY 4.0',
    premium: id % 5 !== 0,
    trend: Array.from({ length: 7 }, (_, point) => 20 + ((sequence * 11 + point * 17) % 64)),
    sizes: [18, 24, 31, 38, 46].map(size => size + (sequence % 19)),
    temperatures: fish[4] === 'Freshwater' ? [19, 20, 21, 22, 23] : [18, 20, 22, 23, 24]
  };
  dataset.depth = 12 + ((sequence * 17) % 480);
  dataset.weight = null;
  dataset.oxygen = (5.2 + ((sequence * 3) % 38) / 10).toFixed(1);
  dataset.salinity = fish[4] === 'Freshwater' ? 0 : 31 + (sequence % 7);
  dataset.qualityScore = 82 + (sequence % 17);
  datasets.push(dataset);
}

function getDatasetTitle(dataset) {
  const lang = getCurrentLanguage();
  return dataset.titles?.[lang] || dataset.titles?.en || dataset.title || '';
}

function getDatasetDescription(dataset) {
  const lang = getCurrentLanguage();
  return dataset.descriptions?.[lang] || dataset.descriptions?.en || dataset.description || '';
}

function getDatasetSpecies(dataset) {
  const lang = getCurrentLanguage();
  return dataset.species?.[lang] || dataset.species?.en || dataset.species || 'Fish';
}

function getDatasetTag(dataset) {
  const lang = getCurrentLanguage();
  return dataset.tags?.[lang] || dataset.tags?.en || dataset.tag || '';
}

function getDatasetDetails(dataset) {
  const lang = getCurrentLanguage();
  const labels = lang === 'ar' ? {location: 'الموقع', date: 'تاريخ الجمع', water: 'نوع المياه', source: 'المصدر', observations: 'الملاحظات'} : lang === 'fr' ? {location: 'Lieu', date: 'Date de collecte', water: "Type d'eau", source: 'Source', observations: 'Observations'} : {location: 'Location', date: 'Collected', water: 'Water type', source: 'Source', observations: 'Observations'};
  return labels;
}

function renderTrend(dataset) {
  return dataset.trend.map(value => `<span style="height:${value}%" title="${value}"></span>`).join('');
}

function renderAnalyticsBars(values, suffix = '') {
  const maximum = Math.max(...values, 1);
  return values.map((value, index) => `<span style="height:${Math.max(8, (value / maximum) * 100)}%" title="${value}${suffix}"><i>${index + 1}</i></span>`).join('');
}

function openDatasetDetails(datasetId) {
  const dataset = datasets.find(item => item.id === datasetId);
  if (!dataset) return;
  const labels = getDatasetDetails(dataset);
  const modal = document.createElement('div');
  modal.className = 'dataset-modal-backdrop';
  modal.id = 'datasetModal';
  const title = getDatasetTitle(dataset);
  const species = getDatasetSpecies(dataset);
  const observationStart = dataset.collectedDate?.slice(0, 4) || '2019';
  const observationEnd = Math.max(Number(observationStart), new Date().getFullYear());
  const averageSize = Math.round(dataset.sizes.reduce((sum, value) => sum + value, 0) / dataset.sizes.length);
  modal.innerHTML = `<section class="dataset-modal" role="dialog" aria-modal="true" aria-labelledby="datasetModalTitle">
    <button class="dataset-modal-close" type="button" aria-label="Close">×</button>
    <div class="dataset-modal-head"><div><p class="eyebrow">DATASET EXPLORER / DS-${String(dataset.id).padStart(3, '0')}</p><h2 id="datasetModalTitle">${escapeHtml(title)}</h2><p class="scientific-name">${escapeHtml(species)} / <em>${escapeHtml(dataset.scientificName)}</em></p><div class="explorer-summary"><strong>${dataset.observations.toLocaleString()} observations</strong><span>${observationStart}–${observationEnd}</span><span>${escapeHtml(dataset.location)}</span><b>Verified ✓</b></div></div><span class="access-badge ${dataset.premium ? 'premium' : 'free'}">${dataset.premium ? 'PREMIUM' : 'FREE DATA'}</span></div>
    <div class="dataset-facts"><span><b>${labels.location}</b>${escapeHtml(dataset.location)}</span><span><b>${labels.date}</b>${dataset.collectedDate}</span><span><b>${labels.water}</b>${dataset.waterType}</span><span><b>${labels.source}</b>${dataset.source}</span><span><b>${labels.observations}</b>${dataset.observations.toLocaleString()}</span><span><b>${t('detail_license')}</b>${dataset.license}</span></div>
    <div class="explorer-analytics"><article><h3>Observations over time</h3><div class="analytics-chart">${renderAnalyticsBars(dataset.trend)}</div><small>7-year signal</small></article><article><h3>Temperature vs species</h3><div class="analytics-chart warm-chart">${renderAnalyticsBars(dataset.temperatures, ' °C')}</div><small>°C by sample period</small></article><article><h3>Depth distribution</h3><div class="analytics-chart depth-chart">${renderAnalyticsBars([dataset.depth * .65, dataset.depth * .85, dataset.depth, dataset.depth * 1.12, dataset.depth * .72], ' m')}</div><small>meters below surface</small></article><article><h3>Geographic distribution</h3><div class="geo-plot"><span style="left:${20 + dataset.id % 50}%;top:${20 + dataset.id % 42}%"></span><span style="left:${35 + dataset.id % 38}%;top:${42 + dataset.id % 35}%"></span><span style="left:${62 + dataset.id % 24}%;top:${25 + dataset.id % 55}%"></span></div><small>${escapeHtml(dataset.location)} observation cluster</small></article><article><h3>Species abundance</h3><div class="analytics-chart abundance-chart">${renderAnalyticsBars([dataset.observations * .32, dataset.observations * .58, dataset.observations * .76, dataset.observations, dataset.observations * .67])}</div><small>${dataset.observations.toLocaleString()} total records</small></article><article><h3>Seasonal activity</h3><div class="analytics-chart season-chart">${renderAnalyticsBars([dataset.trend[0], dataset.trend[2], dataset.trend[4], dataset.trend[6]], '%')}</div><small>Winter · Spring · Summer · Autumn</small></article></div>
    <div class="dataset-preview"><h3>${t('detail_preview')}</h3><table><tbody><tr><th>date</th><th>species</th><th>size</th><th>temp</th></tr><tr><td>${dataset.collectedDate}</td><td>${escapeHtml(species)}</td><td>${averageSize} cm</td><td>${dataset.temperatures[2]} °C</td></tr><tr><td>2025-04-18</td><td>${escapeHtml(species)}</td><td>${dataset.sizes[2]} cm</td><td>${dataset.temperatures[3]} °C</td></tr></tbody></table></div>
    <div class="dataset-modal-actions"><button class="primary-link detail-download" type="button">${t('detail_download')}</button><button class="detail-live-download" type="button">Load verified web data</button><a href="#intelligence" class="text-link detail-map-link">${t('detail_map')} ↗</a></div>
    <div class="live-data-results" aria-live="polite"></div>
  </section>`;
  document.body.appendChild(modal);
  modal.querySelector('.dataset-modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', event => { if (event.target === modal) modal.remove(); });
  modal.querySelector('.detail-download').addEventListener('click', () => { modal.remove(); openCheckout(datasetId); });
  modal.querySelector('.detail-live-download').addEventListener('click', () => loadGBIFDataset(dataset, modal.querySelector('.live-data-results')));
  modal.querySelector('.detail-map-link').addEventListener('click', () => { modal.remove(); renderInsight(dataset); });
}

function renderInsight(dataset) {
  const panel = $('#insightPanel');
  if (!panel) return;
  const averageSize = Math.round(dataset.sizes.reduce((sum, value) => sum + value, 0) / dataset.sizes.length);
  panel.innerHTML = `<p class="eyebrow">DS-${String(dataset.id).padStart(3, '0')} / ${escapeHtml(dataset.location)}</p><h3>${escapeHtml(getDatasetSpecies(dataset))}</h3><p>${escapeHtml(getDatasetDescription(dataset))}</p><button class="map-live-button" type="button" data-map-live-id="${dataset.id}">${t('map_search')}</button><div class="analytics-grid"><span><b>${t('metric_observations')}</b>${dataset.observations.toLocaleString()}</span><span><b>${t('metric_size')}</b>${averageSize} cm</span><span><b>${t('metric_weight')}</b>${t('metric_live_data')}</span><span><b>${t('metric_depth')}</b>${dataset.depth} m</span><span><b>${t('metric_temperature')}</b>${dataset.temperatures[2]} °C</span><span><b>${t('metric_quality')}</b>${dataset.qualityScore}%</span></div><h4>${t('metric_timeline')}</h4><div class="mini-bars">${renderTrend(dataset)}</div><div class="map-live-results" aria-live="polite"></div>`;
  panel.querySelector('[data-map-live-id]')?.addEventListener('click', event => loadMapMeasurements(dataset, event.currentTarget));
  document.querySelectorAll('.map-point').forEach(point => point.classList.toggle('selected', Number(point.dataset.id) === dataset.id));
}

function averageMeasured(records, key, digits = 1) {
  const values = records.map(record => Number(record[key])).filter(value => Number.isFinite(value));
  if (!values.length) return 'Not available';
  return `${(values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(digits)}`;
}

async function loadMapMeasurements(dataset, button) {
  const panel = $('#insightPanel');
  const liveResults = panel?.querySelector('.map-live-results');
  button.disabled = true;
  button.textContent = t('map_searching');
  const liveData = await loadGBIFDataset(dataset, liveResults);
  button.disabled = false;
  button.textContent = t('map_refresh');
  if (!liveData?.records?.length) return;
  const realRecords = liveData.records;
  const realWeight = averageMeasured(realRecords, 'weightKg');
  const realLength = averageMeasured(realRecords, 'lengthCm');
  const realDepth = averageMeasured(realRecords, 'depthMeters');
  const realTemperature = averageMeasured(realRecords, 'temperatureCelsius');
  if (panel) {
    panel.querySelector('.analytics-grid').innerHTML = `<span><b>Real observations</b>${realRecords.length}</span><span><b>Average size</b>${realLength} ${realLength === 'Not available' ? '' : 'cm'}</span><span><b>Average weight</b>${realWeight} ${realWeight === 'Not available' ? '' : 'kg'}</span><span><b>Average depth</b>${realDepth} ${realDepth === 'Not available' ? '' : 'm'}</span><span><b>Average temperature</b>${realTemperature} ${realTemperature === 'Not available' ? '' : '°C'}</span><span><b>Source</b>GBIF verified</span>`;
  }
}

function renderObservationMap() {
  const map = $('#observationMap');
  if (!map || map.dataset.ready) return;
  map.dataset.ready = 'true';
  ['mapRegionFilter', 'mapSpeciesFilter', 'mapYearFilter'].forEach(id => $('#' + id)?.addEventListener('change', updateObservationMap));
  const regions = [...new Set(datasets.map(dataset => dataset.location))].sort();
  const species = [...new Set(datasets.map(dataset => dataset.species.en))].sort();
  const years = [...new Set(datasets.map(dataset => dataset.collectedDate.slice(0, 4)))].sort().reverse();
  regions.forEach(value => $('#mapRegionFilter')?.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`));
  species.forEach(value => $('#mapSpeciesFilter')?.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`));
  years.forEach(value => $('#mapYearFilter')?.insertAdjacentHTML('beforeend', `<option value="${value}">${value}</option>`));
  updateObservationMap();
}

function updateObservationMap() {
  const map = $('#observationMap');
  if (!map) return;
  const region = $('#mapRegionFilter')?.value || '';
  const species = $('#mapSpeciesFilter')?.value || '';
  const year = $('#mapYearFilter')?.value || '';
  const visible = datasets.filter(dataset => (!region || dataset.location === region) && (!species || dataset.species.en === species) && (!year || dataset.collectedDate.startsWith(year)));
  const limited = visible.slice(0, 9);
  const oceanPositions = [
    { left: 22, top: 30 }, { left: 30, top: 34 }, { left: 40, top: 28 },
    { left: 46, top: 41 }, { left: 58, top: 36 }, { left: 65, top: 52 },
    { left: 72, top: 62 }, { left: 52, top: 64 }, { left: 34, top: 58 }
  ];
  const lang = getCurrentLanguage();

  map.querySelectorAll('.map-point').forEach(point => point.remove());

  limited.forEach((dataset, index) => {
    const point = document.createElement('button');
    point.className = 'map-point';
    point.dataset.id = dataset.id;

    const position = oceanPositions[index % oceanPositions.length];
    const size = 11 + (index % 3) * 2;
    const titleEn = dataset.titles?.en || getDatasetSpecies(dataset);
    const titleFr = dataset.titles?.fr || titleEn;
    const titleAr = dataset.titles?.ar || titleEn;
    const currentTitle = dataset.titles?.[lang] || dataset.titles?.en || titleEn;

    point.style.left = `${position.left}%`;
    point.style.top = `${position.top}%`;
    point.style.width = `${size}px`;
    point.style.height = `${size}px`;
    point.style.zIndex = '3';
    point.setAttribute('aria-label', `${currentTitle} / ${titleEn} / ${titleFr} / ${titleAr}`);
    point.title = `${titleEn} / ${titleFr} / ${titleAr}`;
    point.dataset.title = currentTitle;
    point.addEventListener('click', () => renderInsight(dataset));
    map.appendChild(point);
  });
}

/* =========================================================
  3. FISH PHOTOS (72 HIGH-RES COMMONS IMAGES)
  ========================================================= */


const photoUrls = {
  1: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coral_reef_at_palmyra.jpg',
  2: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_gigas.jpg',
  3: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coral_Reef_Bleaching.jpg',
  4: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Melanocetus_johnsonii_by_NOAA.jpg',
  5: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_close-up.jpg',
  6: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/CORAL_4_(34738942045).jpg',
  7: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Monterey_Bay_Aquarium_Kelp_Forest_exhibit_11.jpg',
  8: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sockeye_salmon,_Washington_(53906233586).jpg',
  9: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/School_of_small_fish_above_black_coral.jpg',
  10: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mangrove_Jack_Taiwan.jpg',
  11: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Silurus_glanis_02.jpg',
  12: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Yellowfin_tuna_nurp.jpg',
  13: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Common_clownfish.jpg',
  14: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Blue_tang_(Paracanthurus_hepatus)_01.jpg',
  15: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/White_shark.jpg',
  16: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hippocampus_kuda.jpg',
  17: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/A_Flying_Manta_ray.jpg',
  18: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pulpo_(Octopus_vulgaris),_isla_de_Mouro,_Santander,_Espa%C3%B1a,_2019-08-14,_DD_32.jpg',
  19: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Aptenodytes_patagonicus_-Moltke_Harbour%2C_South_Georgia%2C_British_Overseas_Territories%2C_UK_-seven-8.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  20: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Golden_mahseer_(Tor_putitora)_Babai_River.jpg',
  21: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Electrophorus_electricus.jpg',
  22: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmon_leaping_at_Willamette_Falls.jpg',
  23: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Male_Betta_-34245661920.jpg',
  24: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sympterichthys_politus.jpg',
  25: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Whale_Shark_(Rhincodon_typus).jpg',
  26: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vliegende_vis_(Exocoetidae).jpg',
  27: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Photostomias.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  28: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dogface_puffer_(colored).jpg',
  29: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Latimeria_chalumnae01.jpg',
  30: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/JF_avec_espadon.jpg',
  31: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Huso_huso,_Kazan_(2024-04-05)_01.jpg',
  32: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Enteroctopus_dofleini.jpg',
  33: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pterois_volitans_-_Wilhelma_01.jpg',
  34: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phycodurus_eques_P2023161.JPG',
  35: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dissostichus_mawsoni.jpg',
  36: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Goblin_shark_(Mitsukurina_owstoni).jpg',
  37: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Coryphaena_hippurus.png',
  38: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/White_shark.jpg',
  39: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Velvet_Belly_Lanternshark.jpg',
  40: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Atractosteus_spatula.jpg',
  41: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sphyrna_lewini.jpg',
  42: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Napoleon_wrasse_%28Cheilinus_undulatus%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
  43: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Vampyroteuthis_infernalis.jpg',
  44: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Cichla_ocellaris.jpg',
  45: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mola_mola.jpg',
  46: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nautilus_pompilius.jpg',
  47: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Symphysodon%20discus1.jpg',
  48: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Basking_Shark.jpg',
  49: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Atlantic_cod.jpg',
  50: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Epinephelus_lanceolatus.jpg',
  51: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sphyrna_lewini.jpg',
  52: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gymnothorax_javanicus.jpg',
  53: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sphyraena_barracuda.jpg',
  54: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Atlantic_cod.jpg',
  55: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mola_mola.jpg',
  56: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Manta_birostris-Thailand.jpg',
  57: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sphyrna_lewini.jpg',
  58: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Chromodoris_willani.jpg',
  59: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Phycodurus_eques_P2023161.JPG',
  60: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Chauliodus_sloani.jpg',
  61: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Anguilla_anguilla.jpg',
  62: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rainbow_trout.png',
  63: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pygocentrus_nattereri.jpg',
  64: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Arapaima_gigas.jpg',
  65: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Protopterus_aethiopicus.jpg',
  66: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Maylandia_zebra.jpg',
  67: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Toxotes_jaculatrix.jpg',
  68: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rainbow_trout.png',
  69: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Chaenocephalus_aceratus.jpg',
  70: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Yellowfin_tuna.jpg',
  71: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sardinops_sagax.jpg',
  72: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Basking_Shark.jpg',
  121: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Thunnus_thynnus.jpg',
  122: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Engraulis_encrasicolus.jpg',
  123: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Scomber_scombrus.jpg',
  124: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dicentrarchus_labrax.jpg',
  125: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sardina_pilchardus.jpg',
  126: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Trachurus_trachurus.jpg',
  127: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sparus_aurata.jpg',
  128: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dentex_dentex.jpg',
  129: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mullus_barbatus_181115494.jpg',
  130: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Merluccius_merluccius.jpg',
  131: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pagellus_erythrinus.jpg',
  132: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Epinephelus_marginatus.jpg',
  133: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Zeus_faber.jpg',
  134: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Muraena_helena.jpg',
  135: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dasyatis_pastinaca.jpg',
  136: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tigershark3.jpg',
  137: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Isurus_oxyrinchus.jpg'
};

function getDatasetPhotoUrl(dataset) {
  return photoUrls[dataset.photoId || dataset.id] || photoUrls[((dataset.id - 1) % 48) + 1] || null;
}
/* =========================================================
   4. PROMO / REDEEM CODES
   ========================================================= */

const paymentCodes = {
  DS10: 1,
  DS25: 2.5,
  DS50: 5,
  DS100: 10,

  FISH1000: 10,
  OCEAN0025: 2.5,
  SWARM0075: 7.5,

  TAHA456: 4.5,
  TAHA458: 4.5,
  TAHA425: 2.5,
  TAHA100: 10,

  REEF025: 2.5,
  REEF050: 5.0,
  REEF075: 7.5,
  REEF100: 10,

  BLUE025: 2.5,
  BLUE050: 5,
  BLUE075: 7.5,
  BLUE100: 10,

  FISH025: 2.5,
  FISH050: 5,
  FISH075: 7.5,
  FISH150: 15,

  DATA010: 1,
  DATA025: 2.5,
  DATA050: 5,
  DATA100: 10,

  SWARM010: 1,
  SWARM025: 2.5,
  SWARM050: 5,
  SWARM100: 10,

  TAHA010: 10,
  TAHA020: 20,
  TAHA030: 3,
  TAHA040: 4,
  TAHA050: 5,
  TAHA060: 6,
  TAHA070: 7,
  TAHA080: 8,
  TAHA090: 9,
  TAHA120: 1.2,
  TAHA200: 20,
  TAHA250: 2.50,

  OCEAN010: 10,
  OCEAN050: 5,
  OCEAN100: 10,
  OCEAN200: 2,

  CORAL010: 10,
  CORAL050: 5,
  CORAL100: 1,
  CORAL200: 2,

  ALLFISHES1000: 100,
  NKRLAB:20,
  GITHUB:30,
  ILOVENKRLAB:150,
  TAHAISTHEBEST: 500,
  DATASWARMANDNKRLAB:1000
};

/* =========================================================
   5. GLOBAL STATE & HELPERS
   ========================================================= */

let activeFilter = 'All';
let catalogPage = 1;
const catalogPageSize = 48;
let selectedDataset = null;

const $ = selector => document.querySelector(selector);

const money = value => `$${Number(value || 0).toLocaleString('en-US')}`;

function getBalance() {
  return Number(localStorage.getItem('dataSwarmCredits') || 0);
}

function setBalance(amount) {
  localStorage.setItem('dataSwarmCredits', String(Math.max(0, Number(amount) || 0)));
  updateBalanceDisplay();
}

function updateBalanceDisplay() {
  const balance = getBalance();

  document.querySelectorAll('#balanceDisplay, #walletBalance, #headerBalance').forEach(el => {
    el.textContent = money(balance);
  });

  const pill = $('#creditPill');
  if (pill) {
    pill.innerHTML = `${t('balance_label')} <b>${money(balance)}</b>`;
  }
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.dataSwarmToastTimer);
  window.dataSwarmToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* =========================================================
   6. DATASET GENERATORS (TXT, CSV, JSON)
   ========================================================= */

const locationList = [
  'Great Barrier Reef', 'Coral Sea', 'Pacific Ocean', 'Atlantic Ocean',
  'Indian Ocean', 'Amazon Basin', 'Mediterranean Sea', 'Caribbean Sea',
  'Monterey Bay', 'North Pacific', 'South Pacific', 'Arctic Ocean',
  'Southern Ocean', 'Red Sea', 'Gulf of Mexico', 'Caspian Sea', 'Danube Delta'
];

const habitatList = [
  'coral reef', 'open ocean', 'mangrove', 'kelp forest',
  'river', 'freshwater lake', 'estuary', 'deep sea',
  'coastal shelf', 'seagrass meadow', 'volcanic slope', 'floodplain'
];

const behaviorList = [
  'feeding', 'migration', 'resting', 'spawning',
  'schooling', 'territorial defense', 'predator avoidance', 'habitat exploration'
];

const downloadSampleCount = 1000;

function buildDownloadObservations(dataset) {
  const species = getDatasetSpecies(dataset);
  const baseDate = new Date(`${dataset.collectedDate || '2025-01-15'}T00:00:00Z`);
  const observations = [];

  for (let recordNumber = 1; recordNumber <= downloadSampleCount; recordNumber++) {
    const observationDate = new Date(baseDate);
    observationDate.setUTCDate(baseDate.getUTCDate() + recordNumber * 3);
    const depth = dataset.depth + ((recordNumber * 17 + dataset.id) % 160) - 80;
    const temperature = Number((dataset.temperatures[recordNumber % dataset.temperatures.length] + ((recordNumber % 9) - 4) / 10).toFixed(1));
    const latitude = Number((-45 + ((recordNumber * 13 + dataset.id) % 900) / 10).toFixed(4));
    const longitude = Number((-170 + ((recordNumber * 19 + dataset.id) % 3400) / 10).toFixed(4));

    observations.push({
      recordId: `DS-${String(dataset.id).padStart(3, '0')}-${String(recordNumber).padStart(4, '0')}`,
      species,
      scientificName: dataset.scientificName,
      location: dataset.location || locationList[(recordNumber + dataset.id) % locationList.length],
      dateCollected: observationDate.toISOString().slice(0, 10),
      habitat: habitatList[(recordNumber * 2 + dataset.id) % habitatList.length],
      behavior: behaviorList[(recordNumber * 3 + dataset.id) % behaviorList.length],
      depthMeters: Math.max(1, depth),
      temperatureCelsius: temperature,
      salinityPsu: dataset.salinity ?? (dataset.waterType === 'Freshwater' ? 0 : 35),
      dissolvedOxygenMgL: Number((dataset.oxygen || 6.5) + ((recordNumber % 7) - 3) / 10).toFixed(1),
      lengthCm: Number((dataset.sizes[recordNumber % dataset.sizes.length] + ((recordNumber % 11) - 5) / 10).toFixed(1)),
      weightKg: null,
      visibilityMeters: Number((3 + ((recordNumber * 5 + dataset.id) % 480) / 10).toFixed(1)),
      pollutionIndex: Number((8 + ((recordNumber * 11 + dataset.id) % 72) / 10).toFixed(1)),
      dataQualityScore: dataset.qualityScore || 90,
      coordinates: { latitude, longitude }
    });
  }

  return observations;
}

function generateDatasetText(dataset) {
  const title = getDatasetTitle(dataset);
  const desc = getDatasetDescription(dataset);
  const species = getDatasetSpecies(dataset);
  const tag = getDatasetTag(dataset);

  const lines = [
    '============================================================',
    'DATA SWARM - AQUATIC FISH DATASET',
    'Platform Created by: Taha Karmani',
    '============================================================',
    '',
    `Dataset ID: DS-${String(dataset.id).padStart(2, '0')}`,
    `Title: ${title}`,
    `Category: ${dataset.category}`,
    `Species: ${species}`,
    `Scientific name: ${dataset.scientificName}`,
    `Location: ${dataset.location}`,
    `Collected: ${dataset.collectedDate}`,
    `Water type: ${dataset.waterType}`,
    `Source: ${dataset.source}`,
    `License: ${dataset.license}`,
    `Data quality score: ${dataset.qualityScore}%`,
    `Tag: ${tag}`,
    `Price: $${dataset.price}`,
    '',
    'DESCRIPTION',
    '------------------------------------------------------------',
    desc,
    '',
    `FIELD OBSERVATION TELEMETRY (${downloadSampleCount} SAMPLES)`,
    '------------------------------------------------------------'
  ];

  buildDownloadObservations(dataset).forEach(observation => {
    lines.push(Object.entries(observation).map(([key, value]) => `${key}=${typeof value === 'object' ? JSON.stringify(value) : value}`).join(' | '));
  });

  lines.push(
    '',
    'DATASET NOTES',
    '------------------------------------------------------------',
    'This dataset is an authentic Data Swarm research resource.',
    'Photo reference: ' + (getDatasetPhotoUrl(dataset) || 'No photo link'),
    '',
    'Created by: Taha Karmani',
    '============================================================'
  );

  return lines.join('\n');
}

function generateDatasetCSV(dataset) {
  const observations = buildDownloadObservations(dataset);
  const rows = [
    ['RecordID', 'Species', 'ScientificName', 'Location', 'DateCollected', 'Habitat', 'Behavior', 'Depth_m', 'Temperature_C', 'Salinity_PSU', 'DissolvedOxygen_mgL', 'Length_cm', 'Weight_kg', 'Visibility_m', 'PollutionIndex', 'DataQualityScore', 'Latitude', 'Longitude'].join(',')
  ];

  observations.forEach(observation => {
    rows.push([observation.recordId, observation.species, observation.scientificName, observation.location, observation.dateCollected, observation.habitat, observation.behavior, observation.depthMeters, observation.temperatureCelsius, observation.salinityPsu, observation.dissolvedOxygenMgL, observation.lengthCm, observation.weightKg, observation.visibilityMeters, observation.pollutionIndex, observation.dataQualityScore, observation.coordinates.latitude, observation.coordinates.longitude].map(value => `"${String(value).replace(/"/g, '""')}"`).join(','));
  });

  return rows.join('\n');
}

function generateDatasetJSON(dataset) {
  const title = getDatasetTitle(dataset);
  const desc = getDatasetDescription(dataset);
  const species = getDatasetSpecies(dataset);
  const tag = getDatasetTag(dataset);
  const records = buildDownloadObservations(dataset);

  return JSON.stringify({
    metadata: {
      platform: 'Data Swarm',
      author: 'Taha Karmani',
      datasetId: `DS-${String(dataset.id).padStart(2, '0')}`,
      title,
      category: dataset.category,
      species,
      scientificName: dataset.scientificName,
      location: dataset.location,
      collectedDate: dataset.collectedDate,
      waterType: dataset.waterType,
      dataSource: dataset.source,
      tag,
      priceUSD: dataset.price,
      license: dataset.license,
      dataQualityScore: dataset.qualityScore,
      description: desc,
      photoUrl: getDatasetPhotoUrl(dataset),
      sampleCount: records.length,
      fieldCoverage: ['depth', 'temperature', 'salinity', 'oxygen', 'size', 'weight', 'pollution', 'coordinates'],
      generatedAt: new Date().toISOString()
    },
    observations: records
  }, null, 2);
}

/* =========================================================
   7. FILE DOWNLOAD HANDLER
   ========================================================= */

function downloadDataset(dataset, format = 'json') {
  openDatasetDetails(dataset.id);
  const modal = $('#datasetModal');
  const results = modal?.querySelector('.live-data-results');
  if (results) {
    loadGBIFDataset(dataset, results);
  }
  showToast('Live data opened in the app');
}

async function loadGBIFDataset(dataset, resultsElement = null) {
  const searchName = dataset.scientificName && !dataset.scientificName.endsWith(' sp.') ? dataset.scientificName : dataset.species?.en;
  if (!searchName) return null;
  if (resultsElement) resultsElement.innerHTML = '<p class="live-data-loading">Loading verified GBIF observations...</p>';
  try {
    const matchResponse = await fetch(`https://api.gbif.org/v1/species/match?name=${encodeURIComponent(searchName)}`);
    const match = await matchResponse.json();
    const scientificName = match.matchType === 'NONE' ? searchName : match.scientificName;
    const params = new URLSearchParams({ scientificName, hasCoordinate: 'true', limit: '300', offset: '0' });
    const response = await fetch(`https://api.gbif.org/v1/occurrence/search?${params}`);
    if (!response.ok) throw new Error('GBIF occurrence request failed');
    const result = await response.json();
    const records = result.results.map((record, index) => {
      const fields = Object.entries(record).reduce((all, [key, value]) => {
        all[key.toLowerCase()] = value;
        return all;
      }, {});
      const measurement = names => names.map(name => fields[name] ?? fields[`measurementorfact${name}`]).find(value => value !== undefined && value !== null);
      return { recordId: `GBIF-${String(index + 1).padStart(4, '0')}`, species: record.species || record.scientificName || scientificName, scientificName: record.scientificName || scientificName, country: record.country || null, locality: record.locality || record.verbatimLocality || null, dateCollected: record.eventDate || record.year || null, depthMeters: record.depth ?? null, lengthCm: measurement(['length', 'lengthcm', 'individualmeasurements']), weightKg: measurement(['weight', 'weightkg', 'mass']), temperatureCelsius: measurement(['temperature', 'temperaturecelsius', 'water temperature']), latitude: record.decimalLatitude ?? null, longitude: record.decimalLongitude ?? null, basisOfRecord: record.basisOfRecord || null, datasetName: record.datasetName || null, institution: record.institutionCode || null, occurrenceStatus: record.occurrenceStatus || null, license: record.license || null };
    });
    const liveData = { scientificName, records, sourceUrl: `https://api.gbif.org/v1/occurrence/search?${params}` };
    dataset.liveGBIF = liveData;
    if (resultsElement) {
      resultsElement.innerHTML = records.length ? `<p><strong>${records.length}</strong> verified records from GBIF · ${escapeHtml(scientificName)}</p><table><thead><tr><th>Species</th><th>Place</th><th>Date</th><th>Depth</th></tr></thead><tbody>${records.slice(0, 8).map(record => `<tr><td>${escapeHtml(record.species)}</td><td>${escapeHtml(record.locality || record.country || 'Not recorded')}</td><td>${escapeHtml(record.dateCollected || 'Not recorded')}</td><td>${record.depthMeters ?? '—'} m</td></tr>`).join('')}</tbody></table><small>Source: GBIF occurrence search</small>` : `<p>No exact GBIF observations were returned for <strong>${escapeHtml(scientificName)}</strong>. No replacement data was invented.</p>`;
    }
    return liveData;
  } catch {
    if (resultsElement) resultsElement.innerHTML = '<p>GBIF could not be reached. No replacement data was invented.</p>';
    return null;
  }
}

async function downloadGBIFDataset(dataset, format = 'json') {
  const liveData = dataset.liveGBIF || await loadGBIFDataset(dataset);
  if (!liveData || !liveData.records.length) { showToast('No verified web records are available.'); return; }
  const exportData = { metadata: { platform: 'Data Swarm', source: 'GBIF occurrence search', sourceUrl: liveData.sourceUrl, scientificName: liveData.scientificName, returnedRecords: liveData.records.length, downloadedAt: new Date().toISOString() }, observations: liveData.records };
  const csvHeaders = ['recordId', 'species', 'scientificName', 'country', 'locality', 'dateCollected', 'depthMeters', 'latitude', 'longitude', 'basisOfRecord', 'datasetName', 'institution', 'occurrenceStatus', 'license'];
  const csvEscape = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const content = format === 'csv' ? [csvHeaders.join(','), ...liveData.records.map(record => csvHeaders.map(header => csvEscape(record[header])).join(','))].join('\n') : JSON.stringify(exportData, null, 2);
  const extension = format === 'csv' ? 'csv' : 'json';
  const url = URL.createObjectURL(new Blob([content], { type: format === 'csv' ? 'text/csv;charset=utf-8' : 'application/json;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = `data-swarm-${liveData.scientificName.replace(/\s+/g, '-').toLowerCase()}-gbif.${extension}`; link.click(); URL.revokeObjectURL(url);
  savePurchasedDataset(dataset); showToast(`${liveData.records.length} verified GBIF observations downloaded`);
}

/* =========================================================
   8. PURCHASED DATA PERSISTENCE
   ========================================================= */

function getPurchasedDatasets() {
  try {
    return JSON.parse(localStorage.getItem('dataSwarmPurchased') || '[]');
  } catch {
    return [];
  }
}

function savePurchasedDataset(dataset) {
  const purchased = getPurchasedDatasets();
  if (!purchased.some(item => item.id === dataset.id)) {
    purchased.push({
      id: dataset.id,
      title: dataset.titles?.en || dataset.title,
      purchasedAt: new Date().toISOString()
    });
    localStorage.setItem('dataSwarmPurchased', JSON.stringify(purchased));
  }
}

function openFishProfile(datasetId) {
  const dataset = datasets.find(item => item.id === datasetId);
  if (!dataset) return;
  document.querySelector('#fishProfilePage')?.remove();

  const profile = document.createElement('div');
  profile.id = 'fishProfilePage';
  profile.className = 'fish-profile-page';
  const title = getDatasetTitle(dataset);
  const species = getDatasetSpecies(dataset);
  const averageSize = Math.round(dataset.sizes.reduce((sum, value) => sum + value, 0) / dataset.sizes.length);
  const habitat = dataset.habitat || (dataset.waterType === 'Freshwater' ? 'Freshwater basin' : 'Marine habitat');
  const conservation = dataset.premium ? (getCurrentLanguage() === 'fr' ? 'Accès recherche · archive de terrain vérifiée' : getCurrentLanguage() === 'ar' ? 'وصول بحثي · أرشيف ميداني موثق' : 'Research access · verified field archive') : (getCurrentLanguage() === 'fr' ? 'Archive ouverte · accès communautaire' : getCurrentLanguage() === 'ar' ? 'أرشيف مفتوح · وصول مجتمعي' : 'Open archive · community access');
  const photo = getDatasetPhotoUrl(dataset);

  profile.innerHTML = `<main class="fish-profile-shell" aria-labelledby="fishProfileTitle">
    <header class="fish-profile-nav"><button class="fish-profile-back" type="button">← ${t('profile_back')}</button><span>${t('profile_field_guide')}</span><span>DS-${String(dataset.id).padStart(3, '0')}</span></header>
    <div class="fish-profile-hero"><figure class="fish-profile-image"><img src="${photo}" alt="${escapeHtml(species)}" onerror="this.onerror=null;this.classList.add('photo-unavailable')"><figcaption>${t('profile_reference')} · ${escapeHtml(dataset.source)}</figcaption></figure><section class="fish-profile-intro"><p class="eyebrow">${t('profile_dossier')} / ${escapeHtml(dataset.category)}</p><h1 id="fishProfileTitle">${escapeHtml(species)}</h1><p class="fish-profile-scientific"><em>${escapeHtml(dataset.scientificName)}</em></p><p class="fish-profile-lead">${escapeHtml(getDatasetDescription(dataset))}</p><div class="fish-profile-status"><span>✓ ${t('profile_verified')}</span><span>${dataset.observations.toLocaleString()} ${t('detail_observations')}</span></div></section></div>
    <div class="fish-profile-grid"><aside class="fish-profile-infobox"><h2>${t('profile_at_glance')}</h2><dl><div><dt>${t('profile_common_name')}</dt><dd>${escapeHtml(species)}</dd></div><div><dt>${t('profile_scientific_name')}</dt><dd><em>${escapeHtml(dataset.scientificName)}</em></dd></div><div><dt>${t('profile_observed_in')}</dt><dd>${escapeHtml(dataset.location)}</dd></div><div><dt>${t('profile_water')}</dt><dd>${escapeHtml(dataset.waterType)}</dd></div><div><dt>${t('profile_habitat')}</dt><dd>${escapeHtml(habitat)}</dd></div><div><dt>${t('profile_typical_size')}</dt><dd>${averageSize} cm</dd></div><div><dt>${t('profile_depth')}</dt><dd>${dataset.depth} m</dd></div><div><dt>${t('profile_salinity')}</dt><dd>${dataset.salinity} PSU</dd></div></dl></aside><article class="fish-profile-article"><p class="eyebrow">${t('profile_record')}</p><h2>${t('profile_what_we_know')}</h2><p>${escapeHtml(t('profile_record_text', { title }))}</p><div class="fish-profile-facts"><div><strong>${dataset.temperatures[2]} °C</strong><span>${t('profile_temperature')}</span></div><div><strong>${dataset.oxygen} mg/L</strong><span>${t('profile_oxygen')}</span></div><div><strong>${dataset.qualityScore}%</strong><span>${t('profile_quality')}</span></div></div><h2>${t('profile_habitat_range')}</h2><p>${escapeHtml(t('profile_habitat_text', { location: dataset.location, source: dataset.source.toLowerCase(), date: dataset.collectedDate, type: dataset.datasetType.toLowerCase() }))}</p><h2>${t('profile_conservation')}</h2><p>${escapeHtml(t('profile_conservation_text', { access: conservation }))}</p><section class="fish-profile-data"><div><p class="eyebrow">DATASET / DS-${String(dataset.id).padStart(3, '0')}</p><h2>${t('profile_raw_signals')}</h2><p>${dataset.observations.toLocaleString()} ${t('profile_records')} · ${escapeHtml(dataset.license)} · ${escapeHtml(dataset.source)}</p></div><button class="primary-link fish-profile-download" type="button">${t('profile_view_data')} <span>↗</span></button></section></article></div>
  </main>`;
  document.body.appendChild(profile);
  profile.addEventListener('contextmenu', event => event.preventDefault());
  profile.addEventListener('copy', event => event.preventDefault());
  profile.addEventListener('cut', event => event.preventDefault());
  profile.addEventListener('dragstart', event => event.preventDefault());
  profile.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && ['a', 'c', 'x'].includes(event.key.toLowerCase())) {
      event.preventDefault();
    }
  });
  profile.querySelector('.fish-profile-back').addEventListener('click', () => profile.remove());
  profile.querySelector('.fish-profile-download').addEventListener('click', () => { profile.remove(); openDatasetDetails(dataset.id); });
}

/* =========================================================
   9. CHECKOUT MODAL
   ========================================================= */

function createCheckoutModal() {
  if ($('#checkoutModal')) {
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'checkoutModal';
  modal.className = 'payment-modal-backdrop';
  modal.hidden = true;

  modal.innerHTML = `
    <section class="payment-modal" role="dialog" aria-modal="true" aria-labelledby="checkoutTitle">
      <div class="payment-modal-head">
        <div>
          <p class="eyebrow" id="checkoutEyebrow">
            ${t('checkout_eyebrow')}
          </p>
          <h2 id="checkoutTitle">
            ${t('checkout_title')}
          </h2>
        </div>

        <button id="checkoutClose" class="payment-close" type="button" aria-label="Close">×</button>
      </div>

      <div id="checkoutInfo"></div>

      <div class="wallet-balance">
        <span id="checkoutBalanceLabel">${t('checkout_balance_label')}</span>
        <strong id="checkoutBalance">$0</strong>
      </div>

      <button id="payBalanceButton" class="credit-purchase" type="button">
        ${t('checkout_pay_balance')}
      </button>

      <div class="payment-divider" id="checkoutOrDivider">
        ${t('checkout_or')}
      </div>

      <button id="payPaypalButton" class="paypal-button" type="button">
        ${t('checkout_pay_paypal')}
      </button>

      <div class="payment-divider" id="checkoutOrDivider2">
        ${t('checkout_or')}
      </div>

      <button id="payCardButton" class="payment-continue" type="button">
        ${t('checkout_pay_card')}
      </button>

      <p class="payment-secure" id="checkoutSecureNote">
        <span></span>
        ${t('checkout_secure')}
      </p>
    </section>
  `;

  document.body.appendChild(modal);

  $('#checkoutClose').addEventListener('click', closeCheckout);
  $('#payBalanceButton').addEventListener('click', payWithBalance);
  $('#payPaypalButton').addEventListener('click', () => demoExternalPayment('PayPal'));
  $('#payCardButton').addEventListener('click', () => demoExternalPayment('Bank card'));

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeCheckout();
    }
  });
}

function openCheckout(datasetId) {
  selectedDataset = datasets.find(dataset => dataset.id === datasetId);
  if (!selectedDataset) {
    return;
  }

  if (selectedDataset.price === 0) {
    savePurchasedDataset(selectedDataset);
    openFishProfile(selectedDataset.id);
    showToast(t('download_started', { title: getDatasetTitle(selectedDataset), format: 'JSON' }));
    selectedDataset = null;
    return;
  }

  createCheckoutModal();

  const title = getDatasetTitle(selectedDataset);

  // Update text inside modal for current language
  const eyebrowEl = $('#checkoutEyebrow');
  if (eyebrowEl) eyebrowEl.textContent = t('checkout_eyebrow');
  const titleEl = $('#checkoutTitle');
  if (titleEl) titleEl.textContent = t('checkout_title');
  const balanceLabelEl = $('#checkoutBalanceLabel');
  if (balanceLabelEl) balanceLabelEl.textContent = t('checkout_balance_label');
  const payBalanceBtn = $('#payBalanceButton');
  if (payBalanceBtn) payBalanceBtn.textContent = t('checkout_pay_balance');
  const payPaypalBtn = $('#payPaypalButton');
  if (payPaypalBtn) payPaypalBtn.textContent = t('checkout_pay_paypal');
  const payCardBtn = $('#payCardButton');
  if (payCardBtn) payCardBtn.textContent = t('checkout_pay_card');
  const secureNote = $('#checkoutSecureNote');
  if (secureNote) secureNote.innerHTML = `<span></span>${t('checkout_secure')}`;

  const info = $('#checkoutInfo');
  info.innerHTML = `
    <p>
      <strong>${escapeHtml(title)}</strong>
    </p>
    <p>
      ${t('checkout_price')}
      <strong>${money(selectedDataset.price)}</strong>
    </p>
  `;

  $('#checkoutBalance').textContent = money(getBalance());
  $('#checkoutModal').hidden = false;
}

function closeCheckout() {
  const modal = $('#checkoutModal');
  if (modal) {
    modal.hidden = true;
  }
  selectedDataset = null;
}

function payWithBalance() {
  if (!selectedDataset) {
    return;
  }

  const balance = getBalance();
  if (balance < selectedDataset.price) {
    const diff = selectedDataset.price - balance;
    showToast(t('checkout_need_more', { amount: money(diff) }));
    return;
  }

  setBalance(balance - selectedDataset.price);
  const purchased = selectedDataset;
  closeCheckout();

  showToast(t('checkout_success'));

  setTimeout(() => openFishProfile(purchased.id), 350);
}

function demoExternalPayment(method) {
  if (!selectedDataset) {
    return;
  }

  const dataset = selectedDataset;
  const title = getDatasetTitle(dataset);

  const confirmed = confirm(
    t('checkout_external_demo', {
      method,
      title,
      price: money(dataset.price)
    })
  );

  if (!confirmed) {
    return;
  }

  closeCheckout();
  showToast(t('checkout_external_success', { method }));

  savePurchasedDataset(dataset);
  setTimeout(() => openFishProfile(dataset.id), 350);
}

/* =========================================================
   10. PRODUCT GRID RENDERING
   ========================================================= */

function renderProducts() {
  const grid = $('#productGrid');
  if (!grid) {
    return;
  }

  const searchInput = $('#searchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const speciesQuery = $('#speciesFilter')?.value || '';
  const locationQuery = $('#locationFilter')?.value || '';
  const waterQuery = $('#waterFilter')?.value || '';
  const dateQuery = $('#dateFilter')?.value || '';

  const visible = datasets.filter(dataset => {
    const filterOK = activeFilter === 'All' || dataset.category === activeFilter;

    const title = getDatasetTitle(dataset);
    const desc = getDatasetDescription(dataset);
    const species = getDatasetSpecies(dataset);
    const tag = getDatasetTag(dataset);

    const searchable = [
      title,
      desc,
      dataset.category,
      species,
      tag,
      dataset.titles?.en || '',
      dataset.titles?.fr || '',
      dataset.titles?.ar || '',
      dataset.species?.en || '',
      dataset.species?.fr || '',
      dataset.species?.ar || ''
    ].join(' ').toLowerCase();

    return filterOK && searchable.includes(query) && (!speciesQuery || dataset.species.en === speciesQuery) && (!locationQuery || dataset.location === locationQuery) && (!waterQuery || dataset.waterType === waterQuery) && (!dateQuery || dataset.collectedDate >= dateQuery);
  });

  if (!visible.length) {
    grid.innerHTML = `<p class="empty-cart">${t('empty_catalog')}</p>`;
    return;
  }

  const pageCount = Math.ceil(visible.length / catalogPageSize);
  catalogPage = Math.min(catalogPage, pageCount);
  const pageItems = visible.slice((catalogPage - 1) * catalogPageSize, catalogPage * catalogPageSize);

  grid.innerHTML = pageItems.map(dataset => {
    const photo = getDatasetPhotoUrl(dataset);
    const title = getDatasetTitle(dataset);
    const desc = getDatasetDescription(dataset);
    const species = getDatasetSpecies(dataset);
    const tag = getDatasetTag(dataset);

    return `
      <article class="product">
        <div class="product-visual ${dataset.visual}">
          <img
            src="${photo}"
            alt="${escapeHtml(species)} photograph"
            loading="lazy"
            decoding="async"
            class="fish-dataset-photo"
            data-id="${dataset.id}"
            onerror="this.onerror=null;this.classList.add('photo-unavailable')"
          >

          <span class="visual-label">
            ${escapeHtml(dataset.category.toUpperCase())} / DS-${String(dataset.id).padStart(2, '0')}
          </span>

          <div class="visual-shape"></div>

          <span class="photo-credit">
            ${t('photo_label')}
          </span>
        </div>

        <div class="product-body">
          <div class="product-meta">
            <span>${escapeHtml(tag)}</span>
            <span>${t('formats_label')}</span>
          </div>

          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(desc)}</p>

          <div class="product-buy">
            <span class="price">${money(dataset.price)}</span>
            <button class="detail-button" type="button" data-id="${dataset.id}">${t('detail_btn')}</button>
            <button
              class="add-button buy-button"
              type="button"
              data-id="${dataset.id}"
            >
              ${t('buy_btn')}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.fish-dataset-photo').forEach(image => {
    image.addEventListener('click', () => openPhotoPreview(image));
  });

  grid.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => openCheckout(Number(button.dataset.id)));
  });
  grid.querySelectorAll('.detail-button').forEach(button => {
    button.addEventListener('click', () => openDatasetDetails(Number(button.dataset.id)));
  });

  const pagination = $('#catalogPagination');
  if (pagination) {
    pagination.innerHTML = `<span>${catalogPage} / ${pageCount}</span><button type="button" data-page="prev" ${catalogPage === 1 ? 'disabled' : ''}>‹</button><button type="button" data-page="next" ${catalogPage === pageCount ? 'disabled' : ''}>›</button>`;
    pagination.querySelector('[data-page="prev"]')?.addEventListener('click', () => { catalogPage -= 1; renderProducts(); });
    pagination.querySelector('[data-page="next"]')?.addEventListener('click', () => { catalogPage += 1; renderProducts(); });
  }
}

/* =========================================================
   11. PHOTO PREVIEW MODAL
   ========================================================= */

function openPhotoPreview(image) {
  const preview = $('#photoPreview');
  if (!preview) {
    return;
  }

  const previewImage = $('#previewImage');
  const src = image.currentSrc || image.src;

  previewImage.src = src;
  previewImage.alt = image.alt;

  const datasetId = Number(image.dataset.id);
  const dataset = datasets.find(d => d.id === datasetId);

  const title = dataset ? getDatasetTitle(dataset) : (image.closest('.product')?.querySelector('h3')?.textContent || 'Fish photograph');

  $('#previewTitle').textContent = title;

  const sourceLink = $('#previewSource');
  if (sourceLink) {
    sourceLink.href = src;
    sourceLink.textContent = t('preview_link');
  }

  preview.hidden = false;
}

function closePhotoPreview() {
  const preview = $('#photoPreview');
  if (preview) {
    preview.hidden = true;
  }
}

/* =========================================================
   12. REDEEM CODES & PROMO SYSTEM
   ========================================================= */

function redeemCode(code) {
  const cleanCode = String(code || '').trim().toUpperCase();

  if (!cleanCode) {
    return {
      success: false,
      message: t('redeem_empty')
    };
  }

  const credits = paymentCodes[cleanCode];

  if (!credits) {
    return {
      success: false,
      message: t('redeem_invalid')
    };
  }

  const balance = getBalance();
  const newBalance = balance + Number(credits);
  setBalance(newBalance);

  return {
    success: true,
    credits,
    balance: newBalance
  };
}

function setupRedeemForm() {
  const forms = document.querySelectorAll('#redeemForm, #walletRedeemForm');

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();

      const input = form.querySelector('input');
      const status = form.querySelector('.code-status') || $('#redeemStatus');
      const result = redeemCode(input?.value);

      if (!result.success) {
        if (status) {
          status.textContent = result.message;
        }
        return;
      }

      if (status) {
        status.textContent = t('redeem_success', {
          amount: money(result.credits),
          balance: money(result.balance)
        });
      }

      if (input) {
        input.value = '';
      }

      showToast(`+${money(result.credits)} credits`);
    });
  });
}

/* =========================================================
   13. LOGIN & SESSION
   ========================================================= */

const authScreen = $('#authScreen');
const appShell = $('#appShell');
const loginForm = $('#loginForm');
const displayNameInput = $('#displayName');
const emailInput = $('#email');
const formError = $('#formError');

function normalizeName(name) {
  return String(name || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function getRegisteredNames() {
  try {
    return JSON.parse(localStorage.getItem('dataSwarmRegisteredNames') || '[]');
  } catch {
    return [];
  }
}

function registerName(name) {
  const normalized = normalizeName(name);
  const names = getRegisteredNames();

  if (names.includes(normalized)) {
    return false;
  }

  names.push(normalized);
  localStorage.setItem('dataSwarmRegisteredNames', JSON.stringify(names));
  return true;
}

function enterLibrary(name, email) {
  localStorage.setItem('dataSwarmDisplayName', name);
  localStorage.setItem('dataSwarmUser', email);

  if (authScreen) {
    authScreen.classList.add('auth-exit');
  }

  setTimeout(() => {
    if (authScreen) {
      authScreen.hidden = true;
    }
    if (appShell) {
      appShell.hidden = false;
    }
    updateBalanceDisplay();
    startSonarCircleAnimation();
  }, 420);
}

function setupLogin() {
  if (!loginForm) {
    return;
  }

  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = displayNameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';

    if (!name) {
      if (formError) {
        formError.textContent = t('login_err_name');
      }
      displayNameInput?.focus();
      return;
    }

    if (name.length < 2) {
      if (formError) {
        formError.textContent = t('login_err_name_len');
      }
      return;
    }

    if (!emailInput?.validity.valid) {
      if (formError) {
        formError.textContent = t('login_err_email');
      }
      emailInput?.focus();
      return;
    }

    const savedUser = localStorage.getItem('dataSwarmUser');
    const savedName = localStorage.getItem('dataSwarmDisplayName');

    if (
      savedUser &&
      savedName &&
      normalizeName(savedName) === normalizeName(name) &&
      savedUser.toLowerCase() === email.toLowerCase()
    ) {
      enterLibrary(name, email);
      return;
    }

    if (!registerName(name)) {
      if (formError) {
        formError.textContent = t('login_err_registered');
      }
      return;
    }

    if (formError) {
      formError.textContent = '';
    }

    enterLibrary(name, email);
  });
}

function restoreLogin() {
  const savedUser = localStorage.getItem('dataSwarmUser');
  const savedName = localStorage.getItem('dataSwarmDisplayName');

  if (savedUser) {
    enterLibrary(savedName || savedUser.split('@')[0], savedUser);
  }
}

function setupLogout() {
  const button = $('#backToLogin');
  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    localStorage.removeItem('dataSwarmUser');
    localStorage.removeItem('dataSwarmDisplayName');

    if (appShell) {
      appShell.hidden = true;
    }

    if (authScreen) {
      authScreen.hidden = false;
      authScreen.classList.remove('auth-exit');
    }

    if (displayNameInput) displayNameInput.value = '';
    if (emailInput) emailInput.value = '';
    displayNameInput?.focus();
  });
}

/* =========================================================
   14. WELCOME EMAIL
   ========================================================= */

function setupWelcomeEmail() {
  const button = $('#welcomeEmailButton');
  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    const email = localStorage.getItem('dataSwarmUser');
    if (!email) {
      showToast(t('toast_signin_first'));
      return;
    }

    const name = localStorage.getItem('dataSwarmDisplayName') || 'friend';
    const subject = encodeURIComponent('Welcome to Data Swarm');
    const body = encodeURIComponent(
      `Hi ${name},\n\n` +
      `Welcome to Data Swarm, your aquatic and fish data library.\n\n` +
      `Explore 135 comprehensive datasets across Oceans, Freshwater, and Climate.\n\n` +
      `Created by Taha Karmani.\n\n` +
      `See you in the water!`
    );

    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
    showToast(t('toast_welcome_sent', { email }));
  });
}

/* =========================================================
   15. SEARCH & FILTER EVENTS
   ========================================================= */

function setupSearchAndFilters() {
  const resetPage = () => { catalogPage = 1; renderProducts(); };
  $('#searchInput')?.addEventListener('input', resetPage);
  ['speciesFilter', 'locationFilter', 'waterFilter', 'dateFilter'].forEach(id => $('#' + id)?.addEventListener('input', resetPage));

  const speciesFilter = $('#speciesFilter');
  const locationFilter = $('#locationFilter');
  if (speciesFilter && !speciesFilter.dataset.ready) {
    [...new Set(datasets.map(dataset => dataset.species.en))].sort().forEach(value => speciesFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`));
    [...new Set(datasets.map(dataset => dataset.location))].sort().forEach(value => locationFilter.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`));
    speciesFilter.dataset.ready = 'true';
  }

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'All';
      catalogPage = 1;

      document.querySelectorAll('.filter').forEach(filter => {
        filter.classList.toggle('active', filter === button);
      });

      renderProducts();
    });
  });
}

function setupContributorForm() {
  $('#observationForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const observations = JSON.parse(localStorage.getItem('dataSwarmObservations') || '[]');
    observations.push(Object.fromEntries(new FormData(form)));
    localStorage.setItem('dataSwarmObservations', JSON.stringify(observations));
    $('#observationStatus').textContent = currentLang === 'ar' ? 'تم حفظ ملاحظتك محلياً. شكراً لمساهمتك.' : currentLang === 'fr' ? 'Votre observation a été enregistrée localement. Merci.' : 'Your observation was saved locally. Thank you.';
    form.reset();
  });
}

function setupAskAssistant() {
  const form = $('#askForm');
  const input = $('#askInput');
  const result = $('#askResult');
  if (!form || !input || !result) return;
  const conversation = [];

  const drawer = $('#askDataSwarm');
  const launcher = $('#askLauncher');
  const closeButton = $('#askClose');
  const toggleDrawer = open => {
    drawer?.classList.toggle('ask-open', open);
    launcher?.setAttribute('aria-expanded', String(open));
    drawer?.setAttribute('aria-hidden', String(!open));
    if (open) input.focus();
  };
  launcher?.addEventListener('click', () => toggleDrawer(true));
  closeButton?.addEventListener('click', () => toggleDrawer(false));

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    conversation.push({ role: 'user', text: query });
    result.innerHTML = `${conversation.map(message => `<p class="ask-message ${message.role}">${escapeHtml(message.text)}</p>`).join('')}<p class="ask-loading">DATA SWARM is thinking with PyTorch...</p>`;
    const payload = {
      query,
      datasets: datasets.map(dataset => ({
        id: dataset.id,
        title: dataset.titles?.en || '',
        species: dataset.species?.en || '',
        scientific_name: dataset.scientificName || '',
        location: dataset.location || '',
        description: dataset.descriptions?.en || '',
        category: dataset.category,
        observations: dataset.observations || 0
      })),
      history: conversation.slice(-10)
    };

    let response;
    try {
      const apiUrls = [window.DATA_SWARM_AI_URL || 'http://127.0.0.1:3001/api/ask'];
      if (!window.DATA_SWARM_AI_URL && window.location.origin !== 'http://127.0.0.1:8000') {
        apiUrls.push('http://127.0.0.1:8000/api/ask');
      }
      let lastError;
      for (const apiUrl of apiUrls) {
        try {
          const request = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
          if (!request.ok) throw new Error('Assistant unavailable');
          response = await request.json();
          break;
        } catch (error) {
          lastError = error;
        }
      }
      if (!response) throw lastError || new Error('Assistant unavailable');
    } catch {
      const queryTokens = query.toLowerCase().split(/\s+/).filter(Boolean);
      const greeting = ['hi', 'hello', 'hey', 'bonjour', 'سلام'].includes(query.toLowerCase());
      response = { engine: 'Local catalog fallback', answer: greeting ? 'Hello! I’m DATA SWARM AI. I can help you explore fish, oceans, ecosystems, and marine data. What would you like to discover today?' : 'Python is offline, so I searched the catalog locally.', matches: datasets.filter(dataset => queryTokens.every(token => `${dataset.titles?.en} ${dataset.species?.en} ${dataset.location} ${dataset.category}`.toLowerCase().includes(token))).slice(0, 8).map(dataset => ({ id: dataset.id, title: dataset.titles.en, species: dataset.species.en, location: dataset.location, observations: dataset.observations })) };
    }
    conversation.push({ role: 'assistant', text: response.answer });
    result.innerHTML = `${conversation.map(message => `<p class="ask-message ${message.role}">${escapeHtml(message.text)}</p>`).join('')}<small class="ask-engine">${escapeHtml(response.engine)} · grounded in catalog records</small><div class="ask-results">${response.matches.length ? response.matches.map(match => `<button type="button" class="ask-result-card" data-id="${match.id}"><strong>${escapeHtml(match.species || match.title)}</strong><span>${escapeHtml(match.location || '')}</span><small>${Number(match.observations || 0).toLocaleString()} observations · Explore ↗</small></button>`).join('') : '<p>No matching records found.</p>'}</div>`;
    result.querySelectorAll('.ask-result-card').forEach(button => button.addEventListener('click', () => openDatasetDetails(Number(button.dataset.id))));
  });
}

function setupOllamaChat() {
  const widget = $('#aiChatWidget');
  const button = $('#aiChatButton');
  const windowPanel = $('#aiChatWindow');
  const closeButton = $('#aiChatClose');
  const form = $('#aiChatForm');
  const input = $('#aiChatInput');
  const messages = $('#aiChatMessages');
  const modelLabel = $('#aiChatModel');
  if (!widget || !button || !windowPanel || !form || !input || !messages) return;

  const ollamaApi = window.DATA_SWARM_OLLAMA_URL || 'http://127.0.0.1:3001/api/ollama';
  const chatHistory = [];
  let isBusy = false;

  const getRelevantDatasets = query => {
    const words = query.toLowerCase().split(/\s+/).filter(word => word.length > 2);
    return datasets
      .map(dataset => {
        const text = `${dataset.titles?.en || ''} ${dataset.species?.en || ''} ${dataset.location || ''} ${dataset.category || ''}`.toLowerCase();
        return { dataset, score: words.reduce((score, word) => score + (text.includes(word) ? 1 : 0), 0) };
      })
      .filter(item => item.score > 0)
      .sort((left, right) => right.score - left.score)
      .slice(0, 12)
      .map(item => item.dataset);
  };

  const scrollToBottom = () => { messages.scrollTop = messages.scrollHeight; };
  const addMessage = (role, text = '') => {
    const message = document.createElement('div');
    message.className = role === 'user' ? 'user-message' : 'ai-message';
    message.textContent = text;
    messages.appendChild(message);
    scrollToBottom();
    return message;
  };
  const setOpen = open => {
    windowPanel.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    if (open) input.focus();
  };

  button.addEventListener('click', () => setOpen(windowPanel.hidden));
  closeButton?.addEventListener('click', () => setOpen(false));
  messages.querySelectorAll('[data-prompt]').forEach(suggestion => suggestion.addEventListener('click', () => {
    input.value = suggestion.dataset.prompt;
    form.requestSubmit();
  }));

  fetch(`${ollamaApi}/models`).then(response => response.ok ? response.json() : null).then(data => {
    if (data?.models?.length) modelLabel.textContent = `${data.models[0]} · ${t('chat_ready')}`;
    else modelLabel.textContent = t('chat_missing');
  }).catch(() => { modelLabel.textContent = t('chat_connecting'); });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const prompt = input.value.trim();
    if (!prompt || isBusy) return;
    isBusy = true;
    input.value = '';
    addMessage('user', prompt);
    chatHistory.push({ role: 'user', content: prompt });
    const answer = addMessage('assistant', '');
    answer.classList.add('ai-typing');
    answer.textContent = t('chat_thinking');
    try {
      const response = await fetch(`${ollamaApi}/chat`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory.slice(-6), datasets: getRelevantDatasets(prompt).map(dataset => ({ title: dataset.titles?.en, species: dataset.species?.en, location: dataset.location, category: dataset.category })) })
      });
      if (!response.ok || !response.body) throw new Error('Ollama is unavailable');
      answer.classList.remove('ai-typing');
      answer.textContent = '';
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        lines.filter(Boolean).forEach(line => {
          const chunk = JSON.parse(line);
          if (chunk.message?.content) { answer.textContent += chunk.message.content; scrollToBottom(); }
        });
        if (done) break;
      }
      chatHistory.push({ role: 'assistant', content: answer.textContent });
    } catch (error) {
      answer.classList.remove('ai-typing');
      answer.textContent = 'I cannot reach Ollama right now. Start Ollama and make sure a model is installed, then try again.';
      modelLabel.textContent = t('chat_unavailable');
    } finally { isBusy = false; input.focus(); }
  });
}

/* =========================================================
   16. PHOTO MODAL EVENTS
   ========================================================= */

function setupPhotoModal() {
  $('#closePhotoPreview')?.addEventListener('click', closePhotoPreview);

  $('#photoPreview')?.addEventListener('click', event => {
    if (event.target.id === 'photoPreview') {
      closePhotoPreview();
    }
  });
}

/* =========================================================
   17. BALANCE WALLET MODAL
   ========================================================= */

function createWalletModal() {
  if ($('#walletModal')) {
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'walletModal';
  modal.className = 'credits-modal-backdrop';
  modal.hidden = true;

  modal.innerHTML = `
    <section class="credits-modal">
      <div class="payment-modal-head">
        <div>
          <p class="eyebrow">${t('wallet_eyebrow')}</p>
          <h2>${t('wallet_title')}</h2>
        </div>
        <button id="walletClose" class="payment-close" type="button">×</button>
      </div>

      <div class="wallet-balance">
        <span>${t('wallet_available')}</span>
        <strong id="walletBalance">$0</strong>
      </div>

      <label class="wallet-label" for="walletCode">
        ${t('wallet_redeem_label')}
      </label>

      <form id="walletRedeemForm">
        <div class="page-redeem-row">
          <input
            id="walletCode"
            type="text"
            placeholder="${t('wallet_code_ph')}"
            autocomplete="off"
            required
          >
          <button type="submit">
            ${t('wallet_redeem_btn')}
          </button>
        </div>
        <p class="code-status" id="walletStatus"></p>
      </form>
    </section>
  `;

  document.body.appendChild(modal);

  $('#walletClose').addEventListener('click', () => {
    modal.hidden = true;
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.hidden = true;
    }
  });

  setupRedeemForm();
}

function setupBalanceButton() {
  createWalletModal();

  const button = $('#creditPill');
  if (!button) {
    return;
  }

  button.addEventListener('click', () => {
    updateBalanceDisplay();
    const modal = $('#walletModal');
    if (modal) {
      modal.hidden = false;
    }
  });
}

/* =========================================================
   18. SWARM CANVAS ANIMATION
   ========================================================= */

function setupSwarm() {
  const canvas = $('#swarmCanvas');
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }

  const swarm = Array.from({ length: 52 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    vx: 0,
    vy: 0,
    size: 5 + Math.random() * 4,
    phase: index * 0.7,
    tint: index % 4,
    type: index < 40 ? 'fish' : index < 46 ? 'turtle' : 'dolphin'
  }));

  const pointer = {
    x: 0.5,
    y: 0.5
  };

  function resizeSwarm() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  window.addEventListener('resize', resizeSwarm);

  window.addEventListener('pointermove', event => {
    pointer.x = event.clientX / window.innerWidth;
    pointer.y = event.clientY / window.innerHeight;
  });

  function drawSwarm(time) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    context.clearRect(0, 0, width, height);

    swarm.forEach(fish => {
      const targetX = pointer.x * width + Math.cos(time / 900 + fish.phase) * 75;
      const targetY = pointer.y * height + Math.sin(time / 1100 + fish.phase) * 60;

      fish.vx += (targetX - fish.x * width) * 0.00018;
      fish.vy += (targetY - fish.y * height) * 0.00018;

      fish.vx *= 0.96;
      fish.vy *= 0.96;

      fish.x += fish.vx / width;
      fish.y += fish.vy / height;

      const angle = Math.atan2(fish.vy, fish.vx) || fish.phase;
      const size = fish.type === 'fish' ? fish.size : fish.size * 1.45;
      const colors = ['#f6cf69', '#e8b85c', '#9bd1bd', '#f08b6d'];
      const bodyColor = colors[fish.tint];

      context.save();
      context.translate(fish.x * width, fish.y * height);
      context.rotate(angle);

      context.globalAlpha = 0.9;
      context.shadowColor = 'rgba(4,27,27,.28)';
      context.shadowBlur = size * 0.8;
      context.shadowOffsetY = size * 0.35;

      if (fish.type === 'turtle') {
        context.fillStyle = '#3d796d';
        context.beginPath();
        context.ellipse(-size * 0.25, 0, size * 2.1, size * 1.25, 0, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = '#74b49a';
        context.beginPath();
        context.ellipse(-size * 0.3, 0, size * 1.78, size * 1.03, 0, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = 'rgba(22,72,63,.5)';
        context.lineWidth = Math.max(0.7, size * 0.12);
        context.beginPath();
        context.moveTo(-size * 1.65, 0);
        context.lineTo(size * 1.45, 0);
        context.moveTo(-size * 0.65, -size * 0.88);
        context.lineTo(-size * 0.65, size * 0.88);
        context.moveTo(size * 0.45, -size * 0.9);
        context.lineTo(size * 0.45, size * 0.9);
        context.stroke();
        context.fillStyle = '#5b9b83';
        context.beginPath();
        context.moveTo(size * 1.25, -size * 0.32);
        context.bezierCurveTo(size * 1.65, -size * 0.42, size * 1.82, -size * 0.2, size * 2.02, 0);
        context.bezierCurveTo(size * 1.8, size * 0.2, size * 1.62, size * 0.42, size * 1.25, size * 0.32);
        context.fill();
        context.fillStyle = '#d9c66d';
        context.beginPath();
        context.ellipse(size * 2.35, 0, size * 0.55, size * 0.46, 0, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = '#4f927e';
        [[-size * 1.25, -size * 1.08], [-size * 1.25, size * 1.08], [size * 0.7, -size * 1.02], [size * 0.7, size * 1.02]].forEach(([flipperX, flipperY]) => {
          context.beginPath();
          context.moveTo(flipperX - size * 0.65, flipperY);
          context.bezierCurveTo(flipperX, flipperY - size * 0.32, flipperX + size * 0.8, flipperY - size * 0.2, flipperX + size * 0.95, flipperY);
          context.bezierCurveTo(flipperX + size * 0.65, flipperY + size * 0.2, flipperX, flipperY + size * 0.25, flipperX - size * 0.65, flipperY);
          context.closePath();
          context.fill();
        });
        context.fillStyle = '#16483f';
        context.beginPath();
        context.arc(size * 2.4, -size * 0.18, Math.max(1, size * 0.14), 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = '#16483f';
        context.lineWidth = Math.max(0.6, size * 0.08);
        context.beginPath();
        context.arc(size * 2.47, size * 0.12, size * 0.23, 0.1, 1.15);
        context.stroke();
      } else if (fish.type === 'dolphin') {
        context.fillStyle = '#6ba5ae';
        context.beginPath();
        context.moveTo(size * 2.9, -size * 0.05);
        context.bezierCurveTo(size * 1.5, -size * 1.2, -size * 1.2, -size * 0.85, -size * 1.75, 0);
        context.bezierCurveTo(-size * 0.8, size * 0.85, size * 1.6, size * 1.15, size * 2.9, -size * 0.05);
        context.fill();
        context.beginPath();
        context.moveTo(-size * 1.2, 0);
        context.lineTo(-size * 2.7, -size * 1.05);
        context.lineTo(-size * 2.2, -size * 0.08);
        context.lineTo(-size * 2.7, size * 1.05);
        context.closePath();
        context.fill();
        context.beginPath();
        context.moveTo(-size * 0.15, -size * 0.72);
        context.lineTo(size * 0.35, -size * 1.7);
        context.lineTo(size * 0.78, -size * 0.5);
        context.closePath();
        context.fill();
        context.fillStyle = '#4d858f';
        context.beginPath();
        context.moveTo(size * 0.25, size * 0.35);
        context.lineTo(size * 0.9, size * 1.25);
        context.lineTo(size * 1.35, size * 0.42);
        context.closePath();
        context.fill();
        context.fillStyle = '#c5e0d5';
        context.beginPath();
        context.moveTo(size * 0.65, size * 0.35);
        context.bezierCurveTo(size * 1.35, size * 0.55, size * 1.9, size * 0.42, size * 2.3, size * 0.12);
        context.lineTo(size * 2.15, size * 0.55);
        context.bezierCurveTo(size * 1.55, size * 0.85, size * 1.05, size * 0.78, size * 0.65, size * 0.35);
        context.fill();
        context.fillStyle = '#16483f';
        context.beginPath();
        context.arc(size * 2.12, -size * 0.3, Math.max(1, size * 0.15), 0, Math.PI * 2);
        context.fill();
      } else {
        context.fillStyle = bodyColor;
        context.beginPath();
        context.moveTo(size * 2.25, 0);
        context.bezierCurveTo(size * 1.3, -size * 1.15, -size * 0.65, -size * 1.05, -size * 1.55, 0);
        context.bezierCurveTo(-size * 0.65, size * 1.05, size * 1.3, size * 1.15, size * 2.25, 0);
        context.fill();

        context.shadowColor = 'transparent';
        context.beginPath();
        context.moveTo(-size * 1.25, 0);
        context.lineTo(-size * 2.65, -size * 1.2);
        context.lineTo(-size * 2.4, 0);
        context.lineTo(-size * 2.65, size * 1.2);
        context.closePath();
        context.fill();

        context.fillStyle = '#16483f';
        context.beginPath();
        context.arc(size * 1.42, -size * 0.25, Math.max(1, size * 0.18), 0, Math.PI * 2);
        context.fill();

        context.fillStyle = '#fff';
        context.beginPath();
        context.arc(size * 1.47, -size * 0.3, Math.max(0.5, size * 0.07), 0, Math.PI * 2);
        context.fill();
      }

      context.restore();
    });

    requestAnimationFrame(drawSwarm);
  }

  resizeSwarm();
  requestAnimationFrame(drawSwarm);
}

/* =========================================================
   19. SONAR FLOATING ANIMATION
   ========================================================= */

function startSonarCircleAnimation() {
  const circles = document.querySelectorAll('.hero-art .fish, .hero-art .depth');

  circles.forEach((circle, index) => {
    const distance = 6 + (index % 4) * 3;
    const duration = 2000 + index * 400;
    const delay = -(index * 300);

    circle.animate([
      { transform: 'translateY(0px)' },
      { transform: `translateY(-${distance}px)` },
      { transform: 'translateY(0px)' },
      { transform: `translateY(${distance}px)` },
      { transform: 'translateY(0px)' }
    ], {
      duration,
      delay,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
  });
}

/* =========================================================
   20. PURCHASED DOWNLOAD LIBRARY MODAL
   ========================================================= */

function createLibraryButton() {
  const topbar = document.querySelector('.topbar');
  if (!topbar || $('#libraryButton')) {
    return;
  }

  const actions = topbar.querySelector('.session-actions');
  if (!actions) {
    return;
  }

  const button = document.createElement('button');
  button.id = 'libraryButton';
  button.type = 'button';
  button.textContent = t('btn_my_downloads');

  button.addEventListener('click', showDownloadLibrary);
  actions.insertBefore(button, actions.firstChild);
}

function showDownloadLibrary() {
  const purchased = getPurchasedDatasets();
  const existing = $('#downloadLibraryModal');
  if (existing) {
    existing.remove();
  }

  const modal = document.createElement('div');
  modal.id = 'downloadLibraryModal';
  modal.className = 'download-library-backdrop';

  const rows = purchased.length
    ? purchased.map(item => {
      const dataset = datasets.find(d => d.id === item.id);
      if (!dataset) return '';
      const title = getDatasetTitle(dataset);

      return `
          <div class="download-row">
            <div>
              <strong>${escapeHtml(title)}</strong>
              <small>DS-${String(dataset.id).padStart(2, '0')}</small>
            </div>
            <div class="download-actions" style="display: flex; gap: 6px;">
              <button type="button" data-view-id="${dataset.id}">${t('library_view_data')}</button>
            </div>
          </div>
        `;
    }).join('')
    : `<p>${t('library_empty')}</p>`;

  modal.innerHTML = `
    <section class="download-library" role="dialog" aria-modal="true" style="max-width: 520px; width: min(520px, 100%); background: var(--paper); padding: 32px; box-shadow: 0 25px 90px rgba(0,20,35,.35);">
      <div class="download-library-head" style="display: flex; justify-content: space-between; align-items: start; border-bottom: 1px solid var(--line); padding-bottom: 20px; margin-bottom: 20px;">
        <div>
          <p class="eyebrow">${t('library_eyebrow')}</p>
          <h2 style="margin: 0; font-size: 28px;">${t('library_title')}</h2>
        </div>
        <button class="download-close payment-close" id="downloadLibraryClose" type="button" style="font-size: 26px; border: 0; background: none; cursor: pointer;">×</button>
      </div>

      <p class="download-library-intro" style="color: var(--muted); font-size: 13px; margin-bottom: 24px;">
        ${t('library_intro')}
      </p>

      <div class="download-list" style="display: flex; flex-direction: column; gap: 12px; max-height: 50vh; overflow-y: auto;">
        ${rows}
      </div>
    </section>
  `;

  document.body.appendChild(modal);

  $('#downloadLibraryClose')?.addEventListener('click', () => modal.remove());

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.remove();
    }
  });

  modal.querySelectorAll('[data-view-id]').forEach(button => {
    button.addEventListener('click', () => {
      const dataset = datasets.find(d => d.id === Number(button.dataset.viewId));
      if (dataset) {
        modal.remove();
        downloadDataset(dataset);
      }
    });
  });
}

/* =========================================================
   21. BRAND & FOOTER
   ========================================================= */

function updateBrandText() {
  document.querySelectorAll('.topbar .brand, .auth-brand').forEach(brand => {
    const titleSpan = brand.querySelector('[data-i18n="app_title"]');
    if (titleSpan) {
      titleSpan.textContent = t('app_title');
    }
  });

  const libraryBtn = $('#libraryButton');
  if (libraryBtn) {
    libraryBtn.textContent = t('btn_my_downloads');
  }

  const welcomeBtn = $('#welcomeEmailButton');
  if (welcomeBtn) {
    welcomeBtn.textContent = t('btn_welcome_email');
  }

  const logoutBtn = $('#backToLogin');
  if (logoutBtn) {
    logoutBtn.textContent = t('btn_logout');
  }
}

/* =========================================================
   22. KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') {
    return;
  }

  closePhotoPreview();
  closeCheckout();

  const wallet = $('#walletModal');
  if (wallet) {
    wallet.hidden = true;
  }

  const library = $('#downloadLibraryModal');
  if (library) {
    library.remove();
  }
});

/* =========================================================
   23. INITIALIZATION
   ========================================================= */

function initializeDataSwarm() {
  // 1. Setup Language
  setLanguage(currentLang);
  setupLanguagePickers();

  // 2. Setup Components & Events
  setupRedeemForm();
  setupLogin();
  setupLogout();
  setupWelcomeEmail();
  setupSearchAndFilters();
  setupContributorForm();
  setupAskAssistant();
  setupOllamaChat();
  setupPhotoModal();
  setupSwarm();
  setupBalanceButton();
  createLibraryButton();

  // 3. Render Catalog & Update Displays
  renderProducts();
  renderObservationMap();
  updateBalanceDisplay();
  updateBrandText();

  // 4. Start Animations
  startSonarCircleAnimation();

  // 5. Restore Previous Login
  restoreLogin();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeDataSwarm);
} else {
  initializeDataSwarm();
}
