import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {Hr} from '../components/hr/Hr';
import DataTable from 'react-data-table-component';
import { InputBuscar } from '../components/inputBuscar/InputBuscar';
import { Navbar } from '../components/navbar/Navbar';



const data=[
    {id:1, date:1,article_name:1, magazine:1},
    {id:2,date:2, article_name: 2,magazine:2}
]

const columnas=[
    {
        name: 'ID',
        sortable:true, 
    },
    {
        name: 'Fecha',
        sortable:true, 
    },
    {
        name: 'Nombre del artículo',
        sortable:true, 
    },
    {
        name: 'Revista',
        sortable:true, 
    },
    {
        name: 'Acción',
       
    }

];

//colocar la paginación es español 

const paginacion={
    rowsPerPageText:'Filas por página',
    rangeSeparatorText:'de',
    selectAllRowsItem:true,
    selectAllRowsItemText:'Todos'
}

export const Dashboard = () => {

 
    return (
        
        <div>
            <Navbar/>
            <br/>
            <h2>Revisiones</h2>
            <Hr/>
            <div className='table-responsive container'>
                <DataTable 
                columns={columnas}
                data={data}
                pagination
                paginationComponentOptions={paginacion}
                fixedHeader
                fixedHeaderScrollHeight='450px'
                highlightOnHover
                subHeader
                subHeaderComponent={
                    <div className='containerInput'>
                        <InputBuscar placeholder='Buscar aquí'
                    type={'text'}/>
                    </div>
                }
               
                />
                
            </div>
        </div>
        
    )
}