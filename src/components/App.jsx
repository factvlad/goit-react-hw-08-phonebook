import { Layout } from 'components';
import s from "./App.module.scss"


export const App = () => {
  return (
    <div className={ s.wrapper }>
      <div className={ s.container }>
        <Layout />
      </div>
    </div>
  );
};
