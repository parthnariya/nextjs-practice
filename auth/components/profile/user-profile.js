import ProfileForm from "./profile-form";
import { useSession, getSession } from "next-auth/client";
import classes from "./user-profile.module.css";
import { useEffect, useState } from "react";

function UserProfile() {
  // Redirect away if NOT auth
  const [loading, setLoading] = useState(true);
  // const [session,loading] = useSession()

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/auth";
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <p className={classes.profile}>loading....</p>;
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
