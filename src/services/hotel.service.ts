import { Hotel } from "../db/modeles/hotel.js";
import { hotelUserDTO } from "../dto/hotel.dto.js";

export async function createHotelService(hotelData: hotelUserDTO) {
    const hotel = await Hotel.create(hotelData);
    return hotel;
}


export async function getHotelServiceById(id: number) {
    const hotel = await Hotel.findByPk(id);
    return hotel;
}