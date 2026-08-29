import type {DieInfo, DieOwner} from "../../util/types.ts";
import Die from "../die/Die.tsx";

type FieldParams = {
  dice: DieInfo[],
  position: DieOwner,
  onDieClick?: (die: DieInfo) => unknown,
};

function Field({dice, position, onDieClick}: FieldParams) {
  return <div className="field">
    {position} dice:<br/>
    {
      dice.map((die) => <Die
        die={die}
        onClick={() => onDieClick?.(die)}
      ></Die>)
    }
  </div>;
}

export default Field;