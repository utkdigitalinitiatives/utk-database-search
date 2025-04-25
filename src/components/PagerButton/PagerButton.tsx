interface PagerButtonProps {
    text: string,
    onClick?: () => void;
    disabled?: boolean
}

export default function PagerButton({ text, onClick, disabled = false }: PagerButtonProps) {
    if (disabled) {
        return (
          <button 
            disabled 
            className="mx-2 p-2 border bg-neutral-300 text-neutral-50 rounded-md cursor-not-allowed"
          >
            {text}
          </button>
        );
    }
    
    return (
        <button className="mx-2 p-2 border rounded-md border-utk-orange shadow-lg ease-in-out duration-300 hover:scale-105" onClick={onClick}>
            {text}
        </button>
    )
}