export const site = {
  name: "ORGCAP",
  fullName: "ORGCAP Capacitación Profesional",
  tagline: "Capacitación que se entiende, se aplica y se nota",
  description:
    "OTEC chilena especializada en educación, empresas y minería. Diseñamos capacitaciones a la medida de cada equipo, con foco en el bienestar y el desempeño real de las personas.",
  url: "https://www.orgcap.cl",
  email: "orgcap@orgcap.cl",
  phone: "+56 9 9872 9014",
  whatsapp: "https://wa.me/56998729014",
  address: "Av. Pdte. Kennedy 6800, of. 318, Torre B, Vitacura, Santiago, Chile",
  legalName: "Organismo Chileno de Formación y Capacitación Laboral SpA",
  rut: "77.711.403-4",
  instagram: "https://www.instagram.com/orgcapcl",
  instagramHandle: "@orgcapcl",
  facebook: "https://www.facebook.com/ORGCAPOTEC",
  facebookHandle: "ORGCAP OTEC",
  youtube: "https://www.youtube.com/@ORGCAP",
};

export const certificate = {
  title: "Certificación NCh 2728:2015",
  issuer: "Confidence Certification Ltda.",
  accreditation: "Sistema Nacional de Acreditación — INN Chile (Acreditación SC 054)",
  scope:
    "Diseño, comercialización y prestación de servicios de capacitación en las áreas de: Administración, Salud, nutrición y dietética en modalidad presencial y a distancia para el sector público, privado y personas naturales.",
  certificateNumber: "CC-059-2024",
  registryNumber: "A-10788",
  issuedAt: "2023-03-27",
  renewalStart: "2026-03-27",
  expiresAt: "2029-03-26",
  pdfPath: "/certificado-otec-nch-2728.pdf",
};

export const hero = {
  headline: "Gestión de las emociones con perspectiva neurocientífica",
  lead: "Diseñamos e implementamos esta jornada para el Servicio Médico Legal de Chile, adjudicada por licitación pública. Es el mismo método con el que trabajamos educación, empresas y minería: levantar la necesidad real de cada equipo antes de diseñar la capacitación.",
  cta: "Conoce el caso completo",
  ctaHref: "/blog/jornadas-sml-gestion-emocional",
  secondaryCta: "Habla con nosotros",
  secondaryHref: "/contacto",
  bannerLines: [
    "Soluciones de capacitación formadas y estructuradas a la medida.",
    "Transformamos tu organización desde las personas que la hacen funcionar.",
  ],
};

