---
id: config
title: config
---

This module manages and transforms configuration objects.It provides functions to create, modify, and extract configurations while maintaining flexibility for dynamic adjustments.


• from → Creates a new configuration from an object or a renderable object
   If the source is already a configuration, it returns the original source.
   Uses a manifest render function to handle the source if it's renderable.
   Ensures that the result is a valid object; otherwise, it throws an error.

• fromYaml →
Creates a configuration from a YAML string.
Ensures the YAML document is a single configuration (not an array).

• fromJson →
Similar to fromYaml, but for JSON strings.
Converts the JSON into a configuration while ensuring it is a single document.

• new →
Creates a new configuration object.
Stores the configurations render function and properties.

• render →
Resolves properties and renders the configuration using the stored render function.

• extend →
Extends an existing configuration by applying a transformation function.
The function receives the current configuration and modifies it.

• override →
Overrides specific properties of a configuration.
Accepts either an object (new properties) or a function (to compute the new properties dynamically).

• get (path, defaultValue=null)→
Retrieves a value from the configuration using a dot-separated path.
Returns defaultValue if the path does not exist.

• is (kind, name=null)→

• Checks whether the configuration matches a given kind (e.g., "Deployment").
If name is provided, also checks if the resource has the specified name.

### Examples