import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'companyName', headerName: 'Nombre de la Empresa', width: 180 },
    { field: 'contactName', headerName: 'Nombre del Contacto', width: 150 },
    { field: 'phoneNumber', headerName: 'Número de Teléfono', width: 150 },
    { field: 'email', headerName: 'Correo Electrónico', width: 200 },
    { field: 'country', headerName: 'País', width: 130 },
];

const rows = [
    { id: 1, companyName: 'Game Suppliers Inc.', contactName: 'John Doe', phoneNumber: '555-1234', email: 'john.doe@gamesuppliers.com', country: 'EEUU' },
    { id: 2, companyName: 'VideoGames Unlimited', contactName: 'Jane Smith', phoneNumber: '555-5678', email: 'jane.smith@videogamesunlimited.com', country: 'Canadá' },
    { id: 3, companyName: 'Gaming World', contactName: 'Carlos Rivera', phoneNumber: '555-9876', email: 'carlos.rivera@gamingworld.com', country: 'México' },
    { id: 4, companyName: 'Pixel Play', contactName: 'Emma Johnson', phoneNumber: '555-2468', email: 'emma.johnson@pixelplay.com', country: 'Reino Unido' },
    { id: 5, companyName: 'Epic Games Distributors', contactName: 'Liam Brown', phoneNumber: '555-1357', email: 'liam.brown@epicdistributors.com', country: 'Australia' },
    { id: 6, companyName: 'Virtual Reality Ventures', contactName: 'Olivia Wilson', phoneNumber: '555-8642', email: 'olivia.wilson@vrventures.com', country: 'Alemania' },
    { id: 7, companyName: 'NextGen Gaming', contactName: 'Noah Davis', phoneNumber: '555-7531', email: 'noah.davis@nextgengaming.com', country: 'Francia' },
    { id: 8, companyName: 'Retro Game Hub', contactName: 'Sophia Martinez', phoneNumber: '555-1597', email: 'sophia.martinez@retrogamehub.com', country: 'España' },
    { id: 9, companyName: 'Indie Games Co.', contactName: 'James Anderson', phoneNumber: '555-3698', email: 'james.anderson@indiegamesco.com', country: 'Italia' },
];

const paginationModel = { page: 0, pageSize: 5 };

const localeText = {
    noRowsLabel: "No se han encontrado datos.",
    noResultsOverlayLabel: "No se han encontrado resultados.",
    toolbarColumns: "Columnas",
    toolbarColumnsLabel: "Seleccionar columnas",
    toolbarFilters: "Filtros",
    toolbarFiltersLabel: "Ver filtros",
    toolbarFiltersTooltipHide: "Quitar filtros",
    toolbarFiltersTooltipShow: "Mostrar filtros",
    toolbarExport: "Exportar",
    toolbarExportLabel: "Exportar",
    toolbarExportCSV: "Exportar como CSV",
    filterPanelAddFilter: "Agregar filtro",
    filterPanelDeleteIconLabel: "Eliminar",
    filterPanelOperators: "Operadores",
    filterOperatorAnd: "Y",
    filterOperatorOr: "O",
    filterOperatorEqual: "Es igual a",
    filterOperatorNotEqual: "No es igual a",
    filterOperatorLessThan: "Menor que",
    filterOperatorLessThanOrEqual: "Menor o igual que",
    filterOperatorGreaterThan: "Mayor que",
    filterOperatorGreaterThanOrEqual: "Mayor o igual que",
    filterOperatorContains: "Contiene",
    filterOperatorNotContains: "No contiene",
    filterOperatorStartsWith: "Comienza con",
    filterOperatorEndsWith: "Termina con",
    sortAscending: "Ordenar ascendentemente", // Flecha de orden ascendente
    sortDescending: "Ordenar descendentemente", // Flecha de orden descendente
    columnMenuLabel: "Opciones de columna",
    columnMenuShow: "Mostrar",
    columnMenuHide: "Ocultar",
    columnMenuSortAsc: "Ordenar ascendentemente",
    columnMenuSortDesc: "Ordenar descendentemente",
    columnMenuUnsort: "Eliminar orden",
    columnMenuFilter: "Filtro",
    columnMenuFilterSelected: "Filtrar seleccionado",
    columnMenuManageColumns: "Gestionar columnas",
    columnMenuHideColumn: "Ocultar columna",
    paginationLabel: "{from} - {to} de {count}", // "X de Y"
    paginationLabelDisplayedRows: "{from} - {to} de {count} filas",
    paginationRowsPerPage: "Filas por página:", // Filas por página
    paginationNext: "Siguiente", // Botón siguiente
    paginationPrevious: "Anterior", // Botón anterior
    paginationFirst: "Primero", // Botón primero
    paginationLast: "Último", // Botón último
    paginationGotoPreviousPage: "Ir a la página anterior", // Ir a la página anterior
    paginationGotoNextPage: "Ir a la siguiente página", // Ir a la siguiente página
    selection: "{count} filas seleccionadas", // "X filas seleccionadas"
};

export default function DataTable() {
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                localeText={localeText} // Aquí se aplica el localeText personalizado
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
