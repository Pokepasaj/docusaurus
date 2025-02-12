---
id: api-config-extend
title: extend
---

Lets say you made a reasonable config and you just want to use it as a template.
In this example you can get `c` and extend it 

<div style={{ display: 'flex', gap: '20px' }}>
  <div style={{ flex: 1 }}>
    <h3>Jsonnet</h3>
```js
local k = import 'konn/main.libsonnet';

local a = {
  type: 'config',
};

local b = {
  render(ctx, props):: {
    type: 'config',
  },
};

local c = k.config(function(ctx, props) {
  type: 'config',
  props: props,
  metadata: {
    name: 'bananas',
  },
}, {
  bar: 'foo',
});

local e = c.extend(function(ctx, config, props) config {
  type: 'config2',
  props: props,
  
});

{
  a: a,
  b: b,
  c: c.render(props={
    foo: 'bar',
  }),
  e: e
}
```

 </div>
  
  <div style={{ flex: 1 }}>
    <h3>YAML Output</h3>
    ```yaml
    a:
      type: config
    b: {}
    c:
      metadata:
        name: bananas
      props:
        bar: foo
        foo: bar
      type: config
    e:
      body:
        metadata:
          name: bananas
        props:
          bar: foo
        type: config2
    ```
  </div>
</div>