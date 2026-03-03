import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";

function useGetCurrentUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data } = await axios.get(
          `${serverUrl}/api/user/me`,
          { withCredentials: true }
        );

        setUser(data.user);
      } catch (error) {
        console.log("Not logged in");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();
  }, []);

  return { user, loading };
}

export default useGetCurrentUser;