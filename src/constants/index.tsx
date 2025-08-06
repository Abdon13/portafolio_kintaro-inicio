import {
	FaGithub,
	FaLinkedin,
	FaRegBookmark,
	FaRegUser,
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6';
import { IoGridOutline } from 'react-icons/io5';
import type { Project } from '../types';

export const personalInfo = {
	name: 'Abdón López',
	age: 28,
	location: 'México, México',
	occupation: 'Frontend Developer & Traveling Tech Enthusiast',
	overview:
		"Soy desarrollador frontend con una pasión por crear experiencias web interactivas y fáciles de usar. Con experiencia en HTML, CSS, JavaScript, y frameworks como React, me enfoco en diseñar interfaces atractivas y funcionales que ofrezcan una excelente experiencia al usuario.",
	socialLinks: [
		{
			id: 1,
			name: 'GitHub',
			url: 'https://github.com/Abdon13',
			icon: <FaGithub size={26} />,
		},
		{
			id: 2,
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/abdonlc/',
			icon: <FaLinkedin size={26} />,
		},
		{
			id: 3,
			name: 'Twitter',
			url: '',
			icon: <FaXTwitter size={26} />,
		},
	],
	contactEmail: 'abdonlc0313@gmail.com',
	phoneNumber: '+5523842466',
	photoSrc: '/foto1.png',
};

export const tabs = [
	{
		id: 1,
		name: 'Proyectos',
		icon: IoGridOutline,
	},
	{
		id: 2,
		name: 'Experiencia',
		icon: FaRegBookmark,
	},
	{
		id: 3,
		name: 'Habilidades',
		icon: FaRegUser,
	},
];

export const projects: Project[] = [
	{
		id: 1,
		name: 'Administrador de empleados',
		description:
			'Un sistema de administración minimalista con interfaz modular, administración intuitiva y accesos rápidos, diseñado para ser intuitivo incluso para novatos.',
		technologies: [
			'React',
			'Express',
			'MongoDB',
			'Node.js',
			'Tailwind CSS'
		],
		projectUrl: '',
		githubUrl: '',
		imageSrc: '/project_1.png',
	},
	{
		id: 2,
		name: 'AdminTask',
		description:
			'Plataforma de administración de tareas en tiempo real.',
		technologies: [
			'React',
			'Express',
			'MongoDB',
			'TypeScript',
			'Supabase',
			'Docker',
		],
		projectUrl: '',
		githubUrl: '',
		imageSrc: '/project_2.png',
	},
	{
		id: 3,
		name: 'AdminProduct',
		description:
			'App de gestión de productos: Sistema de inventario para tienda donde se puede dar seguimiento de forma concisa y rápida, llevando el registro de todos tus productos.',
		technologies: [
			'React',
			'PostgreSQL',
			'Express',
			'Node.js',
			'NestJS',
		],
		projectUrl: '',
		githubUrl: '',
		imageSrc: '/project_3.jpeg',
	},
	{
		id: 4,
		name: 'Pictogram Adventure',
		description:
			'Juego educativo que combina rutas de aprendizaje basadas en pictogramas ',
		technologies: [
			'Unity',
			'C#',
			'REST API (Arasaac)',
			'PlayFab',
			'GSAP',
		],
		projectUrl: '',
		githubUrl: '',
		imageSrc: '/project_4.jpeg',
	},
	{
		id: 5,
		name: 'AnimeSearch Pro',
		description:
			'Motor de búsqueda avanzada de OVAs y series clásicas con IA para recomendaciones personalizadas; muestra curiosidades del manga.',
		technologies: [
			'Python',
			'FastAPI',
			'Elasticsearch',
			'Vue.js',
			'Tailwind CSS',
			'OpenAI API',
		],
		projectUrl: '',
		githubUrl: '',
		imageSrc: '/project_5.png',
	},
	{
		id: 6,
		name: 'MapMyJourney',
		description:
			'Webapp de mapas interactivos donde registras tus viajes y generas un diario de código y fotos con IA para resúmenes automáticos.',
		technologies: [
			'Gatsby',
			'Mapbox GL',
			'Contentful',
			'Cloudinary',
			'Node.js',
			'AWS Lambda',
		],
		projectUrl: '',
		githubUrl: '',
		imageSrc: '/project_6.jpeg',
	},
];

export const experience = [
	{
		id: 1,
		position: 'Front-End Developer',
		timeRange: 'Sep 2023 – May 2025',
		companyName: 'Tiger B. E.',
		companyLocation: 'México',
		description:
			'Mi mayor aportación fue implementar una arquitectura modular en el frontend que redujo los tiempos de desarrollo en futuras vistas en más del 30%, además de colaborar en el refactor de componentes reutilizables, mejorando la mantenibilidad del sistema.',
		technologiesUsed: [
			'React',
			'TypeScript',
			'MySQL',
			'Tailwind CSS',
		],
	},
	{
		id: 2,
		position: 'Full-Stack Developer',
		timeRange: 'Ene 2023 – Ago 2024',
		companyName: 'Sistemas, información y Servicios',
		companyLocation: 'México',
		description:
			'Desarrollo de plataforma de gestión de productos y ventas con un dashboard interactivo, integrando un sistema de notificaciones en tiempo real y una API RESTful para la gestión de datos.',
		technologiesUsed: ['PostgreSQL', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
	},
	{
		id: 3,
		position: 'Full-Stack Freelance',
		timeRange: '2022 – 2023',
		companyName: 'Freelance',
		companyLocation: 'Online',
		description:
			'Diseñé plataforma administrativa de tareas y proyectos para una empresa de logística, integrando un sistema de gestión de usuarios y un panel de control interactivo.',
		technologiesUsed: ['Mongo', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Github'],
	},
];

export const skills = [
	{
		id: 1,
		imageSrc: '/react.png',
		technologyName: 'React',
		level: 'Avanzado',
		context: 'Frontend',
		bgColor: '#E1F5FE',
		borderColor: '#81D4FA',
	},
	{
		id: 2,
		imageSrc: '/nodejs.png',
		technologyName: 'Node.js',
		level: 'Avanzado',
		context: 'Backend',
		bgColor: '#E8F5E8',
		borderColor: '#81C784',
	},
	{
		id: 7,
		imageSrc: '/typescript.png',
		technologyName: 'TypeScript',
		level: 'Avanzado',
		context: 'Language',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 3,
		imageSrc: '/nextjs.png',
		technologyName: 'Next.js',
		level: 'Intermedio',
		context: 'Full-Stack',
		bgColor: '#F5F5F5',
		borderColor: '#BDBDBD',
	},
	
	{
		id: 4,
		imageSrc: '/nestjs.png',
		technologyName: 'NestJS',
		level: 'Avanzado',
		context: 'Backend',
		bgColor: '#FCE4EC',
		borderColor: '#F48FB1',
	},
	
	{
		id: 6,
		imageSrc: '/tailwindcss.png',
		technologyName: 'Tailwind CSS',
		level: 'Avanzado',
		context: 'UI/UX',
		bgColor: '#E0F7FA',
		borderColor: '#80DEEA',
	},
	
	{
		id: 8,
		imageSrc: '/javascript.png',
		technologyName: 'JavaScript',
		level: 'Avanzado',
		context: 'Language',
		bgColor: '#FFFDE7',
		borderColor: '#FFF176',
	},
	{
		id: 9,
		imageSrc: '/python.png',
		technologyName: 'Python',
		level: 'Intermedio',
		context: 'Backend',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 12,
		imageSrc: '/vuejs.png',
		technologyName: 'Vue.js',
		level: 'Intermedio',
		context: 'Frontend',
		bgColor: '#E8F5E8',
		borderColor: '#A5D6A7',
	},
	/**{
		id: 13,
		imageSrc: '/graphql.png',
		technologyName: 'GraphQL',
		level: 'Intermedio',
		context: 'API',
		bgColor: '#FCE4EC',
		borderColor: '#F8BBD9',
	},
	{
		id: 14,
		imageSrc: '/docker.png',
		technologyName: 'Docker',
		level: 'Intermedio',
		context: 'DevOps',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	{
		id: 15,
		imageSrc: '/aws.png',
		technologyName: 'AWS',
		level: 'Intermedio',
		context: 'Cloud',
		bgColor: '#FFF8E1',
		borderColor: '#FFCC02',
	},
	**/
	{
		id: 17,
		imageSrc: '/mongodb.png',
		technologyName: 'MongoDB',
		level: 'Avanzado',
		context: 'Database',
		bgColor: '#E8F5E8',
		borderColor: '#A5D6A7',
	},
	{
		id: 18,
		imageSrc: '/postgresql.png',
		technologyName: 'PostgreSQL',
		level: 'Intermedio',
		context: 'Database',
		bgColor: '#E3F2FD',
		borderColor: '#90CAF9',
	},
	
	{
		id: 20,
		imageSrc: '/csharp.png',
		technologyName: 'C#',
		level: 'Básico',
		context: 'Language',
		bgColor: '#E8F5E8',
		borderColor: '#A5D6A7',
	},
	
	
];
