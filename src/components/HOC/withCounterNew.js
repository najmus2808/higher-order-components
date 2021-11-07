// ========== With Functional Component ===========
// import React, { useState } from "react";

// const withCounter = (OriginalComponent) => {
//   const NewComponent = () => {
//     const [count, setCount] = useState(0);

//     function incrementCount() {
//       setCount((prevCount) => prevCount + 1);
//     }

//     return <OriginalComponent count={count} incrementCount={incrementCount} />;
//   };
//   return NewComponent;
// };

// export default withCounter;

// ===============    With Class Component =================

// import React from "react";

// const withCounter = (OriginalComponent) => {
//   class NewComponent extends React.Component {
//     state = {
//       count: 0,
//     };

//     incrementCount = () => {
//       this.setState((prevState) => ({ count: prevState.count + 1 }));
//     };

//     render() {
//       const { count } = this.state;
//       return (
//         <OriginalComponent count={count} incrementCount={this.incrementCount} />
//       );
//     }
//   }
//   return NewComponent;
// };

// export default withCounter;
