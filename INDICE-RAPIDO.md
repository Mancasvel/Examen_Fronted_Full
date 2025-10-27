# 🔍 ÍNDICE RÁPIDO - DÓNDE ENCONTRAR CADA COSA

> Usa Ctrl+F en tu IDE para buscar el archivo y luego copia el código que necesites

---

## 📂 POR TIPO DE TAREA

### 🔵 **NECESITO: Crear un LISTADO**
```
Archivos de referencia completos:
├── OrdersScreen.js               (LÍNEAS 19-242)  ← Listado + analíticas + acciones
├── RestaurantScheduleScreen.js   (LÍNEAS 16-186) ← Listado + CRUD completo
└── AddressScreen.js              (LÍNEAS 13-148) ← Listado + acciones simples

Busca en estos archivos:
- useState para items
- useEffect con fetchItems
- FlatList completo
- renderItem con ImageCard
```

### 🟢 **NECESITO: CREAR algo (formulario)**
```
Archivos de referencia:
├── CreateScheduleScreen.js  (LÍNEAS 13-95)  ← Formulario creación simple
└── AddressDetailScreen.js   (LÍNEAS 13-107) ← Formulario con Switch

Busca:
- useState para backendErrors
- initialValues (valores vacíos)
- validationSchema de yup
- Función create
- Formik con onSubmit
```

### 🟡 **NECESITO: EDITAR algo (formulario con carga de datos)**
```
Archivos de referencia:
├── EditOrderScreen.js     (LÍNEAS 13-100)  ← Edición simple (2 campos)
└── EditScheduleScreen.js  (LÍNEAS 14-116) ← Edición con buildInitialValues

Busca:
- useState para order/item completo
- useEffect para cargar datos
- buildInitialValues
- enableReinitialize en Formik
- Función update
```

### 🟠 **NECESITO: MOSTRAR ANALÍTICAS/ESTADÍSTICAS**
```
Archivo de referencia:
└── OrdersScreen.js  (LÍNEAS 95-140)  ← renderAnalytics completo

Busca:
- useState para analytics (null)
- fetchAnalytics
- renderAnalytics con grid 2x2
- analyticsContainer, analyticsRow, analyticsCell en styles
```

### 🔴 **NECESITO: BOTÓN para CAMBIAR ESTADO**
```
Archivo de referencia:
└── OrdersScreen.js  (LÍNEAS 69-93)  ← handleNextStatus

Busca:
- nextStatus en OrderEndpoints.js (LÍNEAS 19-30)
- Switch con estados
- Renderizado condicional del botón (LÍNEA 205)
```

### 🟣 **NECESITO: BOTÓN para ELIMINAR con confirmación**
```
Archivo de referencia:
└── RestaurantScheduleScreen.js  (LÍNEAS 156-187)

Busca:
- useState para itemToBeDeleted
- Función remove
- DeleteModal (LÍNEAS 178-183)
```

---

## 📂 POR ARCHIVO

### 📄 `OrdersScreen.js` - El más completo
```
LÍNEAS 20-35:   Estados y useEffect (orders, analytics, restaurant)
LÍNEAS 37-51:   fetchRestaurantAnalytics
LÍNEAS 53-67:   fetchRestaurantOrders
LÍNEAS 69-93:   handleNextStatus (cambio de estado)
LÍNEAS 95-140:  renderAnalytics (grid 2x2 de métricas)
LÍNEAS 171-225: renderOrder (cada pedido con botones Edit y Advance)
LÍNEAS 245-341: Estilos (especialmente analyticsContainer)
```

### 📄 `EditOrderScreen.js` - Edición simple
```
LÍNEAS 14-25:  Estados y validationSchema
LÍNEAS 27-51:  useEffect para cargar pedido
LÍNEAS 53-72:  updateOrder
LÍNEAS 74-100: Formik con enableReinitialize
```

### 📄 `CreateScheduleScreen.js` - Creación simple
```
LÍNEAS 14-40:  Estados y validationSchema (con regex HH:mm:ss)
LÍNEAS 42-66:  Función create
LÍNEAS 68-116: Formik completo
```

### 📄 `EditScheduleScreen.js` - Edición con buildInitialValues
```
LÍNEAS 15-41:  Estados y validationSchema
LÍNEAS 43-65:  useEffect con fetchScheduleDetail
LÍNEAS 67-87:  Función update
LÍNEAS 89-116: Formik con enableReinitialize
```

### 📄 `RestaurantScheduleScreen.js` - CRUD completo
```
LÍNEAS 17-36:  Estados y useEffect
LÍNEAS 38-92:  renderSchedule (con botones Edit y Delete)
LÍNEAS 102-127: renderHeader (botón Create)
LÍNEAS 139-152: fetchSchedules
LÍNEAS 156-187: remove con DeleteModal
LÍNEAS 189-231: Estilos
```

### 📄 `AddressScreen.js` - Listado con acciones
```
LÍNEAS 14-39:  Estados y fetchAddresses
LÍNEAS 41-62:  removeAddress
LÍNEAS 64-82:  setAddressAsDefault (PATCH)
LÍNEAS 84-112: renderAddress (con iconos star y trash)
LÍNEAS 138-146: DeleteModal
```

