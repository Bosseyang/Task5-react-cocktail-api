interface IInfoPProps {
  label: string;
  info: string | string[];
}

export const InfoP: React.FC<IInfoPProps> = ({ info, label }) => {
  return (
    <p className="info-p">
      <strong>{label}</strong> {info}
    </p>
  );
};
