```javascript
<div class="flex">
  <div class="bg-red-500 p-4 w-1/2"></div>
  <div class="bg-blue-500 p-4 flex-grow"></div>
</div>
```
By adding the `flex-grow` class to the second div, we ensure that it expands to fill the remaining space in the flex container.  This solves the issue and produces the expected layout.