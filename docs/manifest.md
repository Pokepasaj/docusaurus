---
id: manifest
title: manifest
---
Responsible for creating, processing, and transforming manifests.

Handles Kubernetes manifests efficiently.
Supports Jsonnet-based templating.
Allows dynamic filtering & transformation.
Makes querying configs easy (get(), kget()).


## Creating a Manifest
• from(source, props={})
Converts an input (source) into a manifest.
Accepts:
A renderable object (calls .render()).
An object (wraps it in an array).
An array (returns it directly).
A manifest (returns as-is).

Use case: Dynamically wrapping objects into manifests.

• fromYaml(yaml, props={}, filter, map, single, template)
Parses YAML strings into a manifest.

Use case: Converting Kubernetes manifests from YAML to Jsonnet.

• fromJson(json, props={}, filter, map)
Similar to fromYaml(), but for JSON.


## Rendering and Resolving Manifests

• new(render, props, filter, map)
Creates a new manifest instance which takes data from the brackets above

• render
Calls .resolve() and processes all configs.
Uses lib.renderConfigs() to generate final output.

• resolve
Runs the .render() function.
Converts each object in the manifest into a config object (config.new()).
Applies filtering (filter()) and transformation (map()).
Ensures output is always an array.
Use case: Processing and preparing Kubernetes manifests.


## Extending and Modifying Manifests
• extend(render, props, filter, map)
Returns a new manifest with additional transformations.
Calls the provided render() function on existing manifests.
Use case: Applying global transformations.

• override
Overrides properties.
Supports both objects and functions as overrides.
Alias: configure().

• filter
Applies a filter function to remove unwanted configs.

• map
Transforms each config using a function.

## Querying Configs
• find(fn)
Returns the first config that matches the function.

• get(path, matcher)
Retrieves a config by a specific path.

• kget(kind, name='')
Retrieves a config by kind and metadata.name.
Use case: Finding a specific Kubernetes resource in the manifest.

### Examples
