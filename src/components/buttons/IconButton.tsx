interface IIConButtonProps {
  icon: string;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  name?: string;
}
export const IconButton: React.FC<IIConButtonProps> = ({
  icon,
  onClick,
  disabled,
  title,
  name,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${disabled ? "disabled" : ""}`}
      title={title}
      type="button"
    >
      <span className="material-symbols-outlined">{icon}</span>
      <h2>{name}</h2>
    </button>
  );
};
