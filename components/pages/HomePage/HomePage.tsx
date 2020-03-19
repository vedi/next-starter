import { connect } from 'react-redux';
import { State } from '../../../lib/store/reducer';
import { getCounter } from '../../../lib/store/selectors';
import { increase } from '../../../lib/store/slices/appSlice';
import { DefaultTemplate } from '../../templates/DefaultTemplate';
import { HomeWidget } from '../../organisms/HomeWidget';

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

export function HomePage({
  counter,
  handleIncrease,
}: ReturnType<typeof mapState> & typeof mapDispatch) {
  return (
    <DefaultTemplate>
      <HomeWidget counter={counter} onClickIncrease={() => handleIncrease({ num: 1 })} />
    </DefaultTemplate>
  );
}

export default connector(HomePage);
