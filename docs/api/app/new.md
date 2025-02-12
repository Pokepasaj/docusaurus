---
id: api-app-new
title: new
---
This module handles application configurations, allowing for the creation and rendering of configurations through multiple stages.

`new` module creates a new manifest


```

local config = import '../../config.libsonnet';

local config = import '../../config.libsonnet';

local testConfig = config.new(function(ctx, props) {
  kind: 'config',
  metadata: {
    name: props.name,
  },
}, {
  name: 'test',
}).override(
  {
    name: 'not-test',
  }
);

{
  actual: testConfig.render(),
  expect: {
    kind: 'config',
    metadata: {
      name: 'not-test',
    },
  },
}
```

