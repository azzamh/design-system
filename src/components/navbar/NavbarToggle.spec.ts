import { render, fireEvent } from '@testing-library/vue'
import { delay } from 'nanodelay'
import Navbar from './Navbar.vue'
import NavbarToggle from './NavbarToggle.vue'
import IconPersona from '@privyid/persona-icon/vue/persona/20.vue'
import IconView from '@privyid/persona-icon/vue/view/20.vue'

it('should rendered properly without any props', () => {
  const screen = render({
    components: { NavbarToggle },
    template  : `
      <NavbarToggle />
    `,
  })

  const navbarToggle = screen.queryByTestId('navbar-toggle')

  expect(navbarToggle).toBeInTheDocument()
  expect(navbarToggle).toHaveClass('navbar__toggle')
})

it('Toggle menu collapse and expand when button was pressed', async () => {
  const screen = render({
    components: {
      NavbarToggle, IconPersona, IconView,
    },
    template: `
      <NavbarToggle>
        <template #default="{ expanded }">
          <IconPersona data-testid="toggle-close" v-if="expanded" />
          <IconView data-testid="toggle-open" v-else />
        </template>
      </NavbarToggle>
    `,
  })

  const navbarToggle = screen.queryByTestId('navbar-toggle')
  let close          = screen.queryByTestId('toggle-close')
  let open           = screen.queryByTestId('toggle-open')

  expect(navbarToggle).toBeInTheDocument()
  expect(open).toBeVisible()
  expect(close).not.toBeInTheDocument()

  await fireEvent.click(navbarToggle)
  await delay(0)

  close = screen.queryByTestId('toggle-close')
  open  = screen.queryByTestId('toggle-open')

  expect(close).toBeVisible()
  expect(open).not.toBeInTheDocument()
})

it('Show toggle button automatically based on breakpoint value of prop `toggleable`', () => {
  const screen = render({
    components: { Navbar, NavbarToggle },
    template  : `
      <Navbar toggleable="lg">
        <NavbarToggle />
      </Navbar>
    `,
  })

  const navbar       = screen.queryByTestId('navbar')
  const navbarToggle = screen.queryByTestId('navbar-toggle')

  expect(navbar).toBeInTheDocument()
  expect(navbarToggle).toHaveClass('navbar__toggle--lg')
})
