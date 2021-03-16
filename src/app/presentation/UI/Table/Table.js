import styled from "styled-components";

import { BsPencil } from 'react-icons/bs'
import { BiTrashAlt } from "react-icons/bi";

/**
 * @description a dynamic table is created
 * @name Table 
 * @param {Array} titles required  
 * @param {Array} data required
 */

const StyledTable = styled.table`
    width: auto;
    background-color: #FFFFFF;
    border: none;
    border-collapse: collapse;
    color: #FFFFFF;
    text-align: center;

    td, th{
        padding: 8px;
        width : 140px;
    }
    th{
        text-transform : capitalize;
    }
    td{
        color : grey 
    }

    thead {
        background-color: #4FC0F8;
    }
`;


export const Table = ({ titles, data, editOption, deleteOption }) => {
    return (
        <StyledTable>
                <thead>
                    <tr>
                        {titles.map(({ title, index }) => (
                            <th key={title}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {titles.map(({ title, index }) => {
                              return   title !== 'options' ?
                                <td key={index}>{item[title]}</td> :
                                <td key={'options'}>
                                    <BsPencil className="optionsIcon" color='black' size={25} onClick= {()=>editOption(item)}  ></BsPencil>
                                        &nbsp;&nbsp;&nbsp;
                                    <BiTrashAlt className="optionsIcon" color='black' size={25} onClick= {()=>deleteOption(item)} ></BiTrashAlt>
                                </td>
                            })}
                        </tr>
                    ))}
                   
                </tbody>
        </StyledTable>
    )
}