export const distinguishing = {
  title: "Qué distingue a ORGCAP",
  body: "ORGCAP es un actor estratégico en capacitación, consultoría y desarrollo humano que conecta mundos clave del país: la educación, la minería y las corporaciones. En el medio chileno, se distingue por ser un puente entre personas, organizaciones y contextos productivos, que hace posible que Chile avance no solo en eficiencia, sino también en calidad humana.",
  points: [
    "Mirada transversal: adapta su propuesta a educación, empresas y minería, reconociendo las diferencias de cada sector.",
    "Integra competencias técnicas y humanas: comunicación, liderazgo, autocuidado y gestión emocional.",
    "Experiencia en contratación pública: el proyecto para el Servicio Médico Legal, adjudicado por licitación, es el antecedente más sólido documentado en su historial.",
  ],
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Sobre nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export type Sector = {
  slug: string;
  name: string;
  short: string;
  description: string;
  needs: string[];
  image: string;
  imageAlt: string;
  /** Optional override used only on the Servicios page detail section. */
  servicesImage?: string;
  servicesImageAlt?: string;
};

export const sectors: Sector[] = [
  {
    slug: "educacion",
    name: "Educación",
    short: "Comunidades educativas más sanas",
    description:
      "Trabajamos tanto con establecimientos privados como en procesos de licitación pública a través de Mercado Público. La calidad educativa no depende solo de los contenidos curriculares: también del estado emocional de quienes enseñan, la convivencia escolar y el vínculo entre equipos, estudiantes y familias.",
    needs: [
      "Desgaste emocional docente y pérdida de sentido vocacional",
      "Conflictos de convivencia y comunicación en el aula",
      "Fortalecimiento de equipos directivos y unidades técnico-pedagógicas",
    ],
    image: "/images/sectors/educacion.jpg",
    imageAlt: "Estudiantes de un colegio chileno celebrando con los brazos en alto",
  },
  {
    slug: "empresas",
    name: "Empresas y ejecutivos",
    short: "Equipos que colaboran mejor",
    description:
      "Acompañamos a organizaciones públicas y privadas que buscan fortalecer liderazgo, comunicación interna y clima laboral. Trabajamos con consultorías, talleres personalizados, charlas y formación de equipos, conectando las competencias humanas con los objetivos estratégicos del negocio.",
    needs: [
      "Liderazgo consciente y comunicación interna",
      "Gestión del cambio, motivación y trabajo en equipo",
      "Clima organizacional y equipos de alto rendimiento",
    ],
    image: "/images/sectors/empresas-inicio.jpg",
    imageAlt: "Directorio ejecutivo reunido en torno a una mesa de trabajo",
    servicesImage: "/images/sectors/empresas-servicios.jpg",
    servicesImageAlt: "Equipo ejecutivo revisando documentos e informes en una sala de reuniones",
  },
  {
    slug: "mineria",
    name: "Minería",
    short: "Bienestar que sostiene la seguridad",
    description:
      "La minería exige compatibilizar seguridad, desempeño y bienestar. Trabajamos el concepto de «doble presencialidad emocional»: una persona puede estar físicamente en la faena mientras su atención está en el hogar. Estas tensiones pueden incidir en el estrés, la fatiga y las relaciones de equipo.",
    needs: [
      "Comunicación efectiva y liderazgo empático en faena",
      "Gestión del estrés y autocuidado dentro de la cultura de seguridad",
      "Licitaciones y contratos privados para grupos de trabajo mineros",
    ],
    image: "/images/sectors/mineria.jpg",
    imageAlt: "Vista aérea de una faena minera a rajo abierto",
  },
];

export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: "Excelencia educativa",
    description:
      "No nos limitamos a transmitir información: procuramos que cada participante se lleve herramientas que pueda aplicar en su trabajo y su vida.",
  },
  {
    title: "Liderazgo y desarrollo organizacional",
    description:
      "Formamos líderes y equipos capaces de comunicarse con claridad, adaptarse a los cambios y conducir procesos colectivos con responsabilidad.",
  },
  {
    title: "Bienestar, seguridad y desarrollo humano",
    description:
      "En minería se conecta con la seguridad y la productividad; en educación, con la convivencia; en empresas, con la calidad de las relaciones laborales.",
  },
  {
    title: "Compromiso con el futuro",
    description:
      "Construimos relaciones de largo plazo con responsabilidad, transparencia y adaptación a las necesidades reales de cada sector.",
  },
  {
    title: "Pertinencia, respeto y aplicabilidad",
    description:
      "Evitamos las soluciones genéricas. Contextualizamos los contenidos y procuramos que cada herramienta tenga una aplicación concreta.",
  },
];

export const homeValues: Value[] = [
  {
    title: "Excelencia educativa",
    description:
      "Promovemos aprendizajes significativos que trascienden el aula, transformando el conocimiento en herramientas prácticas de crecimiento personal y profesional.",
  },
  {
    title: "Liderazgo empresarial",
    description:
      "Acompañamos a compañías y ejecutivos en el desarrollo de habilidades estratégicas que generan competitividad, innovación y capacidad de adaptación en entornos cambiantes.",
  },
  {
    title: "Bienestar y seguridad minera",
    description:
      "Impulsamos capacitaciones que fortalecen la prevención de riesgos y la eficiencia operativa, cuidando también la salud física, la estabilidad emocional y el impacto en las familias.",
  },
];

export type Program = {
  slug: string;
  name: string;
  tagline: string;
  audience: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  heroHeadline: string;
  heroLead: string;
  heroImage: string;
  heroImageAlt: string;
};

