// Personal Information --> #hero section
export const name = "Marcos Cuesta"
export const designation = "RPA Engineer"
export const location = "Madrid, Spain"
export const pronouns = ""
export const website = "https://marcoscuesta.com"
export const titles = {
	"en": {
		"about": "About",
		"work": "Work Experience",
		"projects": "Projects",
		"education": "Education",
		"contact": "Contact",
		"languages": "Languages",
		"certificates": "Certificates",
		"skills": "Skills"
	},
	"es": {
		"about": "Sobre mi",
		"work": "Experiencia Laboral",
		"projects": "Proyectos",
		"education": "Educación",
		"contact": "Contacto",
		"languages": "Idiomas",
		"certificates": "Certificados",
		"skills": "Habilidades"
	}
}
// About
export const about = {
	"en": "Developer with 2 years of experience in the development of RPA processes under the UiPath environment based on .NET, C# and VB,"+ 
	"with knowledge in other programming languages such as Java, and Python. Passionate about technology and innovation specially in "+
	"the field of web development and automated RPA processes.",
	"es":"Desarrollador con 2 años de experiencia en el desarrollo de procesos RPA bajo el entorno UiPath basado en .NET, C# y VB," + 
	"con conocimientos en otros lenguajes de programación como Java y Python. Apasionado por la tecnología e innovación especialmente en " +
	"el campo del desarrollo web y procesos RPA automatizados."
}


// Work Experience --> #work section
export const work = {
	"en": [
	{
		from: "July 2023",
		to: "Present",
		role: "RPA Engineer",
		org: "NTT Data",
		org_url: "https://nttdata.com",
		location: "Madrid, Spain",
		skills: `Engineer on the RPA team:
		• Design and develop automated workflows to optimize business operations making a significant impact on people's
		lives by automating more than 25+ processes.
		• Design of Process Design Documents (PDDs) and Solution Design Documents (SDDs) to outline the automation
		strategy and technical requirements.
		• Develop and design test cases to validate the functionality of the automated processes.
		• Monitoring and maintenance deployed RPA solutions to ensure they are functioning as intended.Visual Basic .NET (VB.NET) · C# · Robotic Process Automation (RPA) · UiPath`
	},
	{
		from: "June 2021",
		to: "July 2023",
		role: "Junior Engineer",
		org: "NTT Data",
		org_url: "https://nttdata.com",
		location: "Madrid, Spain",
		skills: "Junior Engineer in the RPA team. Visual Basic .NET (VB.NET) · C# · Robotic Process Automation (RPA) · UiPath"
	}
],
	"es":  [
		{
			from: "July 2023",
			to: "Present",
			role: "RPA Engineer",
			org: "NTT Data",
			org_url: "https://nttdata.com",
			location: "Madrid, Spain",
			skills: `Engineer en el dinámico equipo de RPA, asumiendo un papel fundamental
			ejecutando y liderando en áreas clave:
			junio 2021 – Presente
			• Diseño y desarrollo de procesos y evolutivos RPA, optimizando flujos de trabajo y elevando la eficiencia
			operativa con una implementación continua en más de 20 procesos.
			• Levantamiento y toma de requerimientos proporcionando claridad y dirección durante las fases de
			desarrollo e implementación.
			• Mantenimiento continuo y mejoras en los procesos existentes asegurando un rendimiento óptimo y la
			satisfacción del usuario final`
		},
		{
			from: "June 2021",
			to: "July 2023",
			role: "Junior Engineer",
			org: "NTT Data",
			org_url: "https://nttdata.com",
			location: "Madrid, Spain",
			skills: "Junior Engineer en el equipo RPA. Visual Basic .NET (VB.NET) · C# · Robotic Process Automation (RPA) · UiPath"
		}
	]
}

