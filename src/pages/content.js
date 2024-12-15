// Personal Information --> #hero section
export const name = "Marcos Cuesta";
export const designation = "Software Engineer";
export const location = "Madrid, Spain";
export const pronouns = "";
export const website = "https://marcoscuesta.com";
export const titles = {
    en: {
        about: "About",
        work: "Work Experience",
        projects: "Projects",
        education: "Education",
        contact: "Contact",
        languages: "Languages",
        certificates: "Certificates",
        skills: "Skills",
    },
    es: {
        about: "Sobre mi",
        work: "Experiencia Laboral",
        projects: "Proyectos",
        education: "Educación",
        contact: "Contacto",
        languages: "Idiomas",
        certificates: "Certificados",
        skills: "Habilidades",
    },
};
// About
export const about = {
    en:
        "Software Engineer with " +
        (new Date().getFullYear() - 2021).toString() +
        " years of experience in the development of RPA processes based on .NET Framework and VB.NET Platform. Passionate about technology and innovation specially in " +
        "the fields of Web development, Backend development and Mobile Development.",
    es:
        "Ingeniero de software con " +
        (new Date().getFullYear() - 2021).toString() +
        " años de experiencia en el desarrollo de procesos RPA basados en la plataforma .NET y VB.NET. Apasionado por la tecnología y la innovación, especialmente en los campos del desarrollo web, desarrollo backend y desarrollo móvil.",
};

// Work Experience --> #work section
export const work = {
    en: [
        {
            from: "July 2023",
            to: "Present",
            role: "Software Engineer",
            org: "NTT Data",
            org_url: "https://nttdata.com",
            location: "Madrid, Spain",
            skills: `Software Engineer on the RPA team, taking on a key role executing and leading in key RPA areas. Stack:  Visual Basic .NET (VB.NET) · C# · Robotic Process Automation (RPA) · UiPath`,
        },
        {
            from: "June 2021",
            to: "July 2023",
            role: "Junior Engineer",
            org: "NTT Data",
            org_url: "https://nttdata.com",
            location: "Madrid, Spain",
            skills: "Junior Engineer in the RPA team. Visual Basic .NET (VB.NET) · C# · Robotic Process Automation (RPA) · UiPath",
        },
    ],
    es: [
        {
            from: "July 2023",
            to: "Present",
            role: "Software Engineer",
            org: "NTT Data",
            org_url: "https://nttdata.com",
            location: "Madrid, Spain",
            skills: `Ingeniero RPA en el equipo de IA, asumiendo un papel clave en la ejecución de las áreas clave de RPA.`,
        },
        {
            from: "June 2021",
            to: "July 2023",
            role: "Junior Engineer",
            org: "NTT Data",
            org_url: "https://nttdata.com",
            location: "Madrid, Spain",
            skills: "Junior Engineer en el equipo RPA. Visual Basic .NET (VB.NET) · C# · Robotic Process Automation (RPA) · UiPath",
        },
    ],
};

// Projects --> #project section
export const projects = {
    en: [
        {
            title: "IberiaEye - Android App",
            description:
                "Android application designed to provide users with real-time traffic camera feeds directly from the DGT (Directorate-General of Traffic). The app integrates seamlessly with the DGT's network, enabling users to stay updated on current traffic situations.",
            url: "https://play.google.com/store/apps/details?id=com.marcoscuesta.camerasdgt",
            tech: "Kotlin,Android,Java",
            image: "/camerasdgt.png",
        },
        {
            title: "Luminary AI Chat",
            description:
                "Windows Desktop app that leverages Groq and their inference tools to chat with users using multiple AI''s. It''s built with C#, WinUI 3, and .NET. The app is designed to provide a seamless conversational experience, leveraging the power of AI to engage users in meaningful interactions.",
            url: "https://luminaryai.marcoscuesta.com/",
            tech: "C#,WinUI",
            image: "/luminaryai.png",
        },
        {
            title: "Client-side Image compressor (comprimetuimagen.com)",
            description: "Web image compressor using Astro and JavaScript.",
            url: "https://comprimetuimagen.com",
            tech: "JavaScript,Astro,HTML & CSS",
            image: "/compressor.png",
        },
    ],
    es: [
        {
            title: "CamarasDGT android App",
            description:
                "Aplicación Android diseñada para proporcionar a los usuarios feeds de cámaras de tráfico en tiempo real directamente desde la DGT (Dirección General de Tráfico). La aplicación se integra perfectamente con la red de la DGT, permitiendo a los usuarios mantenerse actualizados sobre las situaciones de tráfico actuales.",
            url: "https://play.google.com/store/apps/details?id=com.marcoscuesta.camerasdgt",
            tech: "Kotlin,Android,Java",
            image: "/camerasdgt.png",
        },
        {
            title: "Luminary AI Chat",
            description:
                "Aplicación de escritorio de Windows que aprovecha Groq y sus herramientas de inferencia para chatear con los usuarios utilizando múltiples IA. Está construido con C#, WinUI 3 y .NET. La aplicación está diseñada para proporcionar una experiencia conversacional perfecta, aprovechando el poder de la IA para involucrar a los usuarios en interacciones significativas.",
            url: "https://luminaryai.marcoscuesta.com/",
            tech: "C#,WinUI",
            image: "/luminaryai.png",
        },
        {
            title: "Compresor de imagenes (comprimetuimagen.com)",
            description:
                "Compresor de imagenes directamente sobre la web (client-side).",
            url: "comprimetuimagen.com",
            tech: "JavaScript,Astro,HTML & CSS",
            image: "/compressor.png",
        },
    ],
};

