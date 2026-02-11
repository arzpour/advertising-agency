interface IServiceModal {
  children: React.ReactNode;
  onClose: () => void;
}

const ServiceModal: React.FC<IServiceModal> = ({ children, onClose }) => {
  return (
    <button
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg w-11/12 max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 left-3 text-gray-500 cursor-pointer"
        >
          ✕
        </button>
        {children}
      </div>
    </button>
  );
};

export default ServiceModal;
