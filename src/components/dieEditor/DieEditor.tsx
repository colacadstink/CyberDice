import type {DieInfo, DieOwner} from "../../util/types.ts";
import {type ChangeEvent, useEffect, useState} from "react";
import Die from "../die/Die.tsx";

type DieEditorParams = {
  die: DieInfo,
  onSave: (die: DieInfo) => unknown,
  onCancel: () => unknown,
};

function DieEditor({die, onSave, onCancel}: DieEditorParams) {
  const [newValue, setNewValue] = useState(die.value);
  const [newPos, setNewPos] = useState(die.position);
  useEffect(() => {
    setNewValue(die.value);
    setNewPos(die.position);
  }, [die])

  function handleRadio(event: ChangeEvent<HTMLInputElement>) {
    setNewPos(event.target.value as DieOwner);
  }

  function save() {
    onSave({
      ...die,
      value: newValue,
      position: newPos,
    });
  }

  return <div>
    <h4>Die editor: <Die die={die}></Die></h4>
    <div>
      <label>
        New value:
        <input type="number" min="1" max={die.sideCount} value={newValue} onChange={(e) => setNewValue(e.target.valueAsNumber)}/>
      </label>
      <br/>
      Position:
      <label>
        <input type="radio" name="newPosition" value="top" checked={newPos==='top'} radioGroup="newPositionGroup" onChange={handleRadio}/>
        Top
      </label>
      <label>
        <input type="radio" name="newPosition" value="bottom" checked={newPos==='bottom'} radioGroup="newPositionGroup" onChange={handleRadio}/>
        Bottom
      </label>
      <br/>
      <button onClick={save}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>;
}

export default DieEditor;