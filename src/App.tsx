import './App.css';
import {useMemo, useState} from "react";
import type {DiceField, DieInfo} from "./util/types.ts";
import {generateInitialField} from "./util/diceUtils.ts";
import Field from "./components/field/Field.tsx";
import DieEditor from "./components/dieEditor/DieEditor.tsx";

function App() {
  const [field, setField] = useState<DiceField>(generateInitialField());
  const topDice = useMemo(() => field.filter((d) => d.position==='top'), [field]);
  const bottomDice = useMemo(() => field.filter((d) => d.position==='bottom'), [field]);

  const [modalDie, setModalDie] = useState<DieInfo | undefined>();

  function saveDie(newDie: DieInfo) {
    setModalDie(undefined);
    setField((oldField) => {
      return oldField.map((oldDie) => {
        if(oldDie.owner === newDie.owner && oldDie.sideCount === newDie.sideCount) {
          return newDie;
        }
        return oldDie;
      });
    })
  }

  return <div>
    <div className="fields">
      <Field dice={topDice} position="top" onDieClick={setModalDie}></Field>
      <br/>
      <Field dice={bottomDice} position="bottom" onDieClick={setModalDie}></Field>
    </div>
    {!modalDie ? "" : <div className="editor">
      <DieEditor die={modalDie} onSave={saveDie} onCancel={() => setModalDie(undefined)}></DieEditor>
    </div>}
  </div>;
}

export default App;
