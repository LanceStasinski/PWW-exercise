import React from "react";

const ServiceCard: React.FC<{ image: string; title: string }> = (props) => {
  // a URL would be passed to href via props if there were real URLs to go to
  return (
    <li className="m-5">
      <a
        href="/"
        className="animate-card-mouse-exit hover:animate-card-mouse-enter w-60 h-60 flex flex-col justify-center items-center shadow-sm bg-white "
      >
        <div className="w-[53%] flex flex-col items-center">
          <img src={props.image} alt="" className="w-2/3" />
          <p className="font-Open-Sans text-primary-2 text-center font-bold mt-4">
            {props.title}
          </p>
        </div>
      </a>
    </li>
  );
};

export default ServiceCard;
