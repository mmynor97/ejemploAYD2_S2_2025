import { Command } from "./Command";

export class CommandManager {
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];

  do(command: Command): void {
    command.execute();
    this.undoStack.push(command);
    this.redoStack = [];
  }

  canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  undo(): void {
    if (!this.canUndo()) return;
    const cmd = this.undoStack.pop()!;
    cmd.undo();
    this.redoStack.push(cmd);
  }

  redo(): void {
    if (!this.canRedo()) return;
    const cmd = this.redoStack.pop()!;
    cmd.execute();
    this.undoStack.push(cmd);
  }
}