export const programs: Program[] = [
  {
    slug: "alto-rendimiento",
    name: "Comunicación Neuroefectiva: Logra Alto Rendimiento",
    tagline: "Seminario para equipos y deportistas de alto rendimiento",
    audience: "Clubes, selecciones, academias deportivas y equipos que compiten bajo presión",
    description:
      "Un seminario que conecta la neurociencia de la emoción con el desempeño deportivo. Trabajamos cómo las emociones reprimidas se manifiestan en el cuerpo —afectando el rendimiento y favoreciendo lesiones— y cómo entrenar el estado emocional con la misma disciplina que se entrena el cuerpo. El objetivo: que deportistas, entrenadores y cuerpos técnicos puedan sostener concentración y claridad mental en el momento que más importa, la competencia.",
    benefits: [
      "Mejora la concentración y el enfoque",
      "Reduce la ansiedad y el estrés precompetitivo",
      "Favorece la cohesión de equipo",
    ],
    image: "/images/programs/alto-rendimiento-servicios.jpg",
    imageAlt: "Equipo de taekwondo junto a sus entrenadores celebrando una competencia con medallas",
    heroHeadline: "Comunica mejor. Piensa claro. Rinde más.",
    heroLead:
      "Seminario de Comunicación Neuroefectiva para equipos y deportistas de alto rendimiento: entrenamos la emoción con la misma disciplina con la que se entrena el cuerpo.",
    heroImage: "/images/programs/alto-rendimiento-hero.jpg",
    heroImageAlt: "Equipo de taekwondo junto a sus entrenadores celebrando una competencia con medallas",
  },
  {
    slug: "bienestar-aula",
    name: "Manejo del Estrés y Bienestar en el Aula",
    tagline: "Comunicación consciente para equipos docentes",
    audience: "Profesores, asistentes de la educación y equipos directivos de establecimientos educacionales",
    description:
      "Un taller experiencial de comunicación consciente para equipos docentes, basado en herramientas de Programación Neurolingüística: centramiento y presencia plena antes de entrar a la sala, lectura de sistemas representacionales (visual, auditivo, kinestésico) para comunicarse mejor con distintos estudiantes, y acompasamiento para generar climas de confianza. Cierra con la construcción de objetivos propios —personales y de aula— bajo las Condiciones de la Buena Forma, para que cada docente salga con un plan concreto, no solo con una buena intención.",
    benefits: [
      "Herramientas de autorregulación y presencia antes y durante la clase",
      "Comunicación más efectiva con estudiantes, colegas y apoderados",
      "Un plan de acción personal construido durante el propio taller",
    ],
    image: "/images/programs/bienestar-aula-servicios.jpg",
    imageAlt: "Grupo de docentes participando de pie en un ejercicio de centramiento con los ojos cerrados",
    heroHeadline: "Comunicación consciente para sostener la sala de clases",
    heroLead:
      "Taller de manejo del estrés y bienestar en el aula: herramientas de comunicación consciente y PNL para que los equipos docentes lleguen a clases con más presencia y menos desgaste.",
    heroImage: "/images/programs/bienestar-aula-hero.jpg",
    heroImageAlt: "Grupo numeroso de profesores sentados en semicírculo durante una jornada de capacitación",
  },
];

export const methodologies = [
  "Comunicación Neuroefectiva",
  "Gestión neuroemocional del estrés y autorregulación",
  "Mindfulness y ejercicios de respiración",
  "Coaching ontológico y mentoría",
  "Programación Neurolingüística (PNL)",
  "Inteligencia emocional y resiliencia",
  "Talleres experienciales y planes de acción",
  "Diagnóstico y acompañamiento",
];

