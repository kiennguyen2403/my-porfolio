export default function Layout({ children }) {
    return (
        <div sx= {{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        
        }}>
            {children}
        </div>
    );
}
