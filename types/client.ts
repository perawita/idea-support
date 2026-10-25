export interface Client { // nama interface Client dari tabel klien_kami
    id: number;
    nama_klien: string;
    logo_klien: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}

export interface CreateClientDTO {
    nama_klien: string;
    logo_klien?: string;
}

export interface UpdateClientDTO {
    nama_klien?: string;
    logo_klien?: string;
}