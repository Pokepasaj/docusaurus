---
id: api-feature-overrides
title: overrides
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

The `overrides` function is used to define custom properties that can supersede the original properties or extend them. This allows for greater flexibility in configuring features, enabling users to inject or modify configurations dynamically.
## Parameters
- **`props`** - The properties to override. This can either be an object containing key-value pairs of properties or a function that computes the overrides based on the current context (`props`).

## Return Value

`self`: The current feature instance with updated `overrides` applied.

### Usage Example