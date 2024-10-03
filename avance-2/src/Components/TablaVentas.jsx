import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, TextField, Grid, Typography, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const initialColumns = (handleDelete, handleEdit) => [
    { field: 'id', headerName: 'ID Venta', width: 100 },
    { field: 'clientName', headerName: 'Nombre del Cliente', width: 200 },
    { field: 'product', headerName: 'Producto', width: 200 },
    { field: 'quantity', headerName: 'Cantidad', width: 130 },
    { field: 'price', headerName: 'Precio Unitario', width: 150, valueFormatter: ({ value }) => `$${value}` },
    { field: 'total', headerName: 'Total', width: 150, valueFormatter: ({ value }) => `$${value}` },
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 180,
        renderCell: (params) => (
            <div>
                <IconButton onClick={() => handleEdit(params.row)} color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(params.row.id)} color="secondary">
                    <DeleteIcon />
                </IconButton>
            </div>
        ),
    },
];

const initialRows = [
    { id: 1, clientName: 'Juan Pérez', product: 'Laptop', quantity: 2, price: 500, total: 1000 },
    { id: 2, clientName: 'Maria Gómez', product: 'Teléfono', quantity: 1, price: 700, total: 700 },
    { id: 3, clientName: 'Carlos Herrera', product: 'Monitor', quantity: 3, price: 150, total: 450 },
    { id: 4, clientName: 'Ana Torres', product: 'Teclado', quantity: 5, price: 30, total: 150 },
    { id: 5, clientName: 'Luis Ramírez', product: 'Ratón', quantity: 4, price: 25, total: 100 },
];

const paginationModel = { page: 0, pageSize: 10 };

const localeText = {
    noRowsLabel: "No se han encontrado datos.",
    toolbarColumns: "Columnas",
    paginationRowsPerPage: "Filas por página:",
};

export default function SalesTable() {
    const [rows, setRows] = useState(initialRows);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedSale, setSelectedSale] = useState(null);
    const [saleData, setSaleData] = useState({
        clientName: '',
        product: '',
        quantity: 0,
        price: 0,
        total: 0,
    });

    const handleOpen = () => {
        setEditMode(false);
        setSaleData({
            clientName: '',
            product: '',
            quantity: 0,
            price: 0,
            total: 0,
        });
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSaleData((prevData) => ({
            ...prevData,
            [name]: value,
            total: prevData.quantity * prevData.price,
        }));
    };

    const handleSubmit = () => {
        if (editMode && selectedSale) {
            setRows((prevRows) =>
                prevRows.map((row) =>
                    row.id === selectedSale.id
                        ? { ...row, ...saleData }
                        : row
                )
            );
        } else {
            setRows((prevRows) => [
                ...prevRows,
                { id: prevRows.length + 1, ...saleData },
            ]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const handleEdit = (sale) => {
        setSelectedSale(sale);
        setSaleData(sale);
        setEditMode(true);
        setOpen(true);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                textAlign: 'center',
                mt: 2,
            }}
        >
            {/* Título y botón "Agregar Venta" */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '80%', mb: 2 }}>
                <Grid item>
                    <Typography variant="h4">
                        Ventas
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleOpen} startIcon={<AddIcon />}>
                        Agregar Venta
                    </Button>
                </Grid>
            </Grid>

            <Paper sx={{ height: 'auto', width: '80%', overflow: 'hidden' }}>
                <DataGrid
                    rows={rows}
                    columns={initialColumns(handleDelete, handleEdit)}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[10]}
                    localeText={localeText}
                    sx={{ border: 0, overflow: 'hidden' }}
                />
            </Paper>

            {/* Modal para agregar o editar venta */}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    p: 4,
                    boxShadow: 24,
                    borderRadius: 2,
                }}>
                    <Typography variant="h6" gutterBottom>
                        {editMode ? 'Editar Venta' : 'Agregar Nueva Venta'}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombre del Cliente"
                                fullWidth
                                name="clientName"
                                value={saleData.clientName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Producto"
                                fullWidth
                                name="product"
                                value={saleData.product}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Cantidad"
                                fullWidth
                                type="number"
                                name="quantity"
                                value={saleData.quantity}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Precio Unitario"
                                fullWidth
                                type="number"
                                name="price"
                                value={saleData.price}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                Total: ${saleData.total}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                {editMode ? 'Guardar Cambios' : 'Guardar'}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Box>
    );
}
