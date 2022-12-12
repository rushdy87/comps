import useCounter from '../../hooks/use-counter';
import Button from '../../components/button/Button';

const CounterPage = ({ initialCount }) => {
  const { count, Increment } = useCounter(initialCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={Increment} secondary>
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
