import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { mockHobbies, mockUsers } from 'src/api/mock/helpers/mockData'
import { AppState } from 'src/store/createStore'
import { HobbyWidget } from '.'
import { TestWrapper } from '../../test/TestWrapper'

const mockState: AppState = {
  hobbies: mockHobbies,
  users: {
    users: mockUsers,
    activeUserUuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  },
}

const setup = () => {
  const utils = render(
    <TestWrapper state={mockState}>
      <HobbyWidget />
    </TestWrapper>,
  )
  return { ...utils }
}
describe('HobbyWidget', () => {
  it('is visible to the user', async () => {
    const { queryByTestId } = setup()
    await waitFor(() => screen.queryByTestId('hobby-widget'))
    expect(queryByTestId('hobby-widget')).toBeVisible()
  })
  it('is populated with initial user data', async () => {
    const { queryByTestId } = setup()
    await waitFor(() => screen.queryByTestId('user-list'))
    expect(queryByTestId('user-list')).toBeVisible()
    expect(queryByTestId('user-list')).toHaveTextContent('Piotr')
    expect(queryByTestId('user-list')).toHaveTextContent('Harry')
    expect(queryByTestId('user-list')).toHaveTextContent('Mariusz')
    expect(queryByTestId('user-list')).toHaveTextContent('Kamil')
    expect(queryByTestId('user-list')).not.toHaveTextContent('Test')
    expect(queryByTestId('user-list').childElementCount).toBe(4)
  })
  it('allows to add new user', async () => {
    // initial setup with 4 users
    const { queryByTestId, queryByText } = setup()
    await waitFor(() => screen.queryByTestId('user-list'))
    expect(queryByTestId('user-list')).toBeVisible()
    await waitFor(() => screen.queryByTestId('button-add-user'))
    expect(queryByTestId('button-add-user')).toBeVisible()
    expect(queryByTestId('user-list').childElementCount).toBe(4)

    // add another name with input
    await userEvent.type(queryByTestId('form-user-input'), 'James Bond')
    fireEvent.click(queryByTestId('button-add-user'))

    // allow react to update the UI and see both old and new users
    await waitFor(() => queryByText('James Bond'))
    expect(screen.queryByTestId('user-list')).toHaveTextContent('James Bond')
    expect(queryByTestId('user-list').childElementCount).toBe(5)
  })
})
