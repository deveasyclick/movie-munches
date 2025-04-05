import type { JSX } from "react";

export function Button(): JSX.Element {
  return <button onClick={() => alert("You have clicked!")}>Press me!</button>;
}
