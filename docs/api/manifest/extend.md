---
id: api-manifest-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `extend` function creates a new manifest by extending the current one with a new render function, props, filter, or map functions. It allows modifying the behavior of an existing manifest.

### Parameters
- **`render`** - (function) A new render function to replace or extend the original one.
- **`props`** - (object): The properties used for extending the manifest.
- **`filter`** - (function) A filter function applied to the manifest's configurations.
- **`map`** - (function): A map function applied to the manifest's configurations.

### Return Value
Returns a new manifest with the provided extensions applied.

## Usage Examples