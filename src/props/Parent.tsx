// import { Child, ChildAsFC } from './Child';
import { Child } from './Child';

export const Parent = () => {
  return (
    <>
      <Child color="blue" onClick={() => console.log('clicked')}>
        Test-children
      </Child>
      {/* <ChildAsFC color="blue" onClick={() => console.log('clicked')} /> */}
    </>
  );
};
