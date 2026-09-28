import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const getClient = () => {
    const httpLink = createHttpLink({
        uri: process.env.HYGRAPH_URI || "https://us-west-2.cdn.hygraph.com/content/cmtg3b48a01xn06uptnh29r7s/master",
    });

    const authLink = setContext((_, { headers }) => {
        const token = process.env.HYGRAPH_TOKEN;
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            },
        };
    });

   
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};