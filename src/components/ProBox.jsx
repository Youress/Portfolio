const ProBox = ({
  title,
  img,
  date,
  description,
  techno1,
  techno2,
  code,
  demo,
  icon,
  cName,
  techno3
}) => {
  return (
    <div>
      <div
        className={`flex bg-white shadow-1xl rounded-3xl flex-row h-[40rem] p-8 gap-32 xmd:flex-col xmd:h-auto md:gap-16 xmd:gap-24 xmd:items-center ${
          cName ? cName : ""
        } `}
      >
        <div className="w max-w-[53rem] h-auto rounded-3xl bg-[#767676] overflow-hidden shadow-1xl xmd:h-[40rem]">
          <img
            src={img}
            alt="Project Image"
            className="w-full h-auto transition-all  duration-5000 hover:-translate-y-3/4 ease-linear"
          />
        </div>
        <div className="flex w-[30rem] h-auto flex-col text-center justify-center">
          <h3 className="text-4xl uppercase font-bold text-[#2d2e32] mb-8">
            {title} <span>{icon}</span>
          </h3>
          <p className="text-3xl text-[#5d5d5d] font-medium mb-4">{date}</p>
          <p className="text-3xl text-[#767676] font-normal">{description}</p>
          <div className="flex items-center justify-center gap-6 my-8">
            <p className="text-2xl font-semibold text-[#ff922b] ">{techno1}</p>
            <p className="text-2xl font-semibold text-[#228be6] ">{techno2}</p>
            <p className="text-2xl font-semibold text-[#fcc419] ">{techno3}</p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a href={demo} className="text-2xl font-semibold cursor-pointer hover:text-[#147efb] transition-all duration-300 underline">Demo</a>
            <a href={code} className="text-2xl font-semibold hover:text-[#147efb] transition-all duration-300 underline">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProBox;
