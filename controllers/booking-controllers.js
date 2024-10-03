import {booking} from "../models/booking-models.js"


export const getAllBooking = async (req, res, next) => {
  const newBooking = new booking();
  const booking = await newBooking.save(req.body)

  res.status(200).json('these are all booking')
};

export const getOneBooking = (req, res, next) => {
  res.status(200).json('this booking is posted')
};

export const postOneBooking = async (req, res, next) => {
  const newBooking =  new booking();
  const booking = await newBooking.save(req.body);
  res.status(201).json(booking);
};

export const updateOneBooking = (req, res, next) => {
  res.status(200).json('this booking is updated')
};

export const deleteOneBooking = (req, res, next) => {
 res.status(200).json('this booking is updated')
};
