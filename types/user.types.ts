export type Role = "CUSTOMER" | "TECHNICIAN" | "ADMIN";
export type UserStatus = "ACTIVE" | "BANNED";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: Role;
  status: UserStatus;
  createdAt: string;
}

export interface TechnicianProfile {
  id: string;
  userId: string;
  bio?: string;
  experience?: number;
  location?: string;
  rating: number;
  totalReviews: number;
  user?: User;
}
