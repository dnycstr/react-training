interface Props {
  children?: React.ReactNode;
}

export const TableContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
          {children}
        </div>
      </div>
    </div>
  );
};
