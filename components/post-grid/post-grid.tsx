type PostGridProps = { 
    children: React.ReactNode;
}
export const PostGrid = ({children}: PostGridProps) => {
    return (
        <div className="grid grid-cols-1" >
            {children}
        </div>
    );
}