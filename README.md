# FrontendDesafioTecnico

Aplicación de noticias desarrollada con Angular 20, optimizada para dispositivos móviles y preparada para producción.

## 🚀 Características

- **Responsive Design**: Optimizada para móviles (412x915) y tablets
- **API Integration**: Integración con NewsData.io API
- **Componentes Modulares**: Arquitectura modular y reutilizable
- **Optimización para Producción**: Configuración completa para despliegue

## 📋 Prerrequisitos

- Node.js 18+
- npm o yarn
- Docker (opcional, para despliegue)

## 🛠️ Instalación

### Desarrollo Local

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd frontend-desafio-tecnico
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
cp env.example .env
# Editar .env con tus valores
```

4. **Ejecutar en desarrollo**

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### Scripts Disponibles

```bash
# Desarrollo
npm start              # Servidor de desarrollo
npm run start:prod     # Servidor con configuración de producción

# Construcción
npm run build          # Construcción para desarrollo
npm run build:prod     # Construcción optimizada para producción
npm run build:dev      # Construcción para desarrollo

# Testing
npm test               # Ejecutar tests
npm run test:ci        # Tests en modo CI

# Utilidades
npm run lint           # Linting del código
npm run format         # Formateo con Prettier
npm run analyze        # Análisis del bundle
```

## 🌍 Variables de Entorno

Copia `env.example` a `.env` y configura:

```env
# API Key para NewsData.io
API_KEY=your_api_key_here

# URL base de la API
API_BASE_URL=https://newsdata.io/api/1

# Entorno de ejecución
ENVIRONMENT=development

# Configuración de producción
PRODUCTION_API_KEY=your_production_api_key_here
PRODUCTION_API_BASE_URL=https://newsdata.io/api/1
```

## 📱 Responsive Design

La aplicación está optimizada para:

- **Móviles**: 412x915 y similares
- **Tablets**: 768px y superiores
- **Desktop**: 1024px y superiores

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── core/           # Módulos principales
│   ├── shared/         # Componentes compartidos
│   │   ├── components/ # Componentes reutilizables
│   │   ├── interface/  # Interfaces TypeScript
│   │   └── service/    # Servicios
│   └── ...
├── environments/       # Configuración por entorno
└── ...
```

## 🔧 Configuración de Producción

### Angular

- Optimización de bundles
- Tree shaking
- Minificación de código
- Source maps deshabilitados

````

## 📦 Build de Producción

```bash
# Construcción optimizada
npm run build:prod

# Análisis del bundle
npm run analyze
````
