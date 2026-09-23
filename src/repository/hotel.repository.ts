import { logger } from "../config/logger.config.js";
import { Hotel } from "../db/modeles/hotel.js";
import type { hotelUserDTO, updateHotelUserDTO } from "../dto/hotel.dto.js";
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
    const hotels = await Hotel.findAll({
        where: {
            deletedAt: null,
        }
    });
    logger.info(`Hotels Found: ${hotels.length}`);
    return hotels;
}

export async function softDeleteHotel(id: number) {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
        logger.error(`hotel not found ${id}`)
        throw new NotFoundError(`hotel with ${id} not found`);
    }

    hotel.deletedAt = new Date();
    hotel.save(); // save to db
    logger.info(`hotel soft deleted ${hotel.id}`)
    return true;


}
