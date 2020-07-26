import { all, call, put, takeEvery } from 'redux-saga/effects'
import { fetchUsers } from 'src/api/fetchUsers'
import { fetchHobbies } from '../../api/fetchHobbies'
import { HobbiesAction } from '../state/hobbies/types'
import { UserActions } from '../state/users/types'
import { SagasActions } from './types'

function* fetchUser() {
  try {
    const [hobbies, users] = yield all([call(fetchHobbies), call(fetchUsers)])
    yield all([
      put({ type: HobbiesAction.FETCH_HOBBIES_SUCCESS, payload: hobbies }),
      put({ type: UserActions.FETCH_USERS_SUCCESS, payload: users }),
    ])
  } catch (e) {
    yield all([
      put({ type: HobbiesAction.FETCH_HOBBIES_FAIL, message: e.message }),
      put({ type: UserActions.FETCH_USERS_FAIL, message: e.message }),
    ])
  }
}

function* usersSaga(): Generator {
  yield takeEvery(SagasActions.FETCH_INITIAL_DATA, fetchUser)
}

export default usersSaga
