import { useEffect, useState } from "react";
import validator from "../../jsUtils/validate";
import getProfileImg from "../../jsUtils/getImgProgile";
import Button from "./button";
import user from "../../assets/img/user.png";

export default function SignInOrProfile() {
  const [signInOrProfile, setSignInOrProfile] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setSignInOrProfile(false);
        return;
      }

      try {
        const response = await validator(token);
        if (response.ok) {
          const img = await getProfileImg(token);
          if (img instanceof Blob) {
            const objectUrl = URL.createObjectURL(img);
            setProfileImg(objectUrl);
            setSignInOrProfile(true);
          } else {
            console.warn("Invalid blob returned");
            setProfileImg(user);
            setSignInOrProfile(true);
          }
        } else {
          setSignInOrProfile(false);
        }
      } catch (err) {
        console.error("Validation or image load failed", err);
        setSignInOrProfile(false);
      }
    };

    fetchData();

    // Optional cleanup: Revoke object URL on unmount
    return () => {
      if (profileImg) {
        URL.revokeObjectURL(profileImg);
      }
    };
  }, [token]);

  return signInOrProfile ? (
    <Button
      redirect="/profile"
      className="profileImage"
      value={
        <img
          className="img"
          src={profileImg}
          alt="Profile"
          
        />
      }
    />
  ) : (
    <Button redirect="/signIn" value="Sign In" />
  );
}
