const ChildrenFunction = ({children, myFunction}) => {
  return (
    <> 
    <hr></hr>
    {children}  
    <button onClick={myFunction}>Function</button>
    </>
  )
}

export default ChildrenFunction