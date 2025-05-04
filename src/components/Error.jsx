import { SharedCard } from "../shared/SharedCard";

export function Error(props) {
  return <SharedCard className={"alert alert-danger p-4"} title={`Error ${props.message}`} />;
}
