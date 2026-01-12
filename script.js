// script.js

const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_facilities: "Facilities",
    nav_doctors: "Doctors",
    nav_contact: "Contact",
    nav_appointment: "Book appointment",
    hero_kicker: "24/7 Emergency-ready",
    hero_title:
      "Modern care for every family, powered by advanced technology.",
    hero_title_hospital: "Annapurna Nursing Home",
    hero_subtitle:
      "From critical care to everyday health, our specialists, nurses, and diagnostics work as one team to keep you safe.",
    hero_btn_primary: "Book an appointment",
    hero_btn_secondary: "View departments",
    hero_metric_1_label: "Patients cared for",
    hero_metric_2_label: "Specialist doctors",
    hero_metric_3_label: "Average rating",
    hero_card_kicker: "Live patient vitals",
    hero_card_status: "ICU beds monitored",
    hero_card_heart: "Cardiac",
    hero_monitor_label: "Telemetry • ECG feed",
    hero_monitor_hr: "Heart rate",
    hero_monitor_bp: "Blood pressure",
    hero_monitor_spo2: "SpO₂",
    hero_patients_label: "Patients monitored in ICU",
    hero_rating_label: "Patient satisfaction",
    home_services_kicker: "Care you can trust",
    home_services_title: "Comprehensive care under one roof",
    home_services_sub:
      "Digital records, bedside monitoring, and a multidisciplinary team for faster diagnosis and recovery.",
    home_service_1_title: "Emergency & trauma",
    home_service_1_desc:
      "Dedicated resuscitation bay, triage, and rapid imaging for time-critical cases.",
    home_service_2_title: "Advanced diagnostics",
    home_service_2_desc:
      "CT, ultrasound, digital X‑ray, and on-site lab for same‑day reports.",
    home_service_3_title: "In-patient care",
    home_service_3_desc:
      "Comfort-first rooms with continuous nursing and specialist rounds.",
    home_highlights_kicker: "Why families choose us",
    home_highlights_title: "Hospital highlights",
    home_highlights_sub:
      "Focused on safety, transparency, and timely communication with families.",
    home_highlight_1_title: "Transparent updates",
    home_highlight_1_desc:
      "Regular status calls and counselling for attendants during critical care.",
    home_highlight_2_title: "Infection control",
    home_highlight_2_desc:
      "Strict hygiene protocols, regular audits, and isolated ICU zones.",
    home_highlight_3_title: "Cashless tie‑ups",
    home_highlight_3_desc:
      "Support for leading insurance providers and TPA networks.",
    about_kicker: "Who we are",
    about_title: "A neighbourhood hospital with tertiary-level standards",
    about_intro:
      "Annapurna Nursing Home brings together experienced clinicians, nurses, and technicians with a strong focus on emergency medicine, women’s health, and chronic care.",
    about_p1:
      "What began as a 15‑bed facility has grown into a multi‑speciality hospital while retaining the warmth of a family practice.",
    about_p2:
      "The team prioritises ethical treatment, clear billing, and honest communication with every family.",
    about_mission_title: "Our mission",
    about_mission_body:
      "Deliver safe, evidence‑based medical care that is accessible, transparent, and rooted in empathy.",
    about_vision_title: "Our vision",
    about_vision_body:
      "To be the first call for families in our neighbourhood for any medical emergency or long‑term care need.",
    about_stats_patients: "Total patients served",
    about_stats_years: "Years serving the community",
    about_stats_departments: "Clinical departments",
    about_leadership_title: "Clinical leadership",
    facilities_kicker: "Infrastructure",
    facilities_title: "Facilities designed around patient safety",
    facilities_intro:
      "From emergency stabilisation to post‑operative rehabilitation, every area is designed to reduce delays and improve outcomes.",
    facilities_icu_title: "Critical care & ICU",
    facilities_icu_desc:
      "Monitored ICU beds with central nursing station, ventilators, and infusion pumps.",
    facilities_ot_title: "Operation theatres",
    facilities_ot_desc:
      "Well‑equipped OT with laminar airflow and infection‑control compliant workflow.",
    facilities_labs_title: "Diagnostics & pharmacy",
    facilities_labs_desc:
      "24×7 lab, in‑house pharmacy, and imaging services to avoid delays.",
    facilities_badge_1: "24×7 emergency",
    facilities_badge_2: "Central oxygen",
    facilities_badge_3: "Digital records",
    facilities_badge_4: "Wheelchair access",
    doctors_kicker: "Our team",
    doctors_title: "Specialists leading your care",
    doctors_intro:
      "Consultants from key disciplines work closely with nursing and diagnostics to create a single, coordinated treatment plan.",
    doctors_filter_label: "Filter by speciality",
    doctors_card_1_name: "Dr. Ananya Rao",
    doctors_card_1_role: "Consultant physician",
    doctors_card_1_meta: "Internal medicine • Diabetes care",
    doctors_card_2_name: "Dr. Vikram Shetty",
    doctors_card_2_role: "Anaesthesiologist & intensivist",
    doctors_card_2_meta: "ICU • OT",
    doctors_card_3_name: "Dr. Meera Kulkarni",
    doctors_card_3_role: "Obstetrician & gynaecologist",
    doctors_card_3_meta: "Women’s health • High‑risk pregnancy",
    doctors_card_know_more: "View profile",
    doctors_modal_title: "Doctor profile",
    doctors_modal_experience: "Years of experience",
    doctors_modal_languages: "Languages",
    doctors_modal_close: "Close",
    contact_kicker: "Contact & location",
    contact_title: "Reach Annapurna Nursing Home",
    contact_intro:
      "Call in emergencies, or use the form for non‑urgent appointments and questions.",
    contact_form_name: "Full name",
    contact_form_phone: "Mobile number",
    contact_form_reason: "Reason for visit",
    contact_form_department: "Preferred department",
    contact_form_date: "Preferred date",
    contact_form_message: "Additional details",
    contact_form_submit: "Request appointment",
    contact_form_helper:
      "Online requests are reviewed during OPD hours. For emergencies, call the hospital directly.",
    contact_info_title: "24×7 emergency contact",
    contact_info_emergency: "Emergency",
    contact_info_opd: "OPD & appointments",
    contact_info_email: "General email",
    contact_info_address_title: "Address",
    footer_text:
      "Annapurna Nursing Home. For emergencies, please call before starting.",
    toast_success: "Form submitted. Our team will call you shortly.",
  },
  kn: {
    nav_home: "ಮುಖಪುಟ",
    nav_about: "ಬಗ್ಗೆ",
    nav_facilities: "ಸೌಕರ್ಯಗಳು",
    nav_doctors: "ವೈದ್ಯರು",
    nav_contact: "ಸಂಪರ್ಕ",
    nav_appointment: "ನೇಮಕಾತಿ ಬುಕ್ ಮಾಡಿ",
    hero_kicker: "೨೪/೭ ತುರ್ತು ಚಿಕಿತ್ಸೆಗೆ ಸಿದ್ದ",
    hero_title: "ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ಆಧುನಿಕ ಆರೈಕೆ, ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನದಿಂದ.",
    hero_title_hospital: "ಅನ್ನಪೂರ್ಣ ನರ್ಸಿಂಗ್ ಹೋಮ್",
    hero_subtitle:
      "ತುರ್ತು ಚಿಕಿತ್ಸೆ ಇಂದ ದಿನನಿತ್ಯದ ಆರೋಗ್ಯದವರೆಗೂ, ನಮ್ಮ ತಜ್ಞರು, ನರ್ಸ್‌ಗಳು ಮತ್ತು ನಿದಾನ ವಿಭಾಗವೊಂದು ತಂಡವಾಗಿ ನಿಮ್ಮ ಸುರಕ್ಷತೆಗಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ.",
    hero_btn_primary: "ನೇಮಕಾತಿ ಬುಕ್ ಮಾಡಿ",
    hero_btn_secondary: "ವಿಭಾಗಗಳನ್ನು ನೋಡಿ",
    hero_metric_1_label: "ಸೇವಿಸಿದ ರೋಗಿಗಳು",
    hero_metric_2_label: "ತಜ್ಞ ವೈದ್ಯರು",
    hero_metric_3_label: "ಸರಾಸರಿ ರೇಟಿಂಗ್",
    hero_card_kicker: "ಪ್ರತ್ಯಕ್ಷ ಜೀವಚಿಹ್ನೆಗಳು",
    hero_card_status: "ICU ಹಾಸಿಗೆಗಳ ನಿಗಾವಳಿ",
    hero_card_heart: "ಹೃದಯ",
    hero_monitor_label: "ಟೆಲಿಮೆಟ್ರಿ • ECG ಫೀಡ್",
    hero_monitor_hr: "ಹೃದಯ ಬಡಿತ",
    hero_monitor_bp: "ರಕ್ತದ ಒತ್ತಡ",
    hero_monitor_spo2: "SpO₂",
    hero_patients_label: "ICUದಲ್ಲಿ ನಿಗಾವಳಿಯಲ್ಲಿ ಇರುವ ರೋಗಿಗಳು",
    hero_rating_label: "ರೋಗಿಗಳ ತೃಪ್ತಿ",
    home_services_kicker: "ನಂಬಿಕೆಗೆ ಪಾತ್ರ ಆರೈಕೆ",
    home_services_title: "ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಸಮಗ್ರ ಚಿಕಿತ್ಸಾ ಸೌಲಭ್ಯ",
    home_services_sub:
      "ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳು, ಹಾಸಿಗೆ ಪಕ್ಕದ ನಿಗಾವಳಿ ಮತ್ತು ಬಹುಶಾಖಾ ತಂಡದಿಂದ ವೇಗವಾದ ನಿದಾನ ಮತ್ತು ಚೇತರಿಕೆ.",
    home_service_1_title: "ತುರ್ತು ಮತ್ತು ಗಾಯ ಚಿಕಿತ್ಸೆ",
    home_service_1_desc:
      "ತುರ್ತು ಪ್ರಕರಣಗಳಿಗೆ ವಿಶಿಷ್ಟ ಸ್ಥಳ, ತಕ್ಷಣದ ಪರಿಶೀಲನೆ ಮತ್ತು ವೇಗವಾದ ಇಮೇಜಿಂಗ್.",
    home_service_2_title: "ಆಧುನಿಕ ನಿದಾನ ಸೌಲಭ್ಯ",
    home_service_2_desc:
      "CT, ಅಲ್ಟ್ರಾಸೌಂಡ್, ಡಿಜಿಟಲ್ ಎಕ್ಸ್-ರೆ ಮತ್ತು ಒಳಗೃಹ ಪ್ರಯೋಗಾಲಯದಲ್ಲಿ ಅದೇ ದಿನ ವರದಿ.",
    home_service_3_title: "ಆಂತರಿಕ ಚಿಕಿತ್ಸಾ ವಿಭಾಗ",
    home_service_3_desc:
      "ಆರಾಮದಾಯಕ ಕೊಠಡಿಗಳು, ನಿರಂತರ ನರ್ಸಿಂಗ್ ಮತ್ತು ತಜ್ಞರ ಪರಿಶೀಲನೆ.",
    home_highlights_kicker: "ಕುಟುಂಬಗಳು ನಮ್ಮನ್ನು ಆರಿಸಿಕೊಳ್ಳುವ ಕಾರಣ",
    home_highlights_title: "ಆಸ್ಪತ್ರೆಯ ವಿಶೇಷತೆಗಳು",
    home_highlights_sub:
      "ಸುರಕ್ಷತೆ, ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಕುಟುಂಬದೊಂದಿಗೆ ಸಮಯೋಚಿತ ಸಂವಹನವೇ ನಮ್ಮ ಕೇಂದ್ರಬಿಂದು.",
    home_highlight_1_title: "ಪಾರದರ್ಶಕ ಮಾಹಿತಿ",
    home_highlight_1_desc:
      "ತುರ್ತು ಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಪ್ರತಿನಿತ್ಯ ಸ್ಥಿತಿ ಮಾಹಿತಿ ಮತ್ತು ಸಮಾಲೋಚನೆ.",
    home_highlight_2_title: "ಸಂಕ್ರಾಮಕ ನಿಯಂತ್ರಣ",
    home_highlight_2_desc:
      "ಕಟ್ಟುನಿಟ್ಟಿನ ಸ್ವಚ್ಛತೆ, ನಿಯಮಿತ ಪರಿಶೀಲನೆ ಮತ್ತು ಪ್ರತ್ಯೇಕ ICU ವಲಯ.",
    home_highlight_3_title: "ಕ್ಯಾಶ್‌ಲೆಸ್ ಸೌಲಭ್ಯ",
    home_highlight_3_desc:
      "ಮುಖ್ಯ ವಿಮಾ ಕಂಪನಿಗಳು ಮತ್ತು TPA ಗಳೊಂದಿಗೆ ಒಪ್ಪಂದಗಳು.",
    about_kicker: "ನಾವು ಯಾರು",
    about_title: "ಮಾಹಿತಿ ಮಟ್ಟದ ಮಾನದಂಡಗಳಿರುವ ನೆರೆಹೊಸಗೆ ಆಸ್ಪತ್ರೆ",
    about_intro:
      "ಅನ್ನಪೂರ್ಣ ನರ್ಸಿಂಗ್ ಹೋಮ್ ತುರ್ತು ವೈದ್ಯಕೀಯ, ಮಹಿಳಾ ಆರೋಗ್ಯ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಕಾಯಿಲೆಗಳ ಆರೈಕೆಗೆ ಕೇಂದ್ರೀಕರಿಸಿದ ಅನುಭವಿಗಳ ತಂಡವನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ.",
    about_p1:
      "೧೫ ಹಾಸಿಗೆಗಳ ಚಿಕ್ಕ ಘಟಕವಾಗಿ ಆರಂಭವಾದುದು, ಇಂದು ಮನೆಯಂತಹ ಆತ್ಮೀಯತೆಯೊಂದಿಗೆ ಮಲ್ಟಿಸ್ಪೆಷಾಲಿಟಿ ಆಸ್ಪತ್ರೆಗೆ ವಿಸ್ತರಿಸಿದೆ.",
    about_p2:
      "ನೈತಿಕ ಚಿಕಿತ್ಸೆ, ಸ್ಪಷ್ಟ ಬಿಲ್ ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ಸಂವಹನ ನಮ್ಮ ತಂಡದ ಆದ್ಯತೆ.",
    about_mission_title: "ನಮ್ಮ ಉದ್ದೇಶ",
    about_mission_body:
      "ಸುರಕ್ಷಿತ, ವೈಜ್ಞಾನಿಕ ಆಧಾರಿತ ಚಿಕಿತ್ಸೆ ಅನ್ನು ಎಲ್ಲರಿಗೂ ಪಾರದರ್ಶಕವಾಗಿ ಮತ್ತು ಕರುಣೆಯಿಂದ ನೀಡುವುದು.",
    about_vision_title: "ನಮ್ಮ ದೃಷ್ಟಿ",
    about_vision_body:
      "ನಮ್ಮ ಸುತ್ತಮುತ್ತಲಿನ ಕುಟುಂಬಗಳಿಗೆ ಯಾವುದೇ ತುರ್ತು ಅಥವಾ ದೀರ್ಘಕಾಲದ ವೈದ್ಯಕೀಯ ಅವಶ್ಯಕತೆಗೆ ಮೊದಲ ಕರೆಗಾಗುವುದು.",
    about_stats_patients: "ಒಟ್ಟು ಸೇವಿಸಿದ ರೋಗಿಗಳು",
    about_stats_years: "ಸೇವೆಯ ವರ್ಷಗಳು",
    about_stats_departments: "ವೈದ್ಯಕೀಯ ವಿಭಾಗಗಳು",
    about_leadership_title: "ಕ್ಲಿನಿಕಲ್ ನೇತೃತ್ವ",
    facilities_kicker: "ಸೌಕರ್ಯಗಳು",
    facilities_title: "ರೋಗಿ ಸುರಕ್ಷತೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಮೂಲಸೌಕರ್ಯ",
    facilities_intro:
      "ತುರ್ತು ಸ್ಥಿರೀಕರಣದಿಂದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ನಂತರ ಪುನರ್ವಸತಿಯವರೆಗೂ, ಪ್ರತಿಯೊಂದು ವಿಭಾಗವು ವಿಳಂಬ ಕಡಿಮೆ ಮಾಡುವುದಕ್ಕಾಗಿ ರೂಪಿಸಲಾಗಿದೆ.",
    facilities_icu_title: "ಗಂಭೀರ ಆರೈಕೆ ಮತ್ತು ICU",
    facilities_icu_desc:
      "ಮಧ್ಯ ನರ್ಸಿಂಗ್ ಸ್ಟೇಷನ್, ವೆಂಟಿಲೇಟರ್‌ಗಳು ಮತ್ತು ಇನ್ಫ್ಯೂಷನ್ ಪಂಪ್‌ಗಳೊಂದಿಗೆ ICU ಹಾಸಿಗೆಗಳು.",
    facilities_ot_title: "ಆಪರೇಷನ್ ಥಿಯೇಟರ್‌ಗಳು",
    facilities_ot_desc:
      "ಇನ್‌ಫೆಕ್ಷನ್ ನಿಯಂತ್ರಣ ಮಾನದಂಡಗಳಿಗೆ ಅನುಗುಣವಾದ ಒಟಿಗಳು ಮತ್ತು ಕಾರ್ಯಪ್ರವಾಹ.",
    facilities_labs_title: "ನಿದಾನ ಮತ್ತು ಫಾರ್ಮಸಿ",
    facilities_labs_desc:
      "೨೪×೭ ಪ್ರಯೋಗಾಲಯ, ಒಳಗೃಹ ಫಾರ್ಮಸಿ ಮತ್ತು ಇಮೇಜಿಂಗ್ ಸೇವೆಗಳು.",
    facilities_badge_1: "೨೪×೭ ತುರ್ತು ಸೇವೆ",
    facilities_badge_2: "ಕೇಂದ್ರ ಆಮ್ಲಜನಕ",
    facilities_badge_3: "ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳು",
    facilities_badge_4: "ವ್ಹೀಲ್‌ಚೇರ್ ಸೌಲಭ್ಯ",
    doctors_kicker: "ನಮ್ಮ ತಂಡ",
    doctors_title: "ನಿಮ್ಮ ಆರೈಕೆಯನ್ನು ಮುನ್ನಡೆಸುವ ತಜ್ಞರು",
    doctors_intro:
      "ಮುಖ್ಯ ಶಾಖೆಗಳ ಸಲಹೆಗಾರರು, ನರ್ಸಿಂಗ್ ಮತ್ತು ನಿದಾನ ವಿಭಾಗಗಳೊಂದಿಗೆ ಸೇರಿ ಒಂದೇ ಚಿಕಿತ್ಸಾ ಯೋಜನೆ ರೂಪಿಸುತ್ತಾರೆ.",
    doctors_filter_label: "ವಿಶೇಷತೆಗೆ ಅನುಸಾರ ಫಿಲ್ಟರ್ ಮಾಡಿ",
    doctors_card_1_name: "ಡಾ. ಅನುನ್ಯಾ ರಾವ್",
    doctors_card_1_role: "ಕನ್ಸಲ್ಟಂಟ್ ಫಿಸಿಷಿಯನ್",
    doctors_card_1_meta: "ಆಂತರಿಕ ವೈದ್ಯಕೀಯ • ಡಯಾಬಿಟಿಸ್ ಆರೈಕೆ",
    doctors_card_2_name: "ಡಾ. ವಿಕ್ರಂ ಶೆಟ್ಟಿ",
    doctors_card_2_role: "ಅನಸ್ತೇಸಿಯಾಲಜಿಸ್ಟ್ ಮತ್ತು ಇಂಟೆನ್ಸಿವಿಸ್ಟ್",
    doctors_card_2_meta: "ICU • OT",
    doctors_card_3_name: "ಡಾ. ಮೀನಾ ಕುಲಕರ್ಣಿ",
    doctors_card_3_role: "ಸ್ತ್ರೀರೋಗ ಮತ್ತು ಪ್ರಸೂತಿ ತಜ್ಞರು",
    doctors_card_3_meta: "ಮಹಿಳಾ ಆರೋಗ್ಯ • ಹೈ‑ರಿಸ್ಕ್ ಗರ್ಭಧಾರಣೆ",
    doctors_card_know_more: "ಪ್ರೊಫೈಲ್ ನೋಡಿ",
    doctors_modal_title: "ಡಾಕ್ಟರ್ ಪ್ರೊಫೈಲ್",
    doctors_modal_experience: "ಅನುಭವ (ವರ್ಷಗಳು)",
    doctors_modal_languages: "ಭಾಷೆಗಳು",
    doctors_modal_close: "ಮುಚ್ಚಿ",
    contact_kicker: "ಸಂಪರ್ಕ ಮತ್ತು ಸ್ಥಳ",
    contact_title: "ಅನ್ನಪೂರ್ಣ ನರ್ಸಿಂಗ್ ಹೋಮ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ",
    contact_intro:
      "ತುರ್ತು ಪ್ರಕರಣಗಳಿಗೆ ಕಾಲ್ ಮಾಡಿ, ಬೇರೆ ಪ್ರಶ್ನೆಗಳು ಮತ್ತು OPD ನೇಮಕಾತಿಗಳಿಗೆ ಫಾರ್ಮ್ ಬಳಸಿ.",
    contact_form_name: "ಪೂರ್ಣ ಹೆಸರು",
    contact_form_phone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    contact_form_reason: "ಬೇಟಿಯ ಕಾರಣ",
    contact_form_department: "ಆಯ್ಕೆ ಮಾಡಿದ ವಿಭಾಗ",
    contact_form_date: "ಆದ್ಯತೆಯ ದಿನಾಂಕ",
    contact_form_message: "ಹೆಚ್ಚಿನ ವಿವರಗಳು",
    contact_form_submit: "ನೇಮಕಾತಿ ಕೋರಿಕೆ ಕಳುಹಿಸಿ",
    contact_form_helper:
      "ಆನ್‌ಲೈನ್ ವಿನಂತಿಗಳನ್ನು OPD ಸಮಯದಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ. ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ ದಯವಿಟ್ಟು ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ.",
    contact_info_title: "೨೪×೭ ತುರ್ತು ಸಂಪರ್ಕ",
    contact_info_emergency: "ತುರ್ತು",
    contact_info_opd: "OPD ಮತ್ತು ನೇಮಕಾತಿಗಳು",
    contact_info_email: "ಸಾಮಾನ್ಯ ಇ‑ಮೇಲ್",
    contact_info_address_title: "ವಿಳಾಸ",
    footer_text:
      "ಅನ್ನಪೂರ್ಣ ನರ್ಸಿಂಗ್ ಹೋಮ್. ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ ಹೊರಡುವ ಮುನ್ನ ದಯವಿಟ್ಟು ಕರೆ ಮಾಡಿ.",
    toast_success: "ಫಾರ್ಮ್ ಕಳುಹಿಸಲಾಗಿದೆ. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ಕರೆ ಮಾಡುತ್ತದೆ.",
  },
};