// Education --> #education section
export const education = {
    en: [
        {
            from: "2022",
            to: "2026",
            institute: "Universitat Oberta de Catalunya",
            course: "Computer Engineering",
            location: "Madrid, Spain",
        },
    ],
    es: [
        {
            from: "2022",
            to: "2026",
            institute: "Universitat Oberta de Catalunya",
            course: "Ingeniería Informática",
            location: "Madrid, Spain",
        },
        {
            from: "2019",
            to: "2021",
            institute: "CEEP",
            course: "CFGS Desarrollo de aplicaciones multiplataforma",
            location: "Madrid, Spain",
        },
    ],
};
// Contact --> #contact section
export const contact = {
    en: [
        {
            source_name: "marcos@marcoscuesta.com",
            source: "mailto:marcos@marcoscuesta.com",
            title: "Email",
            source_icon: "email-svgrepo-com.svg",
        },
        {
            source_name: "maarcoscuesta18",
            source: "https://github.com/maarcoscuesta18",
            title: "Github",
            source_icon: "github-mark-white.svg",
        },
        {
            source_name: "LinkedIn",
            source: "https://www.linkedin.com/in/marcos-cuesta-abanades",
            title: "LinkedIn",
            source_icon: "LinkedIn-Icon-Logo.wine.svg",
        },
    ],
    es: [
        {
            source_name: "marcos@marcoscuesta.com",
            source: "mailto:marcos@marcoscuesta.com",
            title: "Correo",
            source_icon: "email-svgrepo-com.svg",
        },
        {
            source_name: "maarcoscuesta18",
            source: "https://github.com/maarcoscuesta18",
            title: "Github",
            source_icon: "github-mark-white.svg",
        },
        {
            source_name: "LinkedIn",
            source: "https://www.linkedin.com/in/marcos-cuesta-abanades",
            title: "LinkedIn",
            source_icon: "LinkedIn-Icon-Logo.wine.svg",
        },
    ],
};
// Languages --> #languages section
export const languages = {
    en: [
        {
            language: "Spanish",
            level: "Native",
        },
        {
            language: "English",
            level: "Professional",
        },
    ],
    es: [
        {
            language: "Español",
            level: "Nativo",
        },
        {
            language: "Inglés",
            level: "Profesional",
        },
    ],
};
// Certifications --> #certificate section
export const certificates = {
    en: [
        {
            issued: "2022",
            title: "UiPath Certified Professional Advanced RPA Developer (UiARD)",
            org: "UiPath",
            url: "https://credentials.uipath.com/0617ffd7-239e-41c4-976b-7150acc7cc85?record_view=true",
            description:
                "Certification in UiPath Certified Professional Advanced RPA Developer (UiARD)",
        },
        {
            issued: "2022",
            title: "Automation Anywhere Certified Advanced RPA Professional (Automation 360)",
            org: "Automation Anywhere",
            url: "https://certificates.automationanywhere.com/4e4e4ece-3e2a-45ac-902f-012114f14e61#gs.s9dku9",
            description:
                "Automation Anywhere Certified Advanced RPA Professional (Automation 360)",
        },
        {
            issued: "2022",
            title: "Blue Prism Certified Associate Developer",
            org: "Blue Prism",
            url: "https://www.credly.com/badges/c94ced5e-c52e-4349-9fea-e3e27641996c/public_url",
            description: "Blue Prism Certified Associate Developer",
        },
        {
            issued: "2022",
            title: "ABBYY FlexiCapture 12 Certified Specialist",
            org: "ABBYY",
            url: "https://university.abbyy.com/certs/11356/D60D8EE59F534C91A0A04C7D2215C6EC44623.pdf",
            description: "ABBYY FlexiCapture 12 Certified Specialist",
        },
    ],
    es: [
        {
            issued: "2022",
            title: "UiPath Certified Professional Advanced RPA Developer (UiARD)",
            org: "UiPath",
            url: "https://credentials.uipath.com/0617ffd7-239e-41c4-976b-7150acc7cc85?record_view=true",
            description:
                "Certification in UiPath Certified Professional Advanced RPA Developer (UiARD)",
        },
        {
            issued: "2022",
            title: "Automation Anywhere Certified Advanced RPA Professional (Automation 360)",
            org: "Automation Anywhere",
            url: "https://certificates.automationanywhere.com/4e4e4ece-3e2a-45ac-902f-012114f14e61#gs.s9dku9",
            description:
                "Automation Anywhere Certified Advanced RPA Professional (Automation 360)",
        },
        {
            issued: "2022",
            title: "Blue Prism Certified Associate Developer",
            org: "Blue Prism",
            url: "https://www.credly.com/badges/c94ced5e-c52e-4349-9fea-e3e27641996c/public_url",
            description: "Blue Prism Certified Associate Developer",
        },
        {
            issued: "2022",
            title: "ABBYY FlexiCapture 12 Certified Specialist",
            org: "ABBYY",
            url: "https://university.abbyy.com/certs/11356/D60D8EE59F534C91A0A04C7D2215C6EC44623.pdf",
            description: "ABBYY FlexiCapture 12 Certified Specialist",
        },
    ],
};

