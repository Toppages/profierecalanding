# Profi Reca Landing

Este repositorio contiene el código fuente de un sitio web de landing page desarrollado con **React**, **TypeScript** y **Vite**. Está orientado a mostrar productos y servicios, con un carrito de compras y componentes reutilizables.

## 📁 Estructura del proyecto

- `src/` - Código fuente de la aplicación
  - `components/` - Componentes React divididos por funciones (productos, servicios, layout, UI)
  - `context/` - Contextos de React (por ejemplo, `CartContext`)
  - `data/` - Datos estáticos, como `products.ts`
  - `hooks/` - Custom hooks (ej. `useProducts`, `use-mobile`)
  - `lib/` - Utilidades generales
  - `pages/` - Páginas de la aplicación (catálogo, contacto, servicios, etc.)
  - `types/` - Tipos TypeScript (producto, items de carrito, etc.)

## 🚀 Tecnologías utilizadas

- React 18
- TypeScript
- Vite como bundler
- Tailwind CSS para estilos
- Sonner para notificaciones

## 🛠️ Instalación

```bash
# clonar el repositorio
git clone <url-del-repositorio>
cd profierecaLanding

# instalar dependencias
npm install
```

## ⚙️ Desarrollo

```bash
npm run dev
```

Abre el navegador en `http://localhost:5173`.

## ✅ Funcionalidades

- Navegación entre páginas
- Listado de productos y servicios
- Carrito de compras con contexto global
- Modal para detalles de producto y servicios
- Componentes reutilizables de UI basados en Radix UI
- Dark/Light theme toggle

## 🧪 Pruebas

(No hay pruebas configuradas actualmente)

## 📄 Estilo de código

El proyecto utiliza **ESLint** y la configuración recomendada para TypeScript. Los estilos se gestiona con Tailwind.

## 📦 Despliegue

Construye la aplicación con:

```bash
npm run build
```

La salida estará en la carpeta `dist/` y puede desplegarse en cualquier servicio estático.

## 📌 Notas

- Revisa `tsconfig.json` y `vite.config.ts` para personalizaciones.
- Los componentes de la carpeta `ui/` son utilidades para la interfaz.

---

Creado por el equipo de Profireca.
