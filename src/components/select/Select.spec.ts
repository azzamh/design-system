import { onStartTyping, triggerTyping } from './__mocks__/on-start-typing'
import { fireEvent, render } from '@testing-library/vue'
import { vi } from 'vitest'
import { ref, nextTick } from 'vue-demi'
import Select from './Select.vue'
import type * as VueUse from '@vueuse/core'
import defineAsyncAdapter from './adapter/async-adapter'
import { delay } from 'nanodelay'

vi.mock('@vueuse/core', async () => {
  const core = await vi.importActual('@vueuse/core')

  return {
    ...core as typeof VueUse,
    onStartTyping,
  }
})

afterEach(() => {
  vi.restoreAllMocks()
})

it('should render properly without any prop', () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select />
    `,
  })

  const select = screen.getByTestId('select')

  expect(select).toBeInTheDocument()
  expect(select).toHaveClass('select')
})

it('should open if input is focused', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select />
    `,
  })

  const select = screen.getByTestId('select')
  const input  = screen.getByTestId('select-search')

  expect(select).toBeInTheDocument()
  expect(select).toHaveClass('select')
  expect(select).not.toHaveClass('select--open')

  input.focus()
  await nextTick()

  expect(select).toHaveClass('select--open')
})

it('should be able to set input placeholder with prop `placeholder`', () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select placeholder="CobaLagi" />
    `,
  })

  const input = screen.getByTestId('select-search')

  expect(input).toHaveAttribute('placeholder', 'CobaLagi')
})

it('should be able to change empty text via `empty-text` prop', () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select empty-text="kosong" />
    `,
  })

  const emptyText = screen.queryByText('kosong')

  expect(emptyText).toBeInTheDocument()
})

it('should be able to change loading text via `loading-text` prop', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select
        :adapter="adapter"
        loading-text="Menunggu..." />
    `,
    setup () {
      const adapter = defineAsyncAdapter(async () => {
        await delay(100)

        return []
      })

      return { adapter }
    },
  })

  const select = screen.queryByTestId('select')

  await fireEvent.click(select)

  const loadingText = screen.queryByText('Menunggu...')

  expect(loadingText).toBeInTheDocument()
})

it('should have style readonly if props disabled is provided', () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select disabled />
    `,
  })

  const select = screen.queryByTestId('select')

  expect(select).toHaveClass('select', 'select--disabled')
})

it('should have not able to open if select is disabled', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select disabled />
    `,
  })

  const select = screen.queryByTestId('select')
  const input  = screen.queryByTestId('select-search')

  input.focus()
  await nextTick()

  expect(select).toHaveClass('select--disabled')
  expect(select).not.toHaveClass('select--open')
})

it('should have not able to open if select is readonly', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select readonly />
    `,
  })

  const select = screen.queryByTestId('select')
  const input  = screen.queryByTestId('select-search')

  input.focus()
  await nextTick()

  expect(select).toHaveClass('select--readonly')
  expect(select).not.toHaveClass('select--open')
})

it('should modify state in v-model', async () => {
  const model  = ref()
  const screen = render({
    components: { Select },
    template  : `
      <Select
        v-model="model"
        :options="['apple', 'grape', 'orange']"
      />
    `,
    setup () {
      return { model }
    },
  })

  const input = screen.queryByTestId('select-search')

  input.focus()
  await nextTick()

  const items = screen.queryAllByTestId('select-item')

  await fireEvent.click(items.at(1))

  expect(model.value).toBe('grape')
})

it('should modify state in v-model:selected', async () => {
  const model  = ref()
  const screen = render({
    components: { Select },
    template  : `
      <Select
        v-model:selected="model"
        :options="['apple', 'grape', 'orange']"
      />
    `,
    setup () {
      return { model }
    },
  })

  const input = screen.queryByTestId('select-search')

  input.focus()
  await nextTick()

  const items = screen.queryAllByTestId('select-item')

  await fireEvent.click(items.at(1))

  expect(model.value).toStrictEqual({ text: 'grape', value: 'grape' })
})

it('should trigger event `user-input` when real user selecting the item', async () => {
  const spy    = vi.fn()
  const screen = render({
    components: { Select },
    template  : `
      <Select
        @user-input="onInput"
        :options="['apple', 'grape', 'orange']"
      />
    `,
    setup () {
      return { onInput: spy }
    },
  })

  const input = screen.queryByTestId('select-search')

  input.focus()
  await nextTick()

  const items = screen.queryAllByTestId('select-item')

  await fireEvent.click(items.at(1))

  expect(spy).toBeCalled()
})

