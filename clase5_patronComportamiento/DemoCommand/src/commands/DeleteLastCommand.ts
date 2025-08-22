import { Command } from "../core/Command";
import { Editor } from "../core/editor";

export class DeleteLastCommand implements Command {
  public name = "DeleteLast";
  private deleted = "";

  constructor(private editor: Editor, private n: number) {}

  execute(): void {
    this.deleted = this.editor.deleteLast(this.n);
  }

  undo(): void {
    if (this.deleted.length > 0) {
      this.editor.append(this.deleted);
    }
  }
}