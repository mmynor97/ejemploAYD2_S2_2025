export class Editor {
  private content = "";

  getContent(): string {
    return this.content;
  }

  append(text: string): void {
    if (text.length === 0) return;
    this.content += text;
  }

  deleteLast(n: number): string {
    if (n <= 0) return "";
    const len = this.content.length;
    const cut = Math.min(n, len);
    const deleted = this.content.slice(len - cut);
    this.content = this.content.slice(0, len - cut);
    return deleted;
  }
}