it('should re-focus to search input if user start typing while focus on items', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select
        :options="['apple', 'grape', 'orange']"
      />
    `,
  })

  const input = screen.queryByTestId('select-search')
  const items = screen.queryAllByTestId('select-item')

  input.focus()
  items.at(1).focus()

  expect(items.at(1)).toHaveFocus()

  triggerTyping()
  await nextTick()

  expect(input).toHaveFocus()
})

it('should have style error if `error` prop was provided', () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select error />
    `,
  })

  const select = screen.queryByTestId('select')

  expect(select).toHaveClass('select--error', 'state--error')
})

it('should able to add section label via `section-label` prop', () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select :options="['apple', 'grape', 'orange']" section-label="title" />
    `,
  })

  const label = screen.queryByTestId('select-label')

  expect(label).toBeInTheDocument()
  expect(label).toHaveTextContent('title')
})

it('should be toggle dropdown if caret icon is clicked', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select />
    `,
  })

  const select = screen.getByTestId('select')

  expect(select).toBeInTheDocument()
  expect(select).not.toHaveClass('select--open')

  const caretIcon = screen.queryByTestId('select-caret-icon')

  await fireEvent.click(caretIcon)
  await nextTick()

  expect(select).toHaveClass('select--open')

  await fireEvent.click(caretIcon)
  await nextTick()

  expect(select).not.toHaveClass('select--open')
})

it('should be toggle dropdown via `caret` slot-scope function', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select>
        <template #caret="{ toggle }">
          <div @click="toggle">Toggle</div>
        </template>
      </Select>
    `,
  })

  const select = screen.getByTestId('select')

  expect(select).toBeInTheDocument()
  expect(select).not.toHaveClass('select--open')

  const toggle = screen.queryByText('Toggle')

  await fireEvent.click(toggle)
  await nextTick()

  expect(select).toHaveClass('select--open')

  await fireEvent.click(toggle)
  await nextTick()

  expect(select).not.toHaveClass('select--open')
})

it('should hide caret icon if props `no-caret` is provided', () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select no-caret />
    `,
  })

  const caret = screen.queryByTestId('select-caret-icon')

  expect(caret).not.toBeInTheDocument()
})

it('should have a clear button when `clearable` props is provided', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select clearable />
    `,
  })
  const select = screen.getByTestId('select')
  expect(select).toBeInTheDocument()

  await fireEvent.click(select)

  const clearButton = screen.queryByTestId('input-clear')
  expect(clearButton).toBeInTheDocument()
})

it('should have not able to open if `caret` icon is clicked and select is disabled', async () => {
  const screen = render({
    components: { Select },
    template  : `
      <Select disabled />
    `,
  })

  const select = screen.queryByTestId('select')

  expect(select).toBeInTheDocument()
  expect(select).not.toHaveClass('select--open')

  const caretIcon = screen.queryByTestId('select-caret-icon')

  await fireEvent.click(caretIcon)
  await nextTick()

  expect(select).toHaveClass('select--disabled')
  expect(select).not.toHaveClass('select--open')
})

it('should have clear button if prop `clearable` was provided', async () => {
  const model  = ref()
  const screen = render({
    components: { Select },
    template  : `
      <Select
        v-model:selected="model"
        :options="['apple', 'grape', 'orange']"
        clearable
      />
    `,
    setup () {
      return { model }
    },
  })

  const input = screen.queryByTestId('select-search')

  input.focus()
  await nextTick()

  const items = screen.queryAllByTestId('select-item')

  await fireEvent.click(items.at(1))

  expect(model.value).toStrictEqual({ text: 'grape', value: 'grape' })

  const clear = screen.queryByTestId('input-clear')

  await fireEvent.click(clear)

  expect(model.value).toBeUndefined()
})

it('should clear search keyword if click clear button when select was opened', async () => {
  const model  = ref()
  const screen = render({
    components: { Select },
    template  : `
      <Select
        v-model:selected="model"
        :options="['apple', 'grape', 'orange']"
        clearable
      />
    `,
    setup () {
      return { model }
    },
  })

  const input = screen.queryByTestId('select-search')

  input.focus()
  await nextTick()

  await fireEvent.update(input, 'Hello World')

  expect(input).toHaveValue('Hello World')

  const clear = screen.queryByTestId('input-clear')

  await fireEvent.click(clear)

  expect(input).toHaveValue('')
})
