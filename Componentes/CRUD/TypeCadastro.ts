
export interface TypeCadastro{
    id: string; 
    nome: string; /* name*/
    email: string;
    dataNascimento: string; /*data birth*/
    telefone: string; /* phone number */
    
}

export const dummyCadastrolist : TypeCadastro[] = [{
    id : new Date().toJSON().toString(),
    nome:" Kauã",
    email:"aquillae@777",
    dataNascimento:"31/07/2003",
    telefone:"11919216813",
    
}]

export enum PageEnum{
    list,
    add,
} 