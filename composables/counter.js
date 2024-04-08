export const useCounter = () => {
    const counter = useState('count', () => {
        return 1;
    })

    return {counter}
}