export default function ZoomableImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="cursor-zoom-in rounded border border-gray-300 my-4"
        onClick={() => setIsOpen(true)}
        width={600}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-5xl max-h-[90vh] rounded shadow-lg cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
}
