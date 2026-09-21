import { hotelUserDTO } from "../dto/hotel.dto.js";
import { createHotel, getAllHotels, getHotelById } from "../repository/hotel.repository.js";

export async function createHotelService(hotelData: hotelUserDTO) {
    const hotel = await createHotel(hotelData);
    return hotel;
}


export async function getHotelByIdService(id: number) {
    const hotel = await getHotelById(id);
   
    return hotel;
}

export async function getAllHotelsService() {
    const hotel = await getAllHotels();

    return hotel;
}

