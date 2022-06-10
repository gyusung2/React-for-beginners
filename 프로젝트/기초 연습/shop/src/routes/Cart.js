import { Table } from 'react-bootstrap' ;
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../Store';



function Cart() {

   let state = useSelector((state)=>{return state})
   console.log(state.stock);
   let dispatch =  useDispatch()
    return (
        <div>
            {state.user}의 장바구니
                    <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                state.cart.map((a, i)=>
                <tr key={i}>
                <td>{1}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td><button onClick={()=>{
                    dispatch(changeName())
                }}>+</button></td>
                </tr>
                 )
                }
            </tbody>
            </Table> 
        </div>
    )
}

export default Cart