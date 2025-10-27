/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, FlatList, Pressable, View } from 'react-native'

import { getRestaurantSchedules, removeSchedule } from '../../api/RestaurantEndpoints'
import ImageCard from '../../components/ImageCard'
import TextSemiBold from '../../components/TextSemibold'
import TextRegular from '../../components/TextRegular'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as GlobalStyles from '../../styles/GlobalStyles'
import { AuthorizationContext } from '../../context/AuthorizationContext'
import { showMessage } from 'react-native-flash-message'
import DeleteModal from '../../components/DeleteModal'
import scheduleIcon from '../../../assets/schedule.png'

export default function RestaurantSchedulesScreen ({ navigation, route }) {
  /* SOLUTION - Patrón de Listado con CRUD Completo */
  
  // Estado para almacenar la lista de schedules
  const [schedules, setSchedules] = useState([])
  
  // Estado para el modal de confirmación de eliminación (Patrón estándar)
  const [scheduleToBeDeleted, setScheduleToBeDeleted] = useState(null)
  
  // Acceso al contexto de autorización para verificar si hay usuario logueado
  const { loggedInUser } = useContext(AuthorizationContext)

  // useEffect para cargar schedules cuando cambia el usuario o la ruta
  // IMPORTANTE: Verificar siempre que haya usuario logueado antes de hacer llamadas
  useEffect(() => {
    if (loggedInUser) {
      fetchSchedules()
    } else {
      setSchedules([]) // Si no hay usuario, vaciamos la lista
    }
  }, [loggedInUser, route]) // Dependencias: se ejecuta al montar, al cambiar usuario o al volver a esta pantalla

  // Función para renderizar cada schedule en la FlatList - RF.02
  const renderSchedule = ({ item }) => {
    return (
      <ImageCard
        imageUri={scheduleIcon}
        title={item.name}
        onPress={() => {
          // Al hacer clic en la card, navegamos a editar el schedule
          navigation.navigate('EditScheduleScreen', { scheduleId: item.id, restaurantId: item.restaurantId })
        }}
      >
        <View>
          {/* Hora de inicio */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextSemiBold>Start Time:</TextSemiBold>
            <TextRegular textStyle={{ marginLeft: 5, color: GlobalStyles.brandGreen }}>{item.startTime}</TextRegular>
          </View>
          
          {/* Hora de fin */}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextSemiBold>End Time:</TextSemiBold>
            <TextRegular textStyle={{ marginLeft: 5, color: GlobalStyles.brandPrimary }}>{item.endTime}</TextRegular>
          </View>
          
          {/* Número de productos asociados - IMPORTANTE: item.products viene del backend */}
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TextSemiBold textStyle={{ color: item.products.length === 0 ? GlobalStyles.brandPrimary : GlobalStyles.brandSecondary }}>
                {item.products.length} products associated
              </TextSemiBold>
          </View>
        </View>
        <View style={styles.actionButtonsContainer}>
          <Pressable
            onPress={() => navigation.navigate('EditScheduleScreen', { scheduleId: item.id, restaurantId: item.restaurantId })
            }
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? GlobalStyles.brandBlueTap
                  : GlobalStyles.brandBlue
              },
              styles.actionButton
            ]}>
          <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'center' }]}>
            <MaterialCommunityIcons name='pencil' color={'white'} size={20}/>
            <TextRegular textStyle={styles.text}>
              Edit
            </TextRegular>
          </View>
        </Pressable>

        <Pressable
            onPress={() => { setScheduleToBeDeleted(item) }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? GlobalStyles.brandPrimaryTap
                  : GlobalStyles.brandPrimary
              },
              styles.actionButton
            ]}>
          <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'center' }]}>
            <MaterialCommunityIcons name='delete' color={'white'} size={20}/>
            <TextRegular textStyle={styles.text}>
              Delete
            </TextRegular>
          </View>
        </Pressable>
        </View>
      </ImageCard>
    )
  }

  const renderEmptySchedulesList = () => {
    return (
      <TextRegular textStyle={styles.emptyList}>
        No schedules were retreived. Either you are not logged in or the restaurant has no schedules yet.
      </TextRegular>
    )
  }

  const renderHeader = () => {
    return (
      <>
      {loggedInUser &&
      <Pressable
        onPress={() => navigation.navigate('CreateScheduleScreen', { id: route.params.id })
        }
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? GlobalStyles.brandGreenTap
              : GlobalStyles.brandGreen
          },
          styles.button
        ]}>
        <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'center' }]}>
          <MaterialCommunityIcons name='plus-circle' color={'white'} size={20}/>
          <TextRegular textStyle={styles.text}>
            Create schedule
          </TextRegular>
        </View>
      </Pressable>
    }
    </>
    )
  }

  /* SOLUTION - RF.02: Visualización de horarios del restaurante */
  // Función para obtener los schedules del backend
  const fetchSchedules = async () => {
    try {
      // IMPORTANTE: getRestaurantSchedules devuelve schedules con productos asociados incluidos
      const fetchedSchedules = await getRestaurantSchedules(route.params.id)
      setSchedules(fetchedSchedules)
    } catch (error) {
      showMessage({
        message: `There was an error while retrieving restaurant schedules. ${error} `,
        type: 'error',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
    }
  }

  /* SOLUTION - RF.03: Borrado de horario de restaurante */
  // Función para eliminar un schedule - Patrón estándar de eliminación con confirmación
  const remove = async (schedule) => {
    try {
      // Llamada al endpoint de eliminación
      await removeSchedule(schedule.restaurantId, schedule.id)
      
      // Refrescamos la lista después de eliminar
      await fetchSchedules()
      
      // Cerramos el modal de confirmación
      setScheduleToBeDeleted(null)
      
      // Mensaje de éxito
      showMessage({
        message: `Schedule ${schedule.startTime} - ${schedule.endTime} succesfully removed`,
        type: 'success',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
      
      // Navegamos al detalle del restaurante para ver productos actualizados
      navigation.navigate('RestaurantDetailScreen', { id: schedule.restaurantId })
    } catch (error) {
      console.log(error)
      setScheduleToBeDeleted(null)
      showMessage({
        message: `Schedule ${schedule.startTime} - ${schedule.endTime} could not be removed.`,
        type: 'error',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
    }
  }

  return (
    <>
    <FlatList
      style={styles.container}
      data={schedules}
      renderItem={renderSchedule}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={renderEmptySchedulesList}
    />
    <DeleteModal
      isVisible={scheduleToBeDeleted !== null}
      onCancel={() => setScheduleToBeDeleted(null)}
      onConfirm={() => remove(scheduleToBeDeleted)}>
        <TextRegular>The products of this scheduled will become unscheduled</TextRegular>
    </DeleteModal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    borderRadius: 8,
    height: 40,
    marginTop: 12,
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%'
  },
  actionButton: {
    borderRadius: 8,
    height: 40,
    marginTop: 12,
    margin: '1%',
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'column',
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
  },
  productsAssociatedText: {
    textAlign: 'right',
    color: GlobalStyles.brandSecondary
  }
})