import { render, screen } from '@testing-library/react';
import DescriptionProduct from '../DescriptionProduct';
import Navbar from '../Navbar';

// it('renders learn react link', async () => {
//   render(<Jual name="Error" />);
//   const divElement = screen.getByText(/Error/i);
//   expect(divElement).toBeInTheDocument();
// });


// Product Name in Daftar Jual (Jual, minat, terjual), History and Product
test('hydrate will not update props until next render', () => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const name = 'Jam Tangan'

  const {rerender} = render(<div>{name}</div>, {
    container,
    hydrate: true,
  })
})

// DescriptionProduct
test('renders learn react link', async () => {
  render(<DescriptionProduct description="Jam Tangan Rolex" />);
  const paragraphElement = screen.getByText(/Jam Tangan Rolex/i);
  expect(paragraphElement).toBeInTheDocument();
});

// Dropdown
test('hydrate will not update props until next render', () => {
  const initialInputElement = document.createElement('input')
  const container = document.createElement('div')
  container.appendChild(initialInputElement)
  document.body.appendChild(container)

  const name = "Surabaya" // city

  function displayValue(){
    initialInputElement.value = name
  }

  const {rerender} = render(<input value={displayValue()}
  onChange={e => {
    setQuery(e.target.value)
    onChange(null)
  }} />, {
    container,
    hydrate: true,
  })

  expect(initialInputElement).toHaveValue(name)
})


// Navbar
test('renders learn react link', () => {
  render(<Navbar userInfo='seller' />);
  const headingElement = screen.getByText(/Seller/i);
  expect(headingElement).toBeInTheDocument();
});


// Notif
test('hydrate will not update props until next render', () => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const createdAt = "24 Juli 2022" // city

  function showFormattedDate(){
    createdAt
  }

  const {rerender} = render(<span>{showFormattedDate(createdAt)}</span>, {
    container,
    hydrate: true,
  })

})

// Penjual
test('hydrate will not update props until next render', () => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const namePenjual = 'Seller'

  const {rerender} = render(<span>{namePenjual}</span>, {
    container,
    hydrate: true,
  })
})