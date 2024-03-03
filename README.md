# React-component

Use-Effect->
The useEffect hook is a built-in React hook that lets you perform side effects in a function component. A side effect is any change that affects something outside the scope of the component, such as making an API call, setting up an event listener, or manipulating the browser's DOM.

Here's an example of how to use useEffect in a functional component:

jsx
Copy code
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted");

    // Perform a side effect, such as making an API call
    fetchData();

    // Clean up when the component unmounts
    return () => console.log("Component unmounted");
  }, []); // Empty dependency array means the effect runs once after mounting

  return <div>My Component</div>;
}
In this example, the useEffect hook is called with a function that logs a message to the console when the component mounts. The function also calls a hypothetical fetchData function to perform a side effect. Finally, the hook returns a cleanup function that logs a message when the component unmounts.

The second argument to useEffect is an array of dependencies. If this array is empty (as in the example above), the effect function will only run once, after the component mounts. If the array contains values, the effect function will run after every render if any of the values in the array have changed since the last render.

Here's an example of using a dependency array:

jsx
Copy code
import { useEffect } from "react";

function MyComponent({ id }) {
  useEffect(() => {
    console.log(`Fetching data for item ${id}`);
    fetchData(id);
  }, [id]); // The effect runs whenever the `id` prop changes

  return <div>My Component</div>;
}
In this example, the useEffect hook takes an array containing the id prop as a dependency. The effect function will run whenever the id prop changes, allowing you to fetch new data for the new item.

