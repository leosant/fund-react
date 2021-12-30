
export default props => {
    console.log('expression>>>', props)
    if(props.expression) {
        return props.children;
    }
    else {
        return false;
    }
    
}