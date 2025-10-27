// Archivo de endpoints relacionados con pedidos (Orders)
// EXAMEN ORDERS - Todos los endpoints de este archivo
import { get, put, patch } from './helpers/ApiRequestsHelper'

// RF.02: Actualizar un pedido (solo address y price como propietario)
// Endpoint especial: /orders/:id/by-owner (no es el genérico /orders/:id)
function update (orderId, data) {
  return put(`orders/${orderId}/by-owner`, data)
}

// RF.02: Obtener un pedido por ID (para cargar datos en el formulario de edición)
function getById (orderId) {
  return get(`orders/${orderId}`)
}

// RF.04: Cambiar el estado de un pedido al siguiente
// Implementa la máquina de estados: pending → in process → sent → delivered
// IMPORTANTE: Usa PATCH, no PUT, y endpoints diferentes para cada transición
function nextStatus (order) {
  switch (order.status) {
    case 'pending':
      return patch(`/orders/${order.id}/confirm`) // pending → in process
    case 'in process':
      return patch(`/orders/${order.id}/send`)    // in process → sent
    case 'sent':
      return patch(`/orders/${order.id}/deliver`) // sent → delivered
    default:
      throw new Error('No further state transitions available')
  }
}

export { update, getById, nextStatus }
