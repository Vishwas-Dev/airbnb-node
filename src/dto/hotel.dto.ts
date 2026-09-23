export type hotelUserDTO = {
  name: string;
  address: string;
  location: string;
  rating?: number;
  ratingCount?: number;
};
export type updateHotelUserDTO = {
  name?: string;
  address?: string;
  location?: string;
};