import { IoIosStar } from "react-icons/io";

const UserProfile = (props) => {
  const { img, name, title, rate } = props;

  return (
    <div className="basis-1 sm:basis-1/3 pb-3 m-4 shadow-lg bg-white rounded-lg">
      <img src={img} alt={name} className="rounded-lg" />
      <h1 className="text-4xl text-center mt-1 text-black">{name}</h1>
      <h2 className="text-base text-center mt-1 text-black">{title}</h2>
      <div className="flex justify-center mt-2 text-yellow-500">
        {Array.from({ length: rate }, (_, index) => {
          return <IoIosStar key={index} />;
        })}
      </div>
    </div>
  );
};

export default UserProfile;
