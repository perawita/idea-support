export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  meta?: Record<string, unknown> | null;
  errors?: Record<string, string[]> | null;
}