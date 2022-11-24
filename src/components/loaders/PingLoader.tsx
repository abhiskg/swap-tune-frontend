const PingLoader = () => {
  return (
    <div className="-mt-16 flex h-screen items-center justify-center">
      <div className="absolute flex h-8 w-8">
        <span className="absolute -top-4 -left-4 h-8 w-8 animate-ping rounded-full bg-blue-500 opacity-75"></span>
        <span className="relative -top-4 -left-4 h-8 w-8 rounded-full bg-blue-200"></span>
      </div>
    </div>
  );
};

export default PingLoader;
