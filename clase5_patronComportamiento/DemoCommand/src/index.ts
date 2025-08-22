import { Editor } from "./core/editor";
import { CommandManager } from "./core/CommandManager";
import { AppendTextCommand } from "./commands/AppendTextCommand";
import { DeleteLastCommand } from "./commands/DeleteLastCommand";

const editor = new Editor();
const manager = new CommandManager();

function log(step: string) {
  console.log(step.padEnd(24), "=>", JSON.stringify(editor.getContent()));
}

manager.do(new AppendTextCommand(editor, "Hola"));
log("Append 'Hola'");

manager.do(new AppendTextCommand(editor, " mundo"));
log("Append ' mundo'");

manager.do(new DeleteLastCommand(editor, 6));
log("DeleteLast(6)");

manager.undo();
log("Undo");

manager.undo();
log("Undo");

manager.redo();
log("Redo");

manager.do(new DeleteLastCommand(editor, 100));
log("DeleteLast(100)");

manager.undo();
log("Undo");
