# Question about React 

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