let _counter = 1;

const Counter = {
    increment() {
        return ('id_' + String(_counter++));
    },
};

export default Counter;