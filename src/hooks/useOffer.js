import { useEffect, useState } from "react";

export default function useOffer() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch("/api/offer");
        const data = await res.json();
        setOffers(data);
      } catch (error) {
        console.log(error, "error in catch block");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return { offers, loading };
}
