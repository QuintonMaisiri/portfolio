export function formatToCommentBlock(text: string): string {
  const lines = text.split('\n').map(line => ` * ${line.trim()}`);
  return `/**\n${lines.join('\n')}\n */`;
}
