import { render } from '@testing-library/vue'
import pListGroup from './ListGroup.vue'

it('should render properly without any props', () => {
  const screen = render({
    components: { pListGroup },
    template  : '<p-list-group />',
  })

  const listGroup = screen.getByTestId('list-group')

  expect(listGroup).toBeInTheDocument()
  expect(listGroup).toHaveClass('list-group')
})

it('should be able to make horizontal list-group via `horizontal` props', () => {
  const screen = render({
    components: { pListGroup },
    template  : '<p-list-group horizontal />',
  })

  const listGroup = screen.getByTestId('list-group')

  expect(listGroup).toBeInTheDocument()
  expect(listGroup).toHaveClass('list-group', 'list-group--horizontal')
})

it('should be able to make list group without borderdered-container via `flush` props', () => {
  const screen = render({
    components: { pListGroup },
    template  : '<p-list-group flush />',
  })

  const listGroup = screen.getByTestId('list-group')

  expect(listGroup).toBeInTheDocument()
  expect(listGroup).toHaveClass('list-group', 'list-group--flush')
})

it('should be able to make list group without border via `borderless` props', () => {
  const screen = render({
    components: { pListGroup },
    template  : '<p-list-group borderless />',
  })

  const listGroup = screen.getByTestId('list-group')

  expect(listGroup).toBeInTheDocument()
  expect(listGroup).toHaveClass('list-group', 'list-group--borderless')
})

it('should be able to make list group item rounded via `rounded` props', () => {
  const screen = render({
    components: { pListGroup },
    template  : '<p-list-group rounded />',
  })

  const listGroup = screen.getByTestId('list-group')

  expect(listGroup).toBeInTheDocument()
  expect(listGroup).toHaveClass('list-group', 'list-group--rounded')
})
