├── android/
├── ios/
├── src/
│ ├── components/
│ │ ├── Common/ # Componentes reutilizables (botones, inputs, etc.)
│ │ ├── Login/ # Componentes específicos del Login
│ │ ├── Home/ # Componentes específicos del Home
│ │ ├── Social/ # Componentes específicos de la sección Social
│ │ ├── Scanner/ # Componentes relacionados con la cámara
│ │ ├── Statistics/ # Componentes específicos de Estadísticas
│ │ ├── Profile/ # Componentes específicos del Perfil
│ │ └── ...
│ ├── navigation/ # Configuración de la navegación
│ │ ├── AppNavigator.js # Navegación principal
│ │ ├── AuthNavigator.js # Navegación para login/register
│ │ └── TabNavigator.js # Navegación con pestañas (Home, Social, etc.)
│ ├── screens/ # Pantallas de la aplicación
│ │ ├── LoginScreen.js # Pantalla de inicio de sesión
│ │ ├── RegisterScreen.js # Pantalla de registro
│ │ ├── WelcomeScreen.js # Pantalla de bienvenida
│ │ ├── HomeScreen.js # Pantalla principal
│ │ ├── SocialScreen.js # Pantalla Social
│ │ ├── ScannerScreen.js # Pantalla del escáner/cámara
│ │ ├── StatisticsScreen.js # Pantalla de estadísticas
│ │ └── ProfileScreen.js # Pantalla de perfil
│ ├── assets/ # Archivos estáticos (imágenes, íconos, etc.)
│ │ ├── images/ # Imágenes de la aplicación
│ │ ├── icons/ # Íconos
│ │ └── fonts/ # Fuentes personalizadas
│ ├── styles/ # Archivos de estilo
│ │ ├── colors.js # Paleta de colores
│ │ ├── fonts.js # Configuración de fuentes
│ │ └── globalStyles.js # Estilos globales
│ ├── services/ # Configuración de servicios (Firebase, API, etc.)
│ │ ├── firebase.js # Configuración y inicialización de Firebase
│ │ └── api.js # Llamadas a la API si es necesario
│ ├── context/ # Contextos de React
│ │ ├── AuthContext.js # Contexto para autenticación
│ │ └── UserContext.js # Contexto para datos del usuario
│ ├── hooks/ # Hooks personalizados
│ │ └── useAuth.js # Hook para manejar la autenticación
│ └── utils/ # Utilidades y funciones auxiliares
│ ├── validators.js # Validación de formularios
│ ├── constants.js # Constantes globales
│ └── helpers.js # Funciones helper
├── App.js # Punto de entrada de la app
├── package.json # Dependencias del proyecto
├── .gitignore # Archivos a ignorar por Git
├── README.md # Documentación del proyecto
└── ...
