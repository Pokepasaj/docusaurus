---
id: api-context-profile
title: profile
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `profile`

## Table of Contents
- [`profile`](#profile)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)

## Overview
Returns the current profile name from the context's metadata.

## Parameters
None

## Return Value
Returns the profile name from the context's metadata, or `null` if no profile is set.


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local ctx = import '../../vendor/konn/context.libsonnet';

    local initialCtx = ctx.new(
      manifest=[
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
      ],
      metadata={ profile: 'dev' }
    );

    // Get the profile name from the context
    local profileName = initialCtx.profile();

    {
      profileName: profileName,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    profileName: dev

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "profileName": "dev"
    }
    ```  
    </TabItem>
</Tabs>