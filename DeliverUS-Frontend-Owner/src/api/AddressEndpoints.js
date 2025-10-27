// Archivo de endpoints relacionados con direcciones de envío (Shipping Addresses)
// EXAMEN ADDRESS - Todos los endpoints de este archivo
import { get, post, patch, destroy } from './helpers/ApiRequestsHelper'

// Obtener todas las direcciones del usuario logueado
function getAddresses () {
  return get('shippingaddresses')
}

// Crear una nueva dirección de envío
// data debe incluir: alias, street, city, province, zipCode, isDefault
function addAddress (data) {
  return post('shippingaddresses', data)
}

// Establecer una dirección como predeterminada
// IMPORTANTE: Usa PATCH, no PUT (solo actualiza un campo)
function setDefault (id) {
  return patch(`/shippingaddresses/${id}/default`)
}

// Eliminar una dirección de envío
function deleteAddress (id) {
  return destroy(`/shippingaddresses/${id}`)
}

export { getAddresses, addAddress, setDefault, deleteAddress }