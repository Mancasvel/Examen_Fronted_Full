# 🚀 GUÍA EXAMEN DELIVEROUS - REFERENCIA RÁPIDA

> **⚠️ REPO PARA USAR DURANTE EL EXAMEN** - Soluciones completas comentadas de 3 exámenes reales

## 📑 TABLA DE CONTENIDOS - ACCESO RÁPIDO

[Schedules Solution url](https://github.com/IISSI2-IS-2025/ExLab-Frontend-Julio-Address/pull/1/files)

### 🔥 **DURANTE EL EXAMEN - USA ESTAS SECCIONES**
- [⚡ INICIO RÁPIDO](#-inicio-rápido-primeros-5-minutos-del-examen) ← **EMPIEZA AQUÍ**
- [📋 CHECKLIST EJERCICIO POR EJERCICIO](#-checklist-paso-a-paso) ← **Sigue estos pasos**
- [💻 CÓDIGO COPY-PASTE](#-código-listo-para-copiar) ← **Templates listos**
- [🔍 BUSCADOR RÁPIDO](#-buscador-rápido-qué-necesito) ← **¿Qué necesito hacer?**
- [🆘 ERRORES COMUNES](#-errores-comunes-y-soluciones) ← **Si algo falla**

### 📚 **PARA ESTUDIAR ANTES DEL EXAMEN**
- [📊 Patrones de Exámenes](#-patrones-identificados-en-los-exámenes)
- [📝 Exámenes Resueltos](#-resumen-de-exámenes-resueltos)
- [🛠️ Tecnologías Clave](#️-tecnologías-y-herramientas-clave)
- [🎓 Consejos de Estudio](#-consejos-de-estudio)

---

## ⚡ INICIO RÁPIDO: PRIMEROS 5 MINUTOS DEL EXAMEN

### 1️⃣ **LEE EL ENUNCIADO COMPLETO** (2 min)
```
✅ Identifica cuántos ejercicios hay (normalmente 4)
✅ Identifica qué tipo de examen es (Schedules/Address/Orders/Otro)
✅ Mira las figuras/capturas de pantalla
✅ Identifica qué archivos debes modificar
```

### 2️⃣ **SETUP DEL ENTORNO** (3 min)
```bash
# Windows
npm run install:all:win
npm run migrate:backend
npm run start:backend    # Terminal 1
npm run start:frontend   # Terminal 2 (espera a que backend esté listo)
```

### 3️⃣ **ABRE ESTOS ARCHIVOS DE REFERENCIA**
- 📄 **[CHEATSHEET-EXAMEN.md](./CHEATSHEET-EXAMEN.md)** ← **¡IMPRIME ESTO!** Cheat sheet de 1 página
- 🔍 **[INDICE-RAPIDO.md](./INDICE-RAPIDO.md)** ← Dónde encontrar cada cosa (con números de línea)
- 📚 **Este README** ← Explicaciones completas y ejemplos
- 💻 Archivos comentados en `src/screens/` y `src/api/` ← Código completo funcionando

---

## 📄 CHEAT SHEET DE 1 PÁGINA - IMPRIMIR O TENER VISIBLE

### 🎯 **FLUJO GENERAL DEL EXAMEN**
```
1. Leer enunciado completo (2 min)
2. Setup entorno (3 min)
3. Crear endpoints (5 min)
4. Registrar pantallas en Stack (2 min)
5. Ejercicio 1: Listado (15-20 min)
6. Ejercicio 2: Formulario (20-25 min)
7. Ejercicio 3: Vista/Analíticas (10-15 min)
8. Ejercicio 4: Acción (10-15 min)
9. Probar TODO (10 min)
= TOTAL: ~80 minutos
```

### 🔥 **IMPORTS QUE SIEMPRE NECESITAS**
```javascript
import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, FlatList, Pressable, ScrollView } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as GlobalStyles from '../../styles/GlobalStyles'
import * as yup from 'yup'
import { Formik } from 'formik'
import { AuthorizationContext } from '../../context/AuthorizationContext'
import TextRegular from '../../components/TextRegular'
import TextSemiBold from '../../components/TextSemibold'
import TextError from '../../components/TextError'
import InputItem from '../../components/InputItem'
import ImageCard from '../../components/ImageCard'
import DeleteModal from '../../components/DeleteModal'
```

### 🎨 **ICONOS MÁS USADOS** (MaterialCommunityIcons)
```javascript
// Acciones
'content-save'     // Guardar
'pencil'           // Editar
'delete'           // Eliminar
'plus-circle'      // Crear/Añadir
'skip-next'        // Avanzar/Siguiente

// Estados
'check'            // Completado
'close'            // Cancelar
'clock'            // Pendiente
'timetable'        // Horarios/Schedules

// Otros (Ionicons)
'star'             // Favorito/Default (relleno)
'star-outline'     // No favorito (vacío)
'trash'            // Eliminar
```

### ⚡ **CÓDIGO ULTRA-RÁPIDO**

**Listado básico (3 min):**
```javascript
const [items, setItems] = useState([])
useEffect(() => { fetchItems() }, [route])
const fetchItems = async () => {
  const data = await getAPI(route.params.id)
  setItems(data)
}
<FlatList data={items} renderItem={renderItem} keyExtractor={i => i.id.toString()} />
```

**Formulario básico (5 min):**
```javascript
const [initialValues, setInitialValues] = useState({ name: '' })
const validationSchema = yup.object().shape({
  name: yup.string().required('Obligatorio')
})
<Formik enableReinitialize initialValues={initialValues} 
  validationSchema={validationSchema} onSubmit={handleSubmit}>
  {({ handleSubmit }) => (
    <>
      <InputItem name="name" label="Nombre:" />
      <Pressable onPress={handleSubmit}>...</Pressable>
    </>
  )}
</Formik>
```

**Botón estándar (1 min):**
```javascript
<Pressable
  onPress={handleAction}
  style={({ pressed }) => [{
    backgroundColor: pressed ? GlobalStyles.brandPrimaryTap : GlobalStyles.brandPrimary
  }, styles.button]}>
  <MaterialCommunityIcons name='icon-name' color='white' size={20}/>
  <TextRegular>Texto</TextRegular>
</Pressable>
```

### 📊 **ESTRUCTURA DE ARCHIVOS A MODIFICAR**
```
src/
├── api/
│   ├── XxxEndpoints.js       ← SIEMPRE (crear endpoints)
│   └── helpers/
│       └── ApiRequestsHelper  (ya existe, usar get/post/put/destroy/patch)
├── screens/
│   ├── xxx/
│   │   ├── XxxStack.js        ← Registrar pantallas nuevas
│   │   ├── XxxListScreen.js   ← Ejercicio 1
│   │   ├── CreateXxxScreen.js ← Ejercicio 2
│   │   └── EditXxxScreen.js   ← Ejercicio 2
└── styles/
    └── GlobalStyles.js         (colores ya definidos)
```

### 🚨 **ERRORES QUE TE HARÁN PERDER TIEMPO**
```javascript
// ❌ Olvidar .toString() en keyExtractor
keyExtractor={item => item.id}  // ❌ ERROR

// ❌ No exportar funciones de endpoints
export { getAll }  // ❌ Si usas create, ¡expórtala!

// ❌ No verificar backendErrors
{backendErrors.map(...)}  // ❌ ERROR si es undefined

// ❌ Olvidar enableReinitialize en edición
<Formik initialValues={...}>  // ❌ No se actualizará

// ❌ No navegar con dirty flag
navigation.navigate('ListScreen')  // ❌ No refrescará
```

### 💡 **TIPS PARA GANAR TIEMPO**
- ✅ Copia código de los archivos comentados en `src/`
- ✅ Usa Ctrl+F en este README para buscar lo que necesites
- ✅ No pierdas tiempo con estilos perfectos, usa los que hay
- ✅ Prueba cada ejercicio antes de pasar al siguiente
- ✅ Lee TODAS las pruebas de aceptación del enunciado
- ✅ Los nombres de las pantallas en Stack deben coincidir con navigation.navigate

### ⏱️ **DISTRIBUCIÓN DE TIEMPO RECOMENDADA**
| Tarea | Tiempo | Acumulado | Prioridad |
|-------|--------|-----------|-----------|
| Leer enunciado completo | 2 min | 2 min | 🔴 CRÍTICO |
| Setup entorno | 3 min | 5 min | 🔴 CRÍTICO |
| Crear endpoints | 5 min | 10 min | 🟠 Alta |
| Registrar pantallas en Stack | 2 min | 12 min | 🟠 Alta |
| **Ejercicio 1** (Listado) | 15-20 min | 30 min | 🔴 CRÍTICO (3 pts) |
| **Ejercicio 2** (Formulario) | 20-25 min | 55 min | 🔴 CRÍTICO (3 pts) |
| **Ejercicio 3** (Vista/Analytics) | 10-15 min | 70 min | 🟡 Media (2 pts) |
| **Ejercicio 4** (Acción) | 10-15 min | 85 min | 🟡 Media (2 pts) |
| Pruebas y ajustes | 10 min | 95 min | 🟠 Alta |
| **Buffer** | 5 min | 100 min | - |

**💡 Estrategia**: Si vas mal de tiempo, asegura los Ejercicios 1 y 2 (6 puntos) antes que todo.

---

## 📋 CHECKLIST PASO A PASO

### ✅ **EJERCICIO 1: Listado (3 puntos)** - 15-20 minutos

```javascript
// ARCHIVO: XxxScreen.js (pantalla de listado)

// 1. Estados necesarios
const [items, setItems] = useState([])
const { loggedInUser } = useContext(AuthorizationContext)

// 2. useEffect para cargar datos
useEffect(() => {
  if (loggedInUser) {
    fetchItems()
  } else {
    setItems([])
  }
}, [loggedInUser, route])

// 3. Función fetch
const fetchItems = async () => {
  try {
    const data = await getItemsAPI(route.params.id)
    setItems(data)
  } catch (error) {
    showMessage({
      message: `Error: ${error}`,
      type: 'error',
      style: GlobalStyles.flashStyle,
      titleStyle: GlobalStyles.flashTextStyle
    })
  }
}

// 4. Renderizar cada item
const renderItem = ({ item }) => (
  <ImageCard imageUri={item.image} title={item.name}>
    <TextRegular>{item.description}</TextRegular>
    <TextSemiBold>{item.price}€</TextSemiBold>
  </ImageCard>
)

// 5. FlatList
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={item => item.id.toString()} // ⚠️ .toString() es OBLIGATORIO
  ListHeaderComponent={renderHeader}
  ListEmptyComponent={renderEmpty}
/>
```

**⚠️ NO OLVIDES:**
- ✅ Importar `useState`, `useEffect`, `useContext`
- ✅ `.toString()` en `keyExtractor`
- ✅ `ListEmptyComponent` para cuando no hay datos

---

### ✅ **EJERCICIO 2: Crear/Editar (3 puntos)** - 20-25 minutos

```javascript
// ARCHIVO: CreateEditXxxScreen.js

// 1. Estados
const [backendErrors, setBackendErrors] = useState()
const [initialValues, setInitialValues] = useState({ field1: '', field2: '' })

// 2. Validación Yup
const validationSchema = yup.object().shape({
  field1: yup.string().required('Campo obligatorio'),
  field2: yup.number().moreThan(0, 'Debe ser mayor que 0')
})

// 3. Solo para EDICIÓN: useEffect para cargar datos
useEffect(() => {
  if (route.params?.id) {
    async function fetchData() {
      try {
        const data = await getById(route.params.id)
        setInitialValues(buildInitialValues(data, initialValues))
      } catch (error) {
        showMessage({ message: `Error: ${error}`, type: 'error', ... })
      }
    }
    fetchData()
  }
}, [route])

// 4. Función submit
const handleSubmit = async (values) => {
  setBackendErrors([])
  try {
    const result = route.params?.id 
      ? await update(route.params.id, values)
      : await create(values)
    
    showMessage({
      message: 'Guardado correctamente',
      type: 'success',
      style: GlobalStyles.flashStyle,
      titleStyle: GlobalStyles.flashTextStyle
    })
    navigation.navigate('ListScreen', { dirty: true })
  } catch (error) {
    console.log(error)
    setBackendErrors(error.errors)
  }
}

// 5. Formik
<Formik
  enableReinitialize  // ⚠️ CRÍTICO para edición
  validationSchema={validationSchema}
  initialValues={initialValues}
  onSubmit={handleSubmit}
>
  {({ handleSubmit }) => (
    <ScrollView>
      <InputItem name="field1" label="Campo 1:" />
      <InputItem name="field2" label="Campo 2:" keyboardType="numeric" />
      
      {backendErrors && backendErrors.map((error, index) => (
        <TextError key={index}>{error.param}-{error.msg}</TextError>
      ))}
      
      <Pressable onPress={handleSubmit} style={...}>
        <MaterialCommunityIcons name='content-save' color='white' size={20}/>
        <TextRegular>Save</TextRegular>
      </Pressable>
    </ScrollView>
  )}
</Formik>
```

**⚠️ NO OLVIDES:**
- ✅ `enableReinitialize` en Formik para edición
- ✅ Renderizar `backendErrors`
- ✅ Navegar con `{ dirty: true }`

---

### ✅ **EJERCICIO 3: Vista/Analíticas (2 puntos)** - 10-15 minutos

```javascript
// ARCHIVO: Donde se muestre la vista adicional

// 1. Estado para los datos
const [analytics, setAnalytics] = useState(null)

// 2. Fetch en useEffect
useEffect(() => {
  fetchAnalytics()
}, [route])

const fetchAnalytics = async () => {
  try {
    const data = await getAnalyticsAPI(route.params.id)
    setAnalytics(data)
  } catch (error) {
    showMessage({ message: `Error: ${error}`, type: 'error', ... })
  }
}

// 3. Renderizar (ejemplo analíticas en grid 2x2)
const renderAnalytics = () => (
  <View style={styles.analyticsContainer}>
    <View style={styles.analyticsRow}>
      <View style={styles.analyticsCell}>
        <TextRegular>Métrica 1</TextRegular>
        <TextSemiBold>{analytics.metric1}</TextSemiBold>
      </View>
      <View style={styles.analyticsCell}>
        <TextRegular>Métrica 2</TextRegular>
        <TextSemiBold>{analytics.metric2}</TextSemiBold>
      </View>
    </View>
    <View style={styles.analyticsRow}>
      {/* Segunda fila */}
    </View>
  </View>
)

// 4. Mostrar con renderizado condicional
{analytics !== null && renderAnalytics()}
```

**Estilos para grid 2x2:**
```javascript
analyticsContainer: {
  backgroundColor: GlobalStyles.brandPrimaryTap,
  paddingVertical: 10
},
analyticsRow: {
  flexDirection: 'row',
  justifyContent: 'space-around' // ⚠️ IMPORTANTE
},
analyticsCell: {
  width: '45%',
  backgroundColor: GlobalStyles.brandPrimary,
  borderRadius: 8,
  padding: 10
}
```

---

### ✅ **EJERCICIO 4: Acción (2 puntos)** - 10-15 minutos

```javascript
// Ejemplo: Botón para cambiar estado, eliminar, etc.

// 1. Handler de la acción
const handleAction = async (item) => {
  try {
    await performActionAPI(item.id)
    showMessage({
      message: 'Acción completada',
      type: 'success',
      style: GlobalStyles.flashStyle,
      titleStyle: GlobalStyles.flashTextStyle
    })
    fetchItems() // Refrescar lista
  } catch (error) {
    showMessage({
      message: `Error: ${error}`,
      type: 'danger',
      style: GlobalStyles.flashStyle,
      titleStyle: GlobalStyles.flashTextStyle
    })
  }
}

// 2. Botón con renderizado condicional (ejemplo: no mostrar si estado es X)
{item.status !== 'final_status' &&
  <Pressable
    onPress={() => handleAction(item)}
    style={({ pressed }) => [
      { backgroundColor: pressed ? GlobalStyles.brandGreenTap : GlobalStyles.brandGreen },
      styles.button
    ]}
  >
    <MaterialCommunityIcons name='icon-name' color='white' size={20}/>
    <TextRegular>Acción</TextRegular>
  </Pressable>
}

// 3. Para eliminación: usar DeleteModal
const [itemToDelete, setItemToDelete] = useState(null)

<DeleteModal
  isVisible={itemToDelete !== null}
  onCancel={() => setItemToDelete(null)}
  onConfirm={() => confirmDelete(itemToDelete)}
>
  <TextRegular>¿Confirmar acción?</TextRegular>
</DeleteModal>
```

---

## 💻 CÓDIGO LISTO PARA COPIAR

### 🔌 **ENDPOINTS - Siempre lo mismo**

```javascript
// ARCHIVO: src/api/XxxEndpoints.js
import { get, post, put, destroy, patch } from './helpers/ApiRequestsHelper'

function getAll() {
  return get('resource')
}

function getById(id) {
  return get(`resource/${id}`)
}

function create(data) {
  return post('resource', data)
}

function update(id, data) {
  return put(`resource/${id}`, data)
}

function remove(id) {
  return destroy(`resource/${id}`)
}

// Acción específica (ejemplo: cambiar estado)
function specificAction(id) {
  return patch(`resource/${id}/action`)
}

export { getAll, getById, create, update, remove, specificAction }
```

**⚠️ NO OLVIDES:**
- ✅ Usar template literals con backticks para URLs con params
- ✅ Exportar TODAS las funciones al final

---

### 🧭 **NAVEGACIÓN - Registrar pantallas**

```javascript
// ARCHIVO: src/screens/xxx/XxxStack.js
import NewScreen from './NewScreen'

// Dentro del Stack.Navigator
<Stack.Screen
  name='NewScreenName'
  component={NewScreen}
  options={{ title: 'Título' }}
/>
```

**Para navegar:**
```javascript
// Con parámetros
navigation.navigate('ScreenName', { id: item.id })

// Con dirty flag (para refrescar al volver)
navigation.navigate('ScreenName', { dirty: true })
```

---

### ✅ **VALIDACIONES YUP MÁS COMUNES**

```javascript
const validationSchema = yup.object().shape({
  // String obligatorio
  name: yup.string().required('Nombre obligatorio'),
  
  // Email
  email: yup.string().email('Email inválido').required('Obligatorio'),
  
  // Número positivo
  price: yup.number()
    .required('Obligatorio')
    .moreThan(0, 'Debe ser mayor que 0'),
  
  // Código postal (5 dígitos)
  zipCode: yup.string()
    .matches(/^[0-9]{5}$/, 'Debe tener 5 dígitos')
    .required('Obligatorio'),
  
  // Hora HH:mm:ss
  time: yup.string()
    .required('Obligatorio')
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
      'Formato HH:mm:ss (ej: 14:30:00)'
    ),
  
  // Boolean
  isActive: yup.boolean(),
  
  // Opcional
  description: yup.string()
})
```

---

### 🎨 **ESTILOS COMUNES - Copy-Paste**

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    borderRadius: 8,
    height: 40,
    padding: 10,
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  actionButton: {
    borderRadius: 8,
    height: 40,
    marginTop: 12,
    margin: '1%',
    padding: 10,
    alignSelf: 'center',
    width: '50%'
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    bottom: 5,
    position: 'absolute',
    width: '90%'
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginLeft: 5
  },
  emptyList: {
    textAlign: 'center',
    padding: 50
  },
  // Para analíticas en grid 2x2
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
    padding: 10
  }
})
```

---

## 🔍 BUSCADOR RÁPIDO: ¿QUÉ NECESITO?

### **"Necesito mostrar un listado"**
➡️ Ver [Ejercicio 1 Checklist](#-ejercicio-1-listado-3-puntos---15-20-minutos)
- Archivos de ejemplo: `OrdersScreen.js`, `RestaurantScheduleScreen.js`, `AddressScreen.js`

### **"Necesito crear/editar algo con formulario"**
➡️ Ver [Ejercicio 2 Checklist](#-ejercicio-2-creareditar-3-puntos---20-25-minutos)
- Archivos de ejemplo: `EditOrderScreen.js`, `CreateScheduleScreen.js`, `EditScheduleScreen.js`

### **"Necesito mostrar analíticas/estadísticas"**
➡️ Ver [Ejercicio 3 Checklist](#-ejercicio-3-vistaanalíticas-2-puntos---10-15-minutos)
- Archivo de ejemplo: `OrdersScreen.js` (función `renderAnalytics`)

### **"Necesito un botón que cambie estado/elimine"**
➡️ Ver [Ejercicio 4 Checklist](#-ejercicio-4-acción-2-puntos---10-15-minutos)
- Archivos de ejemplo: `OrdersScreen.js` (nextStatus), `RestaurantScheduleScreen.js` (remove)

### **"Necesito crear endpoints"**
➡️ Ver [Código Endpoints](#-endpoints---siempre-lo-mismo)
- Archivos de ejemplo: `OrderEndpoints.js`, `AddressEndpoints.js`, `RestaurantEndpoints.js`

### **"Necesito validar un formulario"**
➡️ Ver [Validaciones Yup](#-validaciones-yup-más-comunes)

### **"Necesito registrar una pantalla nueva"**
➡️ Ver [Navegación](#-navegación---registrar-pantallas)
- Archivo de ejemplo: `RestaurantsStack.js`

---

## 🆘 ERRORES COMUNES Y SOLUCIONES

### ❌ **Error: "Cannot read property 'id' of undefined"**
```javascript
// ❌ MAL: No esperas a que se carguen los datos
return <Text>{item.id}</Text>

// ✅ BIEN: Renderizado condicional
return item ? <Text>{item.id}</Text> : <ActivityIndicator />
```

### ❌ **Error: "Each child should have a unique key"**
```javascript
// ❌ MAL: Falta key o no es único
items.map(item => <View><Text>{item.name}</Text></View>)

// ✅ BIEN: Usar key único
items.map(item => <View key={item.id}><Text>{item.name}</Text></View>)

// ✅ MEJOR: En FlatList usar keyExtractor
<FlatList
  data={items}
  keyExtractor={item => item.id.toString()} // ⚠️ .toString()
  renderItem={renderItem}
/>
```

### ❌ **Error: "Formik values not updating"**
```javascript
// ❌ MAL: Falta enableReinitialize en edición
<Formik initialValues={initialValues} onSubmit={handleSubmit}>

// ✅ BIEN: Agregar enableReinitialize
<Formik 
  enableReinitialize  // ⚠️ CRÍTICO para edición
  initialValues={initialValues} 
  onSubmit={handleSubmit}
>
```

### ❌ **Error: "Navigation not working"**
```javascript
// ❌ MAL: Pantalla no registrada en Stack
navigation.navigate('NewScreen', { id: 1 })

// ✅ BIEN: Primero registrar en Stack.js
<Stack.Screen name='NewScreen' component={NewScreen} options={{title: 'New'}} />
```

### ❌ **Error: "Endpoint 404 Not Found"**
```javascript
// ❌ MAL: Falta exportar la función
export { getAll, getById } // ⚠️ Falta create

// ✅ BIEN: Exportar TODAS las funciones que usas
export { getAll, getById, create, update, remove }
```

### ❌ **Error: "BackendErrors is not iterable"**
```javascript
// ❌ MAL: backendErrors puede ser undefined
{backendErrors.map(...)}

// ✅ BIEN: Verificar que existe
{backendErrors && backendErrors.map((error, index) => ...)}
```

### ❌ **Error: "Validation failed"**
```javascript
// ❌ MAL: Campo no coincide con validationSchema
<InputItem name="nombre" ... />
validationSchema: yup.object().shape({
  name: yup.string().required() // ⚠️ name !== nombre
})

// ✅ BIEN: Nombres deben coincidir exactamente
<InputItem name="name" ... />
validationSchema: yup.object().shape({
  name: yup.string().required()
})
```

---

## 🎯 INFORMACIÓN GENERAL

Este repositorio contiene **soluciones comentadas de 3 exámenes reales** con patrones claros y repetibles.

---

## 📊 Patrones Identificados en los Exámenes

Basándose en 3 exámenes resueltos:
1. **Examen Schedule** (Gestión de Horarios)
2. **Examen Address** (Gestión de Direcciones)
3. **Examen Orders** (Gestión de Pedidos)

### 🔑 Estructura Típica del Examen

**Todos los exámenes siguen el mismo patrón con 4 ejercicios:**

1. **Ejercicio 1 (3 puntos)**: Listado de elementos con datos del backend
2. **Ejercicio 2 (3 puntos)**: Creación/Edición de elementos con formulario
3. **Ejercicio 3 (2 puntos)**: Vista adicional (analíticas, detalles, etc.)
4. **Ejercicio 4 (2 puntos)**: Acción complementaria (cambio de estado, eliminación, etc.)

---

## 🛠️ Tecnologías y Herramientas Clave

### **Librerías Obligatorias**
```json
{
  "formik": "validación y gestión de formularios",
  "yup": "esquemas de validación",
  "react-native-flash-message": "mensajes de éxito/error",
  "@expo/vector-icons": "iconografía (MaterialCommunityIcons)",
  "react-navigation": "navegación entre pantallas"
}
```

### **Hooks React Esenciales**
- `useState`: Gestión de estado local
- `useEffect`: Carga de datos y side effects
- `useContext`: Acceso al usuario logueado (AuthorizationContext)

---

## 📝 Checklist de Implementación

### ✅ Para CADA Ejercicio de Listado (3 puntos)

1. **Estado y Carga de Datos**
   ```javascript
   const [items, setItems] = useState([])
   
   useEffect(() => {
     if (loggedInUser) {
       fetchItems()
     } else {
       setItems([])
     }
   }, [loggedInUser, route])
   
   const fetchItems = async () => {
     try {
       const data = await getItemsFromAPI(id)
       setItems(data)
     } catch (error) {
       showMessage({
         message: `Error: ${error}`,
         type: 'error',
         style: GlobalStyles.flashStyle,
         titleStyle: GlobalStyles.flashTextStyle
       })
     }
   }
   ```

2. **FlatList con Componentes**
   - `ListHeaderComponent`: Botón de crear
   - `ListEmptyComponent`: Mensaje cuando no hay datos
   - `renderItem`: Función para renderizar cada elemento
   - `keyExtractor`: Siempre usar `.toString()` en el id

3. **ImageCard para Cada Item**
   - Mostrar información relevante
   - Botones de acción (editar, eliminar)

### ✅ Para CADA Ejercicio de Creación/Edición (3 puntos)

1. **Formik Setup**
   ```javascript
   const [backendErrors, setBackendErrors] = useState()
   const [initialValues, setInitialValues] = useState({ ... })
   
   const validationSchema = yup.object().shape({
     campo: yup.string().required('Campo obligatorio'),
     email: yup.string().email('Email inválido'),
     number: yup.number().moreThan(0, 'Debe ser mayor que 0'),
     time: yup.string().matches(/regex/, 'Formato incorrecto')
   })
   ```

2. **useEffect para Edición** (cargar datos existentes)
   ```javascript
   useEffect(() => {
     async function fetchDetail() {
       try {
         const data = await getItemById(route.params.id)
         setInitialValues(buildInitialValues(data, initialValues))
       } catch (error) {
         showMessage({ ... })
       }
     }
     fetchDetail()
   }, [route])
   ```

3. **Función Submit**
   ```javascript
   const handleSubmit = async (values) => {
     setBackendErrors([])
     try {
       const result = await createOrUpdateItem(values)
       showMessage({
         message: `Item ${result.id} guardado`,
         type: 'success',
         style: GlobalStyles.flashStyle,
         titleStyle: GlobalStyles.flashTextStyle
       })
       navigation.navigate('ListScreen', { dirty: true })
     } catch (error) {
       console.log(error)
       setBackendErrors(error.errors)
     }
   }
   ```

4. **Renderizado de Errores**
   ```javascript
   {backendErrors && backendErrors.map((error, index) => 
     <TextError key={index}>{error.param}-{error.msg}</TextError>
   )}
   ```

5. **enableReinitialize en Formik** para edición
   ```javascript
   <Formik enableReinitialize initialValues={initialValues} ...>
   ```

### ✅ Para Ejercicios de Vista/Analíticas (2 puntos)

1. **Estado para los Datos**
   ```javascript
   const [analytics, setAnalytics] = useState(null)
   ```

2. **Fetch en useEffect**
   ```javascript
   useEffect(() => {
     fetchAnalytics()
   }, [route])
   ```

3. **Renderizado Condicional**
   ```javascript
   {analytics !== null && renderAnalytics()}
   ```

4. **Estilos con Flexbox**
   - Usar `flexDirection: 'row'` para distribuir horizontalmente
   - `justifyContent: 'space-around'` o `'space-between'`

### ✅ Para Ejercicios de Acciones (2 puntos)

1. **Botón con Acción**
   ```javascript
   <Pressable
     onPress={() => handleAction(item)}
     style={({ pressed }) => [
       { backgroundColor: pressed ? brandPrimaryTap : brandPrimary },
       styles.button
     ]}
   >
   ```

2. **Manejo de la Acción**
   ```javascript
   const handleAction = async (item) => {
     try {
       await performAction(item.id)
       showMessage({ message: 'Éxito', type: 'success', ... })
       fetchItems() // Refrescar lista
     } catch (error) {
       showMessage({ message: `Error: ${error}`, type: 'danger', ... })
     }
   }
   ```

3. **Modal de Confirmación** (si aplica)
   ```javascript
   const [itemToDelete, setItemToDelete] = useState(null)
   
   <DeleteModal
     isVisible={itemToDelete !== null}
     onCancel={() => setItemToDelete(null)}
     onConfirm={() => confirmDelete(itemToDelete)}
   >
     <TextRegular>¿Confirmar acción?</TextRegular>
   </DeleteModal>
   ```

---

## 🔌 Endpoints API

### **Patrón de Endpoints**

```javascript
// RestaurantEndpoints.js o similar
import { get, post, put, destroy, patch } from './helpers/ApiRequestsHelper'

// Obtener todos
function getAll() {
  return get('resource')
}

// Obtener por ID
function getById(id) {
  return get(`resource/${id}`)
}

// Crear
function create(data) {
  return post('resource', data)
}

// Actualizar
function update(id, data) {
  return put(`resource/${id}`, data)
}

// Eliminar
function remove(id) {
  return destroy(`resource/${id}`)
}

// Acción específica (patch)
function specificAction(id) {
  return patch(`resource/${id}/action`)
}

export { getAll, getById, create, update, remove, specificAction }
```

**⚠️ Importante**: 
- Siempre usar template literals con backticks para URLs con parámetros
- Exportar todas las funciones necesarias
- Importar en las pantallas según necesidad

---

## 🧭 Navegación

### **Agregar Pantallas al Stack Navigator**

```javascript
// RestaurantsStack.js o ProfileStack.js
import NewScreen from './NewScreen'

// Dentro del Stack.Navigator
<Stack.Screen
  name='NewScreen'
  component={NewScreen}
  options={{ title: 'Título de la Pantalla' }}
/>
```

### **Navegar Entre Pantallas**

```javascript
// Navegar con parámetros
navigation.navigate('DetailScreen', { id: item.id })

// Navegar con "dirty flag" para refrescar
navigation.navigate('ListScreen', { dirty: true })

// Acceder a parámetros
const { id } = route.params
```

---

## 🎨 Estilos y UI

### **Patrones de Estilo Comunes**

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    borderRadius: 8,
    height: 40,
    padding: 10,
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  actionButton: {
    borderRadius: 8,
    height: 40,
    marginTop: 12,
    margin: '1%',
    padding: 10,
    alignSelf: 'center',
    width: '50%'
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    bottom: 5,
    position: 'absolute',
    width: '90%'
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginLeft: 5
  },
  emptyList: {
    textAlign: 'center',
    padding: 50
  }
})
```

### **Botones con Estado Pressed**

```javascript
<Pressable
  onPress={handleAction}
  style={({ pressed }) => [
    {
      backgroundColor: pressed
        ? GlobalStyles.brandSuccessTap
        : GlobalStyles.brandSuccess
    },
    styles.button
  ]}
>
  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
    <MaterialCommunityIcons name='icon-name' color='white' size={20}/>
    <TextRegular textStyle={styles.text}>Texto</TextRegular>
  </View>
</Pressable>
```

---

## 🧪 Validación con Yup

### **Tipos de Validación Más Comunes**

```javascript
const validationSchema = yup.object().shape({
  // String obligatorio
  name: yup.string().required('Nombre es obligatorio'),
  
  // Email
  email: yup.string().email('Email inválido').required('Email obligatorio'),
  
  // Número positivo
  price: yup.number()
    .required('Precio obligatorio')
    .moreThan(0, 'Debe ser mayor que 0'),
  
  // Código postal (5 dígitos)
  zipCode: yup.string()
    .matches(/^[0-9]{5}$/, 'Debe tener 5 dígitos')
    .required('Obligatorio'),
  
  // Hora HH:mm:ss
  time: yup.string()
    .required('Hora obligatoria')
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
      'Formato debe ser HH:mm:ss (ej: 14:30:00)'
    ),
  
  // Boolean
  isDefault: yup.boolean(),
  
  // String opcional
  description: yup.string()
})
```

---

## 🚨 Manejo de Errores

### **Patrón Estándar**

```javascript
try {
  const result = await apiCall()
  // Éxito
  showMessage({
    message: `Operación exitosa`,
    type: 'success',
    style: GlobalStyles.flashStyle,
    titleStyle: GlobalStyles.flashTextStyle
  })
} catch (error) {
  // Error del backend
  console.log(error)
  setBackendErrors(error.errors)
  
  // O mensaje de error directo
  showMessage({
    message: `Error: ${error}`,
    type: 'error', // o 'danger'
    style: GlobalStyles.flashStyle,
    titleStyle: GlobalStyles.flashTextStyle
  })
}
```

---

## 📋 Checklist Pre-Examen

### **Antes de Empezar**
- [ ] Leer TODO el enunciado cuidadosamente
- [ ] Identificar cuántas pantallas nuevas hay que crear
- [ ] Identificar qué endpoints necesitas (pueden estar ya implementados)
- [ ] Revisar las figuras/imágenes del enunciado

### **Durante el Examen**
- [ ] Crear los endpoints primero (si no existen)
- [ ] Agregar las pantallas al Stack Navigator
- [ ] Implementar el listado primero (suele ser el ejercicio 1)
- [ ] Implementar formularios de creación/edición
- [ ] Implementar funcionalidades adicionales
- [ ] Probar CADA funcionalidad antes de pasar a la siguiente

### **Antes de Entregar**
- [ ] Verificar que no hay errores de consola
- [ ] Probar todas las funcionalidades implementadas
- [ ] Verificar que los mensajes de éxito/error se muestran correctamente
- [ ] Verificar navegación entre pantallas
- [ ] Comprobar que se cumplen las pruebas de aceptación

---

## 🎓 Consejos de Estudio

### **Práctica Efectiva**
1. **Repite los exámenes pasados** sin mirar las soluciones
2. **Cronométrate**: Tienes tiempo limitado
3. **Memoriza los patrones**: Son siempre los mismos
4. **Practica la validación con Yup**: Es crítico
5. **Domina Formik**: Aparece en todos los exámenes

### **Conceptos Clave a Dominar**
- useState y useEffect
- Navegación con React Navigation
- Formik + Yup
- FlatList y renderizado condicional
- Async/await y manejo de errores
- Estilos con StyleSheet y Flexbox

### **Errores Comunes a Evitar**
- ❌ Olvidar `enableReinitialize` en formularios de edición
- ❌ No usar `toString()` en `keyExtractor` de FlatList
- ❌ Olvidar agregar la pantalla al Stack Navigator
- ❌ No manejar el estado de loading/error
- ❌ No mostrar mensajes de éxito/error
- ❌ No refrescar la lista después de crear/editar/eliminar
- ❌ Olvidar exportar funciones en los endpoints

---

## 📂 Estructura de Archivos Típica

```
DeliverUS-Frontend-Owner/
├── src/
│   ├── api/
│   │   ├── RestaurantEndpoints.js     # Endpoints de restaurantes
│   │   ├── OrderEndpoints.js          # Endpoints de pedidos
│   │   ├── AddressEndpoints.js        # Endpoints de direcciones
│   │   └── helpers/
│   │       └── ApiRequestsHelper.js   # get, post, put, destroy, patch
│   ├── screens/
│   │   ├── restaurants/
│   │   │   ├── RestaurantsStack.js           # Navegador
│   │   │   ├── RestaurantsScreen.js          # Lista
│   │   │   ├── RestaurantDetailScreen.js     # Detalle
│   │   │   ├── CreateRestaurantScreen.js     # Crear
│   │   │   ├── EditRestaurantScreen.js       # Editar
│   │   │   └── ...
│   │   ├── orders/
│   │   │   ├── OrdersScreen.js               # Lista de pedidos
│   │   │   └── EditOrderScreen.js            # Editar pedido
│   │   └── profile/
│   │       ├── AddressScreen.js              # Lista de direcciones
│   │       └── AddressDetailScreen.js        # Crear dirección
│   ├── components/
│   │   ├── ImageCard.js           # Tarjeta con imagen
│   │   ├── InputItem.js           # Input de formulario
│   │   ├── TextError.js           # Texto de error
│   │   ├── DeleteModal.js         # Modal de confirmación
│   │   └── ...
│   └── styles/
│       └── GlobalStyles.js        # Colores y estilos globales
```

---

## ⚡ Snippets Útiles

### **Template de Pantalla de Listado**

```javascript
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, FlatList, Pressable, View } from 'react-native'
import { getItems, removeItem } from '../../api/ItemEndpoints'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as GlobalStyles from '../../styles/GlobalStyles'
import { AuthorizationContext } from '../../context/AuthorizationContext'
import { showMessage } from 'react-native-flash-message'
import DeleteModal from '../../components/DeleteModal'
import ImageCard from '../../components/ImageCard'
import TextSemiBold from '../../components/TextSemibold'
import TextRegular from '../../components/TextRegular'

export default function ItemsScreen ({ navigation, route }) {
  const [items, setItems] = useState([])
  const [itemToBeDeleted, setItemToBeDeleted] = useState(null)
  const { loggedInUser } = useContext(AuthorizationContext)

  useEffect(() => {
    if (loggedInUser) {
      fetchItems()
    } else {
      setItems([])
    }
  }, [loggedInUser, route])

  const fetchItems = async () => {
    try {
      const fetchedItems = await getItems(route.params.id)
      setItems(fetchedItems)
    } catch (error) {
      showMessage({
        message: `Error obteniendo items: ${error}`,
        type: 'error',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
    }
  }

  const remove = async (item) => {
    try {
      await removeItem(item.id)
      await fetchItems()
      setItemToBeDeleted(null)
      showMessage({
        message: `Item ${item.name} eliminado`,
        type: 'success',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
    } catch (error) {
      setItemToBeDeleted(null)
      showMessage({
        message: `Error eliminando item: ${error}`,
        type: 'error',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
    }
  }

  const renderItem = ({ item }) => {
    return (
      <ImageCard
        imageUri={item.image}
        title={item.name}
        onPress={() => navigation.navigate('EditItemScreen', { id: item.id })}
      >
        <TextRegular>{item.description}</TextRegular>
        <TextSemiBold>{item.price}€</TextSemiBold>
        
        <View style={styles.actionButtonsContainer}>
          <Pressable
            onPress={() => navigation.navigate('EditItemScreen', { id: item.id })}
            style={({ pressed }) => [
              { backgroundColor: pressed ? GlobalStyles.brandBlueTap : GlobalStyles.brandBlue },
              styles.actionButton
            ]}
          >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <MaterialCommunityIcons name='pencil' color='white' size={20}/>
              <TextRegular textStyle={styles.text}>Edit</TextRegular>
            </View>
          </Pressable>

          <Pressable
            onPress={() => setItemToBeDeleted(item)}
            style={({ pressed }) => [
              { backgroundColor: pressed ? GlobalStyles.brandPrimaryTap : GlobalStyles.brandPrimary },
              styles.actionButton
            ]}
          >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <MaterialCommunityIcons name='delete' color='white' size={20}/>
              <TextRegular textStyle={styles.text}>Delete</TextRegular>
            </View>
          </Pressable>
        </View>
      </ImageCard>
    )
  }

  const renderEmptyList = () => {
    return (
      <TextRegular textStyle={styles.emptyList}>
        No hay items disponibles.
      </TextRegular>
    )
  }

  const renderHeader = () => {
    return (
      <>
        {loggedInUser &&
          <Pressable
            onPress={() => navigation.navigate('CreateItemScreen', { id: route.params.id })}
            style={({ pressed }) => [
              { backgroundColor: pressed ? GlobalStyles.brandGreenTap : GlobalStyles.brandGreen },
              styles.button
            ]}
          >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <MaterialCommunityIcons name='plus-circle' color='white' size={20}/>
              <TextRegular textStyle={styles.text}>Create Item</TextRegular>
            </View>
          </Pressable>
        }
      </>
    )
  }

  return (
    <>
      <FlatList
        style={styles.container}
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyList}
      />
      <DeleteModal
        isVisible={itemToBeDeleted !== null}
        onCancel={() => setItemToBeDeleted(null)}
        onConfirm={() => remove(itemToBeDeleted)}
      >
        <TextRegular>¿Confirmar eliminación?</TextRegular>
      </DeleteModal>
    </>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  button: {
    borderRadius: 8,
    height: 40,
    marginTop: 12,
    padding: 10,
    alignSelf: 'center',
    width: '80%'
  },
  actionButton: {
    borderRadius: 8,
    height: 40,
    marginTop: 12,
    margin: '1%',
    padding: 10,
    width: '50%'
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    bottom: 5,
    position: 'absolute',
    width: '90%'
  },
  text: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    marginLeft: 5
  },
  emptyList: {
    textAlign: 'center',
    padding: 50
  }
})
```

### **Template de Pantalla de Creación/Edición**

```javascript
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as yup from 'yup'
import { Formik } from 'formik'
import { getItemById, createItem, updateItem } from '../../api/ItemEndpoints'
import InputItem from '../../components/InputItem'
import TextRegular from '../../components/TextRegular'
import TextError from '../../components/TextError'
import * as GlobalStyles from '../../styles/GlobalStyles'
import { showMessage } from 'react-native-flash-message'
import { buildInitialValues } from '../Helper'

export default function CreateEditItemScreen ({ navigation, route }) {
  const [backendErrors, setBackendErrors] = useState()
  const [item, setItem] = useState()
  const [initialValues, setInitialValues] = useState({ name: '', description: '', price: '' })

  const validationSchema = yup.object().shape({
    name: yup.string().required('Nombre es obligatorio'),
    description: yup.string(),
    price: yup.number().required('Precio es obligatorio').moreThan(0, 'Debe ser mayor que 0')
  })

  // Solo para EDICIÓN
  useEffect(() => {
    if (route.params?.id) {
      async function fetchItemDetail() {
        try {
          const fetchedItem = await getItemById(route.params.id)
          setItem(fetchedItem)
          setInitialValues(buildInitialValues(fetchedItem, initialValues))
        } catch (error) {
          showMessage({
            message: `Error cargando item: ${error}`,
            type: 'error',
            style: GlobalStyles.flashStyle,
            titleStyle: GlobalStyles.flashTextStyle
          })
        }
      }
      fetchItemDetail()
    }
  }, [route])

  const handleSubmit = async (values) => {
    setBackendErrors([])
    try {
      let result
      if (route.params?.id) {
        // Editar
        result = await updateItem(route.params.id, values)
      } else {
        // Crear
        result = await createItem(values)
      }
      
      showMessage({
        message: `Item ${result.name} guardado correctamente`,
        type: 'success',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
      navigation.navigate('ItemsScreen', { dirty: true })
    } catch (error) {
      console.log(error)
      setBackendErrors(error.errors)
    }
  }

  return (
    <Formik
      enableReinitialize  // IMPORTANTE para edición
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: '60%' }}>
              <InputItem name='name' label='Nombre:' />
              <InputItem name='description' label='Descripción:' />
              <InputItem name='price' label='Precio:' keyboardType='numeric' />

              {backendErrors && backendErrors.map((error, index) => (
                <TextError key={index}>{error.param} - {error.msg}</TextError>
              ))}

              <Pressable
                onPress={handleSubmit}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? GlobalStyles.brandSuccessTap
                      : GlobalStyles.brandSuccess
                  },
                  styles.button
                ]}
              >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                  <MaterialCommunityIcons name='content-save' color='white' size={20} />
                  <TextRegular textStyle={styles.text}>Save</TextRegular>
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 40,
    padding: 10,
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginLeft: 5
  }
})
```

---

## 🎯 Resumen Final

### **Fórmula del Éxito**
1. **Domina los patrones** → Todos los exámenes son similares
2. **Practica con tiempo** → Simula condiciones de examen
3. **Entiende el flujo** → Endpoints → Pantallas → Navegación → UI
4. **No inventes** → Usa los patrones establecidos
5. **Prueba TODO** → Antes de entregar

### **Distribución de Puntos**
- **6 puntos**: Listado + Creación/Edición (CRUD básico)
- **4 puntos**: Funcionalidades adicionales

**Si dominas el CRUD, ya tienes más de la mitad del examen resuelto.**

---

## 📞 Recursos Adicionales

- **Documentación Backend**: [DeliverUS-Backend](https://github.com/IISSI2-IS-2025)
- **Formik**: https://formik.org/
- **Yup**: https://github.com/jquense/yup
- **React Navigation**: https://reactnavigation.org/
- **React Native**: https://reactnative.dev/

---

## ⚡ Quick Start - Preparación del Entorno

### Windows
    ```bash
npm run install:all:win
    npm run migrate:backend
npm run start:backend  # Terminal 1
npm run start:frontend # Terminal 2
    ```

### Linux/MacOS
    ```bash
npm run install:all:bash
npm run migrate:backend
npm run start:backend  # Terminal 1
npm run start:frontend # Terminal 2
```

---

---

## 📝 Resumen de Exámenes Resueltos

### 🔵 **Examen 1: Schedules (Horarios de Productos)**

**Concepto**: Gestión de horarios (franjas horarias) que se pueden asignar a productos de un restaurante para controlar su disponibilidad.

#### Requisitos Funcionales Implementados:
1. **RF.01** - Visualizar productos con horarios asignados *(1.5 puntos)*
2. **RF.02** - Listado de horarios con número de productos asociados *(2.5 puntos)*
3. **RF.03** - Borrado de horarios con confirmación *(1 punto)*
4. **RF.04** - Creación de horarios *(proporcionado)*
5. **RF.05** - Edición de horarios existentes *(2.5 puntos)*
6. **RF.06** - Asignar/desasignar horario a productos *(2.5 puntos)*

#### Archivos Modificados:
```
- DeliverUS-Frontend-Owner/src/screens/restaurants/
  ├── RestaurantScheduleScreen.js      (Listado + borrado)
  ├── CreateScheduleScreen.js          (Crear horario)
  ├── EditScheduleScreen.js            (Editar horario)
  ├── EditProductScreen.js             (Asignar horario)
  └── RestaurantDetailScreen.js        (Mostrar horarios en productos)
- DeliverUS-Frontend-Owner/src/api/RestaurantEndpoints.js
```

#### Validaciones Clave:
- **startTime y endTime**: Obligatorios, formato `HH:mm:ss`
- Regex: `/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/`

#### Endpoints Backend:
- `GET /restaurants/:restaurantId/schedules` - Obtener horarios (incluye productos asociados)
- `POST /restaurants/:restaurantId/schedules` - Crear horario
- `PUT /restaurants/:restaurantId/schedules/:scheduleId` - Actualizar horario
- `DELETE /restaurants/:restaurantId/schedules/:scheduleId` - Eliminar horario
- `PUT /products/:productId` - Asignar/desasignar schedule (campo `scheduleId`)

#### Conceptos Clave:
- **Relación 1:N**: Un schedule puede tener muchos productos
- **scheduleId: null** para desasignar horario de un producto
- Icono usado: `timetable` (MaterialCommunityIcons)

---

### 🟢 **Examen 2: Address (Direcciones de Envío)**

**Concepto**: Gestión de direcciones de envío de un usuario, permitiendo crear, eliminar y marcar una como predeterminada.

#### Requisitos Funcionales Implementados:
1. **Listado de direcciones** del usuario con opción de eliminar y marcar como predeterminada
2. **Creación de nuevas direcciones** con validación completa
3. **Establecer dirección predeterminada** (solo una a la vez)
4. **Eliminación de direcciones** con modal de confirmación

#### Archivos Modificados:
```
- DeliverUS-Frontend-Owner/src/screens/profile/
  ├── AddressScreen.js          (Listado + acciones)
  └── AddressDetailScreen.js    (Crear dirección)
- DeliverUS-Frontend-Owner/src/api/AddressEndpoints.js
```

#### Validaciones Clave:
```javascript
alias: yup.string().required()
street: yup.string().required()
city: yup.string().required()
province: yup.string()
zipCode: yup.string()
  .matches(/^[0-9]{5}$/, 'Debe tener 5 dígitos')
  .required()
isDefault: yup.boolean()
```

#### Endpoints Backend:
- `GET /shippingaddresses` - Obtener direcciones del usuario
- `POST /shippingaddresses` - Crear nueva dirección
- `PATCH /shippingaddresses/:id/default` - Marcar como predeterminada
- `DELETE /shippingaddresses/:id` - Eliminar dirección

#### Conceptos Clave:
- **Switch** para `isDefault` en formulario
- **Iconos**: `star` (predeterminada), `star-outline` (no predeterminada), `trash` (eliminar)
- **FlatList** con `renderItem` para mostrar direcciones
- Navegación en **ProfileStack** (no en RestaurantsStack)

---

### 🟠 **Examen 3: Orders (Gestión de Pedidos)**

**Concepto**: Visualización, edición y gestión del ciclo de vida de pedidos de un restaurante.

#### Requisitos Funcionales Implementados:
1. **RF.01** - Listado de pedidos por restaurante *(3 puntos)*
2. **RF.02** - Edición de pedidos (address y price) *(3 puntos)*
3. **RF.03** - Analíticas de pedidos del restaurante *(2 puntos)*
4. **RF.04** - Cambio de estado de pedidos *(2 puntos)*

#### Archivos Modificados:
```
- DeliverUS-Frontend-Owner/src/screens/orders/
  ├── OrdersScreen.js           (Listado + analíticas + cambio estado)
  └── EditOrderScreen.js        (Editar address y price)
- DeliverUS-Frontend-Owner/src/api/
  ├── OrderEndpoints.js         (NUEVO)
  └── RestaurantEndpoints.js    (añadir getRestaurantOrders y getRestaurantAnalytics)
- DeliverUS-Frontend-Owner/src/screens/restaurants/RestaurantsStack.js
```

#### Validaciones Clave:
```javascript
address: yup.string().required('Address is required')
price: yup.number()
  .required('Price is required')
  .moreThan(0, 'Price must be greater than 0')
```

#### Endpoints Backend:
- `GET /restaurants/:restaurantId/orders` - Obtener pedidos del restaurante
- `GET /restaurants/:restaurantId/analytics` - Obtener analíticas
- `GET /orders/:orderId` - Obtener un pedido por ID
- `PUT /orders/:orderId/by-owner` - Actualizar pedido (solo address y price)
- `PATCH /orders/:orderId/confirm` - pending → in process
- `PATCH /orders/:orderId/send` - in process → sent
- `PATCH /orders/:orderId/deliver` - sent → delivered

#### Máquina de Estados (RF.04):
```
pending → in process → sent → delivered
```
**IMPORTANTE**: Los pedidos en estado `delivered` NO tienen botón "Advance"

#### Estructura de Analíticas (RF.03):
```javascript
{
  restaurantId: 1,
  invoicedToday: 65.0,           // Total facturado hoy
  numPendingOrders: 1,           // Pedidos en pending
  numDeliveredTodayOrders: 1,    // Pedidos delivered hoy
  numYesterdayOrders: 2          // Pedidos de ayer
}
```

#### Layout de Analíticas:
```
┌─────────────────────────────────┐
│  Invoiced today  │ #Pending     │
│      65.00€      │      1       │
├──────────────────┼──────────────┤
│ #Delivered today │ #Yesterday   │
│        1         │      2       │
└─────────────────────────────────┘
```

**Estilos clave**:
- `analyticsRow`: `flexDirection: 'row'`, `justifyContent: 'space-around'`
- `analyticsCell`: 2 celdas por fila, width `45%`

#### Conceptos Clave:
- **nextStatus()**: Switch que decide qué endpoint PATCH llamar según estado actual
- **Iconos de estado**: `order_status_pending.png`, `order_status_in_process.png`, etc.
- Icono del botón Advance: `skip-next` (MaterialCommunityIcons)
- **Refrescar** pedidos Y analíticas después de cambiar estado
- Endpoint especial de actualización: `/orders/:id/by-owner` (no el genérico)

---

## 📊 Comparativa de Exámenes

| Aspecto | Schedules | Address | Orders |
|---------|-----------|---------|--------|
| **Complejidad** | Media-Alta | Baja-Media | Alta |
| **Pantallas nuevas** | 3 | 2 | 2 |
| **Endpoints nuevos** | 4-5 | 4 | 6 |
| **CRUD completo** | ✅ | ✅ | ❌ (solo Read + Update) |
| **Máquina de estados** | ❌ | ❌ | ✅ |
| **Analíticas** | ❌ | ❌ | ✅ |
| **Validación regex** | ✅ (tiempo) | ✅ (zip code) | ❌ |
| **Modal confirmación** | ✅ | ✅ | ❌ |
| **Relaciones** | 1:N (schedule-products) | 1:N (user-addresses) | 1:N (restaurant-orders) |

---

## 🎯 Consejos Específicos por Tipo de Examen

### Si te toca un examen tipo **"Schedule"**:
- ✅ Domina useEffect con `enableReinitialize`
- ✅ Practica validaciones de regex (tiempo, fecha, etc.)
- ✅ Ten clara la navegación entre pantallas relacionadas
- ✅ Practica renderizado condicional ("Not Scheduled")
- ✅ Saber mostrar contadores (ej: productos asociados)

### Si te toca un examen tipo **"Address"**:
- ✅ Domina Switch components (para `isDefault`)
- ✅ Practica iconografía con Ionicons
- ✅ Ten claro PATCH vs PUT (actualización parcial)
- ✅ Practica lógica de "solo uno puede ser default"
- ✅ Validación de códigos postales, teléfonos, etc.

### Si te toca un examen tipo **"Orders"**:
- ✅ Domina máquinas de estado (switch con estados)
- ✅ Practica renderizado de analíticas con Flexbox
- ✅ Saber usar PATCH para transiciones de estado
- ✅ Refrescar múltiples datos después de una acción
- ✅ Renderizado condicional de botones según estado
- ✅ Manejo de números decimales (`.toFixed(2)`)

---

## 📌 Última Revisión

Este README fue creado analizando **3 exámenes completos** (Schedule, Address, Orders) con sus soluciones implementadas. Los patrones identificados son consistentes y repetibles.

**Todos los archivos de solución han sido comentados** con explicaciones detalladas para facilitar el estudio.

**¡Buena suerte en tu examen! 🚀**
