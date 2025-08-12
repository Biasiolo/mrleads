import { useEffect, useMemo, useState } from "react";

export function useUTM() {
  const [params, setParams] = useState({});
  useEffect(() => {
    const usp = new URLSearchParams(window.location.search);
    setParams(Object.fromEntries(usp.entries()));
  }, []);
  return useMemo(() => ({
    utm_source: params.utm_source,
    utm_medium: params.utm_medium,
    utm_campaign: params.utm_campaign,
    utm_term: params.utm_term,
    utm_content: params.utm_content,
  }), [params]);
}
