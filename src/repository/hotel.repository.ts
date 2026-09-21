import { logger } from "../config/logger.config.js";
import { Hotel } from "../db/modeles/hotel.js";
import type { hotelUserDTO } from "../dto/hotel.dto.js";
import { NotFoundError } from "../utilis/error/app.error.js";

export async function createHotel(hotelData: hotelUserDTO) {
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating,
        ratingCount: hotelData.ratingCount

    });
    logger.info(`Hotel Created: ${hotel.id}`);
    return hotel;
}

export async function getHotelById(id: number) {
    const hotel = await Hotel.findByPk(id);

    if (!hotel) {
        logger.error(`hotel not found ${id}`)
        throw new NotFoundError(`hotel with ${id} not found`);
    }
    logger.info(`Hotel Found: ${hotel.id}`);
    return hotel;
}

export async function getAllHotels() {
    const hotels = await Hotel.findAll();
    logger.info(`Hotels Found: ${hotels.length}`);
    return hotels;
}

