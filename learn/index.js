console.log("test");
//declare store(object)
const initState={
    numOfCake:10,
    numOfIcecream:20,
}
//declare the action(function and constant variable)
const BUY_CAKE="BUY_CAKE";

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'first action in redux',
    }
}
//declare reducer(object with parameters)
const reducer=(state=initState,action)=>{
    switch(action.type)
    {
        case BUY_CAKE:
            return{
                ...state, //to keep other state properties in safe with no changes
                numOfCake : state.numOfCake-1,
            };
    }
}