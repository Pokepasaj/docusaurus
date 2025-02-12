---
id: api-config-from
title: from
---
### from 

from is used for conversions, and every type has some way of converting a plane object into its own type, or if it's already of its own type, it will return it.

If its a config, then it wont do it.

If you already have a config and you pass it into `from`, it's just going to return the same thing.

It basically means you can use plain objects and functions anywhere throughout the code and it will automatically determine roughly what it should be.

:::tip FYI
when it`s looking for from it will prioritize a render function and it will use it first.
``` js
local k = import 'konn/main.libsonnet';

local a = {
    type: 'config',
};

local b = {
    render(ctx, props):: {
    type: 'config',
    },
};
local c = k.lib.config.from(b);


{
    a: a,
    b: b,
    c: c,
}
```