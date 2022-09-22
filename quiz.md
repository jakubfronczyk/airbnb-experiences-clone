# Question about React props

1. What do props help us accomplish ?

We are using props to to data from one component to another. They are very useful when you want the flow of data to be dynmic. Make a component more reusable.

2. How do you pass a prop into a component?

```
<MyHeader title"???"/>
```

3. Can i pass a custopm prop to a native DOM element ?

No, becasue the JSX we use to describe native DOM elements will be turned into REAL DOM elemnts by React. And real DOM elements only have the properties/attributes specified in the HTML specification

4. How do i recive props in a component?
```
function Navbar(props){
    return(
        <header>
            <img src={img.props} ... />
        </header>
    )
}
```

5. What data type is `props` when the component receives it ?

The data type of props when component receives it is an object.


6. What doest the `.map()` array method do ?

The `.map()` array method creates new array from calling a function for every array elemnt
Returns a new array, whatever gets returned from the callback functions provided is placed at the same index in the new array.
Usually we take the items from the orginal array and mofidy them in some way

7. What do we usually use `.map()` for in React ?

Convert an array of raw data into an array of JSX elemntes that can be displayed on the page.

8. Why is using `.map()` method is better then just creating the components manually by typing them out ?

It makes our code more self-sustaining it means not requairing additonal changes whenever the data changes.