// Projects --> #project section
export const projects = {
	"en":[
		{
			title: "CamarasDGT android App",
			description: "Android application designed to provide users with real-time traffic camera feeds directly from the DGT (Directorate-General of Traffic). The app integrates seamlessly with the DGT's network, enabling users to stay updated on current traffic situations.",
			url: "https://play.google.com/store/apps/details?id=com.marcoscuesta.camerasdgt",
			tech: "Kotlin,Android,Java",
			image: "/camerasdgt.png"
		},
		{
			title: "Client-side Image compressor (comprimetuimagen.com)",
			description: "Web image compressor using Astro and JavaScript.",
			url: "comprimetuimagen.com",
			tech: "JavaScript,Astro,HTML & CSS",
			image: "/compressor.png"
		},
		{
			title: "Supermarket scrapper",
			description: "Scrapper that scraps all products from all spain supermarkets in Spain (Still in development). All the data recolected is generated in a csv file.",
			url: "https://github.com/maarcoscuesta18/SpainSupermarket-scrapper-master",
			tech: "Python,Selenium,BeautifulSoup,Numpy",
			image: "/scrapper.webp"
		},
		{
			title: "UOC App",
			description: "A android app using my univeristy webpage.",
			url: "https://github.com/maarcoscuesta18/UOC",
			tech: "Java,Android",
			image: "/uoc.webp",
		},
		{
			title: "marcoscuesta.com",
			description: "Portfolio website with a pacman game using Astro.",
			url: "https://github.com/maarcoscuesta18/marcoscuesta.com-astro",
			tech: "Astro,JavaScript,HTML & CSS",
			image: "/github-mark.svg"
		}
	],
	"es":[
		{
			title: "CamarasDGT android App",
			description: "Aplicación Android diseñada para proporcionar a los usuarios feeds de cámaras de tráfico en tiempo real directamente desde la DGT (Dirección General de Tráfico). La aplicación se integra perfectamente con la red de la DGT, permitiendo a los usuarios mantenerse actualizados sobre las situaciones de tráfico actuales.",
			url: "https://play.google.com/store/apps/details?id=com.marcoscuesta.camerasdgt",
			tech: "Kotlin,Android,Java",
			image: "/camerasdgt.png"
		},
		{
			title: "Compresor de imagenes (comprimetuimagen.com)",
			description: "Compresor de imagenes directamente sobre la web (client-side).",
			url: "comprimetuimagen.com",
			tech: "JavaScript,Astro,HTML & CSS",
			image: "/compressor.png"
		},
		{
			title: "Aplicación UOC",
			description: "Una aplicación Android usando la página web de mi universidad.",
			url: "https://github.com/maarcoscuesta18/UOC",
			tech: "Java, Android",
			image: "/uoc.webp",
		},
		{
			title: "FalconTracker (Bot de Twitter)",
			description: "Rastreador para modelos de aviones Falcon--> T.18-2, T.18-3,T.18-4, T.18-5. Utilizando selenium y node.js publicando un tweet con los movimientos de los aviones. Inspirado en elonmusktracker.com",
			url: "https://github.com/maarcoscuesta18/FalconTracker",
			tech: "JavaScript, Node.js, Selenium, API de Twitter",
			image: "/falcon.webp"
		},
		{
			title: "Wordle",
			description: "Aplicación Wordle basada en el framework React",
			url: "https://github.com/maarcoscuesta18/mywordle",
			tech: "React, JavaScript, HTML y CSS",
			image: "/wordle.webp"
		},
		{
			title: "Aplicación de gestión de facturas",
			description: "Aplicación web privada en Django para facturas que genera un PDF usando su propia API en Java.",
			url: "https://github.com/maarcoscuesta18/myapi",
			tech: "Django, Python, Java, JavaScript, Firebase",
			image: "/invoices.webp"
		},
		{
			title: "Scrapper de supermercados",
			description: "Scrapper que extrae todos los productos de todos los supermercados en España. Todos los datos recolectados se generan en un archivo csv.",
			url: "https://github.com/maarcoscuesta18/SpainSupermarket-scrapper-master",
			tech: "Python, Selenium, BeautifulSoup, Numpy",
			image: "/scrapper.webp"
		},
		{
			title: "marcoscuesta.com",
			description: "Sitio web de portfolio con un juego de Pacman usando Astro.",
			url: "https://github.com/maarcoscuesta18/marcoscuesta.com-astro",
			tech: "Astro, JavaScript, HTML y CSS",
			image: "/github-mark.svg"
		}
	]
}

