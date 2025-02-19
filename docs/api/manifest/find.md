---
id: api-manifest-find
title: find
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `find` function searches for configurations in the manifest that match the provided filter function. It returns the first matching configuration.

### Parameters
- **`fn`** -  (function):  A function to filter the configurations. It takes `ctx`, `config`, and `props` as arguments and should return a boolean indicating whether the configuration matches.

### Return Value
Returns the first configuration that matches the filter criteria.

## Usage Examples