interface ISearchOptionsButtonProps {
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
  title?: string;
  name?: string;
}
export const SearchOptionsButton: React.FC<ISearchOptionsButtonProps> = ({
  onClick,
  disabled,
  title,
  name,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`search-options-button ${disabled ? "disabled" : ""}`}
      title={title}
      type="button"
    >
      <p>{name}</p>
    </button>
  );
};
