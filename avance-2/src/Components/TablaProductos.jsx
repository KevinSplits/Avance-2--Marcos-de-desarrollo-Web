import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, TextField, Grid, Typography, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const initialColumns = (handleDelete, handleEdit) => [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'gameTitle', headerName: 'Título', width: 200 },
    { field: 'description', headerName: 'Descripción', width: 300 },
    { field: 'console', headerName: 'Consola', width: 150 },
    { field: 'price', headerName: 'Precio', width: 100 },
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
    { id: 1, gameTitle: 'The Legend of Zelda', description: 'Aventura épica en Hyrule', console: 'Nintendo Switch', price: '$59.99' },
    { id: 2, gameTitle: 'God of War', description: 'Kratos lucha contra los dioses', console: 'PlayStation 5', price: '$69.99' },
    { id: 3, gameTitle: 'Halo Infinite', description: 'Acción en primera persona en el universo Halo', console: 'Xbox Series X', price: '$59.99' },
    { id: 4, gameTitle: 'Cyberpunk 2077', description: 'Futuro distópico en Night City', console: 'PC', price: '$49.99' },
    { id: 5, gameTitle: 'Super Mario Odyssey', description: 'Aventura de plataformas con Mario', console: 'Nintendo Switch', price: '$59.99' },
];

const paginationModel = { page: 0, pageSize: 10 };

const localeText = {
    noRowsLabel: "No se han encontrado datos.",
    toolbarColumns: "Columnas",
    paginationRowsPerPage: "Filas por página:",
};

export default function VideoGamesTable() {
    const [rows, setRows] = useState(initialRows);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const [gameData, setGameData] = useState({
        gameTitle: '',
        description: '',
        console: '',
        price: '',
    });

    const handleOpen = () => {
        setEditMode(false);
        setGameData({
            gameTitle: '',
            description: '',
            console: '',
            price: '',
        });
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGameData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (editMode && selectedGame) {
            setRows((prevRows) =>
                prevRows.map((row) =>
                    row.id === selectedGame.id
                        ? { ...row, ...gameData }
                        : row
                )
            );
        } else {
            setRows((prevRows) => [
                ...prevRows,
                { id: prevRows.length + 1, ...gameData },
            ]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };

    const handleEdit = (game) => {
        setSelectedGame(game);
        setGameData(game);
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
            {/* Título y botón "Agregar Videojuego" */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ width: '80%', mb: 2 }}>
                <Grid item>
                    <Typography variant="h4">
                        Videojuegos
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

            {/* Modal para agregar o editar videojuego */}
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
                        {editMode ? 'Editar Videojuego' : 'Agregar Nuevo Videojuego'}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Título"
                                fullWidth
                                name="gameTitle"
                                value={gameData.gameTitle}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Descripción"
                                fullWidth
                                name="description"
                                value={gameData.description}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Consola"
                                fullWidth
                                name="console"
                                value={gameData.console}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Precio"
                                fullWidth
                                name="price"
                                value={gameData.price}
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
