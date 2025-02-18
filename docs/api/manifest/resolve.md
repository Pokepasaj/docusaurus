---
id: api-manifest-resolve
title: resolve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
The `resolve` function processes and resolves the individual configurations of the manifest. It evaluates the render function, applies filtering and mapping, and generates the final configurations that meet the specified conditions.

### Parameters
- **`ctx`** - (context) The context object for rendering.
- **`props`** - (object): The properties passed to the `resolve` function.


### Return Value
Returns an array of resolved and filtered configuration objects after applying the filter and map functions.

## Usage Examples