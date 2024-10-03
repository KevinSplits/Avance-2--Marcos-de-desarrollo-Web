import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, TextField, Grid, Typography, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const initialColumns = (handleDelete, handleEdit) => [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'clientName', headerName: 'Nombre del Cliente', width: 200 },
    { field: 'address', headerName: 'Dirección', width: 250 },
    { field: 'email', headerName: 'Correo Electrónico', width: 200 },
    { field: 'phone', headerName: 'Teléfono', width: 150 },
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
    { id: 1, clientName: 'Juan Pérez', address: 'Calle Falsa 123', email: 'juan.perez@gmail.com', phone: '555-1234' },
    { id: 2, clientName: 'Maria Gómez', address: 'Av. Siempre Viva 742', email: 'maria.gomez@hotmail.com', phone: '555-5678' },
    { id: 3, clientName: 'Carlos Herrera', address: 'Carrera 50 #34-90', email: 'carlos.herrera@yahoo.com', phone: '555-9876' },
    { id: 4, clientName: 'Ana Torres', address: 'Boulevard de los Sueños 101', email: 'ana.torres@empresa.com', phone: '555-2468' },
    { id: 5, clientName: 'Luis Ramírez', address: 'Paseo de la Reforma 999', email: 'luis.ramirez@outlook.com', phone: '555-1357' },
];

const paginationModel = { page: 0, pageSize: 10 };

const localeText = {
    noRowsLabel: "No se han encontrado datos.",
    toolbarColumns: "Columnas",
    paginationRowsPerPage: "Filas por página:",
};

export default function ClientsTable() {
    const [rows, setRows] = useState(initialRows);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [clientData, setClientData] = useState({
        clientName: '',
        address: '',
        email: '',
        phone: '',
    });

    const handleOpen = () => {
        setEditMode(false);
        setClientData({
            clientName: '',
            address: '',
            email: '',
            phone: '',
        });
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (editMode && selectedClient) {
            setRows((prevRows) =>
                prevRows.map((row) =>
                    row.id === selectedClient.id
                        ? { ...row, ...clientData }
                        : row
                )
            );
        } else {
            setRows((prevRows) => [
                ...prevRows,
                { id: prevRows.length + 1, ...clientData },
            ]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const handleEdit = (client) => {
        setSelectedClient(client);
        setClientData(client);
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
            {/* Título y botón "Agregar Cliente" */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '80%', mb: 2 }}>
                <Grid item>
                    <Typography variant="h4">
                        Clientes
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={handleOpen} startIcon={<AddIcon />}>
                        Agregar
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

            {/* Modal para agregar o editar cliente */}
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
                        {editMode ? 'Editar Cliente' : 'Agregar Nuevo Cliente'}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombre del Cliente"
                                fullWidth
                                name="clientName"
                                value={clientData.clientName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Dirección"
                                fullWidth
                                name="address"
                                value={clientData.address}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo Electrónico"
                                fullWidth
                                name="email"
                                value={clientData.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Teléfono"
                                fullWidth
                                name="phone"
                                value={clientData.phone}
                                onChange={handleInputChange}
                            />
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
