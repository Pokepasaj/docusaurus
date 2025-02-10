---
id: extensions
title: extensions
---

 This module provides extensions that modify configurations dynamically. Extensions allow rendering, filtering, applying transformations, and overriding properties on configuration objects.
   
   Encapsulates reusable transformations applied to configurations.
• new → 
Creates a new extension with:
• render → a function that modifies the target config.
• props → default properties.
• selector → determines whether the extension should be applied.
• extends → an existing configuration or manifest to extend.

• render → 
Generates a preview of the extension based on extends and props.
Determines whether extends is:
Resolvable → applies extensions and renders configs.
A config object → renders it with modifications.
A plain object → modifies it directly.

• selector → 
Tests a configuration to see if the extension should be applied.

• apply → 
Applies the extension to a given configuration if selector returns true.
Uses the render function to modify the target.

• extend → 
Creates a new extension based on an existing one.
Applies the original render function before the new transformation.

• overrides → 
Replaces properties dynamically at render time.
Accepts: 
An object → directly replaces properties.
A function → computes overrides based on existing props.


• configure → 
Alias of override, used for configuring the extension.
