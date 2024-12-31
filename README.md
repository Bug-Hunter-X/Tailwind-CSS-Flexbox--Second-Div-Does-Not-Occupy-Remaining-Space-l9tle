# Tailwind CSS Flexbox Bug

This repository demonstrates a common issue encountered when using Tailwind CSS's flexbox utility classes. The issue arises when attempting to distribute space evenly between flex items without explicitly setting the `flex-grow` property.

## Bug Description

The provided code snippet creates a flex container with two divs.  Intuitively, one might expect the second div to automatically fill the remaining space. However, due to the default `flex-grow: 0` setting, it does not expand.

## Solution

To fix the problem, set `flex-grow` to `1` (or other value as needed) on the second div to enable it to utilize available space in the flex container.

## How to Reproduce

1. Clone this repository.
2. Open `bug.html` in your browser. Observe the layout of the two divs.
3. Open `bugSolution.html` in your browser. Observe how adding `flex-grow` changes the layout.