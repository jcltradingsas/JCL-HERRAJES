# JCL HERRAJES — Ferretería y Herrajes

Página web moderna para una ferretería y casa de herrajes, con animaciones de **Framer Motion** (librería `motion` vía CDN), diseño oscuro industrial con acento **naranja seguridad** y enlace directo a **WhatsApp**.

## Cómo verla en tu computadora

Solo abre el archivo `index.html` con doble clic. No necesitas instalar nada.

## Cómo subirla GRATIS y permanente a internet (GitHub Pages)

Necesitas una cuenta en [github.com](https://github.com) (gratis). Si no tienes Git instalado, **no es necesario**: puedes subir los archivos con la página web de GitHub.

1. **Crear un repositorio**
   - Entra a [github.com/new](https://github.com/new)
   - Ponle un nombre, por ejemplo: `mi-ferreteria`
   - Selecciona **Public** y haz clic en **Create repository**.

2. **Subir los archivos** (sin usar Git)
   - En la página de tu repositorio, clic en **"Add file" → "Upload files"**.
   - Arrastra aquí esta carpeta completa (debe subirse con `index.html`, la carpeta `css`, la carpeta `js` y el `README.md`).
   - Escribe un mensaje corto y pulsa **"Commit changes"**.

3. **Activar GitHub Pages**
   - Ve a **Settings** (de tu repositorio).
   - En el menú izquierdo, busca **Pages**.
   - En **"Branch"** elige `main` y carpeta `/ (root)` y pulsa **Save**.
   - Espera 1–2 minutos y tu página estará en línea gratis.

4. **Tu página en vivo**
   - La dirección será:
     `https://TUUUSUARIO.github.io/mi-ferreteria/`
   - Comparte ese enlace con tus clientes, o ponlo en tu perfil de WhatsApp.

> También puedes usar **GitHub Desktop** o `git` si ya los tienes: `git init`, `git add .`, `git commit -m "Mi ferretería"`, `git branch -M main`, `git remote add origin https://github.com/TUUUSUARIO/mi-ferreteria.git`, `git push -u origin main`.

## Personalización rápida

- **Número de WhatsApp**: se usa en `index.html` (búscalo como `593939289952`). Si tu país no es Ecuador, cambia el `593` por tu código de país (sin el `0` inicial).
- **Nombre del negocio**: está como `JCL HERRAJES` en el logo, el título y el pie de página.
- **Dirección y horarios**: en la sección Contacto y en el pie de página.
- **Colores**: definidos como variables al inicio de `css/styles.css` (`--orange`, `--amber`, `--bg`, etc.).
- **Fotos del negocio y productos**: guarda tus imágenes en la carpeta `img/` (con nombres simples como `local.jpg`, `producto1.jpg`). Luego se usan así en `index.html`: `<img src="img/local.jpg" alt="..." />`.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | Estructura y contenido de la página |
| `css/styles.css` | Diseño, colores y animaciones CSS |
| `js/main.js` | Animaciones Framer Motion, menú móvil y contadores |
| `img/` | Tus fotos del local y de los productos |

## Tecnologías

- [Motion (Framer Motion)](https://motion.dev) — animaciones por CDN
- [Lucide](https://lucide.dev) — íconos por CDN
- Google Fonts — Space Grotesk e Inter
- HTML + CSS + JavaScript puros (sin frameworks, sin instalar nada)
