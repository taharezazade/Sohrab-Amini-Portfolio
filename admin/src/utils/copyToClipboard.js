/** @format */

export async function copyToClipboard(text) {
  if (!navigator.clipboard) {
    return false;
  }

  await navigator.clipboard.writeText(text);

  return true;
}
