export interface Rooms {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomList {
  roomId: number;
  roomType: string;
  amenities: string;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  price: number;
  rating: number;
}
