interface IIConButtonProps {
  icon: string;
  onClick: () => void;
  disabled?: boolean;
  title?: string;
}
export const IconButton: React.FC<IIConButtonProps> = ({ icon, onClick, disabled, title }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="custom-button" title={title}>
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
};
