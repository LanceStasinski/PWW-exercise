import React from "react";

// renders a link with an image and description
const ServiceCard: React.FC<{ image: string; title: string; url: string }> = (
  props
) => {
  return (
    <li className="m-5">
      <a
        href={props.url}
        className="animate-card-mouse-exit hover:animate-card-mouse-enter w-60 h-60 flex flex-col justify-center items-center shadow-sm bg-white "
      >
        <div className="w-[53%] flex flex-col items-center">
          <img
            data-testid="card-image"
            src={props.image}
            alt=""
            className="w-2/3"
          />
          <p
            data-testid="card-description"
            className="font-Open-Sans text-primary-2 text-center font-bold mt-4"
          >
            {props.title}
          </p>
        </div>
      </a>
    </li>
  );
};

export default ServiceCard;
