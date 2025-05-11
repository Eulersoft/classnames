# @eulersoft/classnames

A lightweight utility function that merges multiple class names into a single string, filtering out any falsy values.

This package is perfect for handling dynamic class names in React or any other JavaScript-based UI framework.

## Installation

```bash
npm install @eulersoft/classnames
```

## Usage

The classnames function accepts any number of arguments (strings, numbers, booleans, null, undefined, etc.) and returns a string of valid class names. Invalid or falsy values are automatically filtered out.

### Example

```jsx
import { classNames } from "@eulersoft/classnames";
import styles from "./component.module.css";

interface ComponentProps {
  active?: boolean;
  size?: "medium" | "large";
}

function Component({ active, size }: ComponentProps) {
  return (
    <div
      className={classNames(
        styles.button,
        active && styles.active,
        styles[size]
      )}
    />
  );
}
```
