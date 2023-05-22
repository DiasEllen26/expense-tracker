import * as C from './style';
import { Item } from '../../types/Item'

type Props = {
    list: Item[]
}
export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={100}>Valor</C.TableHeadColumn>
                </tr>
                <tbody>
                    {list.map((item, index)=>(
                        <tr key={index}>
                            <td></td>
                            <td></td>
                            <td>{item.title}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </thead>
        </C.Table>
    );
}