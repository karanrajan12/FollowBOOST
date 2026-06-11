import { useEffect, useState } from "react";

function useProfile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const token =
                    localStorage.getItem("token");

                const response = await fetch(
                    "https://followboost.onrender.com/api/user/profile",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                const data =
                    await response.json();

                if (data.success) {
                    setProfile(data.user);
                }

            } catch (error) {

                console.log(error);

            }

        };

        fetchProfile();

    }, []);

    return profile;
}

export default useProfile;
