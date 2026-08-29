import type {DieInfo} from "../../util/types.ts";

type DieParams = {
  die: DieInfo,
  onClick?: () => unknown,
};

function Die({die, onClick}: DieParams) {
  return (
    <div onClick={onClick}>
      {die.owner} D{die.sideCount} = {die.face}
    </div>
  );
}

export default Die;