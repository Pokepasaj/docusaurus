---
id: api-manifest-get
title: get
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `get` function retrieves a specific configuration from the manifest by matching a given path and matcher. It allows querying configurations by their structure.

### Parameters
- **`path`** - (string): The path of the configuration to retrieve.
- **`matcher`** - (string | function): The value or function used to match the configuration.

### Return Value
Returns the configuration that matches the provided path and matcher.

## Usage Examples