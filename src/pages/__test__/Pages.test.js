import { render } from '@testing-library/react';

test('hydrate will not update props until next render', () => {
  const initialInputElement = document.createElement('input')
  const container = document.createElement('div')
  container.appendChild(initialInputElement)
  document.body.appendChild(container)

  const name = 'Jam Tangan'
  initialInputElement.value = name

  const {rerender} = render(<input value={name} onChange={(e) => setName(e.target.value)} />, {
    container,
    hydrate: true,
  })

  expect(initialInputElement).toHaveValue(name)

  const category = 'Elektronik'
  rerender(<input value={category} onChange={(e) => setCategory(e.target.value)} />)
  expect(initialInputElement).toHaveValue(category)
})

