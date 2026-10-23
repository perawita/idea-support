export interface Client {
    id: number;
    name?: string;
    nama_klien?: string;
    logo_url?: string | null;
    logo_klien?: string | null;
    created_at: Date | string;
    updated_at: Date | string;
    deleted_at: Date | string | null;
}

export interface CreateClientDTO {
    name?: string;
    nama_klien?: string;
    logo_url?: string;
    logo_klien?: string | null;
}

export interface UpdateClientDTO {
    name?: string;
    nama_klien?: string;
    logo_url?: string;
    logo_klien?: string | null;
}