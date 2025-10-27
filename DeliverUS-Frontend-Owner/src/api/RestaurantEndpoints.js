// Archivo de endpoints relacionados con restaurantes
// Importamos los métodos HTTP del helper
import { get, post, put, destroy } from './helpers/ApiRequestsHelper'

// Obtener todos los restaurantes del propietario logueado
function getAll () {
  return get('users/myrestaurants')
}

// Obtener detalle de un restaurante específico (incluye productos, schedules, etc.)
function getDetail (id) {
  return get(`restaurants/${id}`)
}

// Obtener todas las categorías de restaurantes disponibles
function getRestaurantCategories () {
  return get('restaurantCategories')
}

// Crear un nuevo restaurante
function create (data) {
  return post('restaurants', data)
}

// Actualizar un restaurante existente
function update (id, data) {
  return put(`restaurants/${id}`, data)
}

// Eliminar un restaurante
function remove (id) {
  return destroy(`restaurants/${id}`)
}

// EXAMEN ORDERS - Obtener todos los pedidos de un restaurante
function getRestaurantOrders (restaurantId) {
  return get(`/restaurants/${restaurantId}/orders`)
}

// EXAMEN ORDERS - Obtener analíticas de pedidos de un restaurante
// Devuelve: { invoicedToday, numPendingOrders, numDeliveredTodayOrders, numYesterdayOrders }
function getRestaurantAnalytics (restaurantId) {
  return get(`/restaurants/${restaurantId}/analytics`)
}

// IMPORTANTE: Siempre exportar todas las funciones que se usan en las pantallas
export { getRestaurantOrders, getRestaurantAnalytics, getAll, getDetail, getRestaurantCategories, create, update, remove }
