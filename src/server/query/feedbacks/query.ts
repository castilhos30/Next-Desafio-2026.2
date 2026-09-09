import { gql } from "@apollo/client";
import { redirect } from "next/navigation";
import { getClient } from "../../db/apolo-client";

type Feedback = {
    id: string;
    nome: string;
    descricao: string; 
};

const GET_FEEDBACK = gql`
    query Feedback {
        feedbacks(first: 6) { 
            id
            nome
            descricao        
        }
    }
`;

export async function getFeedbacks(): Promise<Feedback[]> {
    try {
        const client = getClient();
        
        const { data } = await client.query<any>({
            query: GET_FEEDBACK,
            context: {
                fetchOptions: {
                    next: {
                        revalidate: 60,
                    }
                }
            }
        });

        return data.feedbacks || data.Feedbacks || [];

    } catch (error) {
        console.error("Erro ao buscar feedbacks:", error);
    }

    redirect("/internal-server-error");
}