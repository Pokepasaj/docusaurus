---
id: api-manifest-from
title: from
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `from` function creates a new manifest from an object, array, or an existing config/renderable object. If the source is already a manifest, it returns the original source.

### Parameters
- **`source`** - (object | array | string | function): The source to create the manifest from.
- **`props`** - (object): The properties to apply to the manifest.
- **`filter`** - (function): The filter function applied to the generated configurations.
- **`maps`** - (function): The map function applied to the generated configurations.

### Return Value
Returns a new manifest object.

## Usage Examples