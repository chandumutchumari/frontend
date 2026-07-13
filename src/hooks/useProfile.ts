import { useEffect, useState } from "react";
import type { StudentProfile } from "@/types/profile";
import { getProfile } from "@/services/profileService";

function useProfile() {
  const [profile, setProfile] = useState<Partial<StudentProfile> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let active = true;
    getProfile()
      .then((data) => active && setProfile(data as Partial<StudentProfile>))
      .catch((e) => active && setError(e))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  return { profile, loading, error };
}

export default useProfile;
