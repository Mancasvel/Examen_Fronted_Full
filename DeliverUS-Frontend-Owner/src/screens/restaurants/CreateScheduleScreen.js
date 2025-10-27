import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import InputItem from '../../components/InputItem'
import TextRegular from '../../components/TextRegular'
import * as GlobalStyles from '../../styles/GlobalStyles'
import { showMessage } from 'react-native-flash-message'
import * as yup from 'yup'
import { Formik } from 'formik'
import TextError from '../../components/TextError'
import { createSchedule } from '../../api/RestaurantEndpoints'

export default function CreateScheduleScreen ({ navigation, route }) {
  /* SOLUTION - Patrón de Creación de Entidades */
  
  // Estado para almacenar errores del backend (validaciones del servidor)
  const [backendErrors, setBackendErrors] = useState()
  
  // Valores iniciales del formulario - todos los campos con valores vacíos/null
  const initialScheduleValues = { startTime: null, endTime: null }
  
  // Schema de validación con Yup - CRÍTICO: Define reglas de validación del lado del cliente
  const validationSchema = yup.object().shape({
    // Campo startTime: obligatorio y con formato HH:mm:ss
    startTime: yup
      .string()
      .required('Start time is required')
      .matches(
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, // Regex para formato de hora
        'The time must be in the HH:mm (e.g. 14:30:00) format'
      ),
    // Campo endTime: mismas validaciones que startTime
    endTime: yup
      .string()
      .required('End time is required')
      .matches(
        /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
        'The time must be in the HH:mm (e.g. 14:30:00) format'
      )
  })

  // Función para crear un schedule - Patrón estándar de creación
  const create = async (values) => {
    // Limpiamos errores previos antes de intentar crear
    setBackendErrors([])
    try {
      // Llamada al endpoint para crear el schedule en el backend
      // IMPORTANTE: Pasamos route.params.id (restaurantId) y los valores del formulario
      const createdSchedule = await createSchedule(route.params.id, values)
      
      // Mostramos mensaje de éxito usando flash message
      showMessage({
        message: `Schedule ${createdSchedule.startTime} - ${createdSchedule.endTime} succesfully created`,
        type: 'success',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
      
      // Navegamos de vuelta al detalle del restaurante con flag 'dirty' para refrescar
      navigation.navigate('RestaurantDetailScreen', { id: route.params.id, dirty: true })
    } catch (error) {
      // Capturamos errores del backend (ej: validaciones del servidor)
      console.log(error)
      setBackendErrors(error.errors) // Guardamos errores para mostrarlos en la UI
    }
  }
  return (
    // Formik: Componente que maneja el estado y la lógica del formulario
    <Formik
      validationSchema={validationSchema} // Schema de validación de Yup
      initialValues={initialScheduleValues} // Valores iniciales del formulario
      onSubmit={create}> {/* Función que se ejecuta al enviar el formulario */}
      {({ handleSubmit, setFieldValue, values }) => (
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: '60%' }}>
              {/* InputItem: Componente personalizado que integra Formik con TextInput */}
              <InputItem
                name='startTime' // IMPORTANTE: 'name' debe coincidir con el campo en initialValues
                label='Start Time (HH:mm:ss):'
              />
              <InputItem
                name='endTime'
                label='End Time (HH:mm:ss):'
              />

              {/* Renderizado de errores del backend - Patrón estándar */}
              {backendErrors &&
                backendErrors.map((error, index) => <TextError key={index}>{error.param}-{error.msg}</TextError>)
              }

              {/* Botón de guardar - Patrón estándar con estado pressed */}
              <Pressable
                onPress={ handleSubmit } // Formik maneja la validación antes de llamar a onSubmit
                style={({ pressed }) => [
                  {
                    // Cambio de color cuando se presiona el botón
                    backgroundColor: pressed
                      ? GlobalStyles.brandSuccessTap
                      : GlobalStyles.brandSuccess
                  },
                  styles.button
                ]}>
                <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name='content-save' color={'white'} size={20}/>
                  <TextRegular textStyle={styles.text}>
                    Save
                  </TextRegular>
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

  },
  imagePicker: {
    height: 40,
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 80
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 5
  },
  switch: {
    marginTop: 5
  }
})