

type UsageofButton = "Primary" | "Secondary";
interface ButtonProps {
  children: React.ReactNode;
  usage: UsageofButton;
  onClick?: () => void; 
}

const Button = ({children,usage,onClick}:ButtonProps) => {
  return (
    <>   
    {  usage === "Primary" && (
        <button className='bg-amber-600 text-white px-4 py-2 rounded-2xl' onClick={onClick}>{children}</button>)
    }
    {  usage === "Secondary" && (
        <button onClick={onClick} className='px-4 py-2 border-amber-600 border-2 rounded-2xl transition-all duration-300 hover:bg-amber-600 hover:text-white'>{children}</button>)
    }
    
    </>
 

    
  )
}

export default Button