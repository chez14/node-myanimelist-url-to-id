/**
 * Check if certain string starts with a specified string.
 *
 * @param needle Matching string
 * @param haystack String you wanted to match to
 */
export function startsWith(needle: string, haystack: string): boolean {
  if (haystack.length < needle.length) {
    return false;
  }

  return haystack.substr(0, needle.length) == needle;
}