export const processSteps = [
  {
    title: "Levantamos la necesidad",
    description: "Entendemos el contexto institucional, los desafíos del equipo y las competencias por fortalecer.",
  },
  {
    title: "Diseñamos la intervención",
    description: "Definimos objetivos, contenidos, actividades y herramientas según la realidad del cliente.",
  },
  {
    title: "Implementamos la formación",
    description: "Cursos, talleres, jornadas o consultorías, en modalidad presencial, online o mixta.",
  },
  {
    title: "Transferimos al puesto de trabajo",
    description: "Ejercicios, estrategias y planes de acción para que lo aprendido se aplique de verdad.",
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  bio: string[];
  image: string;
  linkedin: string;
};

export const team: TeamMember[] = [
  {
    slug: "manuel-octavio-diaz",
    name: "Manuel Octavio Díaz",
    role: "Director General",
    summary: "Especialista en dirección comercial y marketing, con sólida formación académica.",
    bio: [
      "Ejecutivo senior con más de 30 años de experiencia internacional. 22 años en cargos de alta responsabilidad en empresas multinacionales de consumo masivo —como Coca-Cola, Pepsico, Pfizer, Nestlé y Panini Chile— junto a 8 años liderando instituciones del Estado de Chile desde la Alta Dirección Pública, en organismos como SERNATUR e IND.",
      "Máster en Marketing y Gestión Comercial (ESEM, España) y Máster en Programación Neurolingüística, con certificación como Trainer en Coaching y PNL por la Escuela Argentina de Coaching y PNL.",
      "Su propuesta de valor combina liderazgo con sentido humano, visión estratégica de negocio y una mirada integral de la formación y el acompañamiento de equipos.",
    ],
    image: "/images/team/manuel-octavio-diaz.jpg",
    linkedin: "https://www.linkedin.com/in/manuel-octavio-diaz-campos-91b96a61/",
  },
  {
    slug: "aida-cristi-cortes",
    name: "Aida Cristi Cortés",
    role: "Directora Académica",
    summary: "Directora del Instituto Human Magic. Biomentora líder.",
    bio: [
      "Más de 25 años liderando procesos de transformación humana en personas, equipos y organizaciones. Fundadora del Instituto Human Magic y creadora del Método Human Magic 5® de Reprogramación Emocional, con presencia internacional.",
      "Ingeniera y Diplomada en Control de Gestión (Universidad de Chile). Integra su formación técnica con un enfoque que une neurociencia emocional, PNL, biodescodificación, constelaciones familiares y morfopsicología.",
      "Ha formado a cientos de biomentores y bioterapeutas neuroemocionales, guiando a miles de personas en procesos de liderazgo y coherencia emocional.",
    ],
    image: "/images/team/aida-cristi-cortes.jpg",
    linkedin: "https://www.linkedin.com/in/aidacristicortes/",
  },
  {
    slug: "tatiana-dinamarca",
    name: "Tatiana Dinamarca",
    role: "Directora de Finanzas",
    summary: "Coach ontológico y organizacional. Consultora en administración y estructuración financiera.",
    bio: [
      "Ingeniera Comercial con 25 años de experiencia implementando estrategias de crecimiento regional, principalmente en la industria bancaria. Formando, liderando y apoyando equipos de trabajo con buenos resultados.",
      "Durante su trayectoria en la banca desarrolló conocimientos profundos en administración de empresas, análisis financiero y de riesgo, con foco en el recurso humano y el clima laboral.",
      "Hoy es mentora en capacitaciones de emprendimiento y consultora en estructuración financiera y patrimonios.",
    ],
    image: "/images/team/tatiana-dinamarca.jpg",
    linkedin: "https://www.linkedin.com/in/tatiana-dinamarca/",
  },
];


export const ppdu = {
  title: "Proyección internacional: alianza con PPDU",
  body: [
    "ORGCAP trabaja una línea de internacionalización vinculada a Personal & Professional Development University (PPDU), una alianza estratégica de carácter formativo que seguimos desarrollando.",
    "Esta línea se relaciona con certificación y documentación apostillada en Chile y Estados Unidos, pensada para facilitar la presentación y el reconocimiento formal de antecedentes académicos cuando corresponde.",
    "Importante: la apostilla certifica la autenticidad formal de un documento; no equivale automáticamente a una homologación, licencia profesional o autorización para ejercer en otro país. Los alcances concretos de esta alianza están en desarrollo y se irán precisando en esta página.",
  ],
  image: "/images/about/ppdu-aula.jpg",
};

export const about = {
  intro:
    "ORGCAP Capacitación Profesional es una organización chilena nacida en 2025, especializada en capacitación y desarrollo de personas, equipos y organizaciones. Operamos comunicacionalmente como un Organismo Técnico de Capacitación (OTEC): no impartimos cursos aislados, buscamos comprender las necesidades de cada institución, diseñar respuestas pertinentes y entregar herramientas aplicables al desempeño cotidiano.",
  focus:
    "Para nosotros, el aprendizaje tiene valor cuando puede trasladarse a la práctica. Articulamos contenidos técnicos y habilidades humanas, combinando formación, reflexión, ejercicios aplicados y planes de acción.",
};

export const blogPosts = [
  {
    slug: "jornadas-sml-gestion-emocional",
    title: "Gestión de las emociones en contextos de alta exigencia: nuestras jornadas con el Servicio Médico Legal",
    excerpt:
      "Cómo diseñamos una capacitación de alcance nacional —presencial en Santiago y Talca, y online por Zoom— para el área de Tanatología del SML.",
    date: "2026-01-13",
    image: "/images/sml/sml-portada-jornada.jpg",
    body: [
      "A comienzos de 2026 cerramos un proyecto que resume bien la forma en que trabajamos en ORGCAP: la jornada «Gestión de las emociones con perspectiva neurocientífica», diseñada para el área de Tanatología del Servicio Médico Legal (SML), adjudicada mediante licitación pública.",
      "El desafío era concreto: equipos que enfrentan una carga emocional alta y constante en su trabajo diario necesitaban herramientas reales de autorregulación, no una charla motivacional de una tarde. Diseñamos un programa que combinó neurociencia aplicada, Comunicación Neuroefectiva, coaching ontológico y Programación Neurolingüística, con ejercicios de respiración, mindfulness y reestructuración cognitiva.",
      "La logística también fue parte del desafío: jornadas presenciales en Santiago y Talca, más sesiones de alcance nacional por Zoom, para llegar a funcionarios y funcionarias en distintas ubicaciones del país sin perder la coherencia del marco formativo.",
      "Cada jornada cerró con la elaboración de un plan de acción de bienestar emocional, pensado para aplicarse en el trabajo cotidiano y no quedar solo como un buen recuerdo del día del taller.",
    ],
  },
  {
    slug: "doble-presencialidad-emocional-mineria",
    title: "La «doble presencialidad emocional» en minería: estar en la faena con la cabeza en otra parte",
    excerpt:
      "Un concepto central en nuestro trabajo con equipos mineros: la tensión entre estar físicamente en el turno y, emocionalmente, en casa.",
    date: "2025-11-03",
    image: "/images/blog/mineria-aerea.jpg",
    body: [
      "En minería hay una tensión que rara vez se nombra con claridad: una persona puede estar físicamente en la faena mientras su atención y preocupación están puestas en algo que ocurre en casa. Le llamamos «doble presencialidad emocional», y es uno de los conceptos centrales de nuestra línea de trabajo para el sector.",
      "No se trata de una medición de riesgo ni de una cifra: es un marco para entender cómo estas tensiones pueden incidir en el estrés, la fatiga emocional, la concentración y las relaciones de equipo en un entorno donde la seguridad operacional no es negociable.",
      "Nuestra propuesta integra comunicación efectiva, liderazgo empático, autocuidado y gestión del estrés, con la seguridad y el cumplimiento de estándares siempre como prioridad. La meta es contribuir a equipos más conscientes de sus propios recursos, sin que eso signifique bajar la guardia operacional.",
    ],
  },
  {
    slug: "comunicacion-neuroefectiva-equipos",
    title: "Qué es la Comunicación Neuroefectiva y por qué la usamos en casi todos nuestros programas",
    excerpt:
      "Una de las metodologías que más transversalmente aplicamos en educación, empresas y minería. Esto es lo que significa en la práctica.",
    date: "2025-09-18",
    image: "/images/blog/comunicacion-equipo.jpg",
    body: [
      "Si hay una metodología que aparece en casi todos nuestros programas —desde un colegio hasta una faena minera— es la Comunicación Neuroefectiva: un conjunto de herramientas para mejorar la claridad, la escucha y la calidad de las interacciones entre personas.",
      "La idea de fondo es simple: la comunicación fragmentada y la presión sostenida afectan la cohesión de un equipo tanto como un problema técnico. Cuando un equipo no logra expresar con claridad lo que necesita, o no sabe escuchar lo que el otro realmente está diciendo, los resultados se resienten mucho antes de que aparezca en una planilla.",
      "En la práctica, esto se traduce en ejercicios aplicados: dinámicas donde los participantes identifican sus propios patrones de comunicación, reciben retroalimentación directa y salen con un par de ajustes concretos para probar esa misma semana, no con una teoría para guardar en un cajón.",
    ],
  },
];

export const youtubeVideos = [
  {
    id: "tu7A1Gi2-i4",
    title: "Gestión de las Emociones con Perspectiva Neurocientífica",
  },
  { id: "KQPL11o0kpI", title: "Biomentor Neuroemocional" },
  { id: "WfJg_LzcG-c", title: "Testimonios Constelaciones" },
  { id: "pbR8IeqNfKQ", title: "Biogestor Educadores" },
  { id: "xTXnmkZC9_0", title: "Todos Estamos Contigo (No Más Bullying)" },
  { id: "q4vX4uHgkb8", title: "Encontrando tu Propósito en la Vida" },
];
