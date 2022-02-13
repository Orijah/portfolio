import { useState } from "react";

export default function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  return [state, () => setState((state) => !state)];
}
