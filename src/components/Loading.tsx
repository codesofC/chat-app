const Loading = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-50 bg-background flex flex-col gap-4 items-center justify-center">
      <div className="custom-loader"></div>
      <div className="text-secondary">Loading...</div>
    </div>
  );
};

export default Loading;
