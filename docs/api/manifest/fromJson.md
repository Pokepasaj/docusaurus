---
id: api-manifest-fromJson
title: fromJson
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `fromJson` function creates a manifest from a JSON string or array of JSON strings. It parses the JSON and generates configurations based on it.

### Parameters
- **`json`** - (string | array) The JSON source to create the manifest from.
- **`props`** - (object) The properties to apply to the manifest.
- **`filter`** - (function) The filter function applied to the generated configurations.
- **`map`** - (function) The map function applied to the generated configurations.

### Return Value
Returns a new manifest object created from the JSON source.

## Usage Examples