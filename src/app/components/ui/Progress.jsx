const Progress = ({ value }) => {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div
        className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress; // 👈 Asegúrate de exportarlo correctamente
