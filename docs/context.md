---
id: context
title: context
---
Provides utilities for creating and managing contexts used in rendering configurations. A context stores properties, metadata, and manifests, making it easier to filter, retrieve, and extend configuration data.


• new → creates a new context with props, manifest, metadata

• extend → 
extends the current context while replacing props and manifest
with new values
Mergind metadata instead of replacing it trough mergePatch

• filter →
filter the manifests using the function func
returns only the configurations that satisfy the function

• find(test)→
Filters the manifest then returns the first matching result.

• get(path, test) → Retrieves a configuration where the value at path matches test.
Uses lib.getPath to traverse the configuration.

• kget (kind, name='')→
Retrieves a specific kubernetes resource by its kind and name
Example: >kget("Deployment", “my-app”) finds the “my-app” Deployment

• has(path, test) →
Checks if the configuration in the manifests has a value at path that matches test

• khas(kind, name=null) →
Checks if a kubernetes resource of the give kind exists in the manifest
Makes sure that name matches the provided name

• profile →
Returns the current profile name from the metadata

### Examples