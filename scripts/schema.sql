CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

INSERT INTO clients (name, logo_url)
VALUES
    ('Client Alpha', 'https://example.com/logo1.png'),
    ('Client Beta', 'https://example.com/logo2.png')
ON CONFLICT DO NOTHING;