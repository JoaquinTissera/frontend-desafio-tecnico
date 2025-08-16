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

## 🐳 Despliegue con Docker

### Producción

```bash
# Construir y ejecutar
docker-compose up --build

# Solo ejecutar (si ya está construido)
docker-compose up -d
```

### Desarrollo con Docker

```bash
# Ejecutar en modo desarrollo
docker-compose --profile dev up --build
```

### Construcción manual

```bash
# Construir imagen de producción
docker build -t frontend-desafio-tecnico .

# Ejecutar contenedor
docker run -p 80:80 frontend-desafio-tecnico
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

### Nginx

- Compresión gzip habilitada
- Headers de seguridad configurados
- Rate limiting para APIs
- Caché optimizado para assets estáticos

### Angular

- Optimización de bundles
- Tree shaking
- Minificación de código
- Source maps deshabilitados

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests en modo CI
npm run test:ci

# Cobertura de código
npm run test -- --code-coverage
```

## 📦 Build de Producción

```bash
# Construcción optimizada
npm run build:prod

# Análisis del bundle
npm run analyze
```

## 🔒 Seguridad

- Headers de seguridad configurados en Nginx
- Content Security Policy (CSP)
- Rate limiting para APIs
- Validación de entrada en formularios

## 📈 Performance

- Lazy loading de módulos
- Optimización de imágenes
- Compresión gzip
- Caché de assets estáticos
- Bundle splitting automático

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🆘 Soporte

Para soporte, email: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