// Education --> #education section
export const education = {
	"en":[
		{
			from: "2022",
			to: "2026",
			institute: "Universitat Oberta de Catalunya",
			course: "Computer Engineering",
			location: "Madrid, Spain"
		}
	],
	"es":[
		{
			from: "2022",
			to: "2026",
			institute: "Universitat Oberta de Catalunya",
			course: "Ingeniería Informática",
			location: "Madrid, Spain"
		},
		{
			from: "2019",
			to: "2021",
			institute: "CEEP",
			course: "CFGS Desarrollo de aplicaciones multiplataforma",
			location: "Madrid, Spain"
		}
	]
}
// Contact --> #contact section
export const contact = {
	"en":[
		{
			source_name: "Send me a email",
			source: "mailto:contact@marcoscuesta.com",
			title: "Email",
			source_icon: "email-svgrepo-com.svg",
		},
		{
			source_name: "Go to github",
			source: "https://github.com/maarcoscuesta18",
			title: "Github",
			source_icon: "github-mark-white.svg",
		},
		{
			source_name: "Go to LinkedIn",
			source: "https://www.linkedin.com/in/marcos-cuesta-abanades",
			title: "LinkedIn",
			source_icon: "LinkedIn-Icon-Logo.wine.svg",
		},
	],
	"es":[
		{
			source_name: "Envíame un correo",
			source: "mailto:contact@marcoscuesta.com",
			title: "Correo",
			source_icon: "email-svgrepo-com.svg",
		},
		{
			source_name: "Ir a Github",
			source: "https://github.com/maarcoscuesta18",
			title: "Github",
			source_icon: "github-mark-white.svg",
		},
		{
			source_name: "Ir a LinkedIn",
			source: "https://www.linkedin.com/in/marcos-cuesta-abanades",
			title: "LinkedIn",
			source_icon: "LinkedIn-Icon-Logo.wine.svg",
		}
	]
}
// Languages --> #languages section
export const languages = {
	"en":[
		{
			language: "Spanish",
			level: "Native"
		},
		{
			language: "English",
			level: "Professional"
		}
	],
	"es":[
		{
			language: "Español",
			level: "Nativo"
		},
		{
			language: "Inglés",
			level: "B2"
		}
	]
}
// Certifications --> #certificate section
export const certificates = {
	"en":[
		{
			issued: "2022",
			title: "UiPath Certified Professional Advanced RPA Developer (UiARD)",
			org: "UiPath",
			url: "https://credentials.uipath.com/0617ffd7-239e-41c4-976b-7150acc7cc85?record_view=true",
			description: "Certification in UiPath Certified Professional Advanced RPA Developer (UiARD)",
		},
		{
			issued: "2022",
			title: "Automation Anywhere Certified Advanced RPA Professional (Automation 360)",
			org: "Automation Anywhere",
			url: "https://certificates.automationanywhere.com/4e4e4ece-3e2a-45ac-902f-012114f14e61#gs.s9dku9",
			description: "Automation Anywhere Certified Advanced RPA Professional (Automation 360)",
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
		}
	],
	"es":[
		{
			issued: "2022",
			title: "UiPath Certified Professional Advanced RPA Developer (UiARD)",
			org: "UiPath",
			url: "https://credentials.uipath.com/0617ffd7-239e-41c4-976b-7150acc7cc85?record_view=true",
			description: "Certification in UiPath Certified Professional Advanced RPA Developer (UiARD)",
		},
		{
			issued: "2022",
			title: "Automation Anywhere Certified Advanced RPA Professional (Automation 360)",
			org: "Automation Anywhere",
			url: "https://certificates.automationanywhere.com/4e4e4ece-3e2a-45ac-902f-012114f14e61#gs.s9dku9",
			description: "Automation Anywhere Certified Advanced RPA Professional (Automation 360)",
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
		}
	]
}

export const skills = [
	{
		title: "Visual Basic .NET (VB.NET)",
		source_icon: "visual-studio.svg",
		source:"https://visualstudio.microsoft.com/es/"
	},
	{
		title: "UiPath",
		source_icon: "uipath.svg",
		source:"https://www.uipath.com/"
	},
	{
		title: "C#",
		source_icon: "c-sharp.svg",
		source:"https://docs.microsoft.com/es-es/dotnet/csharp/"
	},
	{
		title: "Java",
		source_icon: "java.svg",
		source:"https://www.java.com/es/"
	}
]
export const privacy_policy_iberiaeye = {
	"en:":`
<p>Privacy Policy of IberiaEye Effective date: ${new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
"es":"Política de Privacidad de IberiaEye.\n Fecha de entrada en vigor:"+new Date().toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})+
"Introducción Bienvenido a IberiaEye, tu asistente vial esencial para las carreteras de España. Nos comprometemos a proteger tu privacidad y a manejar tus datos de manera transparente y responsable. Esta Política de Privacidad detalla cómo tratamos tu información y qué derechos tienes al respecto. Datos que recopilamos:\nIberiaEye no recopila ningún dato personal de sus usuarios. La aplicación solo requiere permisos de internet para su funcionamiento óptimo. Uso de la información:\nAunque no recopilamos datos personales, utilizamos Firebase para analizar el rendimiento de la aplicación y mejorar continuamente su funcionalidad y experiencia de usuario. Estos análisis se basan en datos anónimos y agregados y no se pueden utilizar para identificar a usuarios individuales.\nCompartición de datos: No compartimos, vendemos ni divulgamos tu información personal con terceros, ya que no recopilamos dicha información.\nSeguridad de los datos: Aunque no recopilamos datos personales, priorizamos la seguridad y tomamos medidas apropiadas para proteger la integridad y seguridad de cualquier información dentro de la aplicación.\nDerechos del usuario: Dado que no recopilamos datos personales, no es necesario que te preocupes por tus derechos de acceso, rectificación, supresión, etc. Sin embargo, valoramos tus comentarios y preguntas sobre la aplicación y su funcionamiento. Puedes ponerte en contacto con nosotros en cualquier momento a través de contact@marcoscuesta.com."+
"Cambios en la Política de Privacidad.\nPodemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestra aplicación o por otros motivos operativos, legales o reglamentarios. Si realizamos cambios, te notificaremos a través de una actualización de la aplicación o de otros medios adecuados. Contacto: Si tienes preguntas o inquietudes acerca de esta Política de Privacidad, no dudes en ponerte en contacto con nosotros a través de contact@marcoscuesta.com.\nGracias por confiar en IberiaEye y permitirnos ser tus ojos en el camino."
}
