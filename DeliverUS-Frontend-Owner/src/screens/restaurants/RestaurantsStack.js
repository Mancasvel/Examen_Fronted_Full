// Stack Navigator para la sección de Restaurantes
// IMPORTANTE: Aquí se registran TODAS las pantallas relacionadas con restaurantes
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CreateProductScreen from './CreateProductScreen'
import CreateRestaurantScreen from './CreateRestaurantScreen'
import EditProductScreen from './EditProductScreen'
import EditRestaurantScreen from './EditRestaurantScreen'
import RestaurantDetailScreen from './RestaurantDetailScreen'
import RestaurantsScreen from './RestaurantsScreen'
// EXAMEN SCHEDULES - Imports de pantallas de horarios
import RestaurantSchedulesScreen from './RestaurantSchedulesScreen'
import CreateScheduleScreen from './CreateScheduleScreen'
import EditScheduleScreen from './EditScheduleScreen'
// EXAMEN ORDERS - Import de pantalla de edición de pedidos
import EditOrderScreen from '../orders/EditOrderScreen'

const Stack = createNativeStackNavigator()

export default function RestaurantsStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='RestaurantsScreen'
        component={RestaurantsScreen}
        options={{
          title: 'My Restaurants'
        }} />
      <Stack.Screen
        name='RestaurantDetailScreen'
        component={RestaurantDetailScreen}
        options={{
          title: 'Restaurant Detail'
        }} />
      <Stack.Screen
        name='CreateRestaurantScreen'
        component={CreateRestaurantScreen}
        options={{
          title: 'Create Restaurant'
        }} />
        <Stack.Screen
        name='CreateProductScreen'
        component={CreateProductScreen}
        options={{
          title: 'Create Product'
        }} />
        <Stack.Screen
        name='EditRestaurantScreen'
        component={EditRestaurantScreen}
        options={{
          title: 'Edit Restaurant'
        }} />
        <Stack.Screen
        name='EditProductScreen'
        component={EditProductScreen}
        options={{
          title: 'Edit Product'
        }} />
        {/* EXAMEN SCHEDULES - Registro de pantallas de horarios */}
        <Stack.Screen
        name='RestaurantSchedulesScreen'
        component={RestaurantSchedulesScreen}
        options={{
          title: 'Schedules'
        }} />
        <Stack.Screen
        name='CreateScheduleScreen'
        component={CreateScheduleScreen}
        options={{
          title: 'Create Schedule'
        }} />
        <Stack.Screen
        name='EditScheduleScreen'
        component={EditScheduleScreen}
        options={{
          title: 'Edit Schedule'
        }} />
        
        {/* EXAMEN ORDERS - Registro de pantalla de edición de pedidos */}
        {/* IMPORTANTE: EditOrderScreen se añade al RestaurantsStack porque
            se navega desde OrdersScreen que muestra pedidos de un restaurante */}
        <Stack.Screen
        name='EditOrderScreen'
        component={EditOrderScreen}
        options={{
          title: 'Edit order'
        }} />
    </Stack.Navigator>
  )
}