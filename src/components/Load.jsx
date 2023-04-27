const Load = () => {
  return (
    <div className="load h-screen bg-black flex flex-col justify-center items-center">
      <div>
        <img
          className="w-full h-full max-w-full"
          src="./logo_white.svg"
          alt="logoLoad"
        />
      </div>
      <div>
        <img className="w-20 h-20" src="./loader.gif" alt="" />
      </div>
    </div>
  );
};

export default Load;
