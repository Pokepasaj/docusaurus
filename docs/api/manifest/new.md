---
id: api-manifest-new
title: new
---

## Overview
The `new` function creates a new manifest object. It initializes the manifest with a provided render function, props, filter, and map functions. This function sets up the context and resolves any defaults or properties before rendering the manifest.
### Parameters
- **`render`** - (function) A render function that defines how the manifest is generated. It accepts ctx and props as arguments and should return an array of config objects.
- **`props`** - (object) The properties used in the rendering process. This allows customization and overrides for the generated manifest.
- **`filter`** - (function) A function that filters the generated configurations. It receives ctx, config, and props as arguments and should return a boolean value.
- **`map`** - (function) A function that maps over the generated configurations, allowing modifications to each config. Receives ctx, config, and props as arguments. 


:::note
- render default to an empty array
- filter default function returns true (no filtering).
- map default function returns the config unchanged.
:::
### Return Value
Returns a new manifest object with the following structure:

- **`body`** - The result of the render function, containing the generated configurations.
- **`configs`** - The resolved configurations from the resolve function.
- **`props`** - The properties passed to the function.
- **`args`** - Contains the render function, props, filter, and map functions for further customization.
## Usage Examples