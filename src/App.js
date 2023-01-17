//import { Modal } from "./modals/modal";
//import { SplitScreen } from "./SplitScreen";

// const LeftSide = ({ name }) => {
//   return <h1 style={{ backgroundColor: 'red' }}>Hello World! {name}</h1>
// }

// const RightSide = () => {
//   return <p style={{ backgroundColor: 'green' }}>This is a the text area</p>
// }

// const ModalContent = () => {
//   return (
//     <>
//       <h3>This is product infomation</h3>
//       <p>Product Name: PROPRO</p>
//       <p>Model: XPA-123A</p>
//       <p>Product descrption: This is a the text area</p>
//     </>
//   )
// }

import { CurrentUserLoader } from "./users/CurrentUserLoader";
import { UserInfo } from './users/UserInfo'

function App() {
  return (


    // <SplitScreen leftWeight={1} rightWeight={3}>
    //   <LeftSide name={"SHit"} />
    //   <RightSide />
    // </SplitScreen>

    <>
      {/* <Modal>
        <ModalContent />
      </Modal> */}

      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>


  );
}


export default App;
