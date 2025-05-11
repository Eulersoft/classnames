type ClassNamesArg = string | 0 | false | null | undefined;

/**
 * A utility function that merges multiple class names into a single space-separated string.
 *
 * Filters out falsy values including: `false`, `null`, `undefined`, numeric zero (`0`).
 *
 * @param args - A list of class name values to be merged.
 * @returns A single string containing valid class names separated by spaces.
 *
 * @example classNames(styles.button, active && styles.active, styles[size]);
 */
function classNames(...args: ClassNamesArg[]) {
  return args.filter((arg) => typeof arg === "string").join(" ");
}

export { classNames };
