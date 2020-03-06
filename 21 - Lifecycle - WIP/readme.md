# Lifecycle

## OnInit

- Perform complex initializations shortly after construction.
- Set up the component after Angular sets the input properties.

## OnDestroy

- Logic that must run before Angular destroys the directive.

## OnChanges

- Called whenever Angular detects changes to input properties of the component (or directive)

## DoCheck

- Detect and act upon changes that Angular doesn't catch on its own.

_**Costly**: This hook is called with enormous frequency — after every change detection cycle no matter where the change occurred._

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2020 Rick Beerendonk
