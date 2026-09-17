import {Hotel} from '../db/modeles/hotel.js';
import { hotelUserDto } from '../dto/hotel.dto.js';

export class createHotel (hotelDtoData :  hotelUserDto){
    await Hotel.create({
        hotelDtoData:  hotelDtoData.name,
        hotelDtoData: hotelDtoData.address,
        hotelDtoData: hotelDtoData.location,
        hotelDtoData: hotelDtoData.rating,
        hotelDtoData: hotelDtoData.ratingCount

    }) 
}