export interface Client {
    id: number;
    name: string;
    logo_url: string | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}

export interface CreateClientDTO {
    name: string;
    logo_url?: string;
}

export interface UpdateClientDTO {
    name?: string;
    logo_url?: string;
}