import { useMemo, useCallback } from "react";

import { useSearchParams } from "remix";

import { NavigateOptions } from "react-router";

export function useQueryParam<T>(
  key: string,
): [T | undefined, (newQuery: T, options?: NavigateOptions) => void] {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key);

  let value = useMemo(() => JSON.parse(paramValue || "{}"), [paramValue]);

  let setValue = useCallback(
    (newValue: T, options?: NavigateOptions) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, JSON.stringify(newValue));
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams],
  );

  return [value, setValue];
}