// CONSTANTS
const LANG_KEY = "an_hospital_lang";
const THEME_KEY = "an_hospital_theme";

function getCurrentLang() {
  const stored = localStorage.getItem(LANG_KEY);
  return (stored === "en" || stored === "kn") ? stored : "en";
}

function getCurrentTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Return stored preference, system default, or light
  return stored || (systemPrefersDark ? 'dark' : 'light');
}

function setCurrentLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

function setCurrentTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update toggle state
  const toggle = document.querySelector('.theme-toggle');
  toggle.className = `theme-toggle ${theme}`;
}

function translatePage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-i18n-value]").forEach((el) => {
    const key = el.getAttribute("data-i18n-value");
    if (dict[key]) el.setAttribute("value", dict[key]);
  });

  document.documentElement.lang = lang === "kn" ? "kn" : "en";

  // Update lang toggle
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (activeBtn) activeBtn.classList.add("active");
}

function initLanguage() {
  const lang = getCurrentLang();
  translatePage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const newLang = btn.getAttribute("data-lang");
      setCurrentLang(newLang);
      translatePage(newLang);
    });
  });
}

function initTheme() {
  const theme = getCurrentTheme();
  setCurrentTheme(theme);

  // Theme toggle listener
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      setCurrentTheme(nextTheme);
    });
  }

  // System preference change listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      setCurrentTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function initForm() {
  const form = document.querySelector("[data-appointment-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = getCurrentLang();
    const toast = document.createElement("div");
    toast.textContent = translations[lang].toast_success;
    toast.style.cssText = `
      position: fixed; bottom: 1.5rem; right: 1.5rem; 
      background: ${getCurrentTheme() === 'dark' ? '#1e293b' : '#0f172a'};
      color: #e5e7eb; padding: 0.8rem 1.2rem; border-radius: 999px; 
      font-size: 0.85rem; box-shadow: 0 12px 30px rgba(15,23,42,0.4); 
      z-index: 300; transform: translateX(100%); opacity: 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 2500);

    form.reset();
  });
}

function initDoctorsModal() {
  const backdrop = document.querySelector("[data-modal-backdrop]");
  if (!backdrop) return;

  const modalName = backdrop.querySelector("[data-modal-name]");
  const modalRole = backdrop.querySelector("[data-modal-role]");
  const modalExp = backdrop.querySelector("[data-modal-exp]");
  const modalLangs = backdrop.querySelector("[data-modal-langs]");

  document.querySelectorAll("[data-doctor-card]").forEach((card) => {
    card.addEventListener("click", () => {
      modalName.textContent = card.getAttribute("data-doctor-name");
      modalRole.textContent = card.getAttribute("data-doctor-role");
      modalExp.textContent = card.getAttribute("data-doctor-exp") + " yrs";
      modalLangs.textContent = card.getAttribute("data-doctor-langs");
      backdrop.classList.add("active");
    });
  });

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop || e.target.closest("[data-modal-close]")) {
      backdrop.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initTheme();
  initForm();
  initDoctorsModal();
});
