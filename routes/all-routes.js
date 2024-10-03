import { Router } from 'express'

import { getAllBooking ,getOneBooking , updateOneBooking , postOneBooking, deleteOneBooking} from'../controllers/booking-controllers.js'


 export const bookingRouter = Router();

bookingRouter.get('/bookings', getAllBooking)

bookingRouter.get('/bookings/:2', getOneBooking)

bookingRouter.post('/bookings', postOneBooking )
bookingRouter.patch('/bookings/:id', updateOneBooking)
bookingRouter.delete('/bookings/:id', deleteOneBooking)