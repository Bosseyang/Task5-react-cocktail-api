import { IconButton } from "./buttons/IconButton";

interface IPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="pagination-container">
      <IconButton
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        icon="arrow_back"
        title="Back"
      />
      <p className="pagination-counter">
        <strong>
          Page {page}/{totalPages}
        </strong>
      </p>
      <IconButton
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        icon="arrow_forward"
        title="Forward"
      />
    </div>
  );
};
