import { connect } from 'react-redux';
import styled from 'styled-components';
import { getCounter } from '../../lib/store/selectors';
import { increase } from '../../lib/store/slices/appSlice';
import { State } from '../../lib/store/reducer';

const mapState = (state: State) => ({
  counter: getCounter(state),
});

const mapDispatch = {
  handleIncrease: increase,
};

const connector = connect(
  mapState,
  mapDispatch,
);

const StyledP = styled.p`
  display: flex;
  flex-direction: column;
`;

export function CounterMolecule({
  counter,
  handleIncrease,
}: ReturnType<typeof mapState> & typeof mapDispatch) {
  return (
    <StyledP>
      <span>
        Counter:&nbsp;
        {counter}
      </span>
      <button type="button" onClick={() => handleIncrease({ num: 1 })}>
        Increase
      </button>
    </StyledP>
  );
}

export default connector(CounterMolecule);