export const skills = [
    {
        title: "Visual Basic .NET (VB.NET)",
        source_icon: "visual-studio.svg",
        source: "https://visualstudio.microsoft.com/es/",
    },
    {
        title: "UiPath",
        source_icon: "uipath.svg",
        source: "https://www.uipath.com/",
    },
    {
        title: "C#",
        source_icon: "c-sharp.svg",
        source: "https://docs.microsoft.com/es-es/dotnet/csharp/",
    },
    {
        title: "Java",
        source_icon: "java.svg",
        source: "https://www.java.com/es/",
    },
];
export const privacy_policy_iberiaeye = {
    "en:": `
<p>Privacy Policy of IberiaEye Effective date: ${new Date().toLocaleDateString(
        "en-US",
        { year: "numeric", month: "long", day: "numeric" }
    )}</p>
<p>Introduction: Welcome to IberiaEye, your essential road assistant for the roads of Spain. We are committed to protecting your privacy and handling your data transparently and responsibly. This Privacy Policy details how we treat your information and what rights you have in this regard.</p>
<p>Data we collect: IberiaEye does not collect any personal data from its users. The application only requires internet permissions for optimal operation.</p>
<p>Use of information: Although we do not collect personal data, we use Firebase to analyze the performance of the application and continuously improve its functionality and user experience. These analyses are based on anonymous and aggregated data and cannot be used to identify individual users.</p>
<p>Data sharing: We do not share, sell, or disclose your personal information to third parties, as we do not collect such information.</p>
<p>Data security: Although we do not collect personal data, we prioritize security and take appropriate measures to protect the integrity and security of any information within the application.</p>
<p>User rights: Since we do not collect personal data, you don't need to worry about your rights to access, rectification, deletion, etc. However, we value your feedback and questions about the application and its operation. You can contact us at any time through contact@marcoscuesta.com.</p>
<p>Changes to the Privacy Policy: We may occasionally update this Privacy Policy to reflect changes in our application or for other operational, legal, or regulatory reasons. If we make changes, we will notify you through an application update or other appropriate means.</p>
<p>Contact: If you have questions or concerns about this Privacy Policy, please do not hesitate to contact us at contact@marcoscuesta.com.</p>
<p>Thank you for trusting IberiaEye and allowing us to be your eyes on the road.</p>
`,
    es:
        "Política de Privacidad de IberiaEye.\n Fecha de entrada en vigor:" +
        new Date().toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }) +
        "Introducción Bienvenido a IberiaEye, tu asistente vial esencial para las carreteras de España. Nos comprometemos a proteger tu privacidad y a manejar tus datos de manera transparente y responsable. Esta Política de Privacidad detalla cómo tratamos tu información y qué derechos tienes al respecto. Datos que recopilamos:\nIberiaEye no recopila ningún dato personal de sus usuarios. La aplicación solo requiere permisos de internet para su funcionamiento óptimo. Uso de la información:\nAunque no recopilamos datos personales, utilizamos Firebase para analizar el rendimiento de la aplicación y mejorar continuamente su funcionalidad y experiencia de usuario. Estos análisis se basan en datos anónimos y agregados y no se pueden utilizar para identificar a usuarios individuales.\nCompartición de datos: No compartimos, vendemos ni divulgamos tu información personal con terceros, ya que no recopilamos dicha información.\nSeguridad de los datos: Aunque no recopilamos datos personales, priorizamos la seguridad y tomamos medidas apropiadas para proteger la integridad y seguridad de cualquier información dentro de la aplicación.\nDerechos del usuario: Dado que no recopilamos datos personales, no es necesario que te preocupes por tus derechos de acceso, rectificación, supresión, etc. Sin embargo, valoramos tus comentarios y preguntas sobre la aplicación y su funcionamiento. Puedes ponerte en contacto con nosotros en cualquier momento a través de contact@marcoscuesta.com." +
        "Cambios en la Política de Privacidad.\nPodemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestra aplicación o por otros motivos operativos, legales o reglamentarios. Si realizamos cambios, te notificaremos a través de una actualización de la aplicación o de otros medios adecuados. Contacto: Si tienes preguntas o inquietudes acerca de esta Política de Privacidad, no dudes en ponerte en contacto con nosotros a través de contact@marcoscuesta.com.\nGracias por confiar en IberiaEye y permitirnos ser tus ojos en el camino.",
};
