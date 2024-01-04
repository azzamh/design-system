import { render, fireEvent } from '@testing-library/vue'
import { vi } from 'vitest'
import Toast from './Toast.vue'
import IconSuccess from '@privyid/persona-icon/vue/checkmark/24.vue'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.resetAllMocks()
})

it('should render text properly', () => {
  const screen = render({
    components: { Toast },
    template  : `
      <Toast text="this is text body" />
    `,
  })

  const toast = screen.queryByTestId('toast')
  const text  = screen.queryByText('this is text body')

  expect(toast).toBeInTheDocument()
  expect(toast).toHaveClass('toast')
  expect(text).toBeInTheDocument()
})

// it('should have class "success" if type prop set to "success"', () => {
//   const screen = render({
//     components: { Toast },
//     template  : `
//       <Toast type="success" title="This is title" text="this is text body" />
//     `,
//   })

//   const toast = screen.queryByTestId('toast')

//   expect(toast).toBeInTheDocument()
//   expect(toast).toHaveClass('toast', 'toast--success', 'toast--simple')
//   expect(toast).not.toHaveClass('toast--info')
// })

// it('should have class "filled" if variant prop set to "filled"', () => {
//   const screen = render({
//     components: { Toast },
//     template  : `
//       <Toast text="this is text body" />
//     `,
//   })

//   const toast = screen.queryByTestId('toast')

//   expect(toast).toBeInTheDocument()
//   expect(toast).toHaveClass('toast', 'toast--info', 'toast--filled')
//   expect(toast).not.toHaveClass('toast--simple')
// })

it('should dismiss automatically if toast out of duration', () => {
  const spy    = vi.fn()
  const screen = render({
    components: { Toast },
    template  : `
      <Toast
        :duration="100"
        text="this is text body"
        @dismissed="onDismissed" />
    `,
    methods: { onDismissed: spy },
  })

  const toast = screen.queryByTestId('toast')

  expect(toast).toBeInTheDocument()
  expect(spy).not.toBeCalled()

  vi.advanceTimersByTime(200)

  expect(spy).toBeCalled()
})

it('should dismiss if close button clicked', async () => {
  const spy    = vi.fn()
  const screen = render({
    components: { Toast },
    template  : `
      <Toast
        text="this is text body"
        @dismissed="onDismissed" />
    `,
    methods: { onDismissed: spy },
  })

  const toast = screen.queryByTestId('toast')
  const close = screen.queryByTestId('toast-dismiss')

  expect(toast).toBeInTheDocument()
  expect(close).toBeInTheDocument()
  expect(spy).not.toBeCalled()

  await fireEvent.click(close)

  expect(spy).toBeCalled()
})

// it('should render title and text properly', () => {
//   const screen = render({
//     components: { Toast },
//     template  : `
//       <Toast text="Toast text" />
//     `,
//   })

//   const toast = screen.queryByTestId('toast')
//   const text  = screen.queryByTestId('toast-text')

//   expect(toast).toBeInTheDocument()
//   expect(text).toBeInTheDocument()
// })

it('should be able to custom icon color via `iconColor` props', () => {
  const screen = render({
    components: { Toast, IconSuccess },
    template  : `
      <Toast text="Toast text" iconColor="success">
        <template #icon>
          <IconSuccess />
        </template>
      </Toast>
    `,
  })

  const toast = screen.queryByTestId('toast')
  const text  = screen.queryByText('Toast text')
  const icon  = screen.queryByTestId('toast-icon')

  expect(toast).toBeInTheDocument()
  expect(text).toBeInTheDocument()
  expect(icon).toHaveClass('toast__icon--success')
})