### 📄 `AddressDetailScreen.js` - Formulario con Switch
```
LÍNEAS 14-24:  Estados e initialValues
LÍNEAS 26-34:  validationSchema con zipCode
LÍNEAS 36-51:  createAddress
LÍNEAS 76-85:  Switch para isDefault
```

---

## 📂 ENDPOINTS

### 📄 `OrderEndpoints.js`
```
LÍNEAS 7-9:   update (PUT /orders/:id/by-owner)
LÍNEAS 11-14: getById
LÍNEAS 19-30: nextStatus (switch con PATCH según estado)
```

### 📄 `RestaurantEndpoints.js`
```
LÍNEAS 6-8:   getAll
LÍNEAS 11-13: getDetail
LÍNEAS 21-23: create
LÍNEAS 26-28: update
LÍNEAS 31-33: remove
LÍNEAS 36-38: getRestaurantOrders (examen Orders)
LÍNEAS 42-44: getRestaurantAnalytics (examen Orders)
```

### 📄 `AddressEndpoints.js`
```
LÍNEAS 6-8:   getAddresses
LÍNEAS 12-14: addAddress (POST)
LÍNEAS 19-21: setDefault (PATCH)
LÍNEAS 24-26: deleteAddress (DELETE)
```

---

## 📂 NAVEGACIÓN

### 📄 `RestaurantsStack.js`
```
LÍNEAS 1-16:   Imports (incluye EditOrderScreen)
LÍNEAS 18-56:  Stack.Navigator con todas las pantallas
LÍNEAS 58-76:  Pantallas de Schedules (examen Schedules)
LÍNEAS 78-85:  EditOrderScreen (examen Orders)
```

---

## 🎯 VALIDACIONES YUP

### String obligatorio
```javascript
// Línea típica: 18-20 en cualquier Screen
name: yup.string().required('Campo obligatorio')
```

### Email
```javascript
// Ejemplo en validaciones
email: yup.string().email('Email inválido').required('Obligatorio')
```

### Número positivo
```javascript
// EditOrderScreen.js LÍNEA 23
price: yup.number().required('Obligatorio').moreThan(0, 'Mayor que 0')
```

### Código postal (5 dígitos)
```javascript
// AddressDetailScreen.js LÍNEAS 31-33
zipCode: yup.string()
  .matches(/^[0-9]{5}$/, 'Debe tener 5 dígitos')
  .required('Obligatorio')
```

### Hora HH:mm:ss
```javascript
// CreateScheduleScreen.js LÍNEAS 24-30
time: yup.string()
  .required('Obligatorio')
  .matches(
    /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
    'Formato HH:mm:ss'
  )
```

---

## 🎨 ESTILOS ESPECÍFICOS

### Grid 2x2 para analíticas
```javascript
// OrdersScreen.js LÍNEAS 318-341
analyticsContainer: {
  backgroundColor: GlobalStyles.brandPrimaryTap,
  paddingVertical: 10
},
analyticsRow: {
  flexDirection: 'row',
  justifyContent: 'space-around'
},
analyticsCell: {
  margin: 5,
  width: '45%',
  backgroundColor: GlobalStyles.brandPrimary,
  borderRadius: 8,
  paddingVertical: 10
}
```

### Botones de acción en fila
```javascript
// OrdersScreen.js o RestaurantScheduleScreen.js
actionButtonsContainer: {
  flexDirection: 'row',
  bottom: 5,
  position: 'absolute',
  width: '90%'
},
actionButton: {
  borderRadius: 8,
  height: 40,
  marginTop: 12,
  margin: '1%',
  padding: 10,
  width: '50%'
}
```

---

## 💡 TIPS RÁPIDOS

### Cuando necesites...
- **Listado**: Ve a `OrdersScreen.js` o `RestaurantScheduleScreen.js`
- **Formulario simple**: Ve a `CreateScheduleScreen.js`
- **Formulario edición**: Ve a `EditOrderScreen.js` o `EditScheduleScreen.js`
- **Analíticas**: Ve a `OrdersScreen.js` líneas 95-140
- **Cambio estado**: Ve a `OrdersScreen.js` líneas 69-93 Y `OrderEndpoints.js` líneas 19-30
- **Eliminar**: Ve a `RestaurantScheduleScreen.js` líneas 156-187
- **Endpoints**: Copia de `OrderEndpoints.js`, `AddressEndpoints.js` o `RestaurantEndpoints.js`
- **Navegación**: Ve a `RestaurantsStack.js`

### Busca estas palabras clave en el código:
- `useState` → Inicio de la lógica de estado
- `useEffect` → Carga de datos
- `validationSchema` → Validaciones
- `Formik` → Inicio del formulario
- `FlatList` → Inicio del listado
- `renderItem` → Cómo renderizar cada elemento
- `showMessage` → Mensajes de éxito/error
- `navigation.navigate` → Navegación entre pantallas

---

## 🚀 MÉTODO EXAMEN

1. **Lee el enunciado** → Identifica qué tipo de ejercicio es
2. **Abre este archivo** → Busca el tipo de tarea
3. **Abre el archivo de referencia** → Ve a las líneas indicadas
4. **Copia el código** → Adapta nombres de variables
5. **Verifica pruebas de aceptación** → Comprueba que cumples todo
6. **Prueba** → Ejecuta y verifica que funciona

**⏱️ Con este método, cada ejercicio debería tomarte ~15-20 minutos**

