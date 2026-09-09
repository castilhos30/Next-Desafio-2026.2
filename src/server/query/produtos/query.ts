import { gql } from "@apollo/client";
import { redirect } from "next/navigation";
import { getClient } from "../../db/apolo-client";

type Produto = {
    id: string;
    titulo: string;
    descricao: string;
    preco: number; 
    imagem: {
        url: string;
    }
};

const GET_PRODUTO = gql`
    query Servico {
        servicos(first:20) {
            id
            titulo
            descricao
            preco
            imagem {
                url
            }
        }
    }
`;

export async function getProdutos(): Promise<Produto[]> {
    try {
        const client = getClient();
        
        const { data } = await client.query<any>({
            query: GET_PRODUTO,
            context: {
                fetchOptions: {
                    next: {
                        revalidate: 60,
                    }
                }
            }
        });

        return data.servicos || data.Servicos || [];

    } catch (error) {
        console.error("Erro ao buscar serviços:", error);
    }

    redirect("/internal-server-error");
}