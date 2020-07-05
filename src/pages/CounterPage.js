import React, { useState } from 'react';
import Button from '../components/button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../actions/Counter';
import { logIn } from '../actions/IsLogged';

// Please, ignore all the styles inline. I know it's not best practice hehehe
// The focus was to learn some basic redux concepts :)

const CounterPage = (props) => {

    const [isDisabled, setIsDisabled] = useState(true);

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);

    // console.log('counter', counter);
    // console.log('isLogged', isLogged);

    const dispatch = useDispatch();

    const incrementCounter = () => dispatch(increment());

    const decrementCounter = () => dispatch(decrement());

    const resetCounter = () => dispatch(reset());

    const login = () => {
        dispatch(logIn());

        setIsDisabled(!isDisabled);

        console.log('isDisable', isDisabled);
    }

    return (
        <div className="h-100">
            <div className="bg-dark py-2 position-absolute w-100">
                <h1 className="text-white">Hello React-Redux</h1>

                <Button onClick={login}>Log {isLogged.isLogged ? 'OFF' : 'IN'}</Button>
            </div>

            <div className="h-100 d-flex justify-content-center align-items-center">
                <div>
                    <div className=" mb-3" style={{ width: 300 }}>
                        {isLogged.isLogged ?
                            <span className="text-white d-block mb-4 p-2" style={{ backgroundColor: '#0077b6', borderRadius: 24 }}>You're logged in</span>
                            :
                            <span className="d-block mb-4 p-2" style={{ height: 40 }}></span>
                        }
                        <p>Example <span style={{ color: '#0077b6', fontWeight: 'bold' }}>REDUX</span> basic concepts</p>
                    </div>
                    <div className="bg-white mb-3 rounded" style={{ boxShadow: '2px 3px 8px grey', width: 300 }}>
                        <h2 style={{ fontSize: '5rem', color: '#0077b6' }}>{counter.counter}</h2>
                    </div>
                    <div className="bg-white py-2 rounded" style={{ boxShadow: '2px 3px 8px grey', width: 300 }}>
                        <div className="m-4">
                            <Button type="button" disabled={isDisabled} outlined onClick={incrementCounter}>+1</Button>
                            <Button type="button" disabled={isDisabled} onClick={resetCounter}>RESET</Button>
                            <Button type="button" disabled={isDisabled} outlined onClick={decrementCounter}>-1</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterPage;