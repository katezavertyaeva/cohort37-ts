import { ProfileCardImg, ProfileCardTitle, ProfileCardWrapper, PropertyContainer, PropertyName } from "./styles";
import { User } from "./types";

function ProfileCard() {
  const userData: User = {
    avatar:
      "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };

  return (
    <ProfileCardWrapper>
      <ProfileCardImg src={userData.avatar} />
      <ProfileCardTitle>{userData.userName}</ProfileCardTitle>
      <PropertyContainer>
        <PropertyName>Profession:</PropertyName> {userData.profession}
      </PropertyContainer>
      <PropertyContainer>
        <PropertyName>Hobby:</PropertyName> {userData.hobbies[0]}
      </PropertyContainer>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;
