function EditModal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? "visible bg-stone-800/20" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-auto w-11/12 max-w-[800px] items-center justify-center md:w-9/12"
      >
        {" "}
        {children}
      </div>
    </div>
  );
}

export default EditModal;
