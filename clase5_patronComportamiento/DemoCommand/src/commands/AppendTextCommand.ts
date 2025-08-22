import { Command } from "../core/Command";
import { Editor } from "../core/editor";

export class AppendTextCommand implements Command {
  public name = "AppendText";
  private appendedLength = 0;

  constructor(private editor: Editor, private text: string) {}

  execute(): void {
    this.appendedLength = this.text.length;
    this.editor.append(this.text);
  }

  undo(): void {
    if (this.appendedLength > 0) {
      this.editor.deleteLast(this.appendedLength);
    }
  }
}
