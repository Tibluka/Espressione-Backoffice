export class Cep {
    cep: string
    logradouro: string;
    complemento: string;
    bairro: string;
    uf: string;
    localidade?: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string
}

export class Uf {
    id: number;
    nome: string;
    sigla: string;
    regiao:
        {
            id: number
            nome: string
            sigla: string
        }
}