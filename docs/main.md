---
id: main
title: main
---

This module serves as the entry point for managing and generating configurations. It integrates various components—such as applications, features, manifests, configurations, and extensions—while exposing key utility functions for parsing, templating, and conditional logic.

## Utilizes
• app → Manages application configurations.

• config → Handles configuration creation and transformation.

• context → Provides contextual information (not explicitly used here).

• extension → Defines and applies extensions to configurations.

• feature → Manages feature-based configurations.

• lib → Provides helper functions for validation and type checking.

• manifest → Handles manifest creation and transformation.

• util → Includes general utility functions like templating and YAML parsing.


## Exposed Functions

Utility Functions (from util.libsonnet)

• yaml → Parses YAML strings into Jsonnet objects.

• template → Applies templating to strings while removing null values.

• onlyIf → Conditionally applies a patch based on a test condition.

## Library Functions (from lib.libsonnet)

• isConfig → Checks if an object is a valid configuration.

• isManifest → Checks if an object is a valid manifest.

• isResolvable → Determines if an object can be resolved dynamically.

• isRenderable → Determines if an object supports rendering.

## Manifest Helpers (from manifest.libsonnet)

• fromYaml → Converts a YAML string into a manifest object.

• fromJson → Converts a JSON string into a manifest object.


## Configuration Constructors
These functions instantiate different configuration types, providing a structured way to define configurations, features, and extensions.

• app(...) → Creates an application manifest with features, properties, profiles, and extensions.

• feature(...) → Defines a feature, including configuration, properties, and extensions.

• manifest(...) → Creates a manifest with a render function, properties, and transformation logic (filter & map).

• config(...) → Creates a standalone configuration with rendering logic.

• extension(...) → Defines an extension that applies transformations to configurations.
