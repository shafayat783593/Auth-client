export type BookingStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "DECLINED"
  | "PAID"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export interface Booking {
  id: string;
  customerId: string;
  technicianId: string;
  serviceId: string;
  status: BookingStatus;
  scheduledAt: string;
  address?: string;
  notes?: string;
  createdAt: string;
}
