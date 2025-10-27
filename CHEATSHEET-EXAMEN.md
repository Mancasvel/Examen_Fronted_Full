# ⚡ CHEATSHEET EXAMEN DELIVEROUS - 1 PÁGINA

## 🎯 FLUJO EXAMEN (80 min)
```
1. Leer (2min) → 2. Setup (3min) → 3. Endpoints (5min) → 4. Stack (2min)
5. Listado (20min) → 6. Formulario (25min) → 7. Vista (15min) → 8. Acción (15min)
```

## 🔥 TEMPLATE ENDPOINTS
```javascript
import { get, post, put, destroy, patch } from './helpers/ApiRequestsHelper'
function getAll() { return get('resource') }
function getById(id) { return get(`resource/${id}`) }
function create(data) { return post('resource', data) }
function update(id, data) { return put(`resource/${id}`, data) }
function remove(id) { return destroy(`resource/${id}`) }
export { getAll, getById, create, update, remove }
```

## 📋 TEMPLATE LISTADO
```javascript
const [items, setItems] = useState([])
const { loggedInUser } = useContext(AuthorizationContext)

useEffect(() => {
  if (loggedInUser) fetchItems()
  else setItems([])
}, [loggedInUser, route])

const fetchItems = async () => {
  try {
    const data = await getAPI(route.params.id)
    setItems(data)
  } catch (error) {
    showMessage({ message: `Error: ${error}`, type: 'error', 
      style: GlobalStyles.flashStyle, titleStyle: GlobalStyles.flashTextStyle })
  }
}

<FlatList
  data={items}
  renderItem={({ item }) => <ImageCard><TextRegular>{item.name}</TextRegular></ImageCard>}
  keyExtractor={item => item.id.toString()}
  ListEmptyComponent={() => <TextRegular>No hay datos</TextRegular>}
/>
```

## 📝 TEMPLATE FORMULARIO
```javascript
const [backendErrors, setBackendErrors] = useState()
const [initialValues, setInitialValues] = useState({ field: '' })

const validationSchema = yup.object().shape({
  field: yup.string().required('Obligatorio')
})

// SOLO PARA EDICIÓN: Cargar datos
useEffect(() => {
  if (route.params?.id) {
    async function fetch() {
      const data = await getById(route.params.id)
      setInitialValues(buildInitialValues(data, initialValues))
    }
    fetch()
  }
}, [route])

const handleSubmit = async (values) => {
  setBackendErrors([])
  try {
    await (route.params?.id ? update(route.params.id, values) : create(values))
    showMessage({ message: 'Guardado', type: 'success', 
      style: GlobalStyles.flashStyle, titleStyle: GlobalStyles.flashTextStyle })
    navigation.navigate('ListScreen', { dirty: true })
  } catch (error) {
    setBackendErrors(error.errors)
  }
}

<Formik enableReinitialize validationSchema={validationSchema} 
  initialValues={initialValues} onSubmit={handleSubmit}>
  {({ handleSubmit }) => (
    <>
      <InputItem name="field" label="Campo:" />
      {backendErrors && backendErrors.map((e, i) => 
        <TextError key={i}>{e.param}-{e.msg}</TextError>)}
      <Pressable onPress={handleSubmit}>...</Pressable>
    </>
  )}
</Formik>
```

## ✅ VALIDACIONES YUP
```javascript
name: yup.string().required('Obligatorio')
email: yup.string().email('Inválido').required()
price: yup.number().required().moreThan(0, 'Mayor que 0')
zipCode: yup.string().matches(/^[0-9]{5}$/, '5 dígitos').required()
time: yup.string().matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, 'HH:mm:ss')
```

## 🎨 ESTILOS LISTOS
```javascript
container: { flex: 1 },
button: { borderRadius: 8, height: 40, padding: 10, width: '100%', marginTop: 20 },
actionButton: { borderRadius: 8, height: 40, margin: '1%', width: '50%' },
actionButtonsContainer: { flexDirection: 'row', bottom: 5, position: 'absolute', width: '90%' },
text: { fontSize: 16, color: 'white', textAlign: 'center', marginLeft: 5 },
emptyList: { textAlign: 'center', padding: 50 },
analyticsRow: { flexDirection: 'row', justifyContent: 'space-around' },
analyticsCell: { width: '45%', backgroundColor: GlobalStyles.brandPrimary, borderRadius: 8, padding: 10 }
```

## 🚀 BOTÓN ESTÁNDAR
```javascript
<Pressable
  onPress={handleAction}
  style={({ pressed }) => [
    { backgroundColor: pressed ? GlobalStyles.brandPrimaryTap : GlobalStyles.brandPrimary },
    styles.button
  ]}>
  <MaterialCommunityIcons name='content-save' color='white' size={20}/>
  <TextRegular>Guardar</TextRegular>
</Pressable>
```

## 🎨 ICONOS COMUNES
```
'content-save' 'pencil' 'delete' 'plus-circle' 'skip-next' 
'check' 'close' 'clock' 'timetable'
(Ionicons: 'star' 'star-outline' 'trash')
```

## 🧭 NAVEGACIÓN
```javascript
// Registrar en Stack
<Stack.Screen name='NewScreen' component={NewScreen} options={{title: 'Título'}} />

// Navegar
navigation.navigate('ScreenName', { id: item.id })
navigation.navigate('ListScreen', { dirty: true }) // Para refrescar
```

## 🚨 ERRORES CRÍTICOS
```javascript
keyExtractor={item => item.id.toString()}  // ⚠️ .toString() OBLIGATORIO
<Formik enableReinitialize ...>            // ⚠️ Para edición
{backendErrors && backendErrors.map(...)}  // ⚠️ Verificar existe
export { getAll, create, update }          // ⚠️ Exportar TODO lo que uses
```

## 📦 IMPORTS NECESARIOS
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

## 💻 COMANDOS TERMINAL
```bash
npm run install:all:win        # Setup inicial
npm run migrate:backend        # Recrear BD
npm run start:backend          # Terminal 1
npm run start:frontend         # Terminal 2
```

## 🔍 BUSCAR RÁPIDO EN CÓDIGO
- **Listado**: `OrdersScreen.js`, `RestaurantScheduleScreen.js`
- **Formulario**: `EditOrderScreen.js`, `CreateScheduleScreen.js`
- **Analíticas**: `OrdersScreen.js` → función `renderAnalytics()`
- **Acciones**: `OrdersScreen.js` → `nextStatus()`, `handleNextStatus()`
- **Endpoints**: `OrderEndpoints.js`, `AddressEndpoints.js`
- **Navegación**: `RestaurantsStack.js`

---

**🎯 MÉTODO RÁPIDO DURANTE EL EXAMEN:**
1. Abre este archivo
2. Copia el template que necesites
3. Adapta los nombres (reemplaza 'field', 'item', 'resource')
4. Verifica que cumples las pruebas de aceptación
5. ✅ LISTO

**📁 ARCHIVOS COMENTADOS CON SOLUCIONES COMPLETAS EN:**
- `DeliverUS-Frontend-Owner/src/screens/`
- `DeliverUS-Frontend-Owner/src/api/`

