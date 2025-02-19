---
id: api-manifest-fromYaml
title: fromYaml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `fromYaml` function creates a manifest from a YAML string or array of YAML strings. It parses the YAML and generates configurations based on it.

### Parameters
- **`yaml`** - (string | array) The YAML source to create the manifest from.
- **`props`** - (object) The properties to apply to the manifest.
- **`filter`** - (function) The filter function applied to the generated configurations.
- **`map`** - (function) The map function applied to the generated configurations.
### Return Value
Returns a new manifest object created from the YAML source.

## Usage Examples