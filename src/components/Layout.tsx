import { layOutPropsType } from '../types/interface';

const Layout = (props: layOutPropsType) => {
  const { children } = props;
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
