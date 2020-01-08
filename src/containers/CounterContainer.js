import React from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {decrease, increase, setDiff} from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {
    // shallowEqual 함수는 객체 내의 1 depth 필드들이 일치하는 지 여부를 체크 해 줌.
    // 일치하는 경우 리렌더링 수행하지 않음.
    const { number, diff } = useSelector(
        (state) => ({
            number: state.counter.number,
            diff: state.counter.diff
        }),
        shallowEqual
    );

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;