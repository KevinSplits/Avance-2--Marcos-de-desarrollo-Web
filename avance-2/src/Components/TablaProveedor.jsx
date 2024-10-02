import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, TextField, Grid, Typography, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add'; // Importar ícono de "Agregar"

const initialColumns = (handleDelete, handleEdit) => [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'companyName', headerName: 'Nombre de la Empresa', width: 180 },
    { field: 'contactName', headerName: 'Nombre del Contacto', width: 150 },
    { field: 'phoneNumber', headerName: 'Número de Teléfono', width: 150 },
    { field: 'email', headerName: 'Correo Electrónico', width: 200 },
    { field: 'country', headerName: 'País', width: 130 },
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
    { id: 1, companyName: 'Game Suppliers Inc.', contactName: 'John Doe', phoneNumber: '555-1234', email: 'john.doe@gamesuppliers.com', country: 'EEUU' },
    { id: 2, companyName: 'VideoGames Unlimited', contactName: 'Jane Smith', phoneNumber: '555-5678', email: 'jane.smith@videogamesunlimited.com', country: 'Canadá' },
    { id: 3, companyName: 'Gaming World', contactName: 'Carlos Rivera', phoneNumber: '555-9876', email: 'carlos.rivera@gamingworld.com', country: 'México' },
    { id: 4, companyName: 'Pixel Play', contactName: 'Emma Johnson', phoneNumber: '555-2468', email: 'emma.johnson@pixelplay.com', country: 'Reino Unido' },
    { id: 5, companyName: 'Epic Games Distributors', contactName: 'Liam Brown', phoneNumber: '555-1357', email: 'liam.brown@epicdistributors.com', country: 'Australia' },
    { id: 6, companyName: 'Virtual Reality Ventures', contactName: 'Olivia Wilson', phoneNumber: '555-8642', email: 'olivia.wilson@vrventures.com', country: 'Alemania' },
    { id: 7, companyName: 'NextGen Gaming', contactName: 'Noah Davis', phoneNumber: '555-7531', email: 'noah.davis@nextgengaming.com', country: 'Francia' },
    { id: 8, companyName: 'Retro Game Hub', contactName: 'Sophia Martinez', phoneNumber: '555-1597', email: 'sophia.martinez@retrogamehub.com', country: 'España' },
    { id: 9, companyName: 'Indie Games Co.', contactName: 'James Anderson', phoneNumber: '555-3698', email: 'james.anderson@indiegamesco.com', country: 'Italia' },
    { id: 10, companyName: 'Gaming Supplies', contactName: 'Jake White', phoneNumber: '555-7890', email: 'jake.white@gamingsupplies.com', country: 'Japón' },
];

const paginationModel = { page: 0, pageSize: 10 }; // 10 filas por página

const localeText = {
    noRowsLabel: "No se han encontrado datos.",
    toolbarColumns: "Columnas",
    paginationRowsPerPage: "Filas por página:",
};

export default function DataTable() {
    const [rows, setRows] = useState(initialRows);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [providerData, setProviderData] = useState({
        companyName: '',
        contactName: '',
        phoneNumber: '',
        email: '',
        country: '',
    });

    const handleOpen = () => {
        setEditMode(false);
        setProviderData({
            companyName: '',
            contactName: '',
            phoneNumber: '',
            email: '',
            country: '',
        });
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProviderData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (editMode && selectedProvider) {
            setRows((prevRows) =>
                prevRows.map((row) =>
                    row.id === selectedProvider.id
                        ? { ...row, ...providerData }
                        : row
                )
            );
        } else {
            setRows((prevRows) => [
                ...prevRows,
                { id: prevRows.length + 1, ...providerData },
            ]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const handleEdit = (provider) => {
        setSelectedProvider(provider);
        setProviderData(provider);
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
            {/* Título y botón "Agregar Proveedor" */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '80%', mb: 2 }}>
                <Grid item>
                    <Typography variant="h4">
                        Proveedores
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

            {/* Modal para agregar o editar proveedor */}
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
                        {editMode ? 'Editar Proveedor' : 'Agregar Nuevo Proveedor'}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombre de la Empresa"
                                fullWidth
                                name="companyName"
                                value={providerData.companyName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombre del Contacto"
                                fullWidth
                                name="contactName"
                                value={providerData.contactName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Número de Teléfono"
                                fullWidth
                                name="phoneNumber"
                                value={providerData.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Correo Electrónico"
                                fullWidth
                                name="email"
                                value={providerData.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="País"
                                fullWidth
                                name="country"
                                value={providerData.country}
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
