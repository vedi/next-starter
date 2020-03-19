import styled from 'styled-components';
import { Button } from '../../atoms/Button';

const StyledDiv = styled.div`
  border-color: lightgray;
  border-style: outset;
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 16px;
  width: 196px;
`;

const StyledSpan = styled.span`
  text-align: center;
  margin-bottom: 16px;
`;

export type CounterWidgetProps = {
  counter: number;
  onClickIncrease: () => void;
};

export function CounterWidget({
  counter,
  onClickIncrease,
}: CounterWidgetProps) {
  return (
    <StyledDiv>
      <StyledSpan>
        Counter:&nbsp;
        {counter}
      </StyledSpan>
      <Button type="button" onClick={onClickIncrease}>
        Increase
      </Button>
    </StyledDiv>
  );
}
