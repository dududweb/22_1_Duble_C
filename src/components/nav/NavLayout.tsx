import Nav from './Nav';
import { ChildrenProps } from 'types/interface';

function Layout({ children }: ChildrenProps) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
