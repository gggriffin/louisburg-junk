export const InfoTile = (props) => {
  const { title, content } = props;
  return (
    <div className="text-white flex flex-col p-5 bg-purple-accent w-3/4 mb-5">
      <div className="font-title-text mb-3 text-xl">{title}</div>
      <div className="font-content-text text-lg">{content}</div>
    </div>
  );
};
