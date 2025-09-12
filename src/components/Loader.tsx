interface ILoaderProps {
  loaderStyle?: "dots" | "spinner" | "blobs";
}

export const Loader: React.FC<ILoaderProps> = ({ loaderStyle = "spinner" }: ILoaderProps) => {
  return <div className={`loader ${loaderStyle}`} />;
};
