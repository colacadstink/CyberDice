import type {DieInfo} from "../../util/types.ts";

type DieParams = {
  die: DieInfo,
  onClick?: () => unknown,
};

function Die({die, onClick}: DieParams) {
  return (
    <span onClick={onClick} className={die.owner==='top'?'polymath':'polymath-bold'}>
      {die.value}_on_d{die.sideCount}
    </span>
  );
}

export default Die;