import type {DieInfo, DieOwner} from "../../util/types.ts";
import Die from "../die/Die.tsx";
import {useMemo} from "react";

type FieldParams = {
  dice: DieInfo[],
  position: DieOwner,
  onDieClick?: (die: DieInfo) => unknown,
};

function Field({dice, position, onDieClick}: FieldParams) {
  const totalValue = useMemo(() => dice.map((d)=>d.value).reduce((a, b) => a+b, 0), [dice])

  return <div className="field">
    {position} dice: (total: {totalValue})<br/>
    {
      dice.map((die) => <Die
        die={die}
        onClick={() => onDieClick?.(die)}
      ></Die>)
    }
  </div>;
}

export default Field;