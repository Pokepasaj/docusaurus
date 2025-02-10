---
id: util
title: util
---

This module provides utility functions for conditional logic, templating, and parsing YAML/JSON documents. It is designed to enhance flexibility and cleanliness when managing configurations.

onlyIf & onlyIfArray → Enable conditional configuration application.
template → Formats strings while automatically removing null values.
yaml & json → Parse structured configuration files with templating support.

## Conditional Utility Functions
• onlyIf(test, patch, default={}) → Conditionally applies a patch if test evaluates to true, otherwise returns default (an empty object by default).

• onlyIfArray(test, patch, default=[]) → Similar to onlyIf, but defaults to an empty array instead of an object. Useful when working with lists.
   
   
• template(str, props={}) →
Processes a string with placeholders (%(key)s) and replaces them with values from props.
If a placeholder resolves to null, removes the corresponding line to maintain clean formatting.


## YAML & JSON Parsing Functions
• yaml(str, props={}, single=true, template=true)
Parses a YAML string into a Jsonnet object.
Supports templating before parsing.
Can return a single document or an array of documents.

• json(str, props={}, single=true, template=true)
Works like yaml, but for JSON strings.
Parses a JSON string with optional templating.

### Examples
