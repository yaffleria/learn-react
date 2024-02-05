import UserProfile from "./UserProfile";
import User1 from "../../assets/images/user1.png";
import User2 from "../../assets/images/user2.png";
import User3 from "../../assets/images/user3.png";

const UserData = [
  {
    id: 1,
    img: User1,
    name: "John Doe",
    title: "Web Developer",
    rate: 4,
  },
  {
    id: 2,
    img: User2,
    name: "Jane",
    title: "FE Developer",
    rate: 5,
  },
  {
    id: 3,
    img: User3,
    name: "Peter",
    title: "BE Developer",
    rate: 3,
  },
];

const UserProfileWrapper = () => {
  return (
    // <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <div className="flex flex-col sm:flex-row">
      {UserData.map((user) => {
        return (
          <UserProfile
            key={user.id}
            img={user.img}
            name={user.name}
            title={user.title}
            rate={user.rate}
          />
        );
      })}
    </div>
  );
};

export default UserProfileWrapper;
