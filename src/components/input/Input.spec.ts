import pInput from './Input.vue'
import pInputGroup from '../input-group/InputGroup.vue'
import { fireEvent, render } from '@testing-library/vue'
import { ref } from 'vue-demi'

it('should render properly without any prop', () => {
  const screen = render({
    components: { pInput },
    template  : '<p-input />',
  })

  const input = screen.queryByTestId('input')

  expect(input).toBeInTheDocument()
})

it('should able to change size using prop `size`', () => {
  const screen = render({
    components: { pInput },
    template  : '<p-input size="sm" />',
  })

  const input = screen.queryByTestId('input')

  expect(input).toHaveClass('input--sm')
  expect(input).not.toHaveClass('input--md')
})

it('should has disabled state if prop `disabled` set to true', () => {
  const screen = render({
    components: { pInput },
    template  : '<p-input disabled />',
  })

  const input = screen.queryByTestId('input')

  expect(input).toHaveClass('input--disabled')
  expect(input).toBeDisabled()
})

it('should has readonly state if prop `readonly` set to true', () => {
  const screen = render({
    components: { pInput },
    template  : '<p-input readonly />',
  })

  const input = screen.queryByTestId('input')

  expect(input).toHaveClass('input--readonly')
  expect(input).toHaveAttribute('readonly')
})

it('should has error state if prop `error` set to true', () => {
  const screen = render({
    components: { pInput },
    template  : '<p-input error />',
  })

  const input = screen.queryByTestId('input')

  expect(input).toHaveClass('input--error', 'state--error')
})

it('should has show clear button if prop `clearable` was provided', async () => {
  const screen = render({
    components: { pInput },
    template  : '<p-input clearable />',
  })

  const input    = screen.queryByTestId('input')
  const clearBtn = screen.queryByTestId('input-clear')

  expect(input).toHaveClass('input--clearable')
  expect(clearBtn).toBeInTheDocument()
  expect(clearBtn).not.toBeVisible()

  await fireEvent.update(input, 'Hello')

  expect(clearBtn).toBeVisible()
})

it('should able binding value using v-model', async () => {
  const model  = ref('')
  const screen = render({
    components: { pInput },
    template  : '<p-input v-model="model" />',
    setup () {
      return { model }
    },
  })

  const input = screen.queryByTestId('input')

  await fireEvent.update(input, 'Hello World')

  expect(model.value).toBe('Hello World')
})

it('should clear value in v-model if clear button clicked', async () => {
  const model  = ref('Hello World')
  const screen = render({
    components: { pInput },
    template  : '<p-input v-model="model" clearable />',
    setup () {
      return { model }
    },
  })

  const clearBtn = screen.queryByTestId('input-clear')

  await fireEvent.click(clearBtn)

  expect(model.value).toBe('')
})

it('should automatically add size of input via `size` props of input-group', () => {
  const screen = render({
    components: { pInputGroup, pInput },
    template  : `
      <p-input-group size="lg">
        <p-input />
      </p-input-group>
    `,
  })

  const inputGroup = screen.queryByTestId('input-group')
  const input      = screen.queryByTestId('input')

  expect(inputGroup).toBeInTheDocument()
  expect(input).toHaveClass('input--lg')
})