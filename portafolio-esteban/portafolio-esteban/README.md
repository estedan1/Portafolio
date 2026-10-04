# Portafolio de Esteban Pérez Vergara

Portafolio personal hecho con **React + Vite**. Es una página estática: se despliega sin servidor en Netlify o Vercel.

## Qué contiene
Hero, Sobre mí, Educación y experiencia, Proyectos, Habilidades técnicas, Habilidades blandas, Hobbies y Contacto. Se adapta al modo claro u oscuro del sistema del visitante y tiene un botón para cambiarlo.

## Editar el contenido
Todo el texto, los enlaces y los datos de contacto están en `src/data/portfolio.js`. Cambia ahí lo que necesites; no hace falta tocar los componentes. Los colores y el espaciado están como variables al inicio de `src/styles.css`.

## Ejecutar en local
Requisito: [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # genera la carpeta dist/
npm run preview   # prueba local del build
```

## Desplegar en Netlify
La configuración ya está en `netlify.toml` (build `npm run build`, carpeta `dist`).

**Opción A, desde el panel (recomendada)**
1. Sube este proyecto a un repositorio de GitHub.
2. Entra a [app.netlify.com](https://app.netlify.com) e inicia sesión.
3. Pulsa **Add new site → Import an existing project** y elige GitHub.
4. Selecciona el repositorio. Netlify toma `npm run build` y `dist` del `netlify.toml`.
5. Pulsa **Deploy site**. Al terminar tendrás una URL `https://tu-sitio.netlify.app`; puedes cambiar el nombre en **Site configuration → Change site name**.

**Opción B, con la terminal**
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy          # publica un borrador para revisar; elige "Create & configure a new project" y usa dist como carpeta
netlify deploy --prod   # publica la versión final
```

**Opción C, arrastrando la carpeta:** ejecuta `npm run build`, abre [app.netlify.com/drop](https://app.netlify.com/drop) y arrastra la carpeta `dist`.

## Desplegar en Vercel
La configuración ya está en `vercel.json`.

**Opción A, desde el panel**
1. Sube el proyecto a GitHub.
2. Entra a [vercel.com](https://vercel.com) e inicia sesión.
3. Pulsa **Add New → Project** e importa el repositorio.
4. Verifica que **Framework Preset** sea *Vite*, **Build Command** `npm run build` y **Output Directory** `dist`.
5. Pulsa **Deploy**. Tu sitio quedará en `https://tu-proyecto.vercel.app`.

**Opción B, con la terminal**
```bash
npm install -g vercel
vercel login
vercel          # despliegue de prueba
vercel --prod   # despliegue final
```

## Actualizar el sitio después
Si lo conectaste desde GitHub, cada `git push` a la rama principal publica los cambios automáticamente en Netlify y en Vercel.
