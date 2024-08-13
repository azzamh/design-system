---
title: Dropdown · Components
description: Base dropdown button, suit for action menus
---

<script setup>
  import Persona from '@privyid/persona-icon/vue/persona/20.vue'
  import pInput from "../input/Input.vue"
  import pDropdown from "./Dropdown.vue"
  import pDropdownItem from "./DropdownItem.vue"
  import pDropdownHeader from './DropdownHeader.vue'
  import pAccordionItem from '../accordion/AccordionItem.vue'
  import Banner from '../banner/Banner.vue'
  import pCheckbox from '../checkbox/Checkbox.vue'
  import pRadio from '../radio/Radio.vue'
  import pCaption from '../caption/Caption.vue'
  import pTruncate from '../truncate/Truncate.vue'
  import pText from '../text/Text.vue'
  import { ref } from "vue-demi"

  const show     = ref(false)
  const selected = ref('')
  const sample = ref(false)
</script>

# Dropdown

> Base dropdown button, suit for action menus

## Usage

### Simple Usage
<preview>
  <p-dropdown text="Click Here">
    <p-dropdown-item active>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown text="Click Here">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

### With Subtext
<preview>
  <p-dropdown text="Click Here">
    <p-dropdown-item>
      Item Text
      <p-caption>Item Subtext</p-caption>
    </p-dropdown-item>
    <p-dropdown-item>
      Item Text
      <p-caption>Item Subtext</p-caption>
    </p-dropdown-item>
    <p-dropdown-item>
      Item Text
      <p-caption>Item Subtext</p-caption>
    </p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown text="Click Here">
    <p-dropdown-item>
      Item Text
      <p-caption>Item Subtext</p-caption>
    </p-dropdown-item>
    <p-dropdown-item>
      Item Text
      <p-caption>Item Subtext</p-caption>
    </p-dropdown-item>
    <p-dropdown-item>
      Item Text
      <p-caption>Item Subtext</p-caption>
    </p-dropdown-item>
  </p-dropdown>
</template>
```

### With Disabled Item
<preview>
  <p-dropdown text="Click Here">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item :disabled="true">Item Text</p-dropdown-item>
    <p-dropdown-item :disabled="false">Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown text="Click Here">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item :disabled="true">Item Text</p-dropdown-item>
    <p-dropdown-item :disabled="false">Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

## Placement

You can change popup placement via `placement` prop. Valid options is:

- `top`
- `bottom`
- `right`
- `left`

<preview class="flex-col space-gap-3 md:flex-row">
  <p-dropdown text="Top" placement="top">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Bottom" placement="bottom">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Right" placement="right">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Left" placement="left">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown text="Top" placement="top">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Bottom" placement="bottom">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Right" placement="right">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Left" placement="left">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

### Placement Align

You can combine placement with suffix `*-start` and `*-end` to set popup position align

<Banner class="md:!hidden" :dismissable="false">Because limited screen width, maybe you can't notice the different.</Banner>

<preview class="flex-col space-gap-3 md:flex-row">
  <p-dropdown text="Bottom" placement="bottom">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Bottom Start" placement="bottom-start">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Bottom End" placement="bottom-end">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown text="Bottom" placement="bottom">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Bottom Start" placement="bottom-start">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
  <p-dropdown text="Bottom End" placement="bottom-end">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

## Button Customization

### Variant, Color and Size

Every props in [Button][button] like `variant`, `color`, `size`, `pill` and `icon`  also works in here.
Check out [Button][button] for more information.

<preview>
  <p-dropdown
    text="Button"
    variant="outline"
    color="secondary"
    size="lg"
    pill
    icon>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown
    text="Button"
    variant="outline"
    color="secondary"
    size="lg"
    pill>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

### Custom Button Content

You also can customize button content via slot `button-content`

<preview>
  <p-dropdown
    text="Button"
    icon>
    <template #button-content>
      <Persona />
    </template>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown
    icon>
    <template #button-content>
      <Persona />
    </template>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>

<script setup>
  import Persona from '@privyid/persona-icon/vue/persona/20.vue'
</script>
```

### Custom Activator

You can also completely change dropdown's activator button to something else via slot `activator`.

<preview>
  <p-dropdown
    text="Button"
    icon>
    <template #activator="{ open }">
      <p-input placeholder="This is Dropdown" @focus="open" />
    </template>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown
    text="Button"
    icon>
    <template #activator="{ open }">
      <p-input placeholder="This is Dropdown" @focus="open" />
    </template>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

## Disabled State

<preview>
  <p-dropdown
    text="Button"
    disabled>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown
    text="Button"
    disabled>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

## Dropdown Header
<preview>
  <p-dropdown
    text="Button">
    <p-dropdown-header>Title</p-dropdown-header>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown
    text="Button"
    no-caret>
    <p-dropdown-header>Title</p-dropdown-header>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

### With action

