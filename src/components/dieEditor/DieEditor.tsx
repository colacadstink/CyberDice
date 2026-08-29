import type {DieInfo} from "../../util/types.ts";

type DieEditorParams = {
  die: DieInfo,
  onSave: (die: DieInfo) => unknown,
};

function DieEditor({die}: DieEditorParams) {
  return <div>
    Die editor - {die.owner} D{die.sideCount} = {die.face}
  </div>;
}

export default DieEditor;