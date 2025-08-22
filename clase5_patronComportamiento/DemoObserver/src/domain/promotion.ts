export interface Promotion {
  id: string;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  channels?: Array<"in-store" | "email" | "web" | "mobile">;
  tags?: string[];
}