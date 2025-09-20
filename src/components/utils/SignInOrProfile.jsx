import { useEffect, useState } from "react";
import validator from "../../jsUtils/validate";
import getProfileImg from "../../jsUtils/getImgProgile";
import Button from "./button";
import user from "../../assets/img/user.png";
import { Link } from "react-router-dom";

export default function SignInOrProfile() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileImg, setProfileImg] = useState(user); // default to dummy image
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const currentToken = localStorage.getItem("token");

      if (!currentToken) {
        setIsAuthenticated(false);
        setProfileImg(user);
        setLoading(false);
        return;
      }

      try {
        // Validate token
        const response = await validator();
        if (response.ok) {
          setIsAuthenticated(true);

          // Try to get profile image
          try {
            const img = await getProfileImg();

            if (img != null ) {
              setProfileImg(img);
            } else {
              setProfileImg(user);
            }
          } catch (imgError) {
            console.warn("Profile image fetch failed, using default", imgError);
            setProfileImg(user);
          }
        } else {
          // Token invalid
          setIsAuthenticated(false);
          setProfileImg(user);
          localStorage.removeItem("token");
        }
      } catch (err) {
        console.error("Validation failed", err);
        setIsAuthenticated(false);
        setProfileImg(user);
        localStorage.removeItem("token");
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  // cleanup for blob URL
  useEffect(() => {
    return () => {
      if (profileImg && profileImg.startsWith("blob:")) {
        URL.revokeObjectURL(profileImg);
      }
    };
  }, [profileImg]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setProfileImg(user);
    window.location.href = "/";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div className="authenticated-user">
        <Link to="/profile col">
          <img className = "profileImage ms-1 m-1 bg-light" src={profileImg} alt="Profile" />
        </Link>
      <Button
        onClick={handleSignOut}
        value="Sign Out"
      />
    </div>
  ) : (
    <div className="unauthenticated-user">
      <Button redirect="/signIn" value="Sign In" extrastyle="btn btn-primary me-2" />
      <Button redirect="/signUp" value="Sign Up" extrastyle="btn btn-secondary" />
    </div>
  );
}
