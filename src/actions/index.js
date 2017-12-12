import * as types from './ActionTypes';

// 액션 생성자
// 뷰에서 액션을 요청하면 액션 생성자가 포맷을 변경하여 돌려주고 이 액션을 통해 상태를 바꾸게 된다.

export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}

export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color
  } // color: color와 동일
}