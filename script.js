// Futuro codice JavaScript per interattività

document.addEventListener('DOMContentLoaded', () => {
    const langItBtn = document.getElementById('lang-it');
    const langEnBtn = document.getElementById('lang-en');

    const translations = {
        it: {
            personal_data_title: 'Dati personali',
            birth_date_label: 'Data di nascita:',
            birth_date_value: '14 aprile 1959, Milano',
            nationality_label: 'Nazionalità:',
            nationality_value: 'Italiana',
            education_title: 'Formazione',
            degree_title: 'Laurea in Scienze e Tecnologie Alimentari',
            thesis_note: 'Tesi sperimentale pubblicata',
            diploma_title: 'Diploma di Maturità Classica',
            diploma_location: 'Milano',
            training_note: 'Partecipazione continua a corsi di aggiornamento tecnico e manageriale.',
            languages_title: 'Lingue',
            english_label: 'Inglese:',
            english_level: 'Buona padronanza scritta e orale',
            french_label: 'Francese:',
            french_level: 'Livello base',
            experience_title: 'Esperienze professionali',
            job1_title: 'Head of Service Radiology',
            job1_duration: 'Gen 2012 - Dic 2024 (13 anni)',
            job1_location: 'Milano, Lombardia, Italia · On-site',
            job1_desc1: "Comprovata esperienza nella gestione end-to-end dell'assistenza tecnica su apparecchiature elettromedicali con responsabilità del team operativo a livello nazionale e del pool dedicato al Servizio Clienti.",
            skills_label_job1: 'Competenze:',
            job1_skills: 'Leadership strategica e gestione Stakeholder, Leadership operativa e Service Excellence.',
            job2_title: 'Group Brand Manager',
            job2_duration: 'Gen 1999 - Dic 2011 (13 anni)',
            job2_location: 'Milano, Lombardia, Italia',
            job2_desc1: 'Responsabile di una classe di farmaci per un fatturato complessivo di oltre 40 M Euro. Ho gestito il lancio di alcuni prodotti sviluppando progetti di collaborazione cross-funzionali (OTC, Woman Health e Diabete).',
            skills_label_job2: 'Competenze:',
            job2_skills: 'Pubbliche relazioni, Costruzione di relazioni.',
            job3_title: 'Group Product Manager Linea Diabete SelfTesting',
            job3_duration: 'Gen 1990 - Dic 1998 (9 anni)',
            job3_location: 'Milano, Lombardia, Italia · On-site',
            job3_desc1: "Gestisco un team costituito da Product Manager e assistenti Servizio Clienti, occupandomi del lancio di nuovi prodotti e collaborando direttamente con la filiale U.S. per il lancio di un prodotto nel mercato americano. Mi sono occupata di Licensing e ho partecipato a progetti inter-divisionali, inclusi quelli relativi alla certificazione della qualità aziendale.",
            skills_label_job3: 'Competenze:',
            job3_skills: 'Pubbliche relazioni, Sviluppo KOL, Pianificazione strategica, Sviluppo leadership, Marketing del prodotto, Presentazioni, Comunicazione.',
            job4_title: 'Product Manager della Linea Diabete',
            job4_duration: 'Lug 1986 - Dic 1989 (3 anni 6 mesi)',
            job4_location: 'Milano, Lombardia, Italia',
            job4_desc1: "Dopo una breve, significativa esperienza di vendita in qualità di Product Specialist, ricopro la posizione di Training and Customer Service Manager. Nel ruolo mi occupo della formazione della Rete Vendita su un'ampia e diversificata linea di prodotti diagnostici. Ho altresì organizzato il reparto di Customer Service - Linea Autodiagnosi per garantire supporto ai pazienti su prodotti per il controllo domiciliare del diabete e delle sue complicanze.",
            skills_label_job4: 'Competenze:',
            job4_skills: 'Pubbliche relazioni, Sviluppo campagne educazionali, Pianificazione eventi, Analisi finanziaria, Presentazioni.',
            job5_title: 'Ricerca e collaborazioni',
            job5_desc1: 'Ricerca e collaborazioni con aziende del settore alimentare per il controllo qualità e igiene ambientale.',
            job5_desc2: 'Stage presso la Food and Drug Administration (1984).',
            contact_title: 'Contatti',
            privacy_policy: 'Autorizzo il trattamento dei miei dati personali ai sensi dell’art. 13 del D. Lgs 196 del 30 giugno 2003 e dell’art. 13 del GDPR (Regolamento UE 2016/679).',
        },
        en: {
            personal_data_title: 'Personal Data',
            birth_date_label: 'Date of birth:',
            birth_date_value: 'April 14, 1959, Milan',
            nationality_label: 'Nationality:',
            nationality_value: 'Italian',
            education_title: 'Education',
            degree_title: 'Degree in Food Science and Technology',
            thesis_note: 'Published experimental thesis',
            diploma_title: 'Classical Maturity Diploma',
            diploma_location: 'Milan',
            training_note: 'Continuous participation in technical and managerial training courses.',
            languages_title: 'Languages',
            english_label: 'English:',
            english_level: 'Good written and oral proficiency',
            french_label: 'French:',
            french_level: 'Basic level',
            experience_title: 'Professional Experience',
            job1_title: 'Head of Service Radiology',
            job1_duration: 'Jan 2012 - Dec 2024 (13 years)',
            job1_location: 'Milan, Lombardy, Italy · On-site',
            job1_desc1: 'Proven experience in the end-to-end management of technical assistance for electromedical equipment with responsibility for the national operational team and the pool dedicated to Customer Service.',
            skills_label_job1: 'Skills:',
            job1_skills: 'Strategic leadership and Stakeholder management, Operational leadership and Service Excellence.',
            job2_title: 'Group Brand Manager',
            job2_duration: 'Jan 1999 - Dec 2011 (13 years)',
            job2_location: 'Milan, Lombardy, Italy',
            job2_desc1: 'Responsible for a class of drugs with a total turnover of over 40 M Euro. I managed the launch of some products by developing cross-functional collaboration projects (OTC, Woman Health and Diabetes).',
            skills_label_job2: 'Skills:',
            job2_skills: 'Public relations, Relationship building.',
            job3_title: 'Group Product Manager Diabetes SelfTesting Line',
            job3_duration: 'Jan 1990 - Dec 1998 (9 years)',
            job3_location: 'Milan, Lombardy, Italy · On-site',
            job3_desc1: 'I manage a team consisting of Product Managers and Customer Service assistants, dealing with the launch of new products and collaborating directly with the U.S. branch for the launch of a product in the American market. I was in charge of Licensing and participated in inter-divisional projects, including those related to corporate quality certification.',
            skills_label_job3: 'Skills:',
            job3_skills: 'Public relations, KOL development, Strategic planning, Leadership development, Product marketing, Presentations, Communication.',
            job4_title: 'Product Manager of the Diabetes Line',
            job4_duration: 'Jul 1986 - Dec 1989 (3 years 6 months)',
            job4_location: 'Milan, Lombardy, Italy',
            job4_desc1: 'After a brief, significant sales experience as a Product Specialist, I held the position of Training and Customer Service Manager. In this role, I am in charge of training the sales network on a wide and diversified line of diagnostic products. I have also organized the Customer Service department - Self-diagnosis Line to ensure support for patients on products for home monitoring of diabetes and its complications.',
            skills_label_job4: 'Skills:',
            job4_skills: 'Public relations, Development of educational campaigns, Event planning, Financial analysis, Presentations.',
            job5_title: 'Research and collaborations',
            job5_desc1: 'Research and collaborations with companies in the food sector for quality control and environmental hygiene.',
            job5_desc2: 'Internship at the Food and Drug Administration (1984).',
            contact_title: 'Contact',
            privacy_policy: 'I authorize the processing of my personal data pursuant to art. 13 of Legislative Decree 196 of 30 June 2003 and art. 13 of the GDPR (EU Regulation 2016/679).',
        }
    };

    function setLanguage(lang) {
        document.documentElement.setAttribute('data-lang', lang);
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    langItBtn.addEventListener('click', () => setLanguage('it'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));
});
