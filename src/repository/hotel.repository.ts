import { Hotel } from "../db/modeles/hotel.js";
import type { hotelUserDTO } from "../dto/hotel.dto.js";

export async function createHotel(hotelData: hotelUserDTO) {
    const hotel = await Hotel.create({ name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData.rating,
    ratingCount: hotelData.ratingCount
});
   return hotel;
}