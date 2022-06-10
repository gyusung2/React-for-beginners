import { Table } from 'react-bootstrap' ;
import {useDispatch, useSelector } from 'react-redux';
import {nameChange} from "./../Store.js"




function Cart() {

    let state = useSelector((state) => { return state } )
    let dispatch = useDispatch();

    return (
        <div> 

            {state.user}의 장바구니
       <Table>
        <thead>

            <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            </tr>
        </thead>
        <tbody>
            {
            state.item.map((a,i)=>
            <tr key={i}>
            <td>1</td>
            <td>{state.item[i].name}</td>
            <td>{state.item[i].count}</td>
            <td>안녕</td>
            <td><button onClick={()=>{
                 dispatch(nameChange())
            }}>클릭</button></td>
            </tr>
            )   
            }
        </tbody>
        </Table> 
        </div>
    )
}

export default Cart