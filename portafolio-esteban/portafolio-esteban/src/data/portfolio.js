// Todo el contenido del portafolio vive aquí. Edita este archivo y no necesitas tocar los componentes.

export const profile = {
  name: "Esteban Pérez Vergara",
  role: "Desarrollador de Software",
  status: "Disponible para proyectos freelance",
  lead: "Construyo páginas web claras, rápidas y fáciles de usar, desde Medellín.",
}

export const about = [
  "Soy bachiller del INEM y desarrollador de software en formación práctica. Pasé 80 horas en el Semillero Quipux aprendiendo Java, Python, SQL, programación orientada a objetos y Git, y después lo apliqué construyendo y publicando mis propias páginas web.",
  "Mi visión es aportar soluciones simples y bien comunicadas a quienes necesitan una página o una herramienta que funcione, y mejorar con cada proyecto. Estoy disponible para trabajar como freelance.",
]

export const experience = [
  {
    title: "Semillero Quipux",
    when: "80 horas, de junio a diciembre",
    win: "Salí con una base sólida de programación y la usé de inmediato en mis propios proyectos web.",
    text: "Participé como estudiante aprendiendo y practicando Java, Python, programación orientada a objetos, SQL, Git, frameworks y desarrollo front end.",
    tags: ["Java", "Python", "POO", "SQL", "Git", "Frameworks", "Front end"],
  },
  {
    title: "Bachiller, INEM",
    when: "Medellín, Colombia",
    win: "Terminé la educación media y empecé a formarme como desarrollador.",
    text: "Mi formación académica es el bachillerato. El resto lo he construido con práctica: el semillero y proyectos propios que ya están en línea.",
    tags: ["Educación media"],
  },
]

export const projects = [
  {
    title: "Fehu Technology",
    url: "https://fehutecnology.netlify.app/",
    win: "Una tienda web que lleva al cliente del catálogo a un mensaje de WhatsApp en un clic.",
    text: "Diseñé y desarrollé el sitio completo: presentación del producto, cobertura de entrega en Medellín, formulario de contacto, enlace para saltar al contenido y navegación adaptada a móvil.",
    tags: ["Front end", "Responsive", "Accesibilidad", "Netlify"],
  },
  {
    title: "Pokédex interactiva",
    url: "https://pokedexparavic.netlify.app/",
    win: "Una Pokédex que se enciende como una consola y se explora como un videojuego.",
    text: "Construí una interfaz con lista de Pokémon, filtros por generación y por tipo, y armado de equipo. Aquí apliqué lo que aprendí en el semillero.",
    tags: ["Front end", "Interfaz interactiva", "Netlify"],
  },
]

export const tech = [
  { group: "Lenguajes", items: ["Python", "Java", "SQL"], color: "y" },
  { group: "Fundamentos y herramientas", items: ["Programación orientada a objetos", "Frameworks", "Desarrollo front end", "Git", "Netlify"], color: "b" },
]
export const techNote = "Los conozco y los sigo reforzando con cada proyecto."

export const soft = [
  { title: "Comunicación asertiva", text: "Digo lo que pienso con claridad y respeto, para que el equipo y el cliente sepan en qué punto estamos." },
  { title: "Dirección", text: "Me siento cómodo tomando la iniciativa y guiando al grupo hacia un objetivo común." },
  { title: "Calma bajo estrés", text: "Cuando hay presión, priorizo y resuelvo un problema a la vez, sin perder el foco." },
]

export const hobbies = [
  { title: "Vóley", text: "Se gana en equipo. Me enseña a confiar en los demás, comunicarme rápido y cubrir al compañero." },
  { title: "Boxeo", text: "Entrenar exige constancia y control bajo presión, dos cosas que llevo al trabajo y a los plazos." },
  { title: "Ajedrez", text: "Pienso antes de mover: analizo opciones y anticipo problemas, igual que al diseñar una solución." },
]

export const contact = {
  city: "Medellín, Colombia",
  // Abre Gmail en el navegador con el correo y el asunto ya escritos (funciona sin app de correo instalada)
  write: "https://mail.google.com/mail/?view=cm&fs=1&to=estebanperezvergara@gmail.com&su=Quiero%20hablar%20de%20un%20proyecto",
  links: [
    { label: "Correo", value: "estebanperezvergara@gmail.com", href: "mailto:estebanperezvergara@gmail.com" },
    { label: "Teléfono", value: "300 577 2245", href: "tel:+573005772245" },
    { label: "Instagram", value: "@estedan.p", href: "https://www.instagram.com/estedan.p/", external: true },
  ],
}
