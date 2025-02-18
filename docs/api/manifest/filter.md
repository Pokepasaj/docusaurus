---
id: api-manifest-filter
title: filter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `filter` function applies a custom filtering function to the manifest’s configurations. It returns a new manifest with the filter applied.

### Parameters
- **`ctx`** - (context) The context object, created using the provided props and config.
- **`props`** - (object): The properties used in the render process.


### Return Value
Returns the rendered configurations by applying the `lib.renderConfigs` function to the resolved configs.

## Usage Examples