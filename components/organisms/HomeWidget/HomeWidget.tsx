import { CounterWidget, CounterWidgetProps } from '../../molecules/CounterWidget';

export type HomeWidgetProps = CounterWidgetProps;

export function HomeWidget({
  counter,
  onClickIncrease,
}: HomeWidgetProps) {
  return (
    <>
      <h3>
        Welcome to
        {' '}
        <a href="https://nextjs.org">Next.js!</a>
      </h3>
      <CounterWidget counter={counter} onClickIncrease={onClickIncrease} />
    </>
  );
}
