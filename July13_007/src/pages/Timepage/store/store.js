import { atom } from 'recoil';

const localStorageEffect =
    (key) =>
        ({ setSelf, onSet }) => {
            const savedValue = localStorage.getItem(key);
            if (savedValue != null) {
                setSelf(JSON.parse(savedValue));
            }

            onSet((newValue, _, isReset) => {
                console.log(newValue, _, isReset);
                isReset
                    ? localStorage.removeItem(key)
                    : localStorage.setItem(key, JSON.stringify(newValue));
            });
        };


        // atom이 업데이트되면 각각 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링
        // useRecoilState라는 훅 사용
export const timeTableState = atom({
    key: 'timeTableState',
    default: {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
    },
    //부수효과를 관리하고 atom을 초기화 동기화하기 위한 API
    //effect를 사용해여 값이 변경될 때마다 업데이트 할 수 있음
    effects: [localStorageEffect('timeTable')],
});
