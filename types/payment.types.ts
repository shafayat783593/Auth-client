export type PaymentMethod = "STRIPE" | "SSLCOMMERZ";
export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED";

export interface Payment {
  id: string;
  bookingId: string;
  transactionId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  paidAt?: string;
}