<preview>
  <p-dropdown
    text="Button">
    <p-dropdown-header>
      Title
      <template #action>
        <p-text variant="caption2" href="#">See details</p-text>
      </template>
    </p-dropdown-header>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown
    text="Button"
    no-caret>
    <p-dropdown-header>
      Title
      <template #action>
        <p-text variant="caption2" href="#">See details</p-text>
      </template>
    </p-dropdown-header>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```


## Hide Caret

Add props `no-caret` to hide caret icon

<preview>
  <p-dropdown
    text="Button"
    no-caret>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-dropdown
    text="Button"
    no-caret>
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

## Binding v-model

You can programmatically toggle dropdown using `v-model`

<preview class="flex-col space-y-2">
  <p-checkbox v-model="show">Show Dropdown</p-checkbox>
  <p-dropdown
    v-model="show"
    text="Button">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</preview>

```vue
<template>
  <p-checkbox v-model="show">Show Dropdown</p-checkbox>
  <p-dropdown
    v-model="show"
    text="Button">
    <p-dropdown-item>Item Text</p-dropdown-item>
    <p-dropdown-item>Item Text</p-dropdown-item>
  </p-dropdown>
</template>
```

## Variables
Dropdown use local CSS variables for enhanced real-time customization.

```sass
--p-dropdown-z-index: theme(zIndex.sticky);
--p-dropdown-size-lg: 30rem; /* 480px */
--p-dropdown-size-md: 20rem; /* 320px */
--p-dropdown-size-sm: 15rem; /* 240px */
--p-dropdown-max-height: theme(spacing.64);
--p-dropdown-size: auto;
```

## API

### Props `<p-dropdown>`

| Props          |              Type               |    Default     | Description                                                                                                                                                                                  |
|----------------|:-------------------------------:|:--------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `text`         |            `String`             |      `-`       | Dropdown's button text                                                                                                                                                                       |
| `variant`      |            `String`             |    `solid`     | Dropdown's button style variant, valid value is `solid`, `outline`, `ghost`, `link`                                                                                                          |
| `color`        |            `String`             |   `primary`    | Dropdown's button color variant, valid value is `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `gold`                                                                       |
| `size`         |            `String`             |      `md`      | Size of button, valid value is `sm`, `md`, `lg`                                                                                                                                              |
| `pill`         |            `Boolean`            |    `false`     | Enable pill mode                                                                                                                                                                             |
| `icon`         |            `Boolean`            |    `false`     | Enable icon mode                                                                                                                                                                             |
| `no-caret`     |            `Boolean`            |    `false`     | Hide caret icon                                                                                                                                                                              |
| `disabled`     |            `Boolean`            |    `false`     | Disable state                                                                                                                                                                                |
| `placement`    |            `String`             | `bottom-start` | Menu placement, valid value is <br/>`top`, `top-start`, `top-end`,<br/>`bottom`, `bottom-start`, `bottom-end`,<br/>`right`, `right-start`, `right-end`,<br/>`left`, `left-start`, `left-end` |
| `modelValue`   |            `Boolean`            |    `false`     | v-model value for menu visibilities                                                                                                                                                          |
| `divider`      |            `Boolean`            |      `-`       | Enable divider in dropdown-item                                                                                                                                                              |
| `menu-class`   | `String` \| `Array` \| `Object` |      `-`       | CSS class to add in the menu container                                                                                                                                                       |
| `button-class` | `String` \| `Array` \| `Object` |      `-`       | CSS class to add in the button dropdown                                                                                                                                                      |
| `menu-size`    |            `String`             |      `sm`      | Dropdown menu size, valid value is `sm`, `md`, `lg` and `xl`                                                                                                                                 |

### Slots `<p-dropdown>`

| Name             | Description                                           |
|------------------|-------------------------------------------------------|
| `default`        | Dropdown menu content                                 |
| `button-content` | Content to placed in Activator Button                 |
| `activator`      | Content to replace Activator Button                   |
| `prepend`        | Add addition content in beginning of Dropdown's menus |
| `append`         | Add addition content in end of Dropdown's menus       |

### Events `<p-dropdown>`

| Name   | Arguments | Description                      |
|--------|-----------|----------------------------------|
| `show` | -         | Event when dropdown popup shown  |
| `hide` | -         | Event when dropdown popup hidden |

### Props `<p-dropdown-item>`

| Props      |   Type    | Default | Description                                |
|------------|:---------:|:-------:|--------------------------------------------|
| `href`     | `String`  |   `-`   | Place url permalink in the `dropdown-item` |
| `disabled` | `Boolean` |  false  | Set disabled state in the `dropdown-item`  |

### Slots `<p-dropdown-header>`

| Name      | Description                                    |
|-----------|------------------------------------------------|
| `default` | Dropdown header content                        |
| `action`  | Content to place in the dropdown header action |

## See Also
- [Button][button]
- [Dropdown Subitem][dropdown-subitem]

[button]: /components/button/index
[dropdown-subitem]: /components/dropdown-subitem/index